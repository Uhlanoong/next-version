import React, { PureComponent, Fragment } from 'react';

class Stackoverflow extends PureComponent {
  state = {
    options: [
      {
        name: 'Select…',
        value: null,
      },
      {
        name: 'Rui',
        value: 3000,
      },
      {
        name: 'Catla',
        value: 3000,
      },
      {
        name: 'Carpio',
        value: 3000,
      },
      {
        name: 'Tilapia',
        value: 1750,
      },
      {
        name: 'Mrigel',
        value: 3000,
      },
      {
        name: 'Pabda',
        value: 3500,
      },
      {
        name: 'Koi',
        value: 750,
      },
    ],
    value: '?',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { options, value } = this.state;

    return (
      <Fragment>
        <select onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <p>Oxygen Demand: {value}</p>
      </Fragment>
    );
  }
}
export default Stackoverflow;

// import React, { useState } from 'react';

// const Stackoverflow = () => {
//     const [options, setOptions] = useState([
//         {
//           name: 'Select…',
//           value: null,
//         },
//         {
//           name: 'Rui',
//           value: 3000,
//         },
//         {
//           name: 'Catla',
//           value: 3000,
//         },
//         {
//           name: 'Carpio',
//           value: 3000,
//         },
//         {
//           name: 'Tilapia',
//           value: 1750,
//         },
//         {
//           name: 'Mrigel',
//           value: 3000,
//         },
//         {
//           name: 'Pabda',
//           value: 3500,
//         },
//         {
//           name: 'Koi',
//           value: 750,
//         },
//       ])
//     const [value, setValue] = useState( [
//               {
//                 name: 'Select…',
//                 value: null,
//               },
//               {
//                 name: 'Rui',
//                 value: 3000,
//               },
//               {
//                 name: 'Catla',
//                 value: 3000,
//               },
//               {
//                 name: 'Carpio',
//                 value: 3000,
//               },
//               {
//                 name: 'Tilapia',
//                 value: 1750,
//               },
//               {
//                 name: 'Mrigel',
//                 value: 3000,
//               },
//               {
//                 name: 'Pabda',
//                 value: 3500,
//               },
//               {
//                 name: 'Koi',
//                 value: 750,
//               },
//             ])
    
//     const handleChange = (e)=>{
//         setOptions(e.target.value)
//     }
    
//     return (
//         <div>
//             <select onChange={handleChange} value={value}>
//             {options.map(item => (
//             <option key={item.value} value={item.value}>
//               {item.name}
//             </option>
//             ))}
//         </select>
//         <p>{value}</p>
//         </div>
//     );
// };

// export default Stackoverflow;