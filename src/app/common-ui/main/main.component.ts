import { Component } from '@angular/core';
import { CasinoListComponent } from './casino-list/casino-list.component';
import { RecommendedListComponent } from './recommended-list/recommended-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CasinoListComponent, RecommendedListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
