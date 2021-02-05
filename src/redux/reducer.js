import * as actionType from './actionType'
// import COMMENTS from '../data/comments'
import {combineReducers} from 'redux'
import {InitialContactForm} from './Form'
import {createForms} from 'react-redux-form'

const dishReducer =(dishState = {isLoading:false, dishes:[]} , action) =>{
    
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return{
                ...dishState,
                isLoading : true,
                dishes:[]
            }
        case actionType.LOAD_DISHES :
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
    
        default:
        return    dishState;
    }
}

const commentReducer = (commentState = {isLoading : true , comments:[]  },action)=>{



    switch (action.type) {
        case actionType.COMMENT_LOADING :
            return{
                ...commentState,
                isLoading:true,
                comments: []
            }
        case actionType.COMMENT_LOAD:
            
            return{
                ...commentState,
                isLoading:false,
                comments: action.payload
            }
        case 'ADD_COMMENT':
            let comment = action.payload
            return{
                ...commentState,
                comments:commentState.comments.concat(comment)
            }
    
        default:
            return commentState
    }

            
                
        
        }
    



 export const  Reducer  =  combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})
