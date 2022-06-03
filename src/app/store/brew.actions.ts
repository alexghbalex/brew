import {BrewTab, Filter} from "../app.models";

export class AddTab {
  static readonly type = '[Brew] Add Tab';

  constructor(public tab: BrewTab) {
  }
}

export class GetTabs {
  static readonly type = '[Brew] Get Tabs';
}

export class SetFilter {
  static readonly type = '[Brew] Set Filter';

  constructor(public filter: Filter) {
  }
}
