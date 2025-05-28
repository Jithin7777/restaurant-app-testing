// components/PopularMenu.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import CardList from "./CardList";

const menuItems = [
  {
    id: "1",
    title: "Cheese Pizza (Lg)",
    price: "$21.95",
    likes: 229,
    image: "/images/menu/img1.webp",
    link: "/menu/greenvalley?item=cheese-pizza-lg-YuMA",
  },
  {
    id: "2",
    title: "Cheese Pizza (sm)",
    price: "$11.00",
    likes: 120,
    image: "/images/menu/img1.webp",
    link: "/menu/greenvalley?item=cheese-pizza-sm-uFgR",
  },
  {
    id: "3",
    title: "Cheese Pizza (sm)",
    price: "$11.00",
    likes: 120,
    image: "/images/menu/img2.webp",
    link: "/menu/greenvalley?item=cheese-pizza-sm-uFgR",
  },
];

const PopularMenu = () => {
  return (
    <section id='popular' className="mt-10 flex flex-col gap-10">
      <div className="flex items-center justify-between gap-3 px-4 md:px-10 xl:px-0">
        <h2 className="text-primary text-xl font-semibold md:text-2xl lg:text-3xl">
          Popular
        </h2>
      </div>

      {/* Scrollable Menu */}
      <div className="hide-scrollbar flex snap-x snap-mandatory scroll-ps-4 gap-4 overflow-x-auto scroll-smooth px-4 md:scroll-ps-10 md:px-10  xl:px-0">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="w-64 shrink-0 snap-start md:w-[310px]"
            title={`Add ${item.title} to your cart`}
          >
            <Card className="relative h-60 w-full overflow-hidden rounded-xl border-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute right-2 bottom-2 z-10">
                <Button size="icon" className="rounded-xl h-10 w-10 bg-white p-2">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            <CardContent className="mt-2 space-y-1">
              <h3 className="line-clamp-2 font-bold">{item.title}</h3>
              <p className="text-muted-foreground flex items-center gap-1 text-sm">
                {item.price} · <Heart size={14} className="text-red-500" />{" "}
                {item.likes}
              </p>
            </CardContent>
          </Link>
        ))}
      </div>
      <div className="">
        <CardList/>
      </div>
    </section>
  );
};

export default PopularMenu;
