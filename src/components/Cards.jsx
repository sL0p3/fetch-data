import React from 'react'
import { useEffect, useState } from "react"
import CardItem from './CardItem'

export default function Cards() {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container'>
          <h2 className= "text-center" style={{margin:'35px 0px' , marginTop:"140px", color:'blue' ,fontSize: '40px' , fontFamily: 'Arial, Helvetica, sans-serif ', fontWeight:'900'}}> DATA </h2>
          <div className="container">
          <div className="row">      
          {users.map((element)=>{
              return <div className="col-md-6 col-lg-4 my-3" key={element.id}>
              <CardItem  id = {element.id} title = {element.title} body= {element.body} userId={element.userId}/>
              </div> 
          })}
          </div>
          </div>  
        </div>
      )
}
