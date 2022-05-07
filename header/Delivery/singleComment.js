import { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CommentDeliteAC, CommentUpdateAC } from "../../redux/action";


function SingleComment(props) {
    console.log('props',props);
    const [commentText,setComment]=useState('')
    const dispath=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispath(CommentUpdateAC(commentText,props.id))
    }

    const handleDelete=(e)=>{
        e.preventDefault()
        dispath(CommentDeliteAC(props.id))
    }
    const handleChange=(e)=>{
        setComment(e.target.value)
    }
    useEffect(()=>{
        if (props.data) {
            setComment(props.data)
        }
    },[props.data])
    return (
        <form onSubmit={handleSubmit} className='comments-item'>
          <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
          <input type='text' value={commentText} onChange={handleChange}/>
          <input type='submit' hidden />
        </form>
    )
  }
  
  export default SingleComment;