import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Update = (props) => {
    const [isUpdateState, setIsUpdateState] = useState(false);
    const [tempFish, setTempFish] = useState('')
    const [tempOxygenDemand, setTempOxygenDemand] = useState(0);
    const [tempFishType, setTempFishType] = useState('')
    const [tempAge, setTempAge] = useState(0);
    const [tempBodyWeight, setTempBodyWeight] = useState(0);
    const [tempFeedType, setTempFeedType] = useState('');
    const [tempFeedRate, setTempFeedRate] = useState(0);
    const [tempFrequency, setTempFrequency] = useState(0);
    const [tempId, setTempId] = useState('')

    const [species, setSpecies] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/species')
        .then(res=> res.json())
        .then(data =>setSpecies(data))
    },[]);
    
    // Growth State
    const [growth, setGrowth] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/database')
        .then(res=>res.json())
        .then(data =>setGrowth(data))
    }, []);

    // Feed State
    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/feed')
        .then(res=>res.json())
        .then(data =>setFeed(data))
    }, []);

    //Delete a data for Species
    const handleDeleteData = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed){
          const url = `http://localhost:5000/species/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res=> res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('Successfully deleted the data')
                    const remainingData = species.filter(species=>species._id !== id)
                    setSpecies(remainingData);
                    window.location.reload()
                }
            })
        } 
    }
    //Delete a data for Daily Growth
    const handleDeleteGrowthData = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed){
          const url = `http://localhost:5000/database/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res=> res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('Successfully deleted the data')
                    const remainingData = growth.filter(fishtype=>fishtype._id !== id)
                    setGrowth(remainingData);
                    window.location.reload()
                }
            })
        }
         
    //Delete a data for Feed Size
    const handleDeleteFeedData = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed){
          const url = `http://localhost:5000/feed/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res=> res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('Successfully deleted the data')
                    const remainingData = feed.filter(fishtype=>fishtype._id !== id)
                    setFeed(remainingData);
                    window.location.reload()
                }
            })
        } 
  
      }

      const updateSpecies =()=>{
        
        const url = `http://localhost:5000/species/${tempId}/${tempFish}/${tempOxygenDemand}`;
          fetch(url, {
              method: 'PUT'
          })
          .then(res=> res.json())
            .then(data =>{
                
                if(data.acknowledged){
                    alert('Successfully updated the data')
                    window.location.reload()
                }
            })
      }
      const updateGrowth =()=>{
        
        const url = `http://localhost:5000/database/${tempId}/${tempFishType}/${tempAge}/${tempBodyWeight}`;
          fetch(url, {
              method: 'PUT'
          })
          .then(res=> res.json())
            .then(data =>{
                
                if(data.acknowledged){
                    alert('Successfully updated the data')
                    window.location.reload()
                }
            })
      }
      const updateFeed =()=>{
        const url = `http://localhost:5000/feed/${tempId}/${tempFishType}/${tempFeedType}/${tempBodyWeight}/${tempFeedRate}/${tempFrequency}`;
          fetch(url, {
              method: 'PUT'
          })
          .then(res=> res.json())
            .then(data =>{
                
                if(data.acknowledged){
                    alert('Successfully updated the data')
                    window.location.reload()
                }
            })
      }
      
      // Handle Update Species
        const handleUpdateSpecies = ()=>{
        setTempId(props.species._id)
        setIsUpdateState(true);
        setTempFish(props.species.fish);
        setTempOxygenDemand(props.species.oxygendemand);
        
      }
      // Handle Update Growth
        const handleUpdateGrowth = ()=>{
        setTempId(props.growth._id)
        setIsUpdateState(true);
        setTempFishType(props.growth.fishtype);
        setTempAge(props.growth.age);
        setTempBodyWeight(props.growth.bodyweight);
        
      }
      // Handle Update Feed
        const handleUpdateFeed = ()=>{
        setTempId(props.feed._id)
        setIsUpdateState(true);
        setTempFishType(props.feed.fishtype);
        setTempFeedType(props.feed.feedtype);
        setTempFeedRate(props.feed.feedrate);
        setTempFrequency(props.feed.frequency);
        setTempBodyWeight(props.feed.bodyweight);
        
      }

    return (
        <div>
            <li>
                {props.species.fish} ::{props.species.oxygendemand}
                
                <button onClick={()=>handleUpdateSpecies(props.species._id)}>Update</button>
                <button onClick={()=>handleDeleteData(props.species._id)}>Delete</button>
            </li>
            <li>
                {props.growth.fishtype} ::{props.growth.age} :: {props.growth.bodyweight}
                
                <button onClick={()=>handleUpdateGrowth(props.growth._id)}>Update</button>
                <button onClick={()=>handleDeleteGrowthData(props.growth._id)}>Delete</button>
            </li>
            <li>
                {props.feed.fishtype} ::{props.feed.feedtype} :: {props.feed.bodyweight}:: {props.feed.feedrate} :: {props.feed.frequency}
                
                <button onClick={()=>handleUpdateFeed(props.feed._id)}>Update</button>
                <button onClick={()=>handleDeleteFeedData(props.feed._id)}>Delete</button>
            </li>

            {
            isUpdateState && 
            <div>
                <input type="text" onChange={(e)=>{setTempFish(e.target.value)}} value={tempFish}/>
                <input type="number" onChange={(e)=>{setTempOxygenDemand(e.target.value)}} value={tempOxygenDemand}/>
                <button onClick={()=>updateSpecies(tempId)}>Update</button>
            </div>
            }
            {
            isUpdateState && 
            <div>
                <input type="text" onChange={(e)=>{setTempFishType(e.target.value)}} value={tempFishType}/>
                <input type="number" onChange={(e)=>{setTempAge(e.target.value)}} value={tempAge}/>
                <input type="number" onChange={(e)=>{setTempBodyWeight(e.target.value)}} value={tempBodyWeight}/>
                <button onClick={()=>updateGrowth(tempId)}>Update</button>
            </div>
            }
            {
            isUpdateState && 
            <div>
                <input type="text" onChange={(e)=>{setTempFishType(e.target.value)}} value={tempFishType}/>
                <input type="text" onChange={(e)=>{setTempFeedType(e.target.value)}} value={tempFeedType}/>
                <input type="number" onChange={(e)=>{setTempBodyWeight(e.target.value)}} value={tempBodyWeight}/>
                <input type="number" onChange={(e)=>{setTempFeedRate(e.target.value)}} value={tempFeedRate}/>
                <input type="number" onChange={(e)=>{setTempFrequency(e.target.value)}} value={tempFrequency}/>
                <button onClick={()=>updateFeed(tempId)}>Update</button>
            </div>
            }
        </div>
    );
};

}

export default Update;