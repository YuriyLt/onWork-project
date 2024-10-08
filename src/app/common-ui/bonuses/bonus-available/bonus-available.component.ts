import { Component, OnInit, viewChild } from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule, NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../footer/modal/modal.component';

 
@Component({
  selector: 'app-bonus-available',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ModalComponent,
    ReactiveFormsModule, 
    NgFor
  ],
  templateUrl: './bonus-available.component.html',
  styleUrl: './bonus-available.component.scss'
})
export class BonusAvailableComponent {

  public readonly casinoes: Casino[] = casinoes;

  public form: FormGroup = new FormGroup({});

  private formParams: any[] = [];

  public isFormLoaded: boolean = false;




  private addParamControl(param: any, initialValue: boolean = false): void {
    const label: FormControl<boolean | null> = this.fb.control(initialValue, []);
    if (label) this.control.push(label);
  }
  

  constructor (private fb: FormBuilder) {}

  get control(): FormArray {
    if(!this.form) {
      return new FormArray<any>([]);
    }
    return this.form.get('params') as FormArray;
  }

  ngOnInit() {
    this.form = this.fb.group({
      params: this.fb.array([])
    });
    this.casinoes.forEach( casino => {
      let initalValue = '';

      this.addParamControl(casino.name, false)
    });
    console.log(this.form)
    this.isFormLoaded = true;
    console.log(this.control)
  }

  
  OnSubmit(): void {
    
  }









  selectedCasinos: { [key: string]: boolean} = {};

  filteredCasinos = [...casinoes];


  applyFilters() {
    this.filteredCasinos = this.casinoes.filter(casino => this.selectedCasinos[casino.name]);
  }

  clearFilters() {
    this.selectedCasinos = {};
    this.filteredCasinos = [...casinoes];
  }
}
