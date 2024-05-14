import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NameListFeatureComponent} from "./name-list-feature/name-list-feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameListFeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-app';
}
