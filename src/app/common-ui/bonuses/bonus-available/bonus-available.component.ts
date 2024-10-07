import { Component, OnInit } from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../footer/modal/modal.component';

 
@Component({
  selector: 'app-bonus-available',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ModalComponent
  ],
  templateUrl: './bonus-available.component.html',
  styleUrl: './bonus-available.component.scss'
})
export class BonusAvailableComponent {
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
