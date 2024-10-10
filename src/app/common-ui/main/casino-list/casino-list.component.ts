import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Casino, casinoes } from '../../../casino';
import { Payment, payments} from '../../../payment'

@Component({
  selector: 'app-casino-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casino-list.component.html',
  styleUrl: './casino-list.component.scss'
})
export class CasinoListComponent {
  public readonly casinoes: Casino[] = casinoes;

  public payments: Payment[] = payments;

  private shownPayments = [...this.payments];

  ngOnInit() {
    this.shownPayments = this.payments.
  }

  expandPayments() {

  }
}
