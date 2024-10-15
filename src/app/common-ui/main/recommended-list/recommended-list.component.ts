import { Component, OnInit } from '@angular/core';
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

export class RecommendedListComponent implements OnInit {
  casinoes: Casino[] = [...this.OpCasinoes.casinoes];
  private allCasinoes: Casino[] = [...this.OpCasinoes.casinoes];

  public shownCasinoes = [...this.casinoes];
  public showMoreCasinoes: boolean = false;

  constructor(private OpCasinoes: casinoesService) {}

  ngOnInit(): void {
    this.updateCasinoList()
  }

  public updateCasinoList(): void {
    if ( !this.showMoreCasinoes) {
      this.casinoes = [...this.OpCasinoes.casinoes].slice(0, 2);
    } else {
      this.casinoes = [...this.OpCasinoes.casinoes];
    }
  }

  public showMore() {
    this.showMoreCasinoes = !this.showMoreCasinoes;
    this.updateCasinoList();
  }
}
