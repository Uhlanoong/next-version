import React, { useEffect, useState, useCallback } from 'react';

const TrComponent = (props) => {
    const [optionValue, setOptionValue] = useState(0);
    const [totalWeight, setTotalWeight] = useState('')
    const [presentBiomass, setPresentBiomass] = useState('');
    const [stockingDensity, setStockingDensity] = useState(null);
    const [presentSize, setPresentSize] = useState(0);
    const [totalPc, setTotalPc] = useState(0);
    const [oxygendemand, setOxygenDemand] = useState(0);
    const [species, setSpecies] = useState([]);
    const [harvestSize, setHarvestSize] = useState(0);
    const [harvestOxygenDemand, setHarvestOxygenDemand] = useState(0);



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

    const handleChange = useCallback((e) => {
        setOptionValue(e.target.value);
    }, []);
    
    
    const handleTotalWeight = (e)=>{
        setTotalWeight(e.target.value);
        props.ChangedTotalWeight(e.target.value);
        // console.log(e.target.value);
    }
    const handleStockingDensity = (e)=>{
        setStockingDensity(e.target.value);
    }
    const handlePresentBiomass = (e)=>{
        setPresentBiomass(e.target.value)
    }

    const handlePresentSize = (e)=>{
        setPresentSize(e.target.value);
    }

    const handleTotalPc = (e)=>{
        setTotalPc(e.target.value);
    }

    const handleHarvestSize = (e) => {
      setHarvestSize(e.target.value);
    }

    useEffect(()=> {
      fetch('http://localhost:5000/species')
      .then(res=> res.json())
      .then(data =>setSpecies(data))
  },[]);

    useEffect(() => {
        let newTotalWeight = (totalPc * presentSize) /1000
        setTotalWeight(newTotalWeight);
        props.ChangedOxyzenDemand(newTotalWeight*optionValue);
    }, [totalPc, presentSize]);

    useEffect(() => {
      let harvestTotalWeight = (totalPc * harvestSize) /1000;
       props.ChangedHarvestOxygenDemand(harvestTotalWeight * optionValue); 
    }, [totalPc, harvestSize])
    

    return (
            <tr>
                <td>{props.rowId}</td>
                <td>
                <select onChange={handleChange} value={optionValue}>
                    {options.map((item) => (
                        <option key={item.id} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
                </td>
                <td><input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc} value={totalPc}></input></td>
                <td><input type = "number" style={{width: "80px"}} ></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handlePresentSize} value={presentSize}></input></td>
                <td><input type = "number" min="1" max="5"         onChange={handleStockingDensity} value={stockingDensity}></input></td>
                <td><input type = "number" style={{width: "70px"}} onChange={handleTotalWeight} value={totalWeight}></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handleHarvestSize} ></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handlePresentBiomass} value={presentBiomass}></input></td>
            </tr>
    );
};

export default TrComponent;