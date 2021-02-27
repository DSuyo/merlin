import { State } from 'app/shared/model/enumerations/state.model';

export interface ISales {
  id?: number;
  state?: State;
}

export const defaultValue: Readonly<ISales> = {};
