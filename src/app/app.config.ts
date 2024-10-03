import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { AppRoutingModule, routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../app/common-ui/store/state/loaderState.interface'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
providers: [
  importProvidersFrom( AppRoutingModule, 
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      connectInZone: true
  }), 
   ),
  ]
};
