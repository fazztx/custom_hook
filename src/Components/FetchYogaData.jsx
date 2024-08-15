import React from 'react'
import UseFetch from './UseFetch';


const FetchYogaData = () => {

    const[data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);


    return(
        <>
        <ul className='list_data_main'>
            {data && data.map((item, index) => (
                <li className='list_data' key={index}>
                    <h3>{item.name}</h3>
                    <p>Time duration: {item.time_duration}</p>

                </li>


            ))}


        </ul>
        </>
    )


}

export default FetchYogaData
