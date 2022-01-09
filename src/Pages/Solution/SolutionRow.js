/* eslint-disable no-unused-vars */

import React, { useEffect, useState,} from 'react';
import './Solution.css';

const SolutionRow = () => {
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

    

    const options= [
      { id: '1', name: "Select…", value: 0,},
      { id: '2', name: "Rui", value: 3000,},
      { id: '3', name: "Catla", value: 3000,},
      { id: '4', name: "Carpio", value: 3000,},
      { id: '5', name: "Silver Carp", value: 3000,},
      { id: '6', name: "Grass Carp", value: 3000,},
      { id: '7', name: "Black Carp", value: 3000,},
      { id: '8', name: "Big Head", value: 3000,},
      { id: '9', name: "Tilapia", value: 1750,},
      { id: '10', name: "Mrigel", value: 3000,},
      { id: '11', name: "Pabda", value: 3500,},
      { id: '12', name: "Pangasius", value: 350,},
      { id: '13', name: "Koi",value: 750,},
      { id: '14', name: "Shing",value: 7500,},
      { id: '15', name: "Magur",value: 7500,},
      { id: '16', name: "Gulsha",value: 7500,},
      { id: '17', name: "Bagdha",value: 7500,},
      { id: '18', name: "Goldha",value: 7500,},
    ];

    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
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

     
    return (
        <>
            <tr>
                <td>1</td>
                <td>
                <select onChange={handleChange} value={value}>
                    {options.map((item) => (
                    <option key={item.id} value={item.name}>
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
        </>
    );
};





export default SolutionRow;