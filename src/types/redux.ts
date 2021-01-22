export interface BaseAction {
  types?: string[];
  promise?: () => Promise<any>;
  type?: string;
  result?: any;
}
