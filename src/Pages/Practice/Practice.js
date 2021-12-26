import React, { useEffect, useState } from 'react';
import { Container,Row, Col, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Practice = () => {

            // ------Converter-------//
        const [acre, setAcre] = useState('');
        const [decimal, setDecimal] = useState('');
        const handleAcreChange = (e)=>{
            setAcre(e.target.value);
            console.log(e.target.value);
        }
        const handleDecimalChange = (e)=>{
            setDecimal(e.target.value)
        }
        useEffect(() => {
        let newAcre = {handleDecimalChange} / 100
        let newDecimal = {handleAcreChange} * 100
        setAcre(newAcre);
        setDecimal(newDecimal);
        }, [acre,decimal]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Form>
                    <Row>
                    <Col>
                       <Form.Group className="mb-3">
                       <Autocomplete
                        disablePortal
                        id=""
                        options={unit}
                        sx={{ width: 400}}
                        renderInput={(params) => <TextField {...params} label="Select Unit" size = "small"/>}
                        />
                        <Form.Control type = "number" placeholder = "" onChange={handleAcreChange} value={acre}/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3">
                        <Autocomplete
                        disablePortal
                        id=""
                        options={unit}
                        sx={{ width: 405}}
                        renderInput={(params) => <TextField {...params} label="Select Unit" size = "small"/>}
                        />
                        <Form.Control type = "number" placeholder = "" onChange={handleDecimalChange} value={decimal}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>


            
        </div>
    );
};

const unit = [
    {label: 'acre'},
    {label: 'bigha'},
    {label: 'katha'},
    {label: 'hectare'},
    {label: 'kani'},
    {label: 'kora'},
    {label: 'gonda'},
    {label: 'square feet'},
    {label: 'decimal'},
    {label: 'square meter'},
]

export default Practice;

