import React, { useEffect, useState } from 'react';
import Update from '../../components/Update';

const Database = () => {
    const [species, setSpecies] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/database')
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
    
    return (
        <div>
            <h2>Species available: {species.length}</h2>
            <ul>
                {species.map((species,index)=><Update key={index} species= {species}/>)}
            </ul>

            <br/>
            <h2>Daily Growth : {growth.length}</h2>

            <br/>
            <h2>Feed Rate: {feed.length}</h2>
        </div>
    );
};

export default Database;