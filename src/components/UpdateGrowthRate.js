import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateGrowthRate = (props) => {
    const [isUpdateState, setIsUpdateState] = useState(false);
    const [tempFishType, setTempFishType] = useState('')
    const [tempAge, setTempAge] = useState(0);
    const [tempBodyWeight, setTempBodyWeight] = useState(0);
    const [tempId, setTempId] = useState('')

    // Growth State
    useEffect(() => {
        console.log(props);
    }, []);

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
                    window.location.reload()
                }
            })
        }
    }
      const updateGrowth =()=>{
        const url = `http://localhost:5000/database/${tempId}/${tempFishType}/${tempAge}/${tempBodyWeight}`;
        console.log(url);
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
      
      
   
      // Handle Update Growth
    const handleUpdateGrowth = ()=>{
        setTempId(props.growth._id)
        setIsUpdateState(true);
        setTempFishType(props.growth.fishtype);
        setTempAge(props.growth.age);
        setTempBodyWeight(props.growth.bodyweight);
    }
   

    return (
        <div>
            <li>
                {props.growth.fishtype} :: {props.growth.age} :: {props.growth.bodyweight}
                <button onClick={()=>handleUpdateGrowth(props.growth._id)}>Update</button>
                <button onClick={()=>handleDeleteGrowthData(props.growth._id)}>Delete</button>
            </li>

            {
              isUpdateState && 
                <div>
                    <input type="text" onChange={(e)=>{setTempFishType(e.target.value)}} value={tempFishType} placeholder='Fish Type'/>
                    <input type="number" onChange={(e)=>{setTempAge(e.target.value)}} value={tempAge} placeholder='Fish Age'/>
                    <input type="number" onChange={(e)=>{setTempBodyWeight(e.target.value)}} value={tempBodyWeight} placeholder='Fish Body Weight'/>
                    <button onClick={()=>{updateGrowth()}}>Update</button>
                </div>
            }
        </div>
    );
};



export default UpdateGrowthRate;