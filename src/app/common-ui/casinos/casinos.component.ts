import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Casino, casinoes } from '../../casino';

@Component({
  selector: 'app-casinos',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './casinos.component.html',
  styleUrls: [
    './casinos.component.scss', 
    '../main/recommended-list/recommended-list.component.scss',
    '../main/main.component.scss'
  ]

})
export class CasinosComponent {
  public casinoes: Casino[] = casinoes.splice(casinoes.length - 4);
  private allCasionoes: Casino[] = casinoes;

  public showMore(): void {
    this.casinoes.concat(this.allCasionoes);
  }
}
