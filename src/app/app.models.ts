export interface BrewStateModel {
  tabs: BrewTab[];
  filters: Record<string, string>,
  data: BrewData,
}

export interface BrewTab {
  name: string;
  link: string;
}

export interface Filter {
  filter: string;
  value: string;
}

export interface BrewData {
  id: string;
  name: string;
  data: Record<string, any>[];
}
