import { Reducer } from 'roxanne';
import { AppState, AppActions } from './models';

export function appReducerFactory() {
  return new Reducer<AppState, AppActions>(
    function (state, action, payload) {
      if (this.is('addMoney', action, payload)) {
        return { ...state, money: state.money + payload };
      }
      if (this.is('subtractMoney', action, payload)) {
        return { ...state, money: state.money - payload };
      }
      return state;
    }
  );
}
