import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, transition, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  animations: [ 
    trigger('openClose', [
      state(
        'close', 
        style({
          width: '0px',
        }),
      ),
      state(
        'open',
        style({
          width: '350px',
        })
      ),
      transition('close => open', [animate('1s')]),
      transition('open => close', [animate('0.5s')])
    ])
  ],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;

  constructor (private router: Router) {} 

  public navClickHome(): void {
    this.router.navigate(['Home'])
  }

  public navClickCasinos(): void {
    this.router.navigate(['Casinos'])
  }

  public navClickBonuses(): void {
    this.router.navigate(['Bonuses & Tournaments'])
  }

  public openPop(): void {
    this.isMenuOpen = true;
  }

  public closePop(): void {
    this.isMenuOpen = false;
  }
}
