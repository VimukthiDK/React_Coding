//import './App.css'
//import DataDisplay from "./components/DataDisplay";
//import TestRouting from "./pages/TestRouting";
//import MyForm from "./components/MyForm";
//import Login from "./components/Login";

import axios from "axios";
import { useEffect, useState } from "react";
import { getBlogPost } from "./pages/Api";

function App() {

  const [data,setData] = useState("");
  const [error,setError] = useState("");

  useEffect(() => {

    async function getData() {
      try {
        
        const _res = await getBlogPost();
        setData(_res.data);

      } catch (error) {
        
        setError(error.message);
        console.log(error);
      }
      
    }
    getData();

  }, [] );

   
    return (
    <>
    <h1> {data.titlel} </h1>
    <h3> {error} </h3>
    <p>{data.body}</p>
    </>
  );
}

export default App;