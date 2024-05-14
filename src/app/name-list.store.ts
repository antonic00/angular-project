import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {catchError, Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Name } from './name';
import { NameService } from './name-service/name.service';

interface NameListState {
  names: Name[];
}
@Injectable()
export class NameListStore extends ComponentStore<NameListState> {
  constructor(private nameService: NameService) {
    super({ names: [] });
  }

  readonly names$: Observable<Name[]> = this.select(state => state.names);

  readonly loadNames = this.effect<void>(() =>
    this.nameService.getNames().pipe(
      tap(names => this.patchState({ names }))
    )
  );
}
