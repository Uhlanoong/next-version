import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const UpdateSpecies = (props) => {
    const [isUpdateState, setIsUpdateState] = useState(false);
    const [tempFish, setTempFish] = useState('')
    const [tempOxygenDemand, setTempOxygenDemand] = useState(0);
    const [tempLayer, setTempLayer] = useState('');
    const [tempId, setTempId] = useState('')

    const [species, setSpecies] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/species')
        .then(res=> res.json())
        .then(data =>setSpecies(data))
    },[]);
    

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
      // Handle Update Species
        const handleUpdateSpecies = ()=>{
        setTempId(props.species._id)
        setIsUpdateState(true);
        setTempFish(props.species.fish);
        setTempOxygenDemand(props.species.oxygendemand);
        
      }

    return (
        <div>
            <>
                <input value = {props.species.fish}/>
                <input value = {props.species.oxygendemand} />
                <input value = {props.species.layer}/>     
                <Button onClick={()=>handleUpdateSpecies(props.species._id)} variant = "secondary"className = "mx-2" size = "sm" style = {{width: "100px"}}>Update</Button>
                <Button onClick={()=>handleDeleteData(props.species._id)}variant = "secondary" className = "mx-2" size = "sm" style = {{width: "100px"}}>Delete</Button>
            </>

            {
            isUpdateState && 
            <div>
                <input type="text" onChange={(e)=>{setTempFish(e.target.value)}} value={tempFish}/>
                <input type="number" onChange={(e)=>{setTempOxygenDemand(e.target.value)}} value={tempOxygenDemand}/>
                <input type="text" onChange={(e)=>{setTempLayer(e.target.value)}} value={tempLayer}/>
                <button onClick={()=>updateSpecies(tempId)}>Update</button>
            </div>
            }
        </div>
    );
};



export default UpdateSpecies;