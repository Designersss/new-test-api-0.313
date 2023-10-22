import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/Header.tsx";


const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        axios.get(apiUrl).then((resp) => {
            setData(resp.data)
        })
    }, []);
    console.log(data)
    return (
        <div>
            <Header />
        </div>
    );
};

export default Home;