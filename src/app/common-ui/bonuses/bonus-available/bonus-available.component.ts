import {AfterViewInit, Component, OnInit, viewChild} from '@angular/core';
import { Casino, casinoes } from '../../../casino';
import { CommonModule, NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../footer/modal/modal.component';
import e from "express";


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
export class BonusAvailableComponent implements AfterViewInit {

  public readonly casinoes: Casino[] = casinoes;

  public form: FormGroup = new FormGroup({});

  private formParams: any[] = [];

  public isFormLoaded: boolean = false;

  selectedCasinos: { [key: string]: boolean} = {};

  filteredCasinos = [...this.casinoes];

  constructor (private fb: FormBuilder) {}



  private addParamControl(param: any, initialValue: boolean): void {
    const label: FormControl<boolean | null> = this.fb.control(initialValue, []);
    if (label) this.control.push(label);
    console.log(this.control)
  }


  get control(): FormArray {
    return this.form.get('params') as FormArray;
  }

  ngAfterViewInit() {
    this.initForm().then(() => {
      setTimeout(() => this.isFormLoaded = true, 2500)
    });


  }


  private async initForm() {
    try {
      this.form = this.fb.group({
        params: this.fb.array([])
      });
      this.casinoes.forEach(casino => {
        this.addParamControl(casino.name, false)
      });
    } catch (e) {
      console.error('Error initializing form:', e);
      this.isFormLoaded = false;
    }

  }
  
  applyFilters() {
    const indexes = this.control.controls
      .map((control, index) => (control.value ? index : -1))
      .filter(index => index !== -1);
      console.log(indexes);

    this.filteredCasinos = this.casinoes.filter((Casino, index) => indexes.includes(index));
    
  }
  

  clearFilters() {
    this.selectedCasinos = {};
    this.filteredCasinos = [...casinoes];
  }
}
