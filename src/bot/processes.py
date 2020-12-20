import psutil
import json


tot = psutil.virtual_memory().total
tota = tot / 1000 / 100
total = tota.toFixed(0)

output = {
    "total": total,
    "used": psutil.virtual_memory().percent,
}

with open("stats.json", "w") as stats:
    json.dump(output, stats)
