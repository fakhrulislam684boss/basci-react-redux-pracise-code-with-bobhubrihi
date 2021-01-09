import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import LoadComments from './LoadComments';
import ComentForm from './commentForm'

const DishDetails = (props) => {

    return (
        <div className="text-left">
            <Card>
                <CardImg top width = "100%" src={props.item.image} />
                <CardBody>
                    <CardTitle tag="h5">{props.item.name}</CardTitle>
                    <CardText style={{textAlign:"left"}} >{props.item.description}
                    <h6 className="my-4"> Price {props.item.price}</h6>
                    </CardText>
                    <hr/>
                    <LoadComments comments ={props.comments} />
                    <hr/>
                    <ComentForm  dishId={props.item.id} addComment={props.addComment}/>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetails;