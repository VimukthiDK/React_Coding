//import './App.css'
//import DataDisplay from "./components/DataDisplay";
//import TestRouting from "./pages/TestRouting";
//import MyForm from "./components/MyForm";
//import Login from "./components/Login";

import axios from "axios";
import { useEffect, useState } from "react";
import { createBlogPost, getBlogPost } from "./pages/Api";

function App() {

  // Use API for get method
  /*----------------------------------------------------- 
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

  }, [] ); */



  const [msg,setMsg] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  

  async function handleCreatePost(){

    try {

      setLoading(true);
      const _res = await createBlogPost({
          title : "Test 01",
          body : "This is a body...",
          userId : 10,

      });
      setLoading(false);
      setMsg("Succefully Created...! ")
      console.log(_res);
      
    } catch (error) {
      setError("Not Created ....! ")
    }
      
    }

   
    return (
    <>
      <h1> Create Blog Post </h1>
      <h4 style={{color:"red"}}> {error} </h4>
      <h4 style={{color:"green"}}> {loading ? "Loading ...! " : msg} </h4>
      <button onClick={handleCreatePost}> Create Button </button>
    </>
  );
}

export default App;