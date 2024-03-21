import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'uk',
    updatedAt: Date.now(),
  },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.value;
        state.updatedAt = action.payload.time;
      },
      prepare: value => {
        return {
          payload: {
            value,
            time: Date.now(),
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;

export const selectUpdate = state => state.locale.updatedAt;

//REDUX

// export const localeReducer = (state = { lang: 'uk' }, action) => {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const changeLang = newLang => {
//   return {
//     type: 'locale/changeLang',
//     payload: newLang,
//   };
// };
