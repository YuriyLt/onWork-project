import { Component, signal, WritableSignal} from '@angular/core';
import { Casino,  } from '../../../casino';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export class BonusAvailableComponent {

  public readonly casinoes: Casino[] = this.OpCasinoes.casinoes;
  public form: FormGroup = new FormGroup({});
  public isFormLoaded: boolean = true;
  public filteredCasinos: WritableSignal<any[]> = signal([...this.OpCasinoes.casinoes]);
  public isFiltered: boolean = true;

  selectedCasinos = signal<boolean[]>(Array(this.casinoes.length).fill(false));

  constructor(private OpCasinoes: casinoesService, private fb: FormBuilder ) {};

  toggleCasino(index: number): void {
    const updatedCasinoes = [...this.selectedCasinos()];
    updatedCasinoes[index] = !updatedCasinoes[index];
    this.selectedCasinos.set(updatedCasinoes);
  }

  applyFilters():void {
    this.filteredCasinos.set(this.casinoes.filter((_, index) => this.selectedCasinos()[index]));
  }

  clearFilters(): void {
    this.filteredCasinos.set([...this.OpCasinoes.casinoes]);
    this.selectedCasinos.set(Array(this.casinoes.length).fill(false));
  }
}
