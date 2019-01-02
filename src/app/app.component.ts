import { Component, OnInit } from '@angular/core';
import { Store } from 'roxanne';
import { AppState, AppActions } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'roxanne-angular-app';
  money$: Observable<number>;

  constructor(private store: Store<AppState, AppActions>) { }

  ngOnInit() {
    this.money$ = this.store.select('money');
    setInterval(() => {
      this.store.dispatch('addMoney', 1);
    }, 1000);
  }
}
