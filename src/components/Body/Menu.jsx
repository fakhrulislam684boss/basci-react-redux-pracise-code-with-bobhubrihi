import React, { Component } from 'react';

import MenuItem from './MenuItem'
import DishDetails  from './DishDetails'
import {Modal, ModalBody,ModalFooter,Button} from 'reactstrap'

import {connect} from 'react-redux'

const mapStateToProps = state =>{
    
    return{
        dishes:state.dishes,
        comments:state.comments
        
    }
}

const mapDispatchToProps = dispatch =>{

    return{

        addComment:(dishId,author,rating,comment) =>dispatch({
            type:'ADD_COMMENT',
            
            payload:{
            dishId: dishId,
            author:author,
            rating:rating,
            comment:comment
            }
        })
    }
}
class Menu extends Component {
    state ={
     
        selectedDish:null,
        modalOpen:false
    }
    onDishSelec =(dish)=>{
        
        this.setState({
            modalOpen: ! this.state.modalOpen,
            selectedDish:dish
        })

    }
    modalToggle =()=>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
   
    render() {
        document.title = "Menu"

        let dishDetails = null
        if(this.state.selectedDish != null){
            const comments = this.props.comments.filter((comment)=>{
                return  comment.dishId === this.state.selectedDish.id
            })
            dishDetails =  <DishDetails item = {this.state.selectedDish} 
                comments ={comments}  addComment={this.props.addComment}/>
                
        }
        let menu = this.props.dishes.map((item)=>{
            return(
                <MenuItem 
                    dish={item}
                    key={item.id} 
                    DishSelect = {()=> this.onDishSelec(item) }/>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    
    
                        {menu}


                    <Modal  isOpen={this.state.modalOpen}  >
                        <ModalBody>
                            {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.modalToggle} >
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                    
                </div>
                
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);