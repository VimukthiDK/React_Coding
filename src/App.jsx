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

  useEffect(() => {

    async function getData() {
      const _res = await getBlogPost();
      setData(_res.data);

    }
    getData();

  }, [] );

   
    return (
    <>
    <h1> {data.titlel} </h1>
    <p>{data.body}</p>
    </>
  );
}

export default App;