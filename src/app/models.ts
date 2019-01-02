export interface AppState {
  money: number;
}

export interface AppActions {
  addMoney: number;
  subtractMoney: number;
  somethingFancy: AppActions;
}
