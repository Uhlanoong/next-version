
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateFeedingRate = (props) => {
    const [isUpdateState, setIsUpdateState] = useState(false);
    // const [tempFish, setTempFish] = useState('')
    // const [tempOxygenDemand, setTempOxygenDemand] = useState(0);
    const [tempFishType, setTempFishType] = useState('')
    const [tempBodyWeight, setTempBodyWeight] = useState(0);
    const [tempFeedType, setTempFeedType] = useState('');
    const [tempFeedRate, setTempFeedRate] = useState(0);
    const [tempFrequency, setTempFrequency] = useState(0);
    const [tempId, setTempId] = useState('')


    // Feed State
    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/feed')
        .then(res=>res.json())
        .then(data =>setFeed(data))
    }, []);

       
    // Delete a data for Feed Size
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
            <>
                <input value = {props.feed.fishtype}/>
                <input value = {props.feed.feedtype} />
                <input value = {props.feed.bodyweight}/>
                <input value = {props.feed.feedrate}/>
                <input value = {props.feed.frequency}/>
                <button onClick={()=>handleUpdateFeed(props.feed._id)}
                variant = "secondary" className = "mx-2" size = "sm" style = {{width: "100px"}}>Update</button>
                <button onClick={()=>handleDeleteFeedData(props.feed._id)}variant = "secondary" className = "mx-2" size = "sm" style = {{width: "100px"}}>Delete</button>
            </>
            {
               isUpdateState && 
                <div>
                    <input type="text" onChange={(e)=>{setTempFishType(e.target.value)}} value={tempFishType}/>
                    <input type="text" onChange={(e)=>{setTempFeedType(e.target.value)}} value={tempFeedType}/>
                    <input type="number" onChange={(e)=>{setTempBodyWeight(e.target.value)}} value={tempBodyWeight}/>
                    <input type="text" onChange={(e)=>{setTempFeedRate(e.target.value)}} value={tempFeedRate}/>
                    <input type="number" onChange={(e)=>{setTempFrequency(e.target.value)}} value={tempFrequency}/>
                    <button onClick={()=>updateFeed()}>Update</button>
                </div>
            }
        </div>
    );
};



export default UpdateFeedingRate;