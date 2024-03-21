import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';
import { selectUpdate } from '../redux/localeSlice';

function App() {
  const lang = useSelector(state => state.locale.lang);
  const updatedAt = useSelector(selectUpdate);
  return (
    <>
      <Balance />

      <LangSwitcher />
      <p>Selected lang: {lang}</p>
      <p>Last updated at: {updatedAt}</p>
    </>
  );
}

export default App;
