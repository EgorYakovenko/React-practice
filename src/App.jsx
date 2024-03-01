import { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css'

import LoginForm from './components/ModuleThreeForms/LoginForm';
import SearchBar from './components/ModuleThreeForms/SearchBar';
import LangSwitcher from './components/ModuleThreeForms/LangSwitcher';
function App() {
  // ===== Не контролируемая форма =====

  // const handleLogin = userData => {
  // Виконуємо необхідні операції з даними
  // console.log(userData);
  // };
  // ===== /Не контролируемая форма =====

  // ===== Контролируемая форма =====

  // const [lang, setLang] = useState('uk'); // сохранили текущее значение состояния

  // ===== /Контролируемая форма =====
  // ===== HTTP запрос =====
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        'hn.algolia.com/api/v1/search?query=react'
      );
      setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);
  // hn.algolia.com/api/v1/search?query=react
  // nfETKchrhu0QZJvrk5wEPWVq-5iCKjXTqUbWwdRMBwo
  http: return (
    <>
      {/* <h3>3 модуль, формы</h3>
      <h2>===== Не контролируемая форма =====</h2>
      <LoginForm onSubmit={handleLogin} />
      <p>===== /Не контролируемая форма =====</p>

      <h2>===== Контролируемая форма =====</h2>
      <SearchBar />

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} /> */}
      <h3>HTTP запросы</h3>
      {/* <div>
        {articles.length > 0 && (
          <ul>
            {articles.map(article => {
              <li key={article.objectID}>
                <a href={article.url}>{article.title}</a>
              </li>;
            })}
          </ul>
        )}
      </div> */}
    </>
  );
}

export default App;
