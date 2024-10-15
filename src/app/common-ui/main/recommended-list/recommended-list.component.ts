import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Casino } from '../../../casino';
import { NgFor } from '@angular/common';
import { casinoesService } from '../../../casinoes.service';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss']
})

export class RecommendedListComponent {
  casinoes: Casino[] = this.OpCasinoes.casinoes;

  constructor(private OpCasinoes: casinoesService) {}
}
