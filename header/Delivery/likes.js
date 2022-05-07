import React from "react";
import { connect } from "react-redux";
import { DislikesAC, LikesAC } from "../../redux/action";
import { likesReducer } from "../../redux/likesReducer";

const Likes =(props)=>{

    return(
        <div>
            <button onClick={props.incrementLikes}>♥{props.likes}</button>
            <button onClick={props.Dislikes}>Dislike</button>
        </div>
    )

}
function mapStateToProps(state){
    return{
        likes: state.likesReducer.likes
    }
}
function mapDispatchToProps(dispath){
    return{
        incrementLikes:()=>{
            return dispath(LikesAC())
        },
        Dislikes:()=>{
            return dispath(DislikesAC())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes)