import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Casino, casinoes } from '../../../casino';
import { Payment, payments } from '../../../payment';
import { casinoesService } from '../../../casinoes.service';

@Component({
  selector: 'app-casino-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casino-list.component.html',
  styleUrls: [
    './casino-list.component.scss',
  ]
})
export class CasinoListComponent {
  public casinoes: Casino[] = this.OpCasinoes.casinoes;
  public payments: Payment[] = payments;
  public shownPayments = [...this.payments];
  public showMore: boolean = false;

  constructor(private OpCasinoes: casinoesService) {}

  ngOnInit() {
    this.updatePaymentList();
  }

  private updatePaymentList():void {
    if (!this.showMore) {
      this.shownPayments = this.shownPayments.slice(0, 6);
    } else {
      this.shownPayments = [...this.payments];
    }
  }

  allPayments(): void {
    this.showMore = !this.showMore;
    this.updatePaymentList();
  }
}
