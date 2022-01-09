/* eslint-disable no-undef */
import React, { useEffect, useState,} from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Stackoverflow/Stackoverflow';
import Results from '../Age/Results';
import Tablerow from '../Row/Tablerow';



const Solution = () => {
    // Output formula
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState(0);
    const [production, setProduction] = useState('');
    const [oxygendemand, setOxygenDemand] = useState(0);
    const [oxygenHarvestdemand, setOxygenHarvestDemand] = useState(0);
    const [oxygentwodemand, setOxygenTwoDemand] = useState(0);

    //Table formula
    const [totalPc, setTotalPc] = useState(null);
    const [stockingDensity, setStockingDensity] = useState(null);
    const [presentSize, setPresentSize] = useState(null)
    const [harvestSize, setHarvestSize] = useState(null);
    
    const [totalWeight, setTotalWeight] = useState('');
    const [totalHarvestWeight, setTotalHarvestWeight] = useState('');
    const [presentBiomass, setPresentBiomass] = useState('');
    
    const handlePresentSize = (e)=>{
        setPresentSize(e.target.value)
    }
    const handleHarvestSize = (e)=>{
        setHarvestSize(e.target.value)
    }
    
    const handleTotalWeight = (e)=>{
        setTotalWeight(e.target.value)
    }
    
    const handleTotalHarvestWeight = (e)=>{
        setTotalHarvestWeight(e.target.value)
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

    useEffect(()=>{
        let cubic = parseFloat("28.32").toFixed(2)
        let newVolume = waterArea * waterDepth * cubic
        setVolume(newVolume.toFixed(2))
    }, [waterArea, waterDepth])
    
    useEffect(() => {
        let range = parseFloat("1.45830299").toFixed(2);
        let cubic = parseFloat("28.32").toFixed(2)
        let newVolume = waterArea * waterDepth * cubic
        setVolume(newVolume.toFixed(2))
        let oxygenProduction = newVolume* range
        setProduction(oxygenProduction.toFixed(2))
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
        let newTotalHarvestWeight = (totalPc * harvestSize) /1000
        setTotalHarvestWeight(newTotalHarvestWeight)
        
    }, [totalPc, harvestSize]);

    useEffect(() => {
        let newPresentBiomass = totalWeight /waterArea
        setPresentBiomass(newPresentBiomass)
    }, [totalWeight, waterArea]);

    // Age
    const [data, setData] = useState({
      date: '',
      stockingdate: '',
      showResults: false,
    });
    const CalculateAge = () => {
      setData({ stockingdate: data.date, showResults: true });
    };
    const changeHandler = (e) => {
      setData({ date: e.target.value });
    };

      // eslint-disable-next-line no-unused-vars
    const options= [
      { id: '1', name: "Select…", value: 0, upperlayer: "",},
      { id: '2', name: "Rui", value: 3000, upperlayer: "",},
      { id: '3', name: "Catla", value: 3000, upperlayer: "Catla",},
      { id: '4', name: "Carpio", value: 3000,},
      { id: '5', name: "Tilapia", value: 1750,},
      { id: '6', name: "Mrigel", value: 3000,},
      { id: '7', name: "Pabda", value: 3500,},
      {id: '8',name: "Pangasius",},
      {id: '9', name: "Koi",value: 750,},
    ];
      // eslint-disable-next-line no-unused-vars
    const [fishes, setFishes] = useState([
      { id: '11', name: "Select…", value: 0,},
      { id: '12', name: "Rui", value: 3000,},
      { id: '13', name: "Catla", value: 3000,},
      { id: '14', name: "Carpio", value: 3000,},
      { id: '15', name: "Tilapia", value: 1750,},
      { id: '16', name: "Mrigel", value: 3000,},
      { id: '17', name: "Pabda", value: 3500,},
      {id: '18',name: "Pangasius",value: 0},
      {id: '19', name: "Koi",value: 750,},
    ]);

    const [value, setValue] = useState("");
    const [twovalue, setTwoValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
      console.log(e.target.value);
    };
    const handleTwoChange = (e) => {
      setTwoValue(e.target.value);
      console.log(e.target.value);
    };

      useEffect(() => {
        let newOxygenDemand = value * totalWeight
        setOxygenDemand(newOxygenDemand)
     }, [value, totalWeight]);

      useEffect(() => {
        let newOxygenHarvestDemand = value * totalHarvestWeight
        setOxygenHarvestDemand(newOxygenHarvestDemand)
     }, [value, totalHarvestWeight]);

      useEffect(() => {
        let newOxygenTwoDemand = twovalue * totalWeight
        setOxygenTwoDemand(newOxygenTwoDemand)
     }, [twovalue, totalWeight]);

    
    
     
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
                        {/* <select onChange={handleZoneChange} value={upperlayer}>
                            {choices.map((item) => (
                            <option key={item.id} value={item.upperlayer}>
                                {item.name}
                            </option>
                            ))}
                        </select> */}
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
                        <Form.Control type="date" placeholder="Stocking Date" onChange={changeHandler}/>
                        </Form.Group>
                        <>
                        {data.showResults ? <Results date={data.stockingdate} /> : <div />}
                        </>
                        <Form.Group as={Col} controlId="formCalculation">
                        <Button
                          variant="primary" size="md" active
                          onClick={CalculateAge}>
                          Calculate
                        </Button>
                        
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
                        <th>Hvst Wt</th>
                        <th>Psnt Biomass</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>
                        <select onChange={handleChange} value={value}>
                            {options.map((item) => (
                            <option key={item.id} value={item.value}>
                                {item.name}
                            </option>
                            ))}
                        </select>

                        </td>
                        <td><input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc}></input></td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}} onChange={handlePresentSize}></input></td>
                        <td><input type = "number" min="1" max="5" onChange= {handleStockingDensity} value={stockingDensity}></input></td>
                        <td><input type = "number" style={{width: "70px"}}
                        onChange={handleTotalWeight} value={totalWeight}></input></td>
                        <td><input type = "number" style={{width: "80px"}} onChange={handleHarvestSize}></input></td>
                        <td><input type = "number" style={{width: "70px"}}
                        onChange={handleTotalHarvestWeight} value={totalHarvestWeight}></input></td>
                        <td><input type = "number" style={{width: "80px"}}onChange={handlePresentBiomass} value={presentBiomass}></input></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>
                        <select onChange={handleTwoChange} value={twovalue}>
                          {fishes.map((item) => (
                            <option key={item.id} value={item.value}>
                                {item.name}
                            </option>
                            ))}
                        </select>
                        </td>
                        <td>
                        {<input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc}></input>}
                        </td>
                        <td>
                        {<input type = "number" style={{width: "80px"}}></input>}
                        </td>
                        <td>
                        {<input type = "number" style={{width: "80px"}} onChange={handlePresentSize}></input>}
                        </td>
                        <td>
                        {<input type = "number" min="1" max="5" onChange= {handleStockingDensity} value={stockingDensity}></input>}
                        </td>
                        <td>
                        {<input type = "number" style={{width: "70px"}}
                        onChange={handleTotalWeight} value={totalWeight}></input>}
                        </td>
                        <td>
                        <input type = "number" style={{width: "80px"}} onChange={handleHarvestSize}></input>
                        </td>
                        <td>
                        <input type = "number" style={{width: "70px"}}
                        onChange={handleTotalHarvestWeight} value={totalHarvestWeight}></input>
                        </td>
                        <td><input type = "number" style={{width: "80px"}}onChange={handlePresentBiomass} value={presentBiomass}></input></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>
                          <Tablerow/>
                        </td>
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
                    Total O<sub>2</sub> demand: {(oxygendemand + oxygentwodemand)} mg
                    {/* <br/>
                    Bodyweight: {age} */}
                    <br/>
                    Total O<sub>2</sub> demand harvest size: {oxygenHarvestdemand} mg
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