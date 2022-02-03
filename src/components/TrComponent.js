import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


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
    const [fish, setFish] = useState('');

    const [isSaved, setIsSaved] = useState(false);


    const handleChange = ((e) => {
        console.log(parseInt(e.target.value.split('-')[1]));
        setOptionValue(parseInt(e.target.value.split('-')[1]));
        setFish(e.target.value.split('-')[0])
        props.ChangedFish(e.target.value.split('-')[0])
        props.ChangedFeedingLayer(e.target.value.split('-')[2]);
    });

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

  const saveRefData = () => {
    let refObj = {
      fish,
      totalPc,
      stockingSize,
      presentSize,
      stockingDensity,
      totalWeight,
      harvestSize,
      presentBiomass
    };
    props.ChangedSpeciesRefObj(refObj);
    setIsSaved(true);
  }

    useEffect(()=> {
      fetch('http://localhost:5000/species')
      .then(res=> res.json())
      .then(data =>{
        setSpecies(data);
        // props.ChangedFish(data[0].fish);
        // props.ChangedFeedingLayer(data[0].layer);
        setOptionValue(parseInt(data[0].oxygendemand))
        setFish(data[0].fish)
      })
      
      console.log(species);
    },[props, species]);

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
                {
                  isSaved ? fish : 
                  (
                    <select onChange={ handleChange }>
                        {species.map((item,index) => (
                            <option key={`${item._id}`} value={`${item.fish}-${item.oxygendemand}-${item.layer}`}>
                                {item.fish}
                            </option>
                        ))}
                    </select>
                  )
                }
               
              </td>
              <td>
                {
                  isSaved ? totalPc : <input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc} value={totalPc}></input>
                }
              </td>
              <td>
                {
                   isSaved ? stockingSize : <input type = "number" style={{width: "80px"}} onChange={handleStockingSize} value={stockingSize} ></input>
                }
              </td>
              
              <td>
                {
                  isSaved ? presentSize : <input type = "number" style={{width: "80px"}} onChange={handlePresentSize} value={presentSize}></input>
                }
              </td>
              <td>
                {
                  isSaved ? stockingDensity : <input type = "number" min="1" max="5" onChange={handleStockingDensity} value={stockingDensity}></input>
                }
              </td>
              <td>
                {
                  isSaved ? totalWeight :  <input type = "number" style={{width: "70px"}} onChange={handleTotalWeight} value={totalWeight}></input>
                }
              </td>
              <td>
                {
                  isSaved ? harvestSize : <input type = "number" style={{width: "80px"}} onChange={handleHarvestSize} value={harvestSize}></input>
                }
              </td>
              <td>
                {
                  isSaved ? presentBiomass : <input type = "number" style={{width: "80px"}} onChange={handlePresentBiomass} value={presentBiomass}></input>
                }
              </td>
              <td>
                {
                  isSaved ? <Button type = "submit" disabled  variant = "success" className = "mx-2" size = "sm" style = {{width: "100px"}}>Save</Button> : 
                  <Button type = "submit" onClick={saveRefData} variant = "success" className = "mx-2" size = "sm" style = {{width: "100px"}}>Save</Button>
                }

              </td>
          </tr>
    );
};

export default TrComponent;