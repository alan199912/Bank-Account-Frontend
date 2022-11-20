import { Component, OnInit } from '@angular/core';
import { Account, Pagination } from 'src/app/core/models/account.models';
import { BankService } from 'src/app/core/services/bank/bank.service';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-consult-account',
  templateUrl: './consult-account.component.html',
  styleUrls: ['./consult-account.component.scss']
})
export class ConsultAccountComponent implements OnInit {
  public accounts: Account[] = [];
  public pagination!: Pagination;
  public isLoading = false;

  constructor(private readonly bankService: BankService, private readonly spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.spinner$.subscribe((value) => (this.isLoading = value));

    this.getAccounts();
  }

  public getAccounts(page?: number): void {
    this.bankService.getAccounts(page).subscribe({
      next: ({ accounts, pagination }) => {
        this.accounts = accounts;
        this.pagination = pagination;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
