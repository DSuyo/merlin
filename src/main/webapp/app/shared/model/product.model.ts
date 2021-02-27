import { ISales } from 'app/shared/model/sales.model';

export interface IProduct {
  id?: number;
  name?: string;
  product?: ISales;
}

export const defaultValue: Readonly<IProduct> = {};
