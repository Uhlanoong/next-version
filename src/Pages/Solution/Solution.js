import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Stackoverflow/Stackoverflow';

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
    // const [stockingDate, setStockingDate] = useState({
    //     date: "",
    //     birthday: "",
    //     showResults: false,
    // })

    // const CalculateAge = () =>{
    //     setStockingDate({birthday: stockingDate.date, showResults: true});
    // }
    // const changeHandler = (e)=>{
    //     setStockingDate({date: e.target.value})
    // }
    // const [harvestSize, setHarvestSize] = useState(null)
    const [totalWeight, setTotalWeight] = useState('')
    const [presentBiomass, setPresentBiomass] = useState('');
    
    const handlePresentSize = (e)=>{
        setPresentSize(e.target.value)
    }
    // const handleHarvestSize = (e)=>{
    //     setHarvestSize(e.target.value)
    // }
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
    // const [currentdate, setCurrentDate] = useState(new Date().toLocaleDateString())
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
        // let harvestTotalWeight = (totalPc * harvestSize) /1000
        // setTotalWeight(harvestTotalWeight)
    }, [totalPc, presentSize]);

    useEffect(() => {
        let newPresentBiomass = totalWeight /waterArea
        setPresentBiomass(newPresentBiomass)
    }, [totalWeight, waterArea]);

    // useEffect(() => {
    //     let fish = 3000
    //     let newOxygenDemand = fish * totalWeight
    //     setOxygenDemand(newOxygenDemand)
      
    // }, [totalWeight]);

    
    return (
        <div className = "my-2">
            <Container>
                <Row>
                    <Col sm = {9}>
                    <Form>
                    <Row className="mb-3">
                        <div className="mb-2">
                        <textarea className="form-control" placeholder = "Problem" id="exampleFormControlTextarea1" rows="1"></textarea>
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
                        options={fish}
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
                        <Form.Control type = "number" placeholder = "Age"/>
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
                        options={fish}
                        sx={{ width: 130}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        {/* <select onChange={handleChange} value={species}>
                        {fish.map(item => (
                            <option key={item.value} value={item.value}>
                            {item.label}
                            </option>
                        ))}
                        </select> */}
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
const fish = [
  
    { label: 'Tilapia',
      value: 1750
    },
    { label: 'Pangasius',
    value: 350,
    },
    { label: 'Rui',
    value: 3000,
    },
    { label: 'Mrigel',
    value: 3000, 
    },
    { label: 'Koi',
    value: 750, 
    },
    { label: 'Catla',
    value: 3000, 
    },
    { label: 'Silver Carp',
    value: 3000,
    },
    { label: 'Carpio',
    value: 3000,
    },
    { label: 'Big Head',
    value: 3000,
    },
    { label: 'Black Carp',
    value: 3000,
    },
    { label: 'Kali Baus',
    value: 3000, 
    },
    { label: 'Pabda', 
    value: 3500
    },
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