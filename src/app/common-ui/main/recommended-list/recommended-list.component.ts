import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Casino, casinoes } from './recommended-casino-list.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `
  <article class="recommended">
    <h3>Recommended Casinos</h3>
    <ul>
        <li *ngFor="let casino of casinoes">
            <ul class="sublist">
                <li><img [src]="casino.logo" alt="{{casino.name}}"></li>
                <li>{{casino.name}}</li>
                <li>{{casino.rating}}</li>
                <li><img [src]="casino.starRating" alt="StarRating"></li>
                <li>{{casino.desc}}</li>
            </ul>
        </li>
      </ul>
      <button class="rec-btn">See more</button>
  </article>
  `,

  styleUrls: ['./recommended-list.component.scss']
})
export class RecommendedListComponent {
  casinoes: Casino[] = casinoes;
}
