import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Casino, casinoes } from '../../../casino';

@Component({
  selector: 'app-casino-list',
  standalone: true,
  imports: [ CommonModule, NgFor ],
  template: `
  <div class="position-container">
    <div class="container" *ngFor="let casino of casinoes">
    <div class="casinoType">
      <div class="casino-container">
        <div class="logo"><img [src]="casino.logo"></div>
        <div class="ratings">
        <div class="rating">{{casino.rating}}</div>
        <div class="starRating"><img width="70px" height="13px" [src]="casino.starRating"></div>
        </div>
        <div class="buttonVisit"><button>Visit casino</button></div>
        </div>
      </div>
      <div class="aboutCasino">
        <h2>{{casino.aboutHeading}}</h2>
        <ul>
          <li>
            <img width="17px" height="18px" src="../../assets/bonuss.svg" alt="">
            <span>{{casino.aboutOptionsBonuss}}</span>
          </li>
          <li>
            <img width="17.5px" height="17.5px" src="../../assets/clock.svg" alt="">
            <span>{{casino.aboutOptionsWithdraw}}</span>
          </li>
          <li>
            <img width="20px" height="20px" src="../../assets/withdraw.svg" alt="">
            <span>{{casino.aboutOptionsDaily}}</span>
          </li>
          <li>
            <img width="16px" height="16px" src="../../assets/chat.svg" alt="">
            <span>{{casino.aboutOptionsChat}}</span>
          </li>
        </ul>
      </div>
      <div class="paymentSection">
        <h2>{{casino.paymentHeading}}</h2>
        <a href="" class="paymentSection-showmore">Show more</a>
        <ul class="paymentMethods">
          <li><img [src]="casino.paymentRapid" alt="Rapid" class="paymentBank"></li>
          <li><img [src]="casino.paymentRevolut" alt="Revolut" class="paymentBank"></li>
          <li><img [src]="casino.paymentAstropay" alt="Astropay" class="paymentBank"></li>
          <li><img [src]="casino.paymentDE" alt="DepositExpress" class="paymentBank"></li>
          <li><img [src]="casino.paymentCitadele" alt="Citadele" class="paymentBank"></li>
          <li><img [src]="casino.paymentBitcoin" alt="Bitcoin" class="paymentBank"></li>
        </ul>
      </div>
    </div>
  </div>
`,
  
  styleUrls: ['./casino-list.component.scss']
})
export class CasinoListComponent {
  casinoes: Casino[] = casinoes;
}
