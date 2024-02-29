import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    // получаем значение поля инпут
    setInputValue(evt.target.value);
  };

  return (
    <div>
      {/* передаём значения поля инпут */}
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
