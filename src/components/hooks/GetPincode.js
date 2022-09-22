import axios from 'axios'
import React, { useState } from 'react'

const GetPincode = () => {
    const [data,setData]=useState([])
    const [pincode,setPincode]=useState(null)

    const handleSubmit = (e)=>{
        if(pincode){
            e.preventDefault();
        axios.get('https://api.postalpincode.in/pincode/'+pincode)
        .then(res=>{
            console.log(res)
            setData(res.data[0].PostOffice)
        })
        .catch(e=>{
            console.log("data not found")
        })
        console.log()
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input value={pincode} onChange={e=>setPincode(e.target.value)}/>
        <button type='submit' >submit</button>
        </form>
        <div>
            {data.map((d,i)=>{
                return (
                    <>
                        <h1 key={i}>Name: {d.Name}</h1>
                        <h2 key={i}>Block: {d.Block}</h2>
                        <h2 key={i}>District: {d.District}</h2>
                        <h2 key={i}>Division: {d.Division}</h2>
                        <h2 key={i}>Region: {d.Region}</h2>
                        <h2 key={i}>Pincode: {d.Pincode}</h2>
                    </>
                    
                )
            })}
        </div>
    </div>
  )
}

export default GetPincode