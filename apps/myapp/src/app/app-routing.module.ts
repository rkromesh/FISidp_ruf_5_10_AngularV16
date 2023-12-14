import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from '@ruf/idp-auth';

//whichever route want to guard provide a Auth for it

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'welcome', component: WelcomeComponent},
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
