export interface MenuItem {
  id: string | number;
  title: string;
  price: string;
  description?: string;
  likes?: number;
  image: string;
  goesWellWith?: GoesWellItem[];  // Add this optional field
}

export interface GoesWellItem {
  id: string | number;
  title: string;
  price: string;
  description?: string;
  image: string;
}
