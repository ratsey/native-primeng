import { Component } from '@angular/core';
import RemoteComponent from './remote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RemoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'remote';
}
