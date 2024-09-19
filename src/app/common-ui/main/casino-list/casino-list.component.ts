import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Casino, casinoes } from '../../../casino';

@Component({
  selector: 'app-casino-list',
  standalone: true,
  imports: [ CommonModule, NgFor ],
  template: `
  <div class="container" *ngFor="let casino of casinoes">
  <div class="casinoType" >
    <div class="casino-container">
        <div class="logo"><img [src]="casino.logo"></div>
        <div class="rating">{{casino.rating}}</div>
        <div class="starRating"><img [src]="casino.starRating"></div>
        <div class="buttonVisit"><button>Visit casino</button></div>
      </div>
  </div>
  <div class="aboutCasino">
    <h2>{{casino.aboutHeading}}</h2>
    <ul>
        <li>
            <img src="" alt="">
            <span>{{casino.aboutOptionsBonuss}}</span>
        </li>
        <li>
            <img src="" alt="">
            <span>{{casino.aboutOptionsWithdraw}}</span>
        </li>
        <li>
            <img src="" alt="">
            <span>{{casino.aboutOptionsDaily}}</span>
        </li>
        <li>
            <img src="" alt="">
            <span>{{casino.aboutOptionsChat}}</span>
        </li>
    </ul>
  </div>
  <div class="paymentSection">
    <h2>{{casino.paymentHeading}}</h2>
    <ul>
        <li><img [src]="casino.paymentRapid" alt="Rapid"></li>
        <li><img [src]="casino.paymentRevolut" alt="Revolut"></li>
        <li><img [src]="casino.paymentAstropay" alt="Astropay"></li>
        <li><img [src]="casino.paymentDE" alt="DepositExpress"></li>
        <li><img [src]="casino.paymentCitadele" alt="Citadele"></li>
        <li><img [src]="casino.paymentBitcoin" alt="Bitcoin"></li>
    </ul>
  </div>
</div>
`,
  
  styleUrls: ['./casino-list.component.scss']
})
export class CasinoListComponent {
  casinoes: Casino[] = casinoes;
}
