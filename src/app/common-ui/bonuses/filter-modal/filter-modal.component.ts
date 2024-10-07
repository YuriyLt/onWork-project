import { Component } from '@angular/core';
import { ModalComponent } from '../../footer/modal/modal.component';
import { BonusAvailableComponent } from '../bonus-available/bonus-available.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { CommonModule, NgIf } from '@angular/common';
import { casinoes, Casino } from '../../../casino';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [
    FormsModule,
    ModalComponent,
    BonusAvailableComponent,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss'
})

export class FilterModalComponent {
  casinoes: Casino[] = casinoes;

  selectedCasinos: { [key: string]: boolean} = {};

  filteredCasinos = [...this.casinoes];

  applyFilters() {
    this.filteredCasinos = this.casinoes.filter(casino => this.selectedCasinos[casino.name]);
  }

  clearFilters() {
    this.selectedCasinos = {};
    this.filteredCasinos = [...this.casinoes];
  }
}
