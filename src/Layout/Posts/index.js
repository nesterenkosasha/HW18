import React from "react"
import PostComponent from "../Post"

export default class PostsContainer extends React.Component{
    state = {
            posts: []
        }
        
        constructor(props){
        super(props)        
    }

    componentWillReceiveProps({ posts, likes }) {
        const updated= posts.reduce((acc, post) => {
          acc.push({ 
            ...post,
            flag: !!~likes.findIndex(({ id }) => id == post.id)
          })
          return acc
        }, [])
        this.setState({
          posts: updated
        })
      }

    render(){
        const { posts } = this.state
        const { 
            handleClickLike,
            handleClickUnLike
         } = this.props
        return(
           <ul>
               {
               posts.map((post, index) => <PostComponent 
               post={post}
               handleClickUnLike={handleClickUnLike}
               handleClickLike={handleClickLike}
               key={index}
               />)
               }
           </ul> 
        )
    }
}