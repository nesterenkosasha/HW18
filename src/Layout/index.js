import React from "react"
import PostsContainer from "./Posts"
import LikesCounter from "./Counter"
import { setLocalStorage, getLocalStorage } from "./helpers"
import { getPostApi } from "./Posts/api"

const LIKES_AMOUNT_KEY = "likes"
export default class layoutContainer extends React.PureComponent{
    state = {
        posts: [],
        likes: []
    }
    constructor(props){
        super(props)
    }

    async componentDidMount() {
    const posts = await getPostApi()
    const likes = getLocalStorage(LIKES_AMOUNT_KEY)

    this.setState({
      posts,
      likes
    })
  }

  handleClickLike = (post) => {
    this.setState(({ likes }) => {
      likes.push(post)
      return {
        likes: [...likes] 
      }
    }, () => setLocalStorage(LIKES_AMOUNT_KEY, this.state.likes))
  }

  handleClickUnLike = (id) => {
    this.setState(({ likes }) => ({
        likes: likes.filter(post => post.id != id)
    }), () => setLocalStorage(LIKES_AMOUNT_KEY, this.state.likes))
  }

 

    render (){
        const { 
            likes,
            posts
         } = this.state
    return (
        <div>
    <LikesCounter 
    likes={likes}
    />
    <PostsContainer
    likes={likes}
    posts={posts}
    handleClickLike={this.handleClickLike} 
    handleClickUnLike={this.handleClickUnLike}    
    />
        </div>
    )
}}
