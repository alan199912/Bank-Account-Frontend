import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/core/models/account.models';
import { BankService } from 'src/app/core/services/bank/bank.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  public account!: Account;

  constructor(private readonly activatedRouter: ActivatedRoute, private readonly bankService: BankService) {}

  ngOnInit(): void {
    this.consultBankBalance(this.activatedRouter.snapshot.params['id']);
  }

  public consultBankBalance(numberAccount: string): void {
    this.bankService.getAccountByNumberAccount(numberAccount).subscribe({
      next: ({ account }) => {
        this.account = account;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
