import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Casino, casinoes } from '../../../casino';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss']
})

export class RecommendedListComponent {
  casinoes: Casino[] = casinoes;
}
