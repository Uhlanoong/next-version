/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState,} from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Stackoverflow/Stackoverflow';
import Results from '../Age/Results';
import TrComponent from '../../components/TrComponent';

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
    const [feedingLayer, setFeedingLayer] = useState('');

    const [rows, setRows] = useState(1);
    
    
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
                            <TrComponent  key={index} rowId={ index +1 } ChangedHarvestOxygenDemand={(result) => setHarvestOxygenDemand(result)}  ChangedOxyzenDemand={(result) => setOxygenDemand(result)} ChangedFeedingLayer={(res)=>setFeedingLayer(res)} />
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
                    <br/>
                    Total harvest O<sub>2</sub> demand:{harvestOxygenDemand}mg
                    <br/>
                    Zonewise Fish Distribution:
                      <br/>
                     {feedingLayer}
                    Solution:
                    </p>
                    </Col>
                    
                    <Button type = "button" onClick={() => {setRows(rows+1)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Add New</Button>
                    <Button type = "button" onClick={() => {setRows(rows-1)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Remove</Button>
                    <br/>
                    <Button type = "submit" variant = "success" className = "mx-2" size = "sm" style = {{width: "100px"}}>Save</Button>
                </Row>
            </Container>
        </div>
    );
};




export default Solution;