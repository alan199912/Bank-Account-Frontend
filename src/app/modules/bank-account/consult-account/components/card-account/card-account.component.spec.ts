import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { TypeBankAccountPipe } from 'src/app/shared/pipes/type-bank-account/type-bank-account.pipe';
import { BalanceComponent } from '../../../balance/balance.component';

import { CardAccountComponent } from './card-account.component';

describe('CardAccountComponent', () => {
  let component: CardAccountComponent;
  let fixture: ComponentFixture<CardAccountComponent>;
  let pipe = new TypeBankAccountPipe();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAccountComponent],
      imports: [TypeBankAccountPipe, RouterModule.forRoot([{ path: 'balance/:id', component: BalanceComponent }])]
    }).compileComponents();

    fixture = TestBed.createComponent(CardAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be account undefined', () => {
    expect(component.account).toBeUndefined();
  });

  it('should input account', () => {
    component.account = {
      e: '1',
      n: '872378326709',
      t: '01',
      saldo: '458',
      moneda: '$',
      tipo_letras: 'CC'
    };
    fixture.detectChanges();
    expect(component.account).toBeTruthy();
  });

  it('should show TEST INPUT card title', () => {
    component.account = {
      e: '1',
      n: '872378326709',
      t: '01',
      saldo: '458',
      moneda: '$',
      tipo_letras: 'CC'
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const typeBankAccount = pipe.transform(component.account.tipo_letras);
    expect(compiled.querySelector('.card-title').textContent).toContain(typeBankAccount);
  });

  it('should show TEST INPUT card text', () => {
    component.account = {
      e: '1',
      n: '872378326709',
      t: '01',
      saldo: '458',
      moneda: '$',
      tipo_letras: 'CC'
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-text').textContent).toContain('Nro: 872378326709');
  });

  it('should show TEST RouterLink card', () => {
    component.account = {
      e: '1',
      n: '872378326709',
      t: '01',
      saldo: '458',
      moneda: '$',
      tipo_letras: 'CC'
    };
    fixture.detectChanges();
    inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(router.url).toEqual('balance/', component.account.n);
        console.log('after expect');
      });
    });
  });
});
