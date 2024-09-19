import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = "";
}
