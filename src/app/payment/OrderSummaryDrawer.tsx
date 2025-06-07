"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CartItemsList from "./CartItemsList";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
  children: React.ReactNode; 
}

export default function OrderSummaryDrawer({ children }: Props) {
  const { subtotal, cartItems } = useCart();
  return (
    <Dialog.Root>
      {/* Use passed-in trigger */}
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      {/* Drawer content */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black/30" />
        <Dialog.Content className="data-[state=open]:animate-slideInUp fixed inset-x-0 bottom-0 z-50 flex max-h-[95vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white p-4 lg:hidden">
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 rounded-full p-1 text-gray-500 hover:text-black focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-lg font-bold"></Dialog.Title>
          <section className="flex flex-col gap-4 overflow-clip">
            <h2 className="text-lg font-bold">Order summary</h2>

            <div className="flex flex-col gap-2">
              {/* Subtotal */}
              <div className="flex justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </div>

              {/* Taxes & fees */}
              <div className="flex justify-between">
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="fees">
                    <AccordionTrigger className="text-mercury-ui-primary flex items-center gap-1 py-1 text-base">
                      Taxes & fees
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 text-sm">
                      🛈 We collect required state & local taxes. A small
                      platform fee keeps things running smoothly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <p className="font-semibold">$1.47</p> */}
              </div>

              {/* Tip */}
              {/* <div className="flex justify-between">
                <p className="font-semibold">Tip</p>
                <p className="font-semibold">$2.20</p>
              </div> */}

              {/* Coupon
              <div className="flex justify-between">
                <button className="text-sm text-blue-600">
                  Add coupon or gift card
                </button>
                <p></p>
              </div> */}

              <hr className="mt-2 border-t border-gray-400" />

              {/* Total */}
              {/* <div className="flex justify-between text-xl font-semibold">
                <p>Total</p>
                <span>$10.56</span>
              </div> */}
            </div>
          </section>

          <div className="flex-1 overflow-y-auto pt-4">
            <CartItemsList />
          </div>
          <Button className="group relative py-3 mt-5 mb-5 flex min-h-12 items-center justify-center bg-[#B90606] px-4  text-white transition-all ease-in-out">
            <span className="rounded-mercury-ui-control pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:rounded-[calc(var(--mercury-ui-border-radius-control)*1.2)] group-hover:opacity-100 hover:rounded-[calc(var(--mercury-ui-border-radius-control)*1.2)]"></span>

            <span className="flex flex-1 items-center justify-center gap-x-2">
              <span className="flex flex-row items-center gap-x-[4px]">
                Done
                <ChevronRight className="mt-1 h-5 w-5" />
              </span>
            </span>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
