/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const TrComponent = (props) => {
    const [species, setSpecies] = useState([]);
    const [optionValue, setOptionValue] = useState(0);
    const [totalPc, setTotalPc] = useState(0);
    const [stockingSize, setStockingSize] = useState(0);
    const [presentSize, setPresentSize] = useState(0);
    const [stockingDensity, setStockingDensity] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0)
    const [harvestSize, setHarvestSize] = useState(0);
    const [presentBiomass, setPresentBiomass] = useState(0);
    const [fish, setFish] = useState('');
    const [standradSize, setStandardSize] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [waterArea, setWaterArea] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const [growth, setGrowth] = useState([]);
    const [age, setAge] = useState(0);


    const handleChange = ((e) => {
        setOptionValue(parseInt(e.target.value.split('-')[1]));
        setFish(e.target.value.split('-')[0])
        props.ChangedFish(e.target.value.split('-')[0])
        props.ChangedFeedingLayer(e.target.value.split('-')[2]);
        localStorage.setItem('fish',e.target.value.split('-')[0]);
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
        let water = localStorage.getItem('water');
        if(water){
          let newStockingDensity = totalPc / parseInt(water);
          setStockingDensity(newStockingDensity)
        }
    }
    const handleTotalWeight = (e)=>{
      setTotalWeight(e.target.value);
  }
    const handleHarvestSize = (e) => {
      setHarvestSize(e.target.value);
    }
    const handlePresentBiomass = (e)=>{
      let water = localStorage.getItem('water');
      if(water){
        let newPresentBiomass = totalWeight /parseInt(water);
        setPresentBiomass(newPresentBiomass)
      }
    }

    useEffect((e) => {
      let water = localStorage.getItem('water');
      if(water){
        let newPresentBiomass = totalWeight /parseInt(water);
        setPresentBiomass(newPresentBiomass);

        let newStockingDensity = totalPc / parseInt(water);
        setStockingDensity(newStockingDensity)
      }
    },[totalPc,totalWeight])

  const saveRefData = () => {
   
    let refObj = {
      fish,
      totalPc,
      stockingSize,
      presentSize,
      stockingDensity,
      totalWeight,
      harvestSize,
      presentBiomass,
      standradSize
    };
    props.ChangedSpeciesRefObj(refObj);
    setIsSaved(true);
  }

  const getRefWeight = (fish,age) => {
    let filteredData = growth.filter(item => item.fishtype === fish);  
    let ageArr = [];
    filteredData.forEach((item)=>{
      ageArr.push(parseInt(item.age))
    });
    if(ageArr.length){
      let goal = age;
      let output = ageArr.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
      let result = filteredData.find((item) => parseInt(item.age) === output);
      console.log(result);
      if(result){
        return parseInt(result.bodyweight);
      }else{
        return '0'
      }
    }
   
    return '0';
}

    useEffect(()=> {
      fetch('http://localhost:5000/species')
      .then(res=> res.json())
      .then(data =>{
        setSpecies(data);
      })

      fetch('http://localhost:5000/database')
      .then(res=>res.json())
      .then(data =>setGrowth(data))

      setAge(localStorage.getItem('age'));
      setFish(localStorage.getItem('fish'));
      
    },[props]);

    useEffect(()=>{
      let result =  getRefWeight(fish,age);
      if(result){
        setStandardSize(result);
      }
    },[fish, age])

    useEffect(() => {
        let newTotalWeight = (totalPc * presentSize) /1000
        setTotalWeight(newTotalWeight);
        props.ChangedOxyzenDemand(newTotalWeight * optionValue);
    }, [totalPc, presentSize, optionValue, props]);

    useEffect(() => {
      let harvestTotalWeight = (totalPc * harvestSize) /1000;
       props.ChangedHarvestOxygenDemand(harvestTotalWeight * optionValue); 
    }, [totalPc, harvestSize, optionValue, props])

    useEffect(() => {
      if(waterArea){
        let newStockingDensity = totalPc / waterArea
        setStockingDensity(newStockingDensity)
      }
   }, [totalPc, waterArea]);
    
    useEffect(() => {
      if(waterArea){
        let newPresentBiomass = totalWeight /waterArea
        setPresentBiomass(newPresentBiomass)
      }
  }, [totalWeight, waterArea]);
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
                   isSaved ? stockingSize : <input type = "number" style={{width: "60px"}} onChange={handleStockingSize} value={stockingSize} ></input>
                }
              </td>
              
              <td>
                {
                  isSaved ? presentSize : <input type = "number" style={{width: "60px"}} onChange={handlePresentSize} value={presentSize}></input>
                }
              </td>
              <td>
                {
                  isSaved ? standradSize : <input type= "number" style={{width:"60px"}} readOnly value={standradSize}/>
                }
              </td>
              <td>
                {
                  isSaved ? stockingDensity : <input type = "number" style={{width: "60px"}} onChange={handleStockingDensity} value={stockingDensity}></input>
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
                  isSaved ? presentBiomass : <input type = "number" style={{width: "60px"}} onChange={handlePresentBiomass} value={presentBiomass}></input>
                }
              </td>
              <td>
                {
                  isSaved ? <Button type = "submit" disabled  variant = "success" className = "mx-2" size = "sm" style = {{width: "60px"}}>Save</Button> : 
                  <Button type = "submit" onClick={saveRefData} variant = "success" className = "mx-2" size = "sm" style = {{width: "60px"}}>Save</Button>
                }

              </td>
          </tr>
    );
};

export default TrComponent;