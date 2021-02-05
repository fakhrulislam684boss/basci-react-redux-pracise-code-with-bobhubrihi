import * as actionType from './actionType'
import {baseUrl} from './baseUrl'
import axios from 'axios'



export  const addComment =(dishId,author,rating,comment)=> dispatch =>{
    
            const NewComment = {
                dishId: dishId,
                author:author,
                rating:rating,
                comment:comment
            }

            NewComment.date = new Date().toISOString
            axios.post( baseUrl+'comments',NewComment)
            .then(response => response.data)
            .then(comment => dispatch((ConcateComment(comment))))

            
            
        
}

export const ConcateComment = comment =>({  
    type:actionType.ADD_COMMENT,
    payload:comment

})

export const LoadComment = comments =>({
    type: actionType.COMMENT_LOAD,
    payload: comments
})

export const CommentLoading = () =>({
    type : actionType.COMMENT_LOADING
})

export const fetchComments = () => {
    return dispatch =>{
        dispatch(CommentLoading())

        axios.get( baseUrl+'comments')
        .then(response => response.data)
        .then(comments => dispatch(LoadComment(comments)))
    }
}

export const loadDishes = dishes =>({
    type:actionType.LOAD_DISHES,
    payload:dishes
})

export const dishesLoading  = () =>({
    type:actionType.DISHES_LOADING
})


export const fetchDishes =() =>{
    return dispatch => {
        dispatch(dishesLoading())

        axios.get(baseUrl+'dishes')
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        
    }
}