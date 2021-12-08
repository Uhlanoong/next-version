import React, { useEffect, useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Solution = () => {
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('')
    
    const [currentdate, setCurrentDate] = useState(new Date().toLocaleDateString())

    useEffect(()=>{
        let newVolume = waterArea * waterDepth
        setVolume(newVolume)
    }, [waterArea, waterDepth])
    
   
    return (
        <div className = "my-2">
            <Container>
                <Row>
                    <Col sm = {9}>
                    <Form>
                    <Row>
                        <Col>
                       <Form.Group className="mb-3">

                        <Form.Select size = "sm">
                            <option value="1">Acre</option>
                            <option value="2">Bigha</option>
                            <option value="3"></option>
                        </Form.Select>
                        
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3">
                        <Form.Select size = "sm">
                            <option value="1">Decimal</option>
                            <option value="2">Katha</option>
                            <option value="3">Chatak</option>
                        </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    </Form>
                    <Form>
                    <Row className="mb-3">
                        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3 px-2 mx-1">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                        <Form.Group as={Col} controlId="formGridWaterArea">
                        <Form.Control type="number" placeholder="Water Area"onChange={(e)=>setWaterArea(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridWaterDepth">
                        <Form.Control type="number" placeholder="Water Depth" onChange={(e)=>setWaterDepth(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridProblembatic Species">
                        <Autocomplete
                        disablePortal
                        id=""
                        options={species}
                        sx={{ width: 240, mx:2, px:3}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formStockingDate">
                        <Form.Control type="date" placeholder="Stocking Date" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCurrentDate">
                        <Form.Control type="date" placeholder="Currrent Date" value = {currentdate} onChange={(e) => setCurrentDate()} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCulturePeriod">
                        <Form.Control type = "age" placeholder = "Culture Period" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridStockingQuantity">
                        <Form.Control type = "number" placeholder = "Stocking Qty" />
                        </Form.Group>
                    </Row>
                    </Form>
                     
                    {/* <div>
                    <Form>
                        <Row>
                        <Form.Group as={Col} controlId="formGridProblembatic Species">
                        <Autocomplete
                        disablePortal
                        id=""
                        options={species}
                        sx={{ width: 240, mx:2, px:3}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formTotalPc">
                        <Form.Control type = "number" placeholder = "Total Pc"/>
                        </Form.Group>
                        <Form.Group as={Col} max-length = "5">
                        <Form.Control type = "number" placeholder = "Stocking Size"/>
                        </Form.Group>
                        </Row>
                    </Form>
                    </div> */}

                    
                    <br/>
                    <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Species</th>
                        <th>Total Pc</th>
                        <th>Stk Size(gm)</th>
                        <th>Psnt Size(gm)</th>
                        <th>Stk Dty</th>
                        <th>Total Wt(kg)</th>
                        <th>Feeding rate(%)</th>
                        <th>Feed Req.(kg)</th>
                        <th>Hvst Size</th>
                        <th>Hvst Biomass</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>
                        <input type = "text" placeholder ="Species" size = "9"></input>
                        </td>
                        <td><input type = "number" maxLength = "5" size = "5" min="1" max="5"></input></td>
                        <td><input type = "number" min="1" max="5" ></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
                        <td><input type = "number"min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="6"></input></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                    </Table>

                    </Col>
                    <Col sm = {3} className = "text-start">
                    <p>The Water Volume is : {volume}
                    <br/>
                    O<sub>2</sub> Production (tentitive):
                    <br/>
                    Total O<sub>2</sub> demand:
                    <br/>
                    Total O<sub>2</sub> demand harvest size:
                    <br/>
                    Zonewise Fish Distribution:
                    <br/>
                    Upper layer: <br/>
                    Mid Layer: <br/>
                    Bottom Layer: <br/>
                    Rmd Feed size: <br/>
                    Solution:
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
const species = [
  
    { label: 'Tilapia' },
    { label: 'Pangasius' },
    { label: 'Rui' },
    { label: 'Mrigel' },
    { label: 'Koi' },
    { label: 'Catla' },
    { label: 'Silver Carp' },
    { label: 'Carpio' },
    { label: 'Grass Carp' },
    { label: 'Big Head' },
    { label: 'Black Carp' },
    { label: 'Kali Baus' },
    { label: 'Pabda' },
    { label: 'Gulsha' },
    { label: 'Shing' },
    { label: 'Magur' },
    { label: 'Shol' },
    { label: 'Shorputi' },
    { label: 'Bagdha' },
    { label: 'Goldha' },
    { label: 'Others' }
    
  ];

export default Solution;