import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from '../app/common-ui/store/state/loaderState.interface';
import { AppRoutingModule } from './app.routes';

export const appConfig: ApplicationConfig = {
providers: [
  importProvidersFrom( AppRoutingModule, 
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      connectInZone: true
  }), 
   ), provideAnimationsAsync(), 
  ]
};
