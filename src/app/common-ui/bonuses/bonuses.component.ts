import { Component } from '@angular/core';
import { BonusAvailableComponent } from './bonus-available/bonus-available.component';
import { TournamentsComponent } from '../tournaments/tournaments.component';

@Component({
  selector: 'app-bonuses',
  standalone: true,
  imports: [BonusAvailableComponent, TournamentsComponent],
  templateUrl: './bonuses.component.html',
  styleUrls: [
    './bonuses.component.scss',
    '../footer/modal/modal.component.scss',
  ],
})
export class BonusesComponent {}
