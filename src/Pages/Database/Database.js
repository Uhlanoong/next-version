import React, { useEffect, useState } from 'react';
import UpdateFeedingRate from '../../components/UpdateFeedingRate';
import UpdateGrowthRate from '../../components/UpdateGrowthRate';
import UpdateSpecies from '../../components/UpdateSpecies';

const Database = () => {
    const [species, setSpecies] = useState([]);
    const [growth, setGrowth] = useState([]);
    const [feed, setFeed] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:5000/species')
        .then(res=> res.json())
        .then(data =>setSpecies(data))
    },[]);
    
     // Growth State
     useEffect(() => {
         fetch('http://localhost:5000/database')
         .then(res=>res.json())
         .then(data =>setGrowth(data))
     }, []);
 
     // Feed State
     useEffect(() => {
         fetch('http://localhost:5000/feed')
         .then(res=>res.json())
         .then(data =>setFeed(data))
     }, []);
    
    return (
        <div>
            <h2>Species available: {species.length}</h2>
            <ul>
                {species.map((species,index)=><UpdateSpecies key={index} species= {species}/>)}
            </ul>

            <br/>
            <h2>Daily Growth : {growth.length}</h2>
            <ul>
                {growth.map((data,index)=><UpdateGrowthRate key={index} growth= {data}/>)}
            </ul>

            <br/>
            <h2>Feed Rate: {feed.length}</h2>
            <ul>
               {feed.map((data,index)=><UpdateFeedingRate key={index} feed= {data}/>)} 
            </ul>
        </div>
    );
};

export default Database;