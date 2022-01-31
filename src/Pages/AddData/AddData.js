import React, { useRef } from 'react';

const AddData = () => {
    const fishRef = useRef();
    const oxygendemandRef = useRef();
    const layerRef = useRef();
    const fishtypeRef = useRef();
    const bodyweightRef = useRef();
    const ageRef = useRef();
    const feedfishtypeRef = useRef();
    const feedbodyweightRef = useRef();
    const feedrateRef = useRef();
    const feedtypeRef = useRef();
    const frequencyRef = useRef();

    const handleAddData = (e) =>{
        const fish = fishRef.current.value;
        const oxygendemand = oxygendemandRef.current.value
        const layer = layerRef.current.value
        const newSpecies = {fish, oxygendemand, layer}
        
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
        e.preventDefault();
        const fishtype = fishtypeRef.current.value;
        const bodyweight = bodyweightRef.current.value
        const age = ageRef.current.value
        const newData = {fishtype, bodyweight, age};

        console.log(newData);
        
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
    }

    // Handling of Feed Size

    const handleAddFeedData = (e) =>{
        const fishtype = feedfishtypeRef.current.value;
        const bodyweight = feedbodyweightRef.current.value
        const feedtype = feedtypeRef.current.value
        const feedrate = feedrateRef.current.value
        const frequency = frequencyRef.current.value
        const newFeed = {fishtype,feedtype, bodyweight, feedrate,frequency}

        console.log(newFeed);
        
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
        <div className='my-5 py-3'>
            <h4 className='text-start mx-5'>Species Data</h4>
            <form onSubmit={handleAddData}>
            <div class="input-group mb-3 px-5">
                <input class="form-control" type="text" ref ={fishRef} placeholder='Species Name'/>
                <input class="form-control" type= "number" ref ={oxygendemandRef} placeholder='Oxygen Demand'/>
                <input class="form-control" type= "text" ref ={layerRef} placeholder='Layer Type'/>
                <button class="btn btn-outline-primary" type="submit" value="Add">Add</button>
                
            </div>    
            </form>
            <br/>
            <h4 className='text-start mx-5'>Daily Growth Data</h4>
            <form onSubmit={handleAddGrowthData}>
            <div class="input-group mb-3 px-5">
                <input class="form-control" type="text" ref={fishtypeRef} placeholder='Fish Type'/>
                <input class="form-control" type= "number" ref={ageRef} placeholder='Age'/>
                <input class="form-control" type= "text" ref={bodyweightRef} placeholder='Body weight'/>
                <button class="btn btn-outline-primary" type="submit" value="Add">Add</button>
            </div>    
            </form>
            <br/>
            <h4 className='text-start mx-5'>Feed Table Data</h4>
            <form onSubmit={handleAddFeedData}>
            <div class="input-group mb-3 px-5">
               <input class="form-control" type="text" ref ={feedfishtypeRef} placeholder='Fish Type'/>
                <input class="form-control" type="text" ref ={feedtypeRef} placeholder='Feed type'/>
                <input class="form-control" type= "text" ref ={feedbodyweightRef} placeholder=' Feed Body weight'/>
                <input class="form-control" type= "text" ref ={feedrateRef} placeholder='Feed Rate'/>
                <input class="form-control" type= "number" ref ={frequencyRef} placeholder='Frequency'/>
                <button class="btn btn-outline-primary" type="submit" value="Add">Add</button>
            </div>
                
            </form>
        </div>
    ); 
};

export default AddData;