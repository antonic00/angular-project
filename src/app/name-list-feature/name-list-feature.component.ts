import {Component, OnInit} from '@angular/core';

import {Name} from "../name";
import {NameListUiComponent} from "../name-list-ui/name-list-ui.component";
import {NameListStore} from "../name-list.store";
import {Observable} from "rxjs";
import {NameService} from "../name-service/name.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-name-list-feature',
  standalone: true,
  imports: [NameListUiComponent, AsyncPipe],
  providers: [NameListStore],
  templateUrl: './name-list-feature.component.html',
  styleUrl: './name-list-feature.component.css'
})
export class NameListFeatureComponent implements OnInit{

  names$: Observable<Name[]> = this.nameListStore.names$;

  constructor(private nameListStore: NameListStore) {}

  ngOnInit(): void {
    this.nameListStore.loadNames();
  }

}
