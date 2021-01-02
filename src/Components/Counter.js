import React from 'react'

const Counter = ({
    type,
    count = 0,
    selected = false
}) => {

    const cname = selected ? 'btn-primary' : 'btn-light text-primary'

    return(
        <button className= {'btn ' + cname} style={{width: "8rem",height: "7rem"}}>
            
                <p className="d-flex justify-content-left">{type||"NA"}</p>
                <p class="display-4">{count}</p>
           
        </button>
    )
}


export default Counter