/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fethchDataFromApi } from "../utils/api";

const useFetch2 = (url) => {
    const [data2, setData2] = useState(null);
    const [loading2, setLoading2] = useState(null);
    const [error2, setError2] = useState(null);

    useEffect(() => {
        setLoading2("loading...");
        setData2(null);
        setError2(null);

        fethchDataFromApi(url)
            .then((res) => {
                setLoading2(false);
                setData2(res);
                // console.log(res);
            })
            .catch((err) => {
                setLoading2(false);
                setError2("Something went wrong!");
            });
    }, [url]);
   

    return { data2, loading2, error2 };
};

export default useFetch2;