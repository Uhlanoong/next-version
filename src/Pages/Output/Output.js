// import React, { useState } from 'react'
// // import './styles.css'

// const Output = () => {

//     const [formValues, setFormValues] = useState([{ name: "", email : ""}])

//     let handleChange = (i, e) => {
//         let newFormValues = [...formValues];
//         newFormValues[i][e.target.name] = e.target.value;
//         setFormValues(newFormValues);
//       }
    
//     let addFormFields = () => {
//         setFormValues([...formValues, { name: "", email: "" }])
//       }
    
//     let removeFormFields = (i) => {
//         let newFormValues = [...formValues];
//         newFormValues.splice(i, 1);
//         setFormValues(newFormValues)
//     }
    
//     let handleSubmit = (event) => {
//         event.preventDefault();
//         alert(JSON.stringify(formValues));
//     }

//     return (
//         <form  onSubmit={handleSubmit}>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Name</label>
//               <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
//               <label>Email</label>
//               <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
//               {
//                 index ? 
//                   <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
//                 : null
//               }
//             </div>
//           ))}
//           <div className="button-section">
//               <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
//               <button className="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     )
// }

// export default Output

// ** ------function component-------- **
import React, { useState } from "react";

const Output = () => {
  const [rows, setRows] = useState([{}]);
  const columnsArray = ["Total Pc", "Stk Size", "Psnt Size", "Stk Dnty", "Ttl Wt", "Hvst Size", "Psnt Biomass"]; // pass columns here dynamically

  const handleAddRow = () => {
    const item = {};
    setRows([...rows, item]);
  };

  const postResults = () => {
    console.log(rows); // there you go, do as you please
  };
  const handleRemoveSpecificRow = (idx) => {
    const tempRows = [...rows]; // to avoid  direct state mutation
    tempRows.splice(idx, 1);
    setRows(tempRows);
  };

  const updateState = (e) => {
    let prope = e.target.attributes.column.value; // the custom column attribute
    let index = e.target.attributes.index.value; // index of state array -rows
    let fieldValue = e.target.value; // value

    const tempRows = [...rows]; // avoid direct state mutation
    const tempObj = rows[index]; // copy state object at index to a temporary object
    tempObj[prope] = fieldValue; // modify temporary object

    // return object to rows` clone
    tempRows[index] = tempObj;
    setRows(tempRows); // update state  
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
                          type="text"
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

// ** ---------class component-------- **
// import React from "react";
// class Output extends React.Component {
//     state = {
//       rows: []
//     };
//     handleChange = idx => e => {
//       const { name, value } = e.target;
//       const rows = [...this.state.rows];
//       rows[idx] = {
//         [name]: value
//       };
//       this.setState({
//         rows
//       });
//     };
//     handleAddRow = () => {
//       const item = {
//         name: "",
//         mobile: ""
//       };
//       this.setState({
//         rows: [...this.state.rows, item]
//       });
//     };
//     handleRemoveRow = () => {
//       this.setState({
//         rows: this.state.rows.slice(0, -1)
//       });
//     };
//     render() {
//       return (
//         <div>
//           <div className="container">
//             <div className="row clearfix">
//               <div className="col-md-12 column">
//                 <table
//                   className="table table-bordered table-hover"
//                   id="tab_logic"
//                 >
//                   <thead>
//                     <tr>
//                       <th className="text-center"> # </th>
//                       <th className="text-center"> Name </th>
//                       <th className="text-center"> Mobile </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {this.state.rows.map((item, idx) => (
//                       <tr id="addr0" key={idx}>
//                         <td>{idx}</td>
//                         <td>
//                           <input
//                             type="text"
//                             name="name"
//                             value={this.state.rows[idx].name}
//                             onChange={this.handleChange(idx)}
//                             className="form-control"
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type="text"
//                             name="mobile"
//                             value={this.state.rows[idx].mobile}
//                             onChange={this.handleChange(idx)}
//                             className="form-control"
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <button
//                   onClick={this.handleAddRow}
//                   className="btn btn-default pull-left"
//                 >
//                   Add Row
//                 </button>
//                 <button
//                   onClick={this.handleRemoveRow}
//                   className="pull-right btn btn-default"
//                 >
//                   Delete Row
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

// export default Output;