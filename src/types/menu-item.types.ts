export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description?: string;
  likes?: number;
  image: string;
  goesWellWith?: GoesWellItem[]; 
}

export interface GoesWellItem {
  id: string;
  title: string;
  price: string;
  description?: string;
  image: string;
}
