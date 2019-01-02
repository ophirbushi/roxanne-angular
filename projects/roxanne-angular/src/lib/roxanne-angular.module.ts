import { NgModule, ModuleWithProviders } from '@angular/core';

import { Reducer, Effects, Store } from 'roxanne';

@NgModule({})
export class RoxanneAngularModule {

  static forRoot<State, Actions>(initialState: State, reducer: Reducer<State, Actions>,
    effects?: Effects<State, Actions>[]): ModuleWithProviders {
    return {
      ngModule: RoxanneAngularModule,
      providers: [{ provide: Store, useValue: new Store<State, Actions>(initialState, reducer, effects) }]
    };
  }

}
