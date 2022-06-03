import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  constructor(private account: AccountService) {
  }

  login() {
    this.account.login();
  }

  logout() {
    this.account.logout();
  }
}
