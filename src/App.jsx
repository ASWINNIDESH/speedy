import { useState } from "react";
import "./App.css";

function App() {
  const [ text , setText ] = useState("");
  const [ results , setResults ] = useState([]);
  return <>
  <div
    style={{  
      color: "black",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: "50px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      flexDirection: "column",
      height: "100vh",
       width: "100vw",
      
    }}
>
      <h1 style={
        {
          color: "blue",
          fontSize: "50px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          textAlign: "center",
           
        }
      }>GOOGLE</h1>
      <input 
  style={{ color: "black",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    borderRadius: "10px",
  }} 
     type="text" placeholder="Search word orType a URI"
     onChange={(e)=> setText(e.target.value)} />
  <button
  style={{ color: "black",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    border: "10px",
    borderRadius: "10px",
    backgroundColor: "lightgreen",
    cursor: "pointer",
  }}
  onClick={()=>{
    fetch("/api/search?text=" + text)
    .then((response) => {
      response
      .json()
      .then((results) => setResults(results))
      .catch((error) => {
        console.error("Failed to search ", error);});
      })
      .catch((error) => {
        console.error("Failed to search ", error);
      }
      )
  }

  }
  >Search</button>

<div>
     <ul>
      <style>
        text-align: center;
        list-style: none;
        padding: 0; 
        text size: 20px;
      </style>
        {
        results.length >0?  
        results.map((item, index) => (
            <li key={index}>
              <a 
              style={{
                color: "red",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                
              }} href={item.url} target="_blank">
                {item.url}
              </a>
              <div
              style={{
                color: "black",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px"
              }}>{item.title}</div>
            </li>
          )):
          <div> WELLCOME HOME </div>
          
        }
      </ul></div>
      </div>
</>
 }
export default App;
