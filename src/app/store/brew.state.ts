import {Action, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ApiService} from "../services/api.service";
import {BrewStateModel, BrewTab, Filter} from "../app.models";
import {AddTab, GetTabs, SetFilter} from "./brew.actions";

const BREW_STATE_TOKEN = new StateToken<BrewStateModel>('brew');

@State({
  name: BREW_STATE_TOKEN,
  defaults: {
    tabs: [],
    filters: {},
  }
})
@Injectable()
export class BrewState {
  constructor(private api: ApiService) {
  }

  @Action(AddTab)
  addTab(ctx: StateContext<BrewStateModel>, action: { tab: BrewTab }) {
    const state = ctx.getState();
    ctx.patchState({
      tabs: [...state.tabs, action.tab]
    });
  }

  @Action(GetTabs)
  getTabs(ctx: StateContext<BrewStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tabs: this.api.getTabs()
    });
  }

  @Action(SetFilter)
  setFilter(ctx: StateContext<BrewStateModel>, action: Filter) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      filters: {...state.filters, [action.filter]: action.value}
    });
  }
}
