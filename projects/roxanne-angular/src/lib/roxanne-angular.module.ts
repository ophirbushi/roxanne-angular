import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { Reducer, Store, Effects } from 'roxanne';

export const INITIAL_STATE_TOKEN = new InjectionToken('');
export const REDUCER_TOKEN = new InjectionToken('');
export const EFFECTS_TOKEN = new InjectionToken('');

export function storeFactory<State, Actions>(initialState: State,
  reducerFactory: () => Reducer<State, Actions>,
  effects?: Effects<State, Actions> | Effects<State, Actions>[]) {
  return new Store<State, Actions>(initialState, reducerFactory(), effects);
}

@NgModule({})
export class RoxanneAngularModule {

  static forRoot<State, Actions>(initialState: State, reducerFactory: () => Reducer<State, Actions>,
    effects?: Effects<State, Actions> | Effects<State, Actions>[]): ModuleWithProviders {
    return {
      ngModule: RoxanneAngularModule,
      providers: [
        { provide: INITIAL_STATE_TOKEN, useValue: initialState },
        { provide: REDUCER_TOKEN, useValue: reducerFactory },
        { provide: EFFECTS_TOKEN, useValue: effects },
        { provide: Store, useFactory: storeFactory, deps: [INITIAL_STATE_TOKEN, REDUCER_TOKEN, EFFECTS_TOKEN] }]
    };
  }
}
