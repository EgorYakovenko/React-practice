import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';
import { selectUpdate } from '../redux/localeSlice';
import StatisticsTile from './StatisticsTile';

import { useEffect, useState } from 'react';
import { getPlanets } from '../api';
import axios from 'axios';

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
// ====71====
// const initDate = {
//   year: 2025,
//   month: 12,
//   day: 31,
// };

// function App() {
//   const [obj, setObj] = useState(initDate);

//   function handleChange(prop, event) {
//     // setObj({ ...obj, ...{ [prop]: event.target.value } });
//     const copy = Object.assign({}, obj);

//     copy[prop] = event.target.value;

//     setObj(copy);
//   }

//   return (
//     <div>
//       <p>{obj.year}</p>
//       <p>{obj.month}</p>
//       <p>{obj.day}</p>
//       <input value={obj.year} onChange={event => handleChange('year', event)} />
//       <input
//         value={obj.month}
//         onChange={event => handleChange('month', event)}
//       />
//       <input value={obj.day} onChange={event => handleChange('day', event)} />
//       <br />
//       {obj.year}-{obj.month}-{obj.day}
//     </div>
//   );
// }

// export default App;
// ============================================================
// ====73====
// Сделайте инпут и кнопку. По нажатию на кнопку пусть текст инпута станет новым тегом li в конец тега ul
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [input, setInput] = useState('');

//   function handleClick(event) {
//     setNotes([...notes, input]);
//     setInput('');
//   }

//   function handleChange(event) {
//     setInput(event.target.value);
//   }

//   const result = notes.map((note, index) => {
//     return <li key={index}>{note}</li>;
//   });

//   return (
//     <div>
//       <ul>{result}</ul>
//       <input type="text" value={input} onChange={handleChange} />
//       <button type="button" onClick={handleClick}>
//         Button
//       </button>
//     </div>
//   );
// }
// export default App;
// ============================================================
// ====74====
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  function doSmth(index) {
    let copy = Object.assign([], notes);
    copy[index] += '!';
    setNotes(copy);
  }

  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => doSmth(index)}>
        {note}
      </li>
    );
  });
  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}
export default App;
