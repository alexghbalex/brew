import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {SetFilter} from "../../store/brew.actions";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  constructor(private store: Store) {
  }

  setFilter(filter: string, event: Event) {
    this.store.dispatch(new SetFilter({filter, value: (<HTMLTextAreaElement>event?.target)?.value}));
  }
}
