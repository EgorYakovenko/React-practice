import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';
import { selectUpdate } from '../redux/localeSlice';
import StatisticsTile from './StatisticsTile';

import { useState } from 'react';

// Задание № 75 Реакт

// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

//   const result = notes.map((note, index) => {
//     return (
//       <li key={index}>
//         {note}
//         <button key={index} onClick={() => del(index)}>
//           del
//         </button>
//       </li>
//     );
//   });

//   function del(index) {
//     setNotes(notes.filter((_, item) => item != index));
//   }

// return (
// <>
{
  /* <ul>{result}</ul> */
}
{
  /* <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>btn</button>
      <ul>{result}</ul> */
}

{
  /* <input
        value={date.year}
        onChange={event => handleChange('year', event)}
      />
      <input
        value={date.month}
        onChange={event => handleChange('month', event)}
      />
      <input value={date.day} onChange={event => handleChange('day', event)} />

      <p>
        {date.year}
        <br />
        {date.month}
        <br />
        {date.day}
      </p> */
}
// </>
// );
// }

// export default App;
// onClick={() => doSmth(index)
//   function doSmth(index) {
//     let copy = Object.assign([], notes);
//     copy[index] **= 2;
//     setNotes(copy);
//   }
// ============================================================
//  ====75====
// const initNotes = [
//   {
//     id: 'GYi9G_uC4gBF1e2SixDvu',
//     prop1: 'value11',
//     prop2: 'value12',
//     prop3: 'value13',
//   },
//   {
//     id: 'IWSpfBPSV3SXgRF87uO74',
//     prop1: 'value21',
//     prop2: 'value22',
//     prop3: 'value23',
//   },
//   {
//     id: 'JAmjRlfQT8rLTm5tG2m1L',
//     prop1: 'value31',
//     prop2: 'value32',
//     prop3: 'value33',
//   },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);

//   const result = notes.map((note, index) => {
//     return (
//       <li key={note.id}>
//         <span>{note.prop1}</span>
//         <span>{note.prop2}</span>
//         <span>{note.prop3}</span>
//       </li>
//     );
//   });

//   return (
//     <>
//       <button>btn</button>
//       <input type="text" />
//       <ul>{result}</ul>;
//     </>
//   );
// }
// export default App;
// ============================================================
import Product from './Product';

const prods = [
  { name: 'product1', cost: 100 },
  { name: 'product2', cost: 200 },
  { name: 'product3', cost: 300 },
];

function App() {
  return (
    <div>
      <Product name={prods[0].name} cost={prods[0].cost} />
      <Product name={prods[1].name} cost={prods[1].cost} />
      <Product name={prods[2].name} cost={prods[2].cost} />
    </div>
  );
}

export default App;
