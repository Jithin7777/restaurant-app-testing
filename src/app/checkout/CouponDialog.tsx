"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CouponDialog({ children }: { children: React.ReactNode }) {  return (
    <Dialog.Root>
      {/* Trigger Button */}
      <Dialog.Trigger asChild>
  {children}
</Dialog.Trigger>


      {/* Overlay and Content */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />

<Dialog.Content
  id="coupon-dialog"
  className="
    fixed inset-x-0 bottom-0 z-30 flex max-h-[95dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-white
    data-[state=open]:animate-slideInUp
    data-[state=closed]:animate-slideOutDown

    md:inset-auto
    md:top-1/2 md:left-1/2
    md:max-h-[80vh] md:w-[90vw] md:max-w-md
    md:-translate-x-1/2 md:-translate-y-1/2
    md:rounded-2xl
    md:animate-fadeIn md:data-[state=closed]:animate-fadeOut
  "
>
          <div className="flex h-full max-h-[95dvh] w-full flex-col md:max-h-[80vh]">
            <div className="flex flex-grow flex-col gap-6 overflow-y-auto p-6 sm:p-8">
              <CouponDialogHeader />
              <CouponDialogInput />
              <CouponDialogDoneButton />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CouponDialogHeader() {
  return (
    <div className="flex items-center justify-between gap-3">
      <Dialog.Title className="text-mercury-ui-primary font-mercury-ui-primary">
        Add code
      </Dialog.Title>
      <Dialog.Close asChild>
        <button
          aria-label="Close Dialog"
          className="rounded-full border focus:ring-[1.5px] focus:outline-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full">
            <X className="text-mercury-ui-secondary h-4 w-4" />
          </span>
        </button>
      </Dialog.Close>
    </div>
  );
}

function CouponDialogInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="coupon-input" className="sr-only">
        Promo Code or Gift Card
      </label>
      <Input
        id="coupon-input"
        placeholder="Promo Code or Gift Card"
        className="w-full rounded-lg border px-4 py-6 focus:ring-[1.5px] focus:outline-none"
        aria-label="Promo Code or Gift Card"
        name="coupon-gift-card-input"
      />
      <span className="" id="coupon-gift-card-input-helper-text" />
    </div>
  );
}

function CouponDialogDoneButton() {
  return (
    <Button
      type="button"
      aria-label="Done"
      className="group relative flex min-h-12 items-center justify-center rounded-xl bg-[#B90606] px-4 py-3 transition-all ease-in-out hover:rounded-[calc(var(--mercury-ui-border-radius-control)*1.2)]"
    >
      <span className="absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="flex flex-1 items-center justify-center gap-x-2">
        <span className="flex flex-row items-center gap-x-[4px] text-white">
          Done
          <ChevronRight className="mt-1 h-5 w-5 text-white" />
        </span>
      </span>
    </Button>
  );
}
