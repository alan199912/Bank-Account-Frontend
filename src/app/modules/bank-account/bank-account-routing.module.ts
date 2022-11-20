import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ConsultAccountComponent } from './consult-account/consult-account.component';

const routes: Routes = [
  { path: '', component: ConsultAccountComponent },
  { path: 'balance/:id', component: BalanceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule {}
