import { AppState, AppActions } from './models';
import { Store } from 'roxanne';

export function appEffects(store: Store<AppState, AppActions>) {
  store
    .actionOfType('addMoney')
    .subscribe(amount => console.log(`${amount} amount was added.`));
};
