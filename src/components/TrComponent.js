import React, { useEffect, useState, useCallback } from 'react';


const TrComponent = (props) => {
    const [species, setSpecies] = useState([]);
    const [optionValue, setOptionValue] = useState(0);
    const [totalPc, setTotalPc] = useState(0);
    const [stockingSize, setStockingSize] = useState(0);
    const [presentSize, setPresentSize] = useState(0);
    const [stockingDensity, setStockingDensity] = useState('');
    const [totalWeight, setTotalWeight] = useState('')
    const [harvestSize, setHarvestSize] = useState(0);
    const [presentBiomass, setPresentBiomass] = useState('');


    const handleChange = useCallback((e) => {
        console.log(parseInt(e.target.value.split('-')[1]));
        setOptionValue(parseInt(e.target.value.split('-')[1]));
        props.ChangedFeedingLayer(e.target.value.split('-')[2]);
    }, []);

    const handleTotalPc = (e)=>{
      setTotalPc(e.target.value);
    }
    const handleStockingSize = (e)=>{
        setStockingSize(e.target.value);
    }
    const handlePresentSize = (e)=>{
      setPresentSize(e.target.value);
  }
    const handleStockingDensity = (e)=>{
        setStockingDensity(e.target.value);
    }
    const handleTotalWeight = (e)=>{
      setTotalWeight(e.target.value);
  }
    const handleHarvestSize = (e) => {
      setHarvestSize(e.target.value);
    }
    const handlePresentBiomass = (e)=>{
      setPresentBiomass(e.target.value)
  }

    useEffect(()=> {
      fetch('http://localhost:5000/species')
      .then(res=> res.json())
      .then(data =>setSpecies(data))

      console.log(species);
    },[]);

    useEffect(() => {
        let newTotalWeight = (totalPc * presentSize) /1000
        setTotalWeight(newTotalWeight);
        props.ChangedOxyzenDemand(newTotalWeight * optionValue);
    }, [totalPc, presentSize, optionValue, props]);

    useEffect(() => {
      let harvestTotalWeight = (totalPc * harvestSize) /1000;
       props.ChangedHarvestOxygenDemand(harvestTotalWeight * optionValue); 
    }, [totalPc, harvestSize, optionValue, props])
    

    return (
            <tr>
                <td>{props.rowId}</td>
                <td>
                {/* (e) => setOptionValue(e.target.value) */}
                <select onChange={ handleChange } value={optionValue}>
                    {species.map((item,index) => (
                        <option key={`${item._id}-${index}`} value={`${item.fish}-${item.oxygendemand}-${item.layer}`}>
                            {item.fish}
                        </option>
                    ))}
                </select>
                </td>
                <td><input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc} value={totalPc}></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handleStockingSize} value={stockingSize} ></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handlePresentSize} value={presentSize}></input></td>
                <td><input type = "number" min="1" max="5"         onChange={handleStockingDensity} value={stockingDensity}></input></td>
                <td><input type = "number" style={{width: "70px"}} onChange={handleTotalWeight} value={totalWeight}></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handleHarvestSize} value={harvestSize}></input></td>
                <td><input type = "number" style={{width: "80px"}} onChange={handlePresentBiomass} value={presentBiomass}></input></td>
            </tr>
    );
};

export default TrComponent;