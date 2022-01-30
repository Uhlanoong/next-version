// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { useEffect } from 'react';

// const SaveData = () => {
//     const [feedingRateData, setFeedingRateData] = useState([]);
//     const [speciesReferenceObj, setSpeciesReferenceObj] = useState([]);
//     const [volume, setVolume] = useState('');
//     const [production, setProduction] = useState('');
//     const [presentBiomass, setPresentBiomass] = useState('');
//     const [oxygendemand, setOxygenDemand] = useState(0);
//     const [harvestOxygenDemand, setHarvestOxygenDemand] = useState(0);
//     const [totalOxygenDemand, setTotalOxygenDemand] = useState(0);
//     const [totalHarvestOxygenDemand, setTotalHarvestOxygenDemand] = useState(0);
//     const [stockingDensity, setStockingDensity] = useState(null);
//     const [feedingLayer, setFeedingLayer] = useState('');
//     const handleSaveData = (obj) =>{
//       const resObj = {
//           ...obj,
//           production,
//           volume,
//           stockingDensity,
//           presentBiomass,
//           feedingLayer,
//           oxygendemand,
//           harvestOxygenDemand
//       };
  
//         fetch('http://localhost:5000/species-reference',{
//             method : 'POST',
//             headers : {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(resObj)
//         })
//     }

//     useEffect(()=>{
//         fetch('http://localhost:5000/species-reference')
//         .then(res=> res.json())
//         .then(data =>{
//             setSpeciesReferenceObj(data);
//         })

//         fetch('http://localhost:5000/feed')
//         .then(res=> res.json())
//         .then(data =>{
//             setFeedingRateData(data);
//         })
//     },[])

//     console.log(feedingRateData);

//     useEffect(()=>{
//         let oxygendemandSum = 0;
//         let harvestOxygenDemandSum = 0;
//         for(var i = 0; i < speciesReferenceObj.length ; i++){
//             oxygendemandSum += speciesReferenceObj[i].oxygendemand;
//             harvestOxygenDemandSum += speciesReferenceObj[i].harvestOxygenDemand;
//         }
//         setTotalOxygenDemand(oxygendemandSum);
//         setTotalHarvestOxygenDemand(harvestOxygenDemandSum);

//     },[speciesReferenceObj])
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default SaveData;
    