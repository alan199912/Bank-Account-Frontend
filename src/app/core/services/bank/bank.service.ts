import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GetAccountsByNumberAccountResponse, GetAccountsResponse } from '../../models/account.models';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private readonly http: HttpClient) {}

  public getAccounts(page?: number): Observable<GetAccountsResponse> {
    return this.http.get<GetAccountsResponse>(`${environment.bankService.getAccounts}?page=${page}`);
  }

  public getAccountByNumberAccount(account: string): Observable<GetAccountsByNumberAccountResponse> {
    return this.http.get<GetAccountsByNumberAccountResponse>(
      `${environment.bankService.getAccountByNumberAccount}/${account}`
    );
  }
}
