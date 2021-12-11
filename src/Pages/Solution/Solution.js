import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const Solution = () => {
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('')
    const [production, setProduction] = useState('')

    // ------Converter-------//
    const [acre, setAcre] = useState(null);
    const handleAcreChange = (e)=>{
        setAcre(e.target.value)
    }
    useEffect(() => {
      let newAcre = {handleAcreChange} * 100
      setAcre(newAcre);
    }, [acre]);
    // const [currentdate, setCurrentDate] = useState(new Date().toLocaleDateString())
    let calculate_age = (dob) => {
        var today = new Date();
        var birthDate = new Date(dob);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        return age_now;
      }  
    // const calculate_age = (dob) => {
    //     const birthDate = new Date(dob); 
    //     const difference = Date.now() - birthDate.getTime();
    //     const age = new Date(difference);
      
    //     return Math.abs(age.getUTCFullYear() - 1970);
    //   }

    useEffect(()=>{
        let cubic = parseFloat(28.32).toFixed(2)
        let newVolume = waterArea * waterDepth * cubic
        setVolume(newVolume)
    }, [waterArea, waterDepth])
    
    useEffect(() => {
        let range = parseFloat("1.45830299").toFixed(2);
        let cubic = parseFloat("28.32").toFixed(2)
        let newVolume = waterArea * waterDepth * cubic
        setVolume(newVolume)
        let oxygenProduction = newVolume* range
        setProduction(oxygenProduction)
    }, [waterArea, waterDepth, production]);
   
    return (
        <div className = "my-2">
            <Container>
                <Row>
                    <Col sm = {9}>
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
                        <Form.Control type = "number" placeholder = ""/>
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
                        <Form.Control type = "number" placeholder = "" />
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
                        <Form.Control type="number" placeholder="Water Area" onChange={(e)=>setWaterArea(e.target.value)}/>
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
                        <Form.Control type="date" placeholder="Currrent Date"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCulturePeriod">
                        <Form.Control type = "number" placeholder = "Culture Period" onChange={calculate_age()}/>
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
                        <th>Ttl Wt(kg)</th>
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
                        </td>
                        <td><input type = "number" maxLength = "5" size = "5" min="1" max="5"></input></td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}}></input></td>
                        <td><input type = "number" min="1" max="5"></input></td>
                        <td><input type = "number" style={{width: "70px"}}></input></td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}}></input></td>
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
                    <p>The Water Volume is : {volume} m<sup>3</sup>
                    <br/>
                    O<sub>2</sub> Production: {production} mg/hr
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

const unit = [
    {label: 'acre'},
    {label: 'bigha'},
    {label: 'katha'},
    {label: 'hectare'},
    {label: 'kani'},
    {label: 'kora'},
    {label: 'gonda'},
    {label: 'square feet'},
]

export default Solution;