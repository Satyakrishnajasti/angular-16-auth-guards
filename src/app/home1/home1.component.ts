import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.sass'],
})
export class Home1Component {
  constructor() {
    sessionStorage.setItem('number', (Math.random() * 6).toFixed(0).toString());
  }
}
