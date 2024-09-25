import { Component } from '@angular/core';
import { tournaments, Tournament } from '../tournaments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss'
})
export class TournamentsComponent {
  tournaments: Tournament[] = tournaments;
}
