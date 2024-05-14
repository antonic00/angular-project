import {Component, Input} from '@angular/core';
import {Name} from "../name";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-name-list-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-list-ui.component.html',
  styleUrl: './name-list-ui.component.css'
})
export class NameListUiComponent {
  @Input() names: Name[] | null = null;
}
