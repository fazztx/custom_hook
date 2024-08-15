import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState();

    useEffect( () => {fetch(url).then((response) => {return response.json()}).then((data) => {setData(data)})}, []);
    return [data];

                              //  => response.json() without {} for implicit return
    //fetch(url).then( (response) => {return response.json()} ).then( (data) => {console.log(data)} ).catch( (error) => {console.error("My error 123 is: ", error); });
    //return fetch(url).then( (response) => {return response.json()} ).then( (data) => {return data} ).catch( (error) => {console.error("My error 123 is: ", error); });    
}

export default UseFetch
