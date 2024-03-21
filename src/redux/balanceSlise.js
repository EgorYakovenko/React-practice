import { createSlice } from '@reduxjs/toolkit';

//REDUX

//объявили редёсер для каждого слайса
// export const balanceReduser = (state = { value: 1000 }, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     default:
//       return state;
//   }
// };

//Объявили экшен
// export const deposit = {
//   type: 'balance/deposit',
//   payload: 10,
// };

//функция которая возвращает/отправляет экшн(генератор экшена)
// export const deposit = value => {
//   return {
//     type: 'balance/deposit',
//     payload: value,
//   };
// };

// export const withdraw = value => {
//   return {
//     type: 'balance/withdraw',
//     payload: value,
//   };
// };

//===============================================

//REDUX TOOLKIT

// export const deposit = createAction('balance/deposit');

// export const withdraw = createAction('balance/withdraw');

// export const balanceReduser = createReducer({ value: 1000 }, builder => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;

//       // state.items = state.items.filter(item => item > 2);  записывает результат фильтра или мепа в оригинальный массив
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     });
// });

// REDUX TOOLKIT

const slice = createSlice({
  name: 'balance',
  initialState: { value: 1000 },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    }, //это case и reducer и action
    withdraw(state, action) {
      state.value -= action.payload;
    }, //это case и reducer
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;
