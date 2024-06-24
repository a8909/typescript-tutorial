import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { FiohSignInComponent } from './pages/fioh-sign-in/fioh-sign-in.component';
import { FirstContentComponent } from './pages/first-content/first-content.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'memorial', component: FirstContentComponent },
      { path: 'pricing', component: PricingComponent },
    ],
  },
  { path: 'signIn', component: FiohSignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}