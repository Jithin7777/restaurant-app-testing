export interface MenuItem {
  id: string | number;        // Accept both if needed, but better to pick one
  title: string;
  price: string      // Use number ideally, but if you store formatted price, string is fine
  description?: string;       // Optional if not always used
  likes?: number;
  image: string;
}
