import {AfterViewInit, Component, OnInit, viewChild, Signal, signal, computed} from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule, getLocaleWeekEndRange, NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../footer/modal/modal.component';
import { casinoesService } from '../../../casinoes.service';
import { SIGNAL } from '@angular/core/primitives/signals';

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
  public isFormLoaded: boolean = false;

  selectedCasinos = signal<boolean[]>(Array(this.casinoes.length).fill(false));

  filteredCasinos = computed(() => {
    return this.casinoes.filter((_, index) => this.selectedCasinos()[index]);
  });

  constructor(private OpCasinoes: casinoesService) {}

  toggleCasino(index: number): void {
    const updatedSelection = [...this.selectedCasinos()];
    updatedSelection[index] = !updatedSelection[index];
    this.selectedCasinos.set(updatedSelection);
  }

  applyFilters() {
    // const indexes = this.control.controls
    //   .map((control, index) => (control.value ? index : -1))
    //   .filter(index => index !== -1);
    //   console.log(indexes);

    // this.filteredCasinos = this.casinoes.filter((Casino, index) => indexes.includes(index));
    
  }

  clearFilters(): void {
    this.selectedCasinos.set(Array(this.casinoes.length).fill(false));
  }

  // public readonly casinoes: Casino[] = this.OpCasinoes.casinoes;

    

  // filteredCasinos = [...this.casinoes];

  // constructor (private fb: FormBuilder, private OpCasinoes: casinoesService) {}

  // private addParamControl(param: any, initialValue: boolean): void {
  //   const label: FormControl<boolean | null> = this.fb.control(initialValue, []);
  //   if (label) this.control.push(label);
  // }


  // get control(): FormArray {
  //   return this.form.get('params') as FormArray;
  // }

  // ngAfterViewInit() {
  //   this.initForm().then(() => {
  //     setTimeout(() => this.isFormLoaded = true, 500)
  //   });
  // }


  // private async initForm() {
  //   try {
  //     this.form = this.fb.group({
  //       params: this.fb.array([])
  //     });
  //     this.casinoes.forEach(casino => {
  //       this.addParamControl(casino.name, false)
  //     });
  //   } catch (e) {
  //     console.error('Error initializing form:', e);
  //     this.isFormLoaded = false;
  //   }

  // }
  
  

  // clearFilters() {
  //   this.form.reset();
  //   this.filteredCasinos = [...this.casinoes];
  // }
}
