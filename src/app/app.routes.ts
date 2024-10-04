import { Routes } from '@angular/router';
import { PrivacyComponent } from './common-ui/privacy/privacy.component';
import { MainComponent } from './common-ui/main/main.component';
import { CasinosComponent } from './common-ui/casinos/casinos.component';
import { BonusesComponent } from './common-ui/bonuses/bonuses.component';
import { TermsComponent } from './common-ui/terms/terms.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: MainComponent},
    {path: 'Casinos', component: CasinosComponent},
    {path: 'Bonuses & Tournaments', component: BonusesComponent},
    {path: 'Terms & Conditions', component: TermsComponent},
    {path: 'Privacy Policy', component: PrivacyComponent}
];
