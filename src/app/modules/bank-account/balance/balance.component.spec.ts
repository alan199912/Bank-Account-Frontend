import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { BankService } from 'src/app/core/services/bank/bank.service';
import { of } from 'rxjs';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;
  let bankService: any;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', {
      get: of({
        e: '1',
        n: '872378326709',
        t: '01',
        saldo: '458',
        moneda: '$',
        tipo_letras: 'CC'
      })
    });
    bankService = new BankService(spy);
    await TestBed.configureTestingModule({
      declarations: [BalanceComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SpinnerComponent],
      providers: [BankService]
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should account', () => {
    expect(component.account).toBeFalsy();
  });

  it('should consultBankBalance', () => {
    component.consultBankBalance('872378326709');

    const duplicateSpyObject = spyOn(component, 'consultBankBalance').and.callThrough();
    fixture.detectChanges();

    component.consultBankBalance('872378326709');
    expect(duplicateSpyObject).toHaveBeenCalled();
  });
});
