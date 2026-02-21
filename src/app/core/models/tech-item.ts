export interface TechItem {
  name: string;
  description?: string;
}

export interface Language extends TechItem {}
export interface Framework extends TechItem {}
