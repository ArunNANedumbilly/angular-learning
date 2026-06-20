import { Component, signal } from '@angular/core';
import { Cdirective } from './cdirective';

@Component({
  selector: 'app-root',
  imports: [Cdirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('service-tracker');
}
