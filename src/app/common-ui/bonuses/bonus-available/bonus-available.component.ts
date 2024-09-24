import { Component } from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bonus-available',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bonus-available.component.html',
  styleUrl: './bonus-available.component.scss'
})
export class BonusAvailableComponent {
  casinoes: Casino[] = casinoes;
}
