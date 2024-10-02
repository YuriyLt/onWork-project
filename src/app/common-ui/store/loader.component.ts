import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LoaderActions from './action/loader.action';
import { isLoadingSelector } from './selectors/loader.selectors';
import { Observable } from 'rxjs';
import { AppStateInterfaces } from '../../app-state-interfaces';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {

  isLoading$: Observable<any>;

  constructor(private store: Store<AppStateInterfaces>) {
    this.isLoading$ = this.store.select(isLoadingSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(LoaderActions.getLoader());
  }
}
