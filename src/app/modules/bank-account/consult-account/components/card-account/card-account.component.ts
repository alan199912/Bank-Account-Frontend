import { Component, Input } from '@angular/core';
import { Account } from 'src/app/core/models/account.models';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss']
})
export class CardAccountComponent {
  @Input() account!: Account;
}
