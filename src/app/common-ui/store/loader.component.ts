import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule} from '@angular/material/progress-bar'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
}
