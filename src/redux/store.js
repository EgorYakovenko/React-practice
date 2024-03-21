import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { balanceReduser } from './balanceSlise';
import { localeReducer } from './localeSlice';

// объявили начальное состояние приложения(слайс)
// const initialState = {
//   balance: {
//     value: 1000,
//   },
//   locale: {
//     lang: 'uk',
//   },
// };

const rootReducer = combineReducers({
  balance: balanceReduser,
  locale: localeReducer,
});

//объявили корневой редюсер(для изменения состояния и обновления интерфейса)
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };

//     case 'balance/withdraw':
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };

//     case 'locale/changeLang':
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

const enhancer = devToolsEnhancer();
// объявили стор/принимает редюсер
export const store = createStore(rootReducer, enhancer);
