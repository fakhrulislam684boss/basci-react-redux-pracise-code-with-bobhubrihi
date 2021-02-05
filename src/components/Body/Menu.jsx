import React, { Component } from 'react';
import {addComment,fetchDishes,fetchComments} from '../../redux/actionCreator'
import MenuItem from './MenuItem'
import DishDetails  from './DishDetails'
import {Modal, ModalBody,ModalFooter,Button} from 'reactstrap'
import Loader from './spinner'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    console.log("from menu ",state.dishes);
    return{
        dishes:state.dishes,
        comments:state.comments
        
    }
}

const mapDispatchToProps = dispatch =>{

    return{

        addComment:(dishId,author,rating,comment) =>dispatch(addComment(dishId,author,rating,comment)),
        fetchDishes:    () => dispatch(fetchDishes()),
        fetchComments:  () => dispatch(fetchComments())

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
    componentDidMount(){
        this.props.fetchDishes()
        this.props.fetchComments()
  
    }
    render() {
        document.title = "Menu"
        if(this.props.dishes.isLoading){
            return(
                <Loader/>
            )
        }
        else{
            let dishDetails = null
        if(this.state.selectedDish != null){
            const comments = this.props.comments.comments.filter((comment)=>{
                return  comment.dishId === this.state.selectedDish.id
            })
            dishDetails =  <DishDetails item = {this.state.selectedDish} 
                comments ={comments}  addComment={this.props.addComment}/>
                
        }
        let menu = this.props.dishes.dishes.map((item)=>{
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
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);