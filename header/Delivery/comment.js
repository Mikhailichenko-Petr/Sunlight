import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./singleComment";
import uniqid from "uniqid"
import { CommentAC, CommentLoadAC } from "../../redux/action";

function Comments(props) {
    const [textValue,setTextValue]=useState('')
    const dispath=useDispatch()
    const comments=useSelector(state=>{
        const {CommentsReducer} = state
        return CommentsReducer.comments
    })

    const handleChange=(e)=>{
        setTextValue(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const id =uniqid()
        dispath(CommentAC(textValue,id))
        setTextValue('')
    }
    console.log('commentss',comments);

    useEffect(()=>{
        dispath(CommentLoadAC())
    },[])
    return (
      <div className='card-comments'>
        <form onSubmit={handleSubmit} className='comments-item-create'>
          <input type='text' value={textValue} onChange={handleChange}/>
          <input type='submit' hidden />
        </form>
        {!!comments.length && comments.map(res => {
           return <SingleComment key={res.id} data={res.text} id={res.id}/>
        })}
      </div>
    )
  }
  
  export default Comments;