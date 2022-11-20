import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountComponent } from './modules/bank-account/bank-account.component';

const routes: Routes = [
  {
    path: 'bank-account',
    component: BankAccountComponent,
    loadChildren: () => import('./modules/bank-account/bank-account.module').then((m) => m.BankAccountModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'bank-account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
