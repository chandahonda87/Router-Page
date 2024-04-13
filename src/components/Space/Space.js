import React, { useEffect } from 'react';
import {useLoaderData} from 'react-router-dom';

const apiKey = 'j9gvtIZOJ29lY5g5fHcvphaE4Ohwcb5MAs2ru7HI';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export default function Space() {

 
    const data = useLoaderData();

    //const [data, setData] = React.useState([])

    //useEffect(()=> {
    //   fetch(apiUrl)
     //   .then((response) => response.json())
     //   .then(data => {
     //       console.log(data)
     //       setData(data)ls
    //    })
     //   .catch(error => {
    //        console.error('Error fetching data:', error);
    //    })
 //   })

  return (
    <div className="text-center m-4 bg-secondary text-white p-4">
        <h2>Space is real...</h2>
        <img src={data.url} alt={data.title}/>
        <p>{data.explanation}</p>
    </div>
    
  )
}

export const spaceLoader = async () => {
    const response = await fetch(apiUrl)
    return response.json()
}
