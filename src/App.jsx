import { useState } from 'react';

// import './App.css'

import LoginForm from './components/ModuleThreeForms/LoginForm';
import SearchBar from './components/ModuleThreeForms/SearchBar';
import LangSwitcher from './components/ModuleThreeForms/LangSwitcher';
function App() {
  // ===== Не контролируемая форма =====

  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  // ===== /Не контролируемая форма =====

  // ===== Контролируемая форма =====

  const [lang, setLang] = useState('uk'); // сохранили текущее значение состояния

  // ===== /Контролируемая форма =====
  return (
    <>
      <h3>3 модуль, формы</h3>
      <h2>===== Не контролируемая форма =====</h2>
      <LoginForm onSubmit={handleLogin} />
      <p>===== /Не контролируемая форма =====</p>

      <h2>===== Контролируемая форма =====</h2>
      <SearchBar />

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
}

export default App;
