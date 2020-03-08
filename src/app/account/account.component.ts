import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { INIT_FLAG, START_USING_DATE, USERNAME } from '../services/local-storage/local-storage.namespace';
import { getTodayTime } from '../utlis/time';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  username: string;

  constructor(private store: LocalStorageService) {
   }

  ngOnInit(): void {
  }

  // completeSetup(): void {
  //   console.log(this.username)
  //   this.store.set(INIT_FLAG, true)
  //   this.store.set(START_USING_DATE, getTodayTime());
  //   this.store.set(USERNAME, this.username);
  // }

}
