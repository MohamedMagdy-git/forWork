import axios from "axios";

const BASE_URL = "https://full-mark-dashboard.onrender.com/api";
const API_TOKEN = 'fde2dd9e99c3f02a96ad33b684ab9bbc4ccaed087d10bdcbe02c0b853f83027a443bc1b06ef401da11cb46d8425ad19b5188d6c2e1f9b39c566583c8b7748399326d7f05140a9dffddf78060935205bdbed0694c4385a18b58e94fcaed208b2f7cf4c6db58aab86b976da732d0a757ade5c5f5b4908dda2eba30bb5127017b7f';

const headers = {
    Authorization: "bearer "  + API_TOKEN,
}


export const fethchDataFromApi = async (url) => {
    try {
        const  data  = await axios.get(BASE_URL + url, {
            headers
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}