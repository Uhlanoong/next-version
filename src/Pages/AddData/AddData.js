import React, { useRef } from 'react';

const AddData = () => {
    const fishRef = useRef();
    const oxygendemandRef = useRef();
    const fishtypeRef = useRef();
    const bodyweightRef = useRef();
    const ageRef = useRef();
    const feedrateRef = useRef();
    const feedtypeRef = useRef();
    const frequencyRef = useRef();

    const handleAddData = (e) =>{
        const fish = fishRef.current.value;
        const oxygendemand = oxygendemandRef.current.value
        const newSpecies = {fish, oxygendemand}
        
        fetch('http://localhost:5000/species',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpecies)
        })

        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the data')
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    //  Handling of Daily Growth
    const handleAddGrowthData = (e) =>{
        const fishtype = fishtypeRef.current.value;
        const bodyweight = bodyweightRef.current.value
        const age = ageRef.current.value
        const newData = {fishtype, bodyweight, age}
        
        fetch('http://localhost:5000/database',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })

        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the data')
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    // Handling of Feed Size

    const handleAddFeedData = (e) =>{
        const fishtype = fishtypeRef.current.value;
        const bodyweight = bodyweightRef.current.value
        const feedtype = feedtypeRef.current.value
        const feedrate = feedrateRef.current.value
        const frequency = frequencyRef.current.value
        const newFeed = {fishtype,feedtype, bodyweight, feedrate,frequency}
        
        fetch('http://localhost:5000/feed',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFeed)
        })

        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the data')
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleAddData}>
                <input type="text" ref ={fishRef}/>
                <input type= "number" ref ={oxygendemandRef}/>
                <input type= "submit" value= "Add"/>
            </form>
            <br/>
            <form onSubmit={handleAddGrowthData}>
                <input type="text" ref ={fishtypeRef}/>
                <input type= "number" ref ={ageRef}/>
                <input type= "number" ref ={bodyweightRef}/>
                <input type= "submit" value= "Add"/>
            </form>
            <br/>
            <form onSubmit={handleAddFeedData}>
                <input type="text" ref ={fishtypeRef}/>
                <input type="text" ref ={feedtypeRef}/>
                <input type= "number" ref ={bodyweightRef}/>
                <input type= "number" ref ={feedrateRef}/>
                <input type= "number" ref ={frequencyRef}/>
                <input type= "submit" value= "Add"/>
            </form>
        </div>
    ); 
};

export default AddData;