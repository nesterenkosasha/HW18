import React from"react"
import "./index.scss"


export default (props) => {
    const { post, 
      handleClickLike,
      handleClickUnLike
     } = props
    const {
        id,
       title,
       body,
       flag
     } = post

     return(
         <li className={`${flag && "clickOnLike" || ""} like-component`}>
             <div>
             Number: {id}
           </div>
           <div>
             Description: {title}
           </div>
           <div>
             {body}        
           </div>            
           <div>
           {
            flag
              ? (
                <button
                  className="btn-unlike"
                  onClick={(event) => {
                    event.preventDefault()
                    handleClickUnLike(id)
                  }}
                >
                  Unlike
                </button>
              )
              : (
                <button
                  className="btn-like"
                  onClick={(event) => {
                    event.preventDefault()
                    handleClickLike(post)
                  }}
                >
                  Like
                </button>
              )
          }
           </div>
         </li>
     )
}
