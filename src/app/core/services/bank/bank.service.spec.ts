import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { BankService } from './bank.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankService', () => {
  let service: BankService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAccountNumberAccount should return real value', () => {
    const response = {
      account: {
        e: '1',
        n: '872378326709',
        t: '01',
        saldo: '-600',
        moneda: '$',
        tipo_letras: 'CC'
      },
      status: 'success'
    };

    expect(service.getAccountByNumberAccount('872378326709'))
      .withContext('should be an Observable')
      .toBeInstanceOf(of(response).constructor);
  });

  it('#getAccounts should return a account', () => {
    const response = {
      account: {
        e: '1',
        n: '872378326709',
        t: '01',
        saldo: '-600',
        moneda: '$',
        tipo_letras: 'CC'
      },
      status: 'success'
    };

    expect(service.getAccountByNumberAccount('872378326709').subscribe((value) => expect(value).toEqual(response)));
  });

  it('#getAccounts should return real value', () => {
    const response = {
      status: 'success',
      total: 13,
      pagination: {
        next: {
          page: 1,
          limit: 5
        }
      },
      accounts: [
        {
          e: '1',
          n: '872378326709',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'CC'
        },
        {
          e: '1',
          n: '872378326709',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'CC'
        }
      ]
    };

    expect(service.getAccounts()).withContext('should be an Observable').toBeInstanceOf(of(response).constructor);
  });

  it('#getAccounts should return a list of accounts', () => {
    const response = {
      status: 'success',
      total: 13,
      pagination: {
        next: {
          page: 1,
          limit: 5
        }
      },
      accounts: [
        {
          e: '1',
          n: '872378326709',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'CC'
        },
        {
          e: '1',
          n: '872378326709',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'CC'
        }
      ]
    };

    expect(service.getAccounts().subscribe((value) => expect(value).toBe(response)));
  });
});
