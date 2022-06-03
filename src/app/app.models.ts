export interface BrewStateModel {
  tabs: BrewTab[];
  filters: Record<string, string>
}

export interface BrewTab {
  name: string;
  link: string;
}

export interface Filter {
  filter: string;
  value: string;
}
