import React from "react"
import Comments from "./comment.js";
import Likes from "./likes.js"
import { Spin } from "./spin.js";
import Title from "./title.js";


export const Delivery =(props)=>{
    return (
        <div className="App">
          <div className="wrap">
            <div className="card">
              <div className="card-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2krCHlvaZ2SpXj_8jIFdIRcV6sJa4P1EYQn6Yoe320lH_lcKYHh4rZQ27gobI65gBNI&usqp=CAU" alt="surfing"/>
                <Likes />
                <Title />
                <Spin />
                <Comments />
              </div>
            </div>
          </div>
        </div>
      );
}

