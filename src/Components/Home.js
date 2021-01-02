import React from 'react'
import Navbar from './Navbar'
import Counter from './Counter'
import {useState,useEffect} from 'react'

 const Home = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
        {
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization:`Bearer tTU3gFVUdP`
            },
            body: JSON.stringify({email: "just4usumit70@gmail.com"})
        })
          .then(res => res.json())
          .then(
            (result) => {
              
              setItems(result);
            },
            
            (error) => {
              console.log(error)
            }
          )
      }, [])
      
      function count_type(type){
        let c = 
        items.filter(function(item){
            return item.current_status_code === type;
          }).length
        return c
      }
    
      console.log(items)


     return(
        <div>
        <Navbar/>
        <div className="container mt-4 text-center">
        <div className="mr-4 d-inline">
        <Counter type="DEL" count={count_type("DEL")}  selected={true}/>
        </div>
        <div className="mr-4 d-inline">
        <Counter type="INT" count={count_type("INT")} selected={false}/>
        </div>
        <div className="mr-4 d-inline">
        <Counter type="OOD" count={count_type("OOD")}  selected={false}/>
        </div>
        <div className="mr-4 d-inline">
        <Counter type="DEX" count={count_type("UND")}  selected={false}/>
        </div>
        <div className="mr-4 d-inline">
        <Counter type="NFI" count={count_type("NFI")}  selected={false}/>
        </div>
        </div>
        
      </div>
     )
 }

 export default Home