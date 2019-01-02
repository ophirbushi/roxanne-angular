import { Effects } from 'roxanne';
import { AppState, AppActions } from './models';

export const appEffects = new Effects<AppState, AppActions>(
  function () {
    this.ofType('addMoney')
      .subscribe((payload) => {
        console.log('money added: ', payload);
      });
  }
);
