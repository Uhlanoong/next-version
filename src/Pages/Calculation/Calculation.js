import React, { useState, useEffect } from 'react';
import { Container,Form,Row, Col } from 'react-bootstrap';

const Calculation = () => {
    const [stockingDate, setStockingDate] = useState(new Date().getTime())
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    // console.log({date});
    const [currentDate, setCurrentDate] = useState(date);
    const [age, setAge] = useState(0);
    const changeHandler = (e)=>{
        setStockingDate(e.target.value);
    }
    const changeCurrentHandler = (e)=>{
        setCurrentDate(parseInt(e.target.value));
    }
    
    
    useEffect(()=>{
        let newAge = (currentDate - stockingDate)
        setAge(newAge)
    },[currentDate,stockingDate])

    
    return (
        <div>
            <Container>
                <Row>
                    <Form>
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formStockingDate">
                        <Form.Control type="date" placeholder="Stocking Date" onChange={changeHandler}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formAge">
                        <Form.Control type = "number"placeholder = "Age"
                        value = {age}  onChange={changeCurrentHandler}/>
                        </Form.Group>                        
                    </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default Calculation;
