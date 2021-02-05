import React, { Component } from 'react';
import  {Col, FormGroup,Button, Label} from 'reactstrap'
import {Form , Control , Errors,actions} from 'react-redux-form'
import { connect } from 'react-redux';
import axios from 'axios'
import {baseUrl} from '../../redux/baseUrl'

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length
const isNumber =  val => !isNaN(Number(val))
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
class Contact extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:'',
    //         agree:false,
    //         contactType:'Tel.',
    //         message:''
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }
    // handleInputChange = e =>{

    //     const value = e.target.type === 'checkbox'?e.target.checked  : e.target.value
    //     const name = e.target.name
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit =(values) => {
        axios.post(baseUrl+'feedback')
        .then(response => console.log(response))
        this.props.resetFeedbackForm()
   
    }
    render() {
        document.title = "Contact"
        return (
            <div className='container'>
                <div className="row row-content" style={{paddingLeft:"20px", textAlign:"left"}}>
                    <div className="col-12 my-4">
                        <h3 >Send Your FeedBack</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text  
                              
                                        name="firstname" 
                                        model=".firstname" 
                                        placeholder="First Name"
                                        className="form-control" 
                                        validators = {{
                                            required
                                        }}
                                    />
                                    <Errors
                                    model=".firstname"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required "
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text  
                                        model=".lastname"
                                        name="lastname" 
                                        className="form-control" 
                                        placeholder="Last Name" 
                                        validators = {{
                                            required
                                        }}
                                        />

                                    <Errors
                                    model=".firstname"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required "
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        name="telnum" 
                                        className="form-control" 
                                        placeholder="Tel. Number" 
                                        validators = {{
                                            required,
                                            isNumber
                                        }}
                                    />

                                    <Errors
                                    model=".telnum"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required ",
                                        isNumber:"Invaild Number"
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        validators = {{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                    model=".email"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required ",
                                        validEmail:"InValid Email"
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"  
                                                className="form-check-input" 
                                            /> 
                                            <strong>May we Contact with You</strong>
                                        </Label>

                                    </FormGroup>
                                </Col>
                                <Col md={{size:3}}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType" 
                                        className="form-control" 
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your FeedBack</Label>
                                <Col md={10} >
                                    <Control.textarea 
                                        model=".message"
                                        name="message" 
                                        className="form-control" 
                                        validators = {{
                                            required
                                        }}

                                        rows="12" />
                                    <Errors
                                    model=".message"
                                    
                                    show="touched"
                                    messages={{
                                        required: "Required"
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-5" row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send FeedBack</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Contact);

//      017468398295900

// phone number 01746839829

// 5900   pin number 