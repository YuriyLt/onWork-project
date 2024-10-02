import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './common-ui/store/reducer/loader.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderService } from './common-ui/store/service/loader.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('loader', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true
    }),
  ],
    providers: [LoaderService],
})
export class AppModule {}
