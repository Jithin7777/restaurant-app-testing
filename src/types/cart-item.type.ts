import type { MenuItem } from "./menu-item.types";


export interface ExtraItem {
  item: MenuItem;
  quantity: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  extras?: ExtraItem[]; // each extra has its own quantity
  lineTotal?: string;
}
