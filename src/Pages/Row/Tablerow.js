import React from 'react';
// import { useCallback } from 'react';
import { useState } from 'react';


const Tablerow = () => {
    // eslint-disable-next-line no-unused-vars
    const [options, setOptions] = useState([
        { id: '1', name: "Select…", value1: 0,},
        { id: '2', name: "Rui", value2: 3000,},
        { id: '3', name: "Catla", value3: 3000,},
        { id: '4', name: "Carpio", value4: 3000,},
        { id: '5', name: "Tilapia", value5: 1750,},
        { id: '6', name: "Mrigel", value6: 3000,},
        { id: '7', name: "Pabda", value7: 3500,},
        {id: '8',name: "Pangasius",},
        {id: '9', name: "Koi",value9: 750,},
      ]);

      const [value, setValue] = useState("");

      const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
      };
    return (
        <div>
            <tr>
            <td>
                <select onChange={(e)=>{handleChange(e)}} value={value}>
                    {options.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.name}
                    </option>
                    ))}
                </select>

            </td>
                {/* <td><input type = "number" maxLength = "5" size = "5" min="1" max="5" onChange={handleTotalPc}></input></td>
                <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}} onChange={handlePresentSize}></input></td>
                        <td><input type = "number" min="1" max="5" onChange= {handleStockingDensity} value={stockingDensity}></input></td>
                        <td>{<input type = "number" style={{width: "70px"}}
                        onChange={handleTotalWeight} value={totalWeight}></input>}</td>
                        <td><input type = "number" style={{width: "80px"}} ></input></td>
                        <td><input type = "number" style={{width: "80px"}}onChange={handlePresentBiomass} value={presentBiomass}></input></td> */}
            </tr>
        </div>
    );
};

export default Tablerow;