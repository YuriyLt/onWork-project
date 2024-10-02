import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common-ui/header/header.component';
import { MainComponent } from "./common-ui/main/main.component";
import { FooterComponent } from "./common-ui/footer/footer.component";
import { PrivacyComponent } from './common-ui/privacy/privacy.component';
import { LoaderComponent } from '../app/common-ui/store/loader.component'

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
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onWork-project';
}
