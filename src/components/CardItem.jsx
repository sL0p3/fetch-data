import React from 'react'
import '../cardItem.css'
export default function CardItem(props) {
    return (
        <div>
          <div className="card">
            <div>
              <span className="badge rounded-pill bg-dark" style={{display:'flex' , position: 'absolute' , right:0, justifyContent:'flex-end'}}>{props.id}</span>
            </div>
              <div className="card-body">
                  <h3 className="card-title">{props.title}</h3>
                  <p className="card-text">{props.body}</p>
                  <p className="card-text" style={{fontWeight:'700'}}>User Id : {props.userId}</p>
              </div>
          </div>
        </div>
      )
}
