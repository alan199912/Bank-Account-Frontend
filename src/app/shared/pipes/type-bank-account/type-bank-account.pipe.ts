import { Pipe, PipeTransform } from '@angular/core';
import { CA, CC, CC_ABBREVIATED } from 'src/app/core/constants/TypeBankAccount.constants';
import { TypeMoney } from 'src/app/core/constants/typeMoney.constants';

@Pipe({
  name: 'typeBankAccount',
  standalone: true
})
export class TypeBankAccountPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    const money = args as keyof typeof TypeMoney;
    const typeMoney = args ? TypeMoney[money] : '';

    return value.toLowerCase() === CC_ABBREVIATED ? `${CC}${typeMoney}` : `${CA}${typeMoney}`;
  }
}
