import { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css'

import LoginForm from './components/ModuleThreeForms/LoginForm';
import SearchBar from './components/ModuleThreeForms/SearchBar';
import LangSwitcher from './components/ModuleThreeForms/LangSwitcher';
import ArticleList from './components/ArticleList/ArticleList';
import { fetchArticles } from './api';
import SearchForm from './components/SearchForm/SearchForm';
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
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async newQuery => {
    try {
      setIsLoading(true);
      setArticles([]);
      const data = await fetchArticles(newQuery);
      setArticles(data);
      setIsLoading(false);
    } catch (error) {}
  };

  // nfETKchrhu0QZJvrk5wEPWVq-5iCKjXTqUbWwdRMBwo
  return (
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
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading . . .</p>}
      <div>{articles.length > 0 && <ArticleList items={articles} />}</div>
    </>
  );
}

export default App;

//  useEffect(() => {
//    async function getArticles() {
//      const data = await fetchArticles();
//      setArticles(data);
//    }
//    getArticles();
//  }, []);
