/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Stackoverflow/Stackoverflow';
import Results from '../Age/Results';
import TrComponent from '../../components/TrComponent';
// import Result from '../Age/Result';

const Solution = () => {
    // Output formula
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('');
    const [production, setProduction] = useState('');
    const [oxygendemand, setOxygenDemand] = useState(0);
    const [harvestOxygenDemand, setHarvestOxygenDemand] = useState(0);


    //Table formula
    const [totalPc, setTotalPc] = useState(null);
    const [stockingDensity, setStockingDensity] = useState(null);
    const [presentSize, setPresentSize] = useState(null)
    
    const [totalWeight, setTotalWeight] = useState('')
    const [presentBiomass, setPresentBiomass] = useState('');

    const [rows, setRows] = useState(1);
    
    
    const handlePresentSize = (e)=>{
        setPresentSize(e.target.value)
    }
    
    const handleTotalWeight = (e)=>{
        // setTotalWeight(e.target.value)
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
        let newPresentBiomass = totalWeight /waterArea
        setPresentBiomass(newPresentBiomass)
    }, [totalWeight, waterArea]);

    // Age
    const [data, setData] = useState({
      date: '',
      stockingdate: '',
      showResults: false,
    });
    const CalculateAge = (inputDate) => {
      var diffInTime = new Date(inputDate).getTime() - new Date().getTime();
      var days = Math.ceil(diffInTime / (1000 * 3600 * 24));
      return Math.abs(days);
    };
    const changeHandler = (e) => {
      setData({ date: e.target.value });
    };

    // eslint-disable-next-line no-unused-vars
    const [choices, setChoices] = useState([
      {
        name: "Select…",
        value: null,
      },
      {
        name: "Rui",
        value: 3000,
        age: {
          day1: 0,
          day15: 5,
          day30: 15,
          day45: 25,
          day60: 55,
          day75: 95,
          day90: 150,
          day105: 210,
          day120: 175,
          day135: 350,
          day150: 430,
          day165: 515,
          day180: 610,
        },
      },
      {
        name: "Catla",
        value: 3000,
        age: {
          day1: 0,
          day15: 5,
          day30: 15,
          day45: 25,
          day60: 55,
          day75: 95,
          day90: 150,
          day105: 210,
          day120: 175,
          day135: 350,
          day150: 430,
          day165: 515,
          day180: 610,
        }
      },
      {
        name: "Carpio",
        value: 3000,
        age: {
          day1: 0,
          day15: 5,
          day30: 15,
          day45: 25,
          day60: 55,
          day75: 95,
          day90: 150,
          day105: 210,
          day120: 175,
          day135: 350,
          day150: 430,
          day165: 515,
          day180: 610,
        }
      },
      {
        name: "Tilapia",
        value: 1750,
      },
      {
        name: "Mrigel",
        value: 3000,
        age: {
          day1: 0,
          day15: 5,
          day30: 15,
          day45: 25,
          day60: 55,
          day75: 95,
          day90: 150,
          day105: 210,
          day120: 175,
          day135: 350,
          day150: 430,
          day165: 515,
          day180: 610,
        }
      },
      {
        name: "Pabda",
        value: 3500,
      },
      {
        id: '8',
        name: "Pangasius",
        age: {
          day1: 30,
          day15: 79,
          day30: 133,
          day45: 196,
          day60: 265,
          day75: 343,
          day90: 430,
          day105: 523,
          day120: 616,
          day135: 712,
          day150: 808,
          day165: 904,
          day180: 1000,
        }
        
      },
      {
        name: "Koi",
        value: 750,
        age: {
          day1: 0.25,
          day15: 5,
          day30: 10,
          day45: 20,
          day60: 35,
          day75: 55,
          day90: 80,
          day105: 110,
          day120: 150,
        }
      },
    ]);
    // const [age, setAge] = useState("");
  
    // const handleAgeChange = useCallback((e) => {
    //   setAge(e.target.value);
    // }, []);
  

    // eslint-disable-next-line no-unused-vars
    const [options, setOptions] = useState([
        { id: '1',
          name: "Select…",
          value: 0,
          age:{}
        },
        { 
          id: '2',
          name: "Rui",
          value: 3000,
          age: {
            day1: 0,
            day15: 5,
            day30: 15,
            day45: 25,
            day60: 55,
            day75: 95,
            day90: 150,
            day105: 210,
            day120: 175,
            day135: 350,
            day150: 430,
            day165: 515,
            day180: 610,
          }
        },
        {
          id: '3',
          name: "Catla",
          value: 3000,
          age: {
            day1: 0,
            day15: 5,
            day30: 15,
            day45: 25,
            day60: 55,
            day75: 95,
            day90: 150,
            day105: 210,
            day120: 175,
            day135: 350,
            day150: 430,
            day165: 515,
            day180: 610,
          }
        },
        { 
          id: '4',
          name: "Carpio",
          value: 3000,
          age: {
            day1: 0,
            day15: 5,
            day30: 15,
            day45: 25,
            day60: 55,
            day75: 95,
            day90: 150,
            day105: 210,
            day120: 175,
            day135: 350,
            day150: 430,
            day165: 515,
            day180: 610,
          }
        },
        { 
          id: '5',
          name: "Tilapia",
          value: 1750,
          age: {
            day1: 20,
            day15: 35,
            day30: 55,
            day45: 80,
            day60: 110,
            day75: 150,
            day90: 200,
            day105: 260,
            day120: 330,
            day135: 405,
            day150: 490,
            day165: 585,
            day180: 700,
          }
        },
        {
          id: '6',
          name: "Mrigel",
          value: 3000,
          age: {
            day1: 0,
            day15: 5,
            day30: 15,
            day45: 25,
            day60: 55,
            day75: 95,
            day90: 150,
            day105: 210,
            day120: 175,
            day135: 350,
            day150: 430,
            day165: 515,
            day180: 610,
          }
        },
        {
          id: '7',
          name: "Pabda",
          value: 3500,
          
        },
        {
          id: '8',
          name: "Pangasius",
          age: {
            day1: 30,
            day15: 79,
            day30: 133,
            day45: 196,
            day60: 265,
            day75: 343,
            day90: 430,
            day105: 523,
            day120: 616,
            day135: 712,
            day150: 808,
            day165: 904,
            day180: 1000,
          }
          
        },
        {
          id: '9',
          name: "Koi",
          value: 750,
          age: {
            day1: 0.25,
            day15: 5,
            day30: 10,
            day45: 20,
            day60: 35,
            day75: 55,
            day90: 80,
            day105: 110,
            day120: 150,
          }
        },
      ]);

      
      const [value, setValue] = useState("");
      

      const handleChange = useCallback((e) => {
        setValue(e.target.value);
      }, []);
      
    
      
      useEffect(() => {
        let newOxygenDemand = value * totalWeight
        setOxygenDemand(newOxygenDemand)
     }, [value, totalWeight]);

     
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
                        {/* <select onChange={handleAgeChange} value={age}>
                            {choices.map((item) => (
                            <option key={item.id} value={item.age}>
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
                        {
                          data.date !== '' &&  
                          <Form.Group as={Col} controlId="formCalculation">
                            <Form.Control type="text" readOnly placeholder="Age" value={CalculateAge(data.date)}/>
                          </Form.Group>
                        }


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
                          
                        {Array(rows).fill(null).map((value, index) => (
                            <TrComponent  key={index} rowId={ index +1 } ChangedHarvestOxygenDemand={(result) => setHarvestOxygenDemand(result)}  ChangedOxyzenDemand={(result) => setOxygenDemand(result)}/>
                        ))}
                          
                    </tbody>
                    </Table>
                    </Col>

                    <Col sm = {3} className = "text-start">
                    <p>The Water Volume is : {volume} m<sup>3</sup>
                    <br/>
                    O<sub>2</sub> Production: {production} mg/hr
                    <br/>
                    Total O<sub>2</sub> demand: {oxygendemand} mg
                    {/* <br/>
                    Bodyweight: {age} */}
                    <br/>
                    Total O<sub>2</sub> demand harvest Demand: {harvestOxygenDemand}
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
                    <Button type = "button" onClick={() => {setRows(rows+1)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Add New</Button>

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