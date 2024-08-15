import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch'

const FetchData = () => {

  const url = 'https://api.npoint.io/9045c260b1565daa9e15';
  const [data] = UseFetch(url); 
  // const result = UseFetch(url); // result is an array
  // const data = result[0];       // data is the first item in the array
  console.log(data);

  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>

        {data && data.map((e) => (
          <>
          <li className='list_data' key={e}>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
          </>
        ))}

     </ul>
    </>
  )
}

export default FetchData