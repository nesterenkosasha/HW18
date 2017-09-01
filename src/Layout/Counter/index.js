import React from "react"
import "./index.scss"

export default (props) => {
    const { likes } = props
    const counter = likes.length

    return(
        <div className="likes-component">
            Likes: {counter}
        </div>
    )

}
