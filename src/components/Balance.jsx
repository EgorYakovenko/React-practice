import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlise';

export default function Balance() {
  const dispatch = useDispatch(); //функция которая принимает экшн
  //Используем состояние в JSX
  const balance = useSelector(state => state.balance.value);

  const [value, setValue] = useState();

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input type="number" onChange={e => setValue(Number(e.target.value))} />
      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </div>
  );
}
