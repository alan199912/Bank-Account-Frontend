import { TypeBankAccountPipe } from './type-bank-account.pipe';

describe('TypeBankAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new TypeBankAccountPipe();
    expect(pipe).toBeTruthy();
  });

  it('#transform should return CA', () => {
    const pipe = new TypeBankAccountPipe();
    expect(pipe.transform('CA')).toBe('Caja de Ahorro');
  });

  it('#transform should return CC', () => {
    const pipe = new TypeBankAccountPipe();
    expect(pipe.transform('CC')).toBe('Cuenta Corriente');
  });

  it('#transform should return CA', () => {
    const pipe = new TypeBankAccountPipe();
    expect(pipe.transform('CA', 'u$s')).toBe('Caja de Ahorro en Dolares');
  });

  it('#transform should return CC', () => {
    const pipe = new TypeBankAccountPipe();
    expect(pipe.transform('CC', 'bs')).toBe('Cuenta Corriente en Bolivares');
  });
});
