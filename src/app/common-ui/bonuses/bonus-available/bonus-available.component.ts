import {AfterViewInit, Component, OnInit, viewChild, Signal, signal, computed} from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule, getLocaleWeekEndRange, NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../footer/modal/modal.component';
import { casinoesService } from '../../../casinoes.service';

@Component({
  selector: 'app-bonus-available',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: './bonus-available.component.html',
  styleUrls: [
    './bonus-available.component.scss',
    '../../../../overwrited.styles.scss'  
  ] 
})
export class BonusAvailableComponent implements OnInit {

  public readonly casinoes: Casino[] = this.OpCasinoes.casinoes;
  public form: FormGroup = new FormGroup({});
  public isFormLoaded: boolean = true;
  public filteredCasinos: any = [...this.OpCasinoes.casinoes];
  public isFiltered: boolean = true;

  selectedCasinos = signal<boolean[]>(Array(this.casinoes.length).fill(false));

  constructor(private OpCasinoes: casinoesService, private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.filteredCasinos = computed(() => {
      return this.casinoes.concat();
    });
  }

  //  openModal() {
  //   this.filteredCasinos = computed(() => {
  //     return this.casinoes.filter((_, index) => this.selectedCasinos()[index]);
  //   });
  // }

  toggleCasino(index: number): void {
    const updatedCasinoes = [...this.selectedCasinos()];
    updatedCasinoes[index] = !updatedCasinoes[index];
    this.selectedCasinos.set(updatedCasinoes);
  }

  applyFilters() {
    this.filteredCasinos = computed(() => {
      return this.casinoes.filter((_, index) => this.selectedCasinos()[index]);
    });
  }

  clearFilters(): void {
    this.filteredCasinos = computed(() => {
      return this.casinoes.concat();
    });
    this.selectedCasinos.set(Array(this.casinoes.length).fill(false));
  }
}
