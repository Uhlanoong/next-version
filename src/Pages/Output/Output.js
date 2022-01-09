
// ** ------function component-------- **
import React, { useState } from "react";

const Output = () => {
  const [rows, setRows] = useState([{}]);
  const columnsArray = ["Species","Total Pc", "Stk Size", "Psnt Size", "Stk Dnty", "Ttl Wt", "Hvst Size", "Psnt Biomass"];

  const handleAddRow = () => {
    const item = {};
    setRows([...rows, item]);
  };

  const postResults = () => {
    console.log(rows); 
  };
  const handleRemoveSpecificRow = (idx) => {
    const tempRows = [...rows];
    tempRows.splice(idx, 1);
    setRows(tempRows);
  };

  const updateState = (e) => {
    let prope = e.target.attributes.column.value;
    let index = e.target.attributes.index.value;
    let fieldValue = e.target.value;

    const tempRows = [...rows]; 
    const tempObj = rows[index];
    tempObj[prope] = fieldValue;

    tempRows[index] = tempObj;
    setRows(tempRows); 
  };

  return (
    <div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> # </th>
                  {columnsArray.map((column, index) => (
                    <th className="text-center" key={index}>
                      {column}
                    </th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    {columnsArray.map((column, index) => (
                      
                      <td key={index}>
                        <input
                          type="number"
                          column={column}
                          value={rows[idx][column]}
                          index={idx}
                          className="form-control"
                          onChange={(e) => updateState(e)}                             
                          
                        />
                      </td>

                    ))}

                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemoveSpecificRow(idx)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddRow} className="btn btn-primary">
              Add Row
            </button>
            <button
              onClick={postResults}
              className="btn btn-success float-right"
            >
              Save Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;

