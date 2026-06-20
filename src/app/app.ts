import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cdirective } from './cdirective';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Cdirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('service-tracker');
}
