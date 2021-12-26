import React, { useEffect, useState } from 'react';

const Data = () => {
    const [specieses, setSpecieses] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/specieses')
        .then(res=> res.json())
        .then(data => setSpecieses(data))
    },[])
    return (
        <div>
            <h2>Species Available: {specieses.length}</h2>
            <ul>
            {
            specieses.map(species =><li key = {species._id}>{species.species}: :{species.oxygenConsumption}
            </li>)
            }
            </ul>
        </div>
    );
};

export default Data;