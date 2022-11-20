import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { ConsultAccountComponent } from './consult-account/consult-account.component';
import { BalanceComponent } from './balance/balance.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CardAccountComponent } from './consult-account/components/card-account/card-account.component';
import { TypeBankAccountPipe } from 'src/app/shared/pipes/type-bank-account/type-bank-account.pipe';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@NgModule({
  declarations: [BankAccountComponent, ConsultAccountComponent, BalanceComponent, CardAccountComponent],
  imports: [CommonModule, BankAccountRoutingModule, HeaderComponent, TypeBankAccountPipe, SpinnerComponent]
})
export class BankAccountModule {}
