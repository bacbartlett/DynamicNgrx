import { Component, OnInit } from '@angular/core';
import { ReducerManager, Store, createReducer } from '@ngrx/store';
import { letterReducer } from '../ngrx/letter/reducer';
import { Observable } from 'rxjs';
import { decrement, increment } from '../ngrx/letter/actions';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
  imports: [CommonModule]
})
export class LetterComponent {

  name: string;

  letter$: Observable<string>

  constructor(
    private reducers: ReducerManager,
    private store: Store<{ letter: string }>
  ) {
    this.name = `letter`;
    this.reducers.addReducer(this.name, letterReducer);
    this.letter$ = store.select('letter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

}
