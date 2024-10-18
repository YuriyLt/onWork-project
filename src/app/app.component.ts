import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common-ui/header/header.component';
import { MainComponent } from "./common-ui/main/main.component";
import { FooterComponent } from "./common-ui/footer/footer.component";
import { PrivacyComponent } from './common-ui/privacy/privacy.component';
import { LoaderComponent } from '../app/common-ui/store/loader.component'
import { preloaderSelector } from './common-ui/store/selectors/loader.selectors';
import { AppStateInterfaces } from './app-state-interfaces';
import { Store } from '@ngrx/store';
import { getLoader, getLoaderSuccess } from './common-ui/store/action/loader.action';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    LoaderComponent,
    FooterComponent,
    PrivacyComponent,
    AsyncPipe,
    CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isLoading$ = this.store.select(preloaderSelector);
  constructor(private store: Store<AppStateInterfaces>) {}

  ngOnInit() {
    setTimeout(()=> {
      this.store.dispatch(getLoaderSuccess())
    }, 1500)
  }
}