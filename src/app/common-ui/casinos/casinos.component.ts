import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Casino, casinoes } from '../../casino';

@Component({
  selector: 'app-casinos',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `
  <article class="recommended">
  <div class="main-info">
        <div class="main-info_adv">
            <h1>The best Online casinos 2023</h1>
            <p>We've compiled a list of our top recommended online casinos to help you <br> get started – so why wait? Check out our picks now and start winning big!</p>
            <ul class="main-about">
                <li>
                    <img class="deco-item" src="../../../assets/medal.svg" alt="medal">
                    Only licensed casinos!</li>
                <li>
                    <img class="deco-item" src="../../../assets/game-svgrepo-com 1.svg" alt="gamepad">
                    Best gaming providers</li>
                <li>
                    <img class="deco-item" src="../../../assets/gift.svg" alt="gift">
                    More than 60+ bonuses</li>
            </ul>
        </div>
        <div class="main-elephant">
            <ul>
                <li>
                    <div class="info-ep first">
                        <img src="../../../assets/medal2.svg" alt="gift">
                        <p class="text-container">Only licensed casinos!</p>
                    </div>
                </li>
                <li>
                    <div class="info-ep middle">
                        <img src="../../../assets/gift2.svg" alt="gift">
                        <p class="text-container">More than 60+ bonuses</p>
                    </div>
                </li>
                <li>
                    <div class="info-ep last">
                        <img src="../../../assets/heart.svg" alt="coins">
                        <p class="text-container">All your favourite <br> gaming providers</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
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
  styleUrls: [
    './casinos.component.scss', 
    '../main/recommended-list/recommended-list.component.scss',
    '../main/main.component.scss']

})
export class CasinosComponent {
  casinoes: Casino[] = casinoes;
}
