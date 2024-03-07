import axios from "axios";
let data = null;
const API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=66f721afb58745d382e53074523aaef6";
export const getBusinessNews = async () =>{
    await axios.get(`${API}`).then(res =>{
        console.log(res.data)
        data = res.data
    })
    .catch(err => {
        console.log(err)
    })
    return data;
}