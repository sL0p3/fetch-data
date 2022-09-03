import React from 'react'
export default function Form() {

    const titleRef = React.useRef();
    const bodyRef = React.useRef();
    const userRef = React.useRef();
    const idRef = React.useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Id : " + userRef.current.value + "\n" +  "Id : " + idRef.current.value +"\n" +  "Title : " + titleRef.current.value+"\n" +"Body : " + bodyRef.current.value);
    };
  return (
    <div className="container">
        <h2 className= "text-center" style={{margin:'35px 0px' , marginTop:"140px", color:'white' ,fontSize: '40px' , fontFamily: 'Arial, Helvetica, sans-serif ', fontWeight:'900'}}> Form </h2>
    <form>
        <div className="form-group my-4">
            <label htmlFor="userId" className="my-2">User Id</label>
            <input name="user" ref={userRef} type="number" className="form-control" id="userId" placeholder="1" />
        </div>
        <div className="form-group my-4">
            <label htmlFor="formId" className="my-2">Id</label>
            <input name="id" ref={idRef} type="number" className="form-control" id="formId" placeholder="1"  />
        </div>
        <div className="form-group my-4">
            <label htmlFor="formTitle" className="my-2">Title</label>
            <input name="title" ref={titleRef} type="text" className="form-control" id="formTitle" />
        </div>
        <div className="form-group my-4">
            <label htmlFor="formBody" className="my-2">Body</label>
            <textarea name="body" ref={bodyRef} className="form-control mb-4" id="formBody" rows="8" ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary"  style={{marginBottom: '90px'}} >Submit</button>
    </form>
    </div>
  )
}
