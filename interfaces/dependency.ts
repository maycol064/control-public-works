export interface AddDependency {
  name: string;
  sector: string;
}

export interface Dependencies {
  data: Dependency[];
}

export interface Dependency {
  id:     string;
  name:   string;
  sector: string;
}

