import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const Solution = () => {
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('')
    // const range = 1.45830299;
    // const oxygenPd = {volume}* range
    // const [currentdate, setCurrentDate] = useState(new Date().toLocaleDateString())
    // let calculate_age = (dob) => {
    //     var today = new Date();
    //     var birthDate = new Date(dob);
    //     var age_now = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    //     {
    //         age_now--;
    //     }
    //     return age_now;
    //   }  
    // const [optionSelected, setSelectedOptions] = useState([]);
      
    // const handleChange = (e) => {
    //       setSelectedOptions(e.target.value);
    // };

    useEffect(()=>{
        let cubic = parseFloat(28.32).toFixed(2)
        let newVolume = waterArea * waterDepth * cubic
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
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    </Form>
                    <Form>
                    <Row className="mb-3">
                        <div class="mb-2">
                        <textarea class="form-control" placeholder = "Problem" id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>
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
                        sx={{ width: 260}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formCurrentDate">
                        <Form.Control type="date" placeholder="Currrent Date" id = "date 2" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCulturePeriod">
                        <Form.Control type = "age" placeholder = "Culture Period" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridStockingQuantity">
                        <Form.Control type = "number" placeholder = "Stocking Quantity" />
                        </Form.Group>
                        
                    </Row>
                    </Form>
                     
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
                        <th>Hvst Size</th>
                        <th>Hvst Biomass</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>
                        <Autocomplete
                        disablePortal
                        id=""
                        options={species}
                        sx={{ width: 130}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        {/* <input type = "text" placeholder ="Species" size = "9" value = {optionSelected} onChange={handleChange} options={species}></input> */}
                        </td>
                        <td><input type = "number" maxLength = "5" size = "5" min="1" max="5"></input></td>
                        <td><input type = "number" min="1" max="5" ></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
                        <td><input type = "number"min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="6"></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
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
                        </tr>
                    </tbody>
                    </Table>
                    </Col>

                    <Col sm = {3} className = "text-start">
                    <p>The Water Volume is : {volume} cm<sup>3</sup>
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
                    <Button type = "submit" variant = "success" className = "mx-2" size = "sm" style = {{width: "100px"}}>Save</Button>
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
    { label: 'Silver Carp'},
    { label: 'Carpio' },
    { label: 'Big Head' },
    { label: 'Black Carp' },
    { label: 'Kali Baus' },
    { label: 'Pabda' },
    { label: 'Gulsha' },
    { label: 'Grass Carp'},
    { label: 'Shing' },
    { label: 'Magur' },
    { label: 'Shol' },
    { label: 'Shorputi' },
    { label: 'Bagdha' },
    { label: 'Goldha' },
    { label: 'Others' }
    
  ];

export default Solution;