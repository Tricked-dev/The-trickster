const axios = require('axios')
const { CanvasRenderService } = require('chartjs-node-canvas')
const { MessageAttachment } = require('discord.js')
const covid = require('covidtracker');
const Discord = require('discord.js')
const width = 800
const height = 600

const chartCallback = (ChartJS) => {
  ChartJS.plugins.register({
    beforeDraw: (chartInstance) => {
      const { chart } = chartInstance
      const { ctx } = chart
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, chart.width, chart.height)
    },
  })
}

module.exports =  {

      name: 'covid',
      group: 'misc',
      memberName: 'covid',
      description: 'Displays stats about covid-19',
 callback: async (message, args, text, client, prefix, instance) => {
    const days = parseInt(args) || 30

    const url = 'https://api.covidtracking.com/v1/us/daily.json'
    let { data: results } = await axios.get(url)
    results = results.slice(0, days).reverse()

    const labels = []
    const deaths = []
    const cases = []
    const recovered = []

    for (const result of results) {
      let date = String(result.date)
      const year = date.substring(0, 4)
      const month = date.substring(4, 6)
      const day = date.substring(6, 8)
      labels.push(`${day}/${month}/${year}`)

      deaths.push(result.death)
      cases.push(result.positive)
      recovered.push(result.recovered)
    }

    const canvas = new CanvasRenderService(width, height, chartCallback)

    const configuration = {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Cases',
            data: cases,
            color: '#7289d9',
            backgroundColor: '#7289d9',
            borderColor: '#7289d9',
            fill: false,
          },
          {
            label: 'Deaths',
            data: deaths,
            color: '#b32f38',
            backgroundColor: '#b32f38',
            borderColor: '#b32f38',
            fill: false,
          },
          {
            label: 'Recovered',
            data: recovered,
            color: '#592ec2',
            backgroundColor: '#592ec2',
            borderColor: '#592ec2',
            fill: false,
          },
          
        ],
      },
    }

    const image = await canvas.renderToBuffer(configuration)

    const attachment = new MessageAttachment(image)

    message.channel.send('This chart is worldwide',attachment)
    if (!args[0]) {
        const totalStats = await covid.getAll();

        const updatedTime = new Date(totalStats.updated);

        const embed = new Discord.MessageEmbed()
            .setAuthor(`Corona Stats`)
            .addField(`Total Cases:`, `**${totalStats.cases.toLocaleString()}**`, true)
            .addField(`Today's Cases:`, `+${totalStats.todayCases.toLocaleString()}`, true)
            .addField(`Today's Deaths:`, `+${totalStats.todayDeaths.toLocaleString()}`, true)
            .addField(`Active Cases:`, `${totalStats.active.toLocaleString()} (${((totalStats.active / totalStats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Recovered:`, `${totalStats.recovered.toLocaleString()} (${((totalStats.recovered / totalStats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Deaths:`, `${totalStats.deaths.toLocaleString()} (${((totalStats.deaths / totalStats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Tests`, `${totalStats.tests.toLocaleString()}`, true)
            .addField(`Cases Per One Milion:`, `${totalStats.casesPerOneMillion.toLocaleString()}`, true)
            .addField(`Deaths Per One Milion:`, `${totalStats.deathsPerOneMillion.toLocaleString()}`, true)
            .setColor('RANDOM')
            .setFooter(`Last Update: ${updatedTime}`);
        return message.channel.send(embed);
    } else if (args[0]) {
        const stats = await covid.getCountry({ country: args[0] })

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const updatedTime = new Date(stats.updated)
        const update = updatedTime.toLocaleDateString("en-US", options)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`Corona Stats for ${args[0]}`)
            .addField(`Total Cases:`, `**${stats.cases.toLocaleString()}**`, true)
            .addField(`Today's Cases:`, `+${stats.todayCases.toLocaleString()}`, true)
            .addField(`Today's Deaths:`, `+${stats.todayDeaths.toLocaleString()}`, true)
            .addField(`Active Cases:`, `${stats.active.toLocaleString()} (${((stats.active / stats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Recovered:`, `${stats.recovered.toLocaleString()} (${((stats.recovered / stats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Deaths:`, `${stats.deaths.toLocaleString()} (${((stats.deaths / stats.cases) * 100).toFixed(2)}%)`, true)
            .addField(`Tests:`, `${stats.tests.toLocaleString()}`, true)
            .addField(`Cases Per One Milion:`, `${stats.casesPerOneMillion.toLocaleString()}`, true)
            .addField(`'Deaths Per One Milion'`, `${stats.deathsPerOneMillion.toLocaleString()}`, true)
            .setColor('RANDOM')
            .setThumbnail(stats.countryInfo.flag)
            .setFooter(`Last Update: ${update}`)
        return message.channel.send(embed)
    }
  }
}