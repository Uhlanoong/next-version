import React from 'react';
import { Card } from 'react-bootstrap';

const Result = (props) => {

    const{value, age} = props.Result
    return (
        <div>
            <Card style = {{ width: "20rem", padding :'5px', border: '1px solid gray', borderRadius: '10px'}}>
               <Card.Body style = {{backgroundColor: '#e4e7ed', fontWeight: 'bold', height: '24rem'}}>
                   <Card.Title>{value}</Card.Title>
                   <Card.Title>{age}</Card.Title> 
               </Card.Body>
            </Card>
        </div>
    );
};

export default Result;