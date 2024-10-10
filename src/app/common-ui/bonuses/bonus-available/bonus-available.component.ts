import { AfterViewInit, Component } from '@angular/core';
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
export class BonusAvailableComponent implements AfterViewInit {

  public readonly casinoes: Casino[] = casinoes;
  public form: FormGroup = new FormGroup({});
  public isFormLoaded: boolean = false;
  public filteredCasinos = [...this.casinoes];

  constructor (private fb: FormBuilder) {}

  private addParamControl(param: any, initialValue: boolean): void {
    const label: FormControl<boolean | null> = this.fb.control(initialValue, []);
    if (label) this.control.push(label);
  }

  get control(): FormArray {
    return this.form.get('params') as FormArray;
  }

  ngAfterViewInit() {
    this.initForm().then(() => {
      this.isFormLoaded = true
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

    this.filteredCasinos = this.casinoes.filter((casino, index) => indexes.includes(index)); 
  }
  
  clearFilters() {
    this.form.reset();
    this.filteredCasinos = [...this.casinoes];
  }
}
