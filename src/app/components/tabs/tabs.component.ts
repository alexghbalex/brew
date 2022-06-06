import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {faker} from '@faker-js/faker';
import {Observable} from "rxjs";
import {BrewTab} from "../../app.models";
import {AddTab, GetTabs} from "../../store/brew.actions";
import {BrewState} from "../../store/brew.state";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Select(BrewState.tabs) tabs$: Observable<BrewTab[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(GetTabs);
  }

  add() {
    const name = faker.name.jobTitle();
    const link = faker.datatype.string();
    this.store.dispatch(new AddTab({name, link}));
  }
}
