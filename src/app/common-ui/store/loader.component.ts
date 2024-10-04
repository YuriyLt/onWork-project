import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LoaderActions from './action/loader.action';
import { isLoadingSelector } from './selectors/loader.selectors';
import { Observable } from 'rxjs';
import { AppStateInterfaces } from '../../app-state-interfaces';
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
