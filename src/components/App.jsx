import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';

function App() {
  const lang = useSelector(state => state.locale.lang);
  return (
    <>
      <Balance />

      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </>
  );
}

export default App;
