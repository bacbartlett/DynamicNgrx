import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../ngrx/counter/actions';

@Component({
  standalone: true,
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  imports: [CommonModule]
})
export class CountComponent {

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) { 
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  

}
