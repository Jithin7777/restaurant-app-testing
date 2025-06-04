import type { MenuItem } from "./menu-item.types";


export interface CartItem {
  item: MenuItem;
  quantity: number;
  extras?: MenuItem[];  // make extras optional if needed
}
