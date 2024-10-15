import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Casino, casinoes } from '../../casino';
import { RecommendedListComponent } from "../main/recommended-list/recommended-list.component";

@Component({
  selector: 'app-casinos',
  standalone: true,
  imports: [NgFor, CommonModule, RecommendedListComponent],
  templateUrl: './casinos.component.html',
  styleUrl: './casinos.component.scss',
})
export class CasinosComponent {}
