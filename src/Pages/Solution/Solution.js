import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const Solution = () => {
    // Output formula
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('')
    const [production, setProduction] = useState('')

    //Table formula
    const [totalPc, setTotalPc] = useState(null);
    const [stockingDensity, setStockingDensity] = useState(null);
    const [presentSize, setPresentSize] = useState(null)
    const [totalWeight, setTotalWeight] = useState(null)
    const [presentBiomass, setPresentBiomass] = useState(null);
    
    const handlePresentSize = (e)=>{
        setPresentSize(e.target.value)
    }
    const handleTotalWeight = (e)=>{
        setTotalWeight(e.target.value)
    }
    const handleTotalPc = (e)=>{
        setTotalPc(e.target.value);
    }
    const handleStockingDensity = (e)=>{
        setStockingDensity(e.target.value);
    }
    const handlePresentBiomass = (e)=>{
        setPresentBiomass(e.target.value)
    }
    
    // ------Converter-------//
    const [acre, setAcre] = useState(null);
    const [decimal, setDecimal] = useState(null);
    const handleAcreChange = (e)=>{
        setAcre(e.target.value);
        console.log(e.target.value);
    }
    const handleDecimalChange = (e)=>{
        setDecimal(e.target.value)
    }
    useEffect(() => {
      let newAcre = {handleAcreChange} / 100
      let newDecimal = {handleDecimalChange} * 100
      setAcre(newAcre);
      setDecimal(newDecimal);
    }, [acre,decimal]);
    // const [currentdate, setCurrentDate] = useState(new Date().toLocaleDateString())
    function getAge(d1, d2){
        d2 = d2 || new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 *60 * 60 * 24 * 365.25));
    }
    getAge(new Date(1978, 10, 3));

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

    useEffect(() => {
       let newStockingDensity = totalPc / waterArea
       setStockingDensity(newStockingDensity)
    }, [totalPc, waterArea]);

    useEffect(() => {
        let newTotalWeight = (totalPc * presentSize) /1000
        setTotalWeight(newTotalWeight)
    }, [totalPc, presentSize]);

    useEffect(() => {
        let newPresentBiomass = totalWeight /waterArea
        setPresentBiomass(newPresentBiomass)
    }, [totalWeight, waterArea]);
   
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
                        <Form.Control type = "number" placeholder = "" onChange={handleAcreChange}/>
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
                        <Form.Control type = "number" placeholder = "" onChange={handleDecimalChange} value={acre}/>
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

                        <Form.Group as={Col} controlId="formStockingDate">
                        <Form.Control type="date" placeholder="Stocking Date"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCulturePeriod">
                        <Form.Control type = "number" placeholder = "Culture Period" value={getAge}/>
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
                        <th>Psnt Biomass</th>
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
                        <td><input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc}></input></td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}} onChange={handlePresentSize}></input></td>
                        <td><input type = "number" min="1" max="5" onChange= {handleStockingDensity} value={stockingDensity}></input></td>
                        <td><input type = "number" style={{width: "70px"}}
                        onChange={handleTotalWeight} value={totalWeight}></input></td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}}onChange={handlePresentBiomass} value={presentBiomass}></input></td>
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
    {label: 'decimal'},
    {label: 'square meter'},
]

export default Solution;