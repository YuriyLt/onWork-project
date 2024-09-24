import { Component } from '@angular/core';
import { ModalComponent } from '../../footer/modal/modal.component';
import { BonusAvailableComponent } from '../bonus-available/bonus-available.component';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [ModalComponent, BonusAvailableComponent],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss'
})
export class FilterModalComponent {
  email: string = "";
}
