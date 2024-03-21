//объявили редёсер для каждого слайса
export const balanceReduser = (state = { value: 1000 }, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      };
    case 'balance/withdraw':
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

//Объявили экшен
// export const deposit = {
//   type: 'balance/deposit',
//   payload: 10,
// };

//функция которая возвращает/отправляет экшн(генератор экшена)
export const deposit = value => {
  return {
    type: 'balance/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'balance/withdraw',
    payload: value,
  };
};
