import Link from "next/link";
import { Icons } from "../Icon";


const ViewMenu = () => {
  return (
    <Link
      href="/table-booking"
      className="z-50 flex aspect-square h-24 flex-col items-center justify-center rounded-full bg-[#1D1D1D] px-0 py-0 text-center text-xs uppercase text-[#8F8F8F] hover:bg-[#1D1D1D]"
    >
      <Icons.dining color="#8F8F8F" className="mx-auto" />
      <p className="pt-1.5">
        View
        <br />
        Menu
      </p>
    </Link>
  );
};

export default ViewMenu;
