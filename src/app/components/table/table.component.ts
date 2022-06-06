import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {BrewState} from "../../store/brew.state";
import {Observable} from "rxjs";
import {BrewData} from "../../app.models";
import {GetData} from "../../store/brew.actions";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Select(BrewState.data) tableData$: Observable<BrewData>;
  dataForGraph: any;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(GetData);
  }
}
