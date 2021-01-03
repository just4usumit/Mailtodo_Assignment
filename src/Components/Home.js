import React from 'react'
import Navbar from './Navbar'
import Counter from './Counter'
import {useState,useEffect} from 'react'
import destination from './../FrontendAssets/destination.svg'
import warehouse from './../FrontendAssets/warehouse.svg'

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
      
      let itemsd = []
      for(let itemtemp of items){
          if(itemtemp.current_status_code === "DEL") itemsd.push(itemtemp)
      }
      console.log(items[0]['scan'][0])


     return(
        <div className="">
        <Navbar/>
        <div className="mt-4 text-center">
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
        <br/>
        <br/>
        <div className="row mt-4">

                    <div className="col-4">
                        <ul className="list-group shadow small p-3 mt-4 ml-4">
                            <span className="float-left">
                                <img src={destination} height="25px" alt="destination"></img>
                            </span>
                            {   


                                (items[0]['scan']).map((sitem, index)=>{
                                    return(
                                        <li className="list-group-item small m-1 ml-4">{sitem['status_detail']}  
                                        <span className="float-right">
                                        {sitem['time']}
                                        </span>              
                                        </li>
                                    )
                                }
                                )
                            }
                            <span className="float-left">
                                <img src={warehouse} height="25px" alt="whouse"></img>
                            </span>
                        </ul>
                    </div>


                    <div className="col-8">
                    <table class="table p-4 ml-2 table-sm table-responsive table-borderless small  shadow" style={{"max-height":"500px"}}>
            <thead>
                <tr className="text-secondary small">
                <th scope="col">AWB NUMBER</th>
                <th scope="col">TRANSPORTER</th>
                <th scope="col">SOURCE</th>
                <th scope="col">DESTINATION</th>
                <th scope="col">BRAND</th>
                <th scope="col">START DATE</th>
                <th scope="col">ETD</th>
                <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    itemsd.map((item,index)=>{
                        let d = item.current_status
                        
                        let color = "font-weight-bold "
                        switch(d){
                            case 'Delivered': 
                            color+= "text-success"
                            break
                            case 'Out for Delivery':
                            color+= "text-warning"
                            break
                            case 'Undelivered':
                            color+= "text-danger"
                            break
                            case 'In Transit':
                            color+= "text-primary"
                            break
                            case 'No Information Yet':
                            color+= "text-secondary"
                            break
                            default:
                                color+="text-dark"

                        }
                        return(
                        <tr className="border border-secondary  ">
                            <td>{"#"+item.awbno}</td>
                            <td>{item.carrier}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.brand || "USPA"}</td>
                            {/* <td>{item.pickup_date}</td> */}
                            <td>NA</td>
                            <td>{"NA"}</td>
                            <td className={color} >{d}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
            </table>
                    </div>
        </div>
      </div>
     )
 }

 export default Home