/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState,} from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Solution.css';
import Results from '../Age/Results';
import TrComponent from '../../components/TrComponent';
import { Autocomplete, TextField } from '@mui/material';

const Solution = () => {
    // Output formula
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [volume, setVolume] = useState('');
    const [production, setProduction] = useState('');
    const [oxygendemand, setOxygenDemand] = useState(0);
    const [harvestOxygenDemand, setHarvestOxygenDemand] = useState(0);
    const [totalOxygenDemand, setTotalOxygenDemand] = useState(0);
    const [totalHarvestOxygenDemand, setTotalHarvestOxygenDemand] = useState(0);
    const [speciesReferenceObj, setSpeciesReferenceObj] = useState([]);
    const [fish,setFish] = useState("");


    //Table formula
    const [totalPc, setTotalPc] = useState(null);
    const [stockingDensity, setStockingDensity] = useState(null);
    const [presentSize, setPresentSize] = useState(null)
    
    const [totalWeight, setTotalWeight] = useState('')
    const [presentBiomass, setPresentBiomass] = useState('');
    const [feedingLayer, setFeedingLayer] = useState('');
    const [species, setSpecies] = useState([]);

    const [rows, setRows] = useState(1);

    const [feedingRateData, setFeedingRateData] = useState([]);
    

    const handleSaveData = (obj) =>{
      const resObj = {
          ...obj,
          production,
          volume,
          stockingDensity,
          presentBiomass,
          feedingLayer,
          oxygendemand,
          harvestOxygenDemand
      };
  
        fetch('http://localhost:5000/species-reference',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(resObj)
        })
    }

    useEffect(()=>{
        fetch('http://localhost:5000/species-reference')
        .then(res=> res.json())
        .then(data =>{
            setSpeciesReferenceObj(data);
        })

        fetch('http://localhost:5000/feed')
        .then(res=> res.json())
        .then(data =>{
            setFeedingRateData(data);
        })
    },[])

    console.log(feedingRateData);

    useEffect(()=>{
        let oxygendemandSum = 0;
        let harvestOxygenDemandSum = 0;
        for(var i = 0; i < speciesReferenceObj.length ; i++){
            oxygendemandSum += speciesReferenceObj[i].oxygendemand;
            harvestOxygenDemandSum += speciesReferenceObj[i].harvestOxygenDemand;
        }
        setTotalOxygenDemand(oxygendemandSum);
        setTotalHarvestOxygenDemand(harvestOxygenDemandSum);
    },[speciesReferenceObj])
    
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

    useEffect(()=> {
        fetch('http://localhost:5000/species')
        .then(res=> res.json())
        .then(data =>setSpecies(data))
      },[]);

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

    

    const CalculateFeedingRate = (name,totalWeight,totalPices) => {
        let filteredData = feedingRateData.filter((item) => item.fishtype === name);
        let singleFishWeight = totalWeight / totalPices;
        let individualFeedingRate = "";
        let totalFeedingRate = "";
        filteredData.forEach((item) => {
            if(item.bodyweight){
                if(item.bodyweight.charAt(0) !== '>'){
                    let range = item.bodyweight.split('-');
                    let feedRange = item.feedrate.split('-');
                    let max = parseInt(range[0]);
                    let min = parseInt(range[1]);
                    if (singleFishWeight > max && singleFishWeight < min) {
                       individualFeedingRate = item.feedrate;
                       totalFeedingRate = `${parseInt(feedRange[0])*totalPices} - ${parseInt(feedRange[1])*totalPices}`
                    }
                }
            }
        });

        return {
            individualFeedingRate,
            totalFeedingRate
        };
    }

    const calculationReset = () => {
        window.location.reload();
    }

    const CalculateTotalFeed = (name,totalWeight,totalPices) => {
        let filteredData = feedingRateData.filter((item) => item.fishtype === name);
        let singleFishWeight = totalWeight / totalPices;
        let totalFeedingRate = "";
        let feedType = "";
        let frequency = "";
        filteredData.forEach((item) => {
            if(item.bodyweight){
                if(item.bodyweight.charAt(0) !== '>'){
                    let range = item.bodyweight.split('-');
                    let feedRange = item.feedrate.split('-');
                    let max = parseInt(range[0]);
                    let min = parseInt(range[1]);
                    if (singleFishWeight > max && singleFishWeight < min) {
                       totalFeedingRate = `${parseInt(feedRange[0])*totalWeight}`;
                       feedType = item.feedtype;
                       frequency = item.frequency;
                    }
                }
            }
        });

        return {
            totalFeedingRate,
            feedType,
            frequency
        };
    }

     
    return (
        <div className = "py-5 cal">
            <Container>
                <Row>
                    <Col>
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
                        <Form.Group as={Col} controlId="formGridWaterVolume">
                        <Form.Control type="number" placeholder="Water Volume" value={volume}/>
                        </Form.Group>
                        
                        
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProblembatic Species">
                        <Autocomplete
                        disablePortal
                        id=""
                        options={problematicfish}
                        sx={{ width: 260}}
                        renderInput={(params) => <TextField {...params} label="Problematic Species" size = "small"/>}
                        />
                        {/* <select>
                            {species.map((item,index) => (
                                <option key={`${item._id}`} value={`${item.fish}-${item.oxygendemand}-${item.layer}`}>
                                    {item.fish}
                                </option>
                            ))}
                        </select> */}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formStockingDate">
                        <Form.Control type="date" placeholder="Stocking Date" onChange={changeHandler}/>
                        <>
                        {data.showResults ? <Results date={data.stockingdate} /> : <div />}
                        </>
                        {
                          data.date !== '' &&  
                          <Form.Group as={Col} controlId="formCalculation">
                            <Form.Control type="text" readOnly placeholder="Age" value={CalculateAge(data.date)}/>
                          </Form.Group>
                        }
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
                          
                        {Array(rows).fill(null).map((value, index) => (
                            <TrComponent  
                                key={index +1} 
                                rowId={ index +1 } 
                                ChangedHarvestOxygenDemand={(result) => setHarvestOxygenDemand(result)}  
                                ChangedOxyzenDemand={(result) => setOxygenDemand(result)} 
                                ChangedFeedingLayer={(res)=>setFeedingLayer(res)} 
                                ChangedSpeciesRefObj={(res) => handleSaveData(res)}
                                ChangedFish={(res) => setFish(res)}
                            />
                        ))}
                          
                    </tbody>
                    </Table>
                    <Button type = "button" onClick={() => {setRows(rows+1)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Add New</Button>
                    <Button type = "button" onClick={() => {setRows(rows-1)}} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Remove</Button>
                    <Button type = "button" onClick={() => calculationReset()} variant = "info" className = "mx-2" size = "sm" style = {{width: "100px"}}>Reset</Button>

                    </Col>

                    <Col sm = {3} className = "text-start">
                    <div className=''>
                    <p>Species Name: {fish} 
                    <br/>
                    The Water Volume is : {volume} m<sup>3</sup>
                    <br/>
                    O<sub>2</sub> Production: {production} mg/hr
                    <br/>
                    O<sub>2</sub> demand: {oxygendemand} mg
                    <br/>
                    harvest O<sub>2</sub> demand:{harvestOxygenDemand}mg
                    <br/>
                    Zonewise Fish Distribution:
                      <br/>
                     {feedingLayer}
                     <br />
                    Total Harvest O<sub>2</sub> demand: {totalHarvestOxygenDemand} mg/hr
                    <br/>
                    Total O<sub>2</sub> demand: {totalOxygenDemand} mg
                    </p>
                    </div>
                    
                    
                    </Col>
                </Row>
                
            </Container>

            <br />

            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Species</th>
                                <th>Feed Type</th>
                                <th>Total Feed</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                speciesReferenceObj && speciesReferenceObj.map((item,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.fish}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).feedType}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).totalFeedingRate}</td>
                                        <td>{CalculateTotalFeed(item.fish,item.totalWeight,item.totalPc).frequency}</td>
                                    </tr>
                                ))                               
                            }       
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
           
                    
        </div>
    );
};
const problematicfish = [
  
    { label: 'Tilapia',},{ label: 'Pangasius',},{ label: 'Rui',},
    { label: 'Mrigel',},{ label: 'Koi',},{ label: 'Catla',},
    { label: 'Silver Carp',},{ label: 'Carpio',},{ label: 'Big Head',},
    { label: 'Black Carp',},{ label: 'Kali Baus',},{ label: 'Pabda',},
    { label: 'Gulsha' },{ label: 'Grass Carp'},{ label: 'Shing' },
    { label: 'Magur' },{ label: 'Shol' },{ label: 'Shorputi' },
    { label: 'Bagdha' },{ label: 'Goldha' },{ label: 'Others' }
    
  ];



export default Solution;