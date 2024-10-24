import React,{useState} from 'react'

export default function ObjectUpdation() {

    const [car, setCar]= useState({
        name:"alto",
        model:2024,
        company:"suzuki"
    })


    function handleName(event){
        setCar((c)=>({...c,name:event.target.value}))  // the arrow function used for reference of previous state "c" represent the first letterOf state
    }
    function handleCompany(event){
        setCar((c)=>({...c,company:event.target.value}))
    }
    function handleModel(event){
        setCar((c)=>({...c,model:event.target.value}))
    }


  return (
    <div>
      <h1>Object Update</h1>
        <p>
            name:{car.name}
            <br />
            company:{car.company}
            <br />
            model:{car.model}
            <br />
        </p>
      <input type="text"  value={car.name} onChange={handleName}/>
      <br />
      <input type="text"  value={car.company} onChange={handleCompany} />
      <br />
      <input type="number"  value={car.model} onChange={handleModel}/>
    </div>
  )
}
