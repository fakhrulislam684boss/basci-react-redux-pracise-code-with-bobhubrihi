import React, { Component } from 'react';
import  {Input,Col, Form , FormGroup,Button, Label} from 'reactstrap'
class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange = e =>{

        const value = e.target.type === 'checkbox'?e.target.checked  : e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit =(e) =>{
        console.log(this.state);
        e.preventDefault()
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input  
                                        type="text" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input  
                                        type="text" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input  
                                        type="tel" 
                                        name="telnum" 
                                        placeholder="Tel. Number" 
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input  
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                                type="checkbox" 
                                                name="agree"  
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}/> 
                                                <strong>May we Contact with You</strong>
                                        </Label>

                                    </FormGroup>
                                </Col>
                                <Col md={{size:3}}>
                                    <Input 
                                        type="select" 
                                        name="contactType" 
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your FeedBack</Label>
                                <Col md={10} >
                                    <Input 
                                        type="textarea" 
                                        name="message" 
                                        value={this.state.message} 
                                        onChange={this.handleInputChange}
                                        rows="12"></Input>
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

export default Contact;