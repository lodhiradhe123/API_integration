import React, { useState } from "react";
import axios from "axios";
import { list } from "postcss";

function App() {
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

  const addData = () => {
    const api = "https://fakestoreapi.com/products/";
    axios
      .post(api, {
        title: "radhe",
        price: 13.5,
        description: "radheshyam lodhi",
        image: "https://i.pravatar.cc",
        category: "humanity",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="p-10 flex
     flex-col  "
    >
      <button onClick={getData} className="px-4 py-2 bg-blue-200 rounded mb-5">
        get data from api
      </button>
      <button onClick={addData} className="px-4 py-2 bg-blue-200 rounded">
        add data to api
      </button>
      <hr />
      <div className="p-5 bg-green-200 text-sm font-bold mb-5">
        <ul>
          {data.length > 0 ? (data.map((p)=><li key={p.id} className="p-3 bg-red-300 rounded mb-2">({p.title})</li>)):<h1>loading data...</h1>}
        
        </ul>
        </div>
    </div>
  );
}

export default App;
