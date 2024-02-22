import { Component, OnInit } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';

@Component({
  standalone: true,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [LetterComponent]
})
export class ChildComponent {

  showLetter = false;

  toggleLetter = () => {
    this.showLetter = !this.showLetter;
  }

}
