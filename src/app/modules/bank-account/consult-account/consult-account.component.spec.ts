import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankService } from 'src/app/core/services/bank/bank.service';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConsultAccountComponent } from './consult-account.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { CardAccountComponent } from './components/card-account/card-account.component';
import { TypeBankAccountPipe } from 'src/app/shared/pipes/type-bank-account/type-bank-account.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('ConsultAccountComponent', () => {
  let component: ConsultAccountComponent;
  let fixture: ComponentFixture<ConsultAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultAccountComponent, CardAccountComponent],
      imports: [HttpClientTestingModule, SpinnerComponent, TypeBankAccountPipe, RouterTestingModule],
      providers: [
        BankService,
        {
          provide: SpinnerService,
          useValue: {
            spinner$: {
              subscribe: () => false
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsultAccountComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should input accounts', () => {
    component.accounts = [
      {
        e: '1',
        n: '872378326709',
        t: '01',
        saldo: '458',
        moneda: '$',
        tipo_letras: 'CC'
      },
      {
        e: '1',
        n: '872378326709',
        t: '01',
        saldo: '458',
        moneda: '$',
        tipo_letras: 'CC'
      }
    ];

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-card-account').textContent).toContain('872378326709');

    expect(component.accounts).toBeTruthy();
  });

  it('should input isLoading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(component.isLoading).toBeTruthy();
  });

  it('should constructor and ngOnInit', () => {
    expect(component.accounts).toEqual([]);
    expect(component.pagination).toBeFalsy();
    expect(component.isLoading).toBeFalsy();

    const spinnerService = fixture.debugElement.injector.get(SpinnerService);

    fixture.detectChanges();

    spyOn(spinnerService, 'spinner$' as never).and.returnValue(false as never);
  });

  it('should getAccounts method', () => {
    const bankService = fixture.debugElement.injector.get(BankService);
    bankService.getAccounts().subscribe((data) => {
      expect(data.accounts).toEqual([
        {
          e: '1',
          n: '872378326701',
          t: '02',
          saldo: '1500',
          moneda: 'u$s',
          tipo_letras: 'CC'
        },
        {
          e: '1',
          n: '872378326702',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'Cc'
        },
        {
          e: '1',
          n: '872378326703',
          t: '01',
          saldo: '745',
          moneda: '$',
          tipo_letras: 'CC'
        },
        {
          e: '1',
          n: '872378326704',
          t: '01',
          saldo: '852.36',
          moneda: '$uy',
          tipo_letras: 'CA'
        },
        {
          e: '1',
          n: '872378326705',
          t: '01',
          saldo: '569',
          moneda: '$',
          tipo_letras: 'CC'
        }
      ]);
    });
  });
});
