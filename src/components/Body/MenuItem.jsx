import React from 'react';
import {Card , CardImg , CardImgOverlay , CardBody , CardTitle} from 'reactstrap'
import {baseUrl} from '../../redux/baseUrl'
const MenuItem = (props) => {

    return (
        <div className="my-3 col-lg-4 ">
            <Card>
                <CardBody>
                    <CardImg 
                        width ="100%"
                        alt ={props.dish.name}
                        src={baseUrl+props.dish.image}
                        style ={{opacity:"0.5"}} />
                </CardBody>
                <CardImgOverlay>
                    <CardTitle 
                        style={{cursor:"pointer"}} onClick={props.DishSelect} >{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default MenuItem;