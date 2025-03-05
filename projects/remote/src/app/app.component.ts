import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import RemoteComponent from "./remote.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RemoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'remote';
}
