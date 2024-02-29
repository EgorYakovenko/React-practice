import { useId } from 'react';

const LoginForm = ({ onSubmit }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();

    // получаем значение инпутов
    const form = evt.target;
    const { login, password } = form.elements;
    // console.log(login.value, password.value);

    // передаём данные в App как аргумент функции
    onSubmit({
      login: login.value,
      password: password.value,
    });

    form.reset(); // сброс полей после отправки
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
