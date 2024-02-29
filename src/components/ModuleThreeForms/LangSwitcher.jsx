import { useId, useState } from 'react';

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value} // передаём значение состояния как атрибут value
        onChange={evt => onSelect(evt.target.value)} // меняем состояние при событии onChange
      >
        <option value="en">English</option>
        <option value="uk">Ukranian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
