import React, { useState } from 'react'
import { list } from "postcss";
import axios from 'axios';


function Show() {
    const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((respons) => {
        console.log(respons.data);
        setData(respons.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (<>
   <button onClick={getData} className="px-4 py-2 bg-blue-200 rounded mb-5">
        get data from api
      </button>
    <div className="p-5 bg-green-200 text-sm font-bold mb-5">
       
    <ul>
      {data.length > 0 ? (
        data.map((p) => (
          <li key={p.id} className="p-3 bg-red-300 rounded mb-2">
            ({p.title})
          </li>
        ))
      ) : (
        <h1>loading data...</h1>
      )}
    </ul>
  </div>
  </>
  )
}

export default Show