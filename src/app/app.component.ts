import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CountComponent } from './count/count.component';

@Component({
  standalone: true,
  imports: [ChildComponent, CountComponent],
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myngapp';
}
