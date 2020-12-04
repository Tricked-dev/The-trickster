import axios from "axios";

interface options {
    code?: string;
    title?: string;
}
interface get {
    url?: string
}
export = class SourceBin {
    /**
     * this is a module that you can post code to sourcenin
     * @param { string } text The code that will be pushed to sourcebin.
     * @returns { string } what the code returns to sourcebin.
     */
    /**
     * @interface options - The text that will go to sourcebin.
     */
    static async postBin(text: options) {
        if(!text.code) throw new TypeError("Please specify the code to be posted to sourcebin.");
        if(!text.title) "ㅤ";
        else {
            const get = await axios("https://sourceb.in/api/bins", {
                method: "POST",
                data: {
                    files: [{
                        name: text.title,
                        content: text.code
                    }]
                }
            });
            if(get.status === 200) {
                return `https://sourceb.in/${get.data.key}`
            } else {
                 throw new Error("Cannot push the code to sourcebin.");
            }
        }
    }
    static async get(content: get) {
        if(!content.url) throw new TypeError("You did'nt specify the url to get.");
        const a = await axios(`https://sourceb.in/raw/${content.url}/0`, {
            method: "GET"
        });
        if(a.status === 200) {
            return a.data
        } else {
            throw new Error("Cannot get that file.")
        }
    }
}