"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ArrowLeft, Clock, Minus, Plus, Store } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { use } from "react";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";

const PaymentForm = () => {
  const { subtotal } = useCart();
  return (
    <div className="grid bg-transparent px-4 pt-14 pb-20 lg:grid lg:grid-cols-[1fr_25rem] lg:px-2 lg:pt-0 lg:pb-0">
      <div className="mx-auto flex flex-col gap-8 sm:w-[31.25rem] lg:gap-10 lg:pt-16 lg:pb-20">
        <div className="flex flex-col gap-3">
          <a href="/menu">
            <span className="flex flex-row items-center">
              <ArrowLeft />
              Menu
            </span>
          </a>
          <h1 className="text-4xl font-semibold">Checkout</h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl lg:block">Pickup details</h2>

          <div className="overflow-clip rounded-xl border bg-transparent">
            <div className="flex flex-col">
              <div className="flex flex-col py-2">
                <p className="flex flex-row items-center gap-2 px-4 py-2">
                  <Store />
                  <span>Pick up from</span>{" "}
                  <a href="">
                    {" "}
                    <span className="text-base font-bold">
                      1420 W Horizon Ridge Pkwy, Henderson
                    </span>
                  </a>
                </p>
                <p className="flex flex-row items-center gap-2 px-4 py-2">
                  {" "}
                  <Clock /> Tomorrow by 11:45 AM PDT
                </p>
              </div>
              <div></div>
            </div>
            <div className="border-t bg-[#B906060D] p-4 text-center">
              <p className="text-sm text-[#B90606]">
                You&apos;re saving <span className="font-bold">$1.21</span> by
                ordering directly from us vs. other websites{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="hidden flex-col gap-4 lg:flex">
          <h2 className="font-semibold">Tip </h2>
          <div className="grid-col-3 grid gap-2 lg:grid-cols-4">
            <Button className="flex justify-between gap-2 rounded-xl border border-gray-300 px-4 py-9">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base">$1.10</p>
                <p className="text-base">10%</p>
              </div>
            </Button>
            <Button className="flex justify-between gap-2 rounded-xl border border-gray-300 px-4 py-9">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base">$1.65</p>
                <p className="text-base">15%</p>
              </div>
            </Button>{" "}
            <Button className="flex justify-between gap-2 rounded-xl border border-gray-300 px-4 py-9">
              <div className="flex flex-col items-start gap-1">
                <p className="text-base">$2.20</p>
                <p className="text-base">20%</p>
              </div>
            </Button>
            <Button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-9">
              <p className="text-center text-base">custom</p>
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-lg">Your information</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex w-full">
              <form action="" className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full flex-col gap-y-1">
                    <div className="flex">
                      <Label htmlFor="" className="text-base">
                        Mobile number
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="phoneNumber"
                        className="w-full py-6 pr-4"
                        type="text"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-y-1">
              <div id="firstName" className="flex">
                <Label>First name</Label>
              </div>
              <div className="relative">
                <Input type="text" placeholder="First name" className="py-6" />
              </div>
              <span></span>
            </div>

            <div className="flex flex-col gap-y-1">
              <div className="flex">
                <Label>Last name</Label>
              </div>
              <div className="relative">
                <Input type="text" placeholder="Last name" className="py-6" />
              </div>
              <span></span>
            </div>

            <div className="col-span-2 flex w-full">
              <form action="" className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full flex-col gap-y-1">
                    <div className="flex">
                      <Label htmlFor="" className="text-base">
                        Email address
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id=""
                        className="w-full py-6 pr-4"
                        type="email"
                        placeholder=" Email address"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-span-2 flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox id="promoEmails" />
                  <span>Get promotional emails from Metro Pizza</span>
                </div>
              </Label>
              <Label className="flex items-center gap-3">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox id="promoTexts" />
                  <span>Get promotional texts from Metro Pizza</span>
                </div>
              </Label>{" "}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl">Payment</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex w-full flex-col gap-y-1">
                <div className="flex">
                  <Label htmlFor="" className="text-base">
                    Card Number
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    id=""
                    className="w-full py-6 pr-4"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              {/* First Name */}
              <div className="flex w-1/2 flex-col gap-y-1">
                <Label>Expiry date</Label>
                <Input type="text" placeholder="MM / YY" className="py-6" />
              </div>

              {/* Last Name */}
              <div className="flex w-1/2 flex-col gap-y-1">
                <Label>Security code</Label>
                <Input type="text" placeholder="CVC" className="py-6" />
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center rounded-xl bg-[#B90606]">
            <Button className="py-6 text-lg text-white">Place Order</Button>
          </div>
          <p className="text-sm leading-4">
            By signing up, you agree to receive email marketing communications
            from Metro Pizza and our technology partner Owner.com and consent to
            our <a href="">Terms & Policies</a>. You may receive email or SMS
            notifications from us for order updates and account access and can
            opt out any time.
          </p>

          <div className="flex flex-col gap-4">
            {/* Powered by Owner */}
            <a
              aria-label="Powered by Owner Opens in new tab"
              target="_blank"
              href="https://owner.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                className="text-mercury-ui-primary mr-1 inline-flex h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M12.353 10a2.353 2.353 0 1 1-4.706 0 2.353 2.353 0 0 1 4.706 0"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m0-3.726s5-2.607 5-6.274a5 5 0 0 0-10 0c0 3.667 5 6.275 5 6.275"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-mercury-ui-text-sm text-mercury-ui-primary font-mercury-ui-secondary">
                Powered by Owner
              </span>
            </a>

            {/* Terms & Accessibility */}
            <div className="flex flex-col flex-wrap gap-x-3 md:flex-row">
              <a
                aria-label="Terms & Policies Opens in new tab"
                target="_blank"
                href="https://metropizza.com/terms"
              >
                <span className="text-mercury-ui-text-sm text-mercury-ui-secondary font-mercury-ui-secondary">
                  Terms & Policies
                </span>
              </a>
              <a
                aria-label="Accessibility Statement Opens in new tab"
                target="_blank"
                href="https://owner.com/accessibility"
              >
                <span className="text-mercury-ui-text-sm text-mercury-ui-secondary font-mercury-ui-secondary">
                  Accessibility Statement
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden h-auto lg:block lg:py-2">
        <div className="sticky top-2 flex min-h-[calc(100vh-1rem)] flex-col gap-2 overflow-clip p-2">
          <section className="flex flex-col gap-4 overflow-clip p-4">
            <h2 className="text-lg">Order summary</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold">Subtotal</p>
                    </div>
                  </div>
                  <div className="flex">
                    <p className="flex flex-row gap-2 text-base font-semibold">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="fees">
                        <AccordionTrigger className="flex items-center gap-1 py-1">
                          <span className="text-mercury-ui-primary text-base">
                            Taxes &amp; fees
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="text-muted-foreground pt-2 text-sm">
                          <p>
                            🛈 We collect required state &amp; local taxes. A
                            small Owner.com platform fee keeps online ordering
                            running smoothly.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div></div>
                  <div className="flex">
                    <p className="flex flex-row gap-2 font-semibold">$1.47</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold">Tip</p>
                    </div>
                  </div>
                  <div className="flex">
                    <p className="flex flex-row gap-2 text-base font-semibold">
                      $2.20
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Dialog.Root>
                    {/* Trigger Button */}
                    <Dialog.Trigger asChild>
                      <div className="flex items-baseline gap-1">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="coupon-dialog"
                          data-state="closed"
                          className="group font-mercury-ui-primary font-mercury-ui-button-weight bg-mercury-ui-button-tertiary border-mercury-ui-button-tertiary text-mercury-ui-button-tertiary relative flex items-center border-b p-0"
                          aria-label="Add coupon or gift card"
                        >
                          Add coupon or gift card
                        </button>
                      </div>
                    </Dialog.Trigger>

                    {/* Overlay and Content */}
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />

                      <Dialog.Content
                        id="coupon-dialog"
                        className="rounded-t-mercury-ui-md data-[state=closed]:animate-slideOutDown md:animate-fadeIn md:data-[state=closed]:animate-fadeOut md:rounded-mercury-ui-md bg-mercury-ui-primary fixed inset-x-0 bottom-0 z-30 flex max-h-[95dvh] w-full flex-col overflow-hidden bg-white focus:outline-none md:inset-auto md:top-1/2 md:left-1/2 md:max-h-[80vh] md:w-[90vw] md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2"
                      >
                        <div className="flex h-full max-h-[95dvh] w-full flex-col md:max-h-[80vh]">
                          <div className="flex flex-grow flex-col gap-6 overflow-y-auto p-6 sm:p-8">
                            {/* Header with Title and Close */}
                            <div className="flex items-center justify-between gap-3">
                              <Dialog.Title className="text-mercury-ui-title-base md:text-mercury-ui-title-lg lg:text-mercury-ui-title-xl text-mercury-ui-primary font-mercury-ui-primary">
                                Add code
                              </Dialog.Title>
                              <Dialog.Close asChild>
                                <button
                                  aria-label="Close Dialog"
                                  className="focus:outline-mercury-ui-text-primary/10 focus:ring-mercury-ui-text-primary rounded-full border focus:ring-[1.5px] focus:outline-2"
                                >
                                  <span className="bg-mercury-ui-secondary flex h-8 w-8 items-center justify-center rounded-full">
                                    <X className="text-mercury-ui-secondary h-4 w-4" />
                                  </span>
                                </button>
                              </Dialog.Close>
                            </div>

                            {/* Input field */}
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
                              <span
                                className="text-mercury-ui-text-sm text-mercury-ui-secondary font-mercury-ui-secondary"
                                id="coupon-gift-card-input-helper-text"
                              />
                            </div>

                            {/* Done button */}
                            <Button
                              type="button"
                              aria-label="Done"
                              className="group relative flex min-h-12 items-center justify-center rounded-xl bg-[#B90606] px-4 py-3 transition-all ease-in-out hover:rounded-[calc(var(--mercury-ui-border-radius-control)*1.2)]"
                            >
                              <span className="absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
                              <span className="flex flex-1 items-center justify-center gap-x-2">
                                <span className="flex flex-row items-center gap-x-[4px] text-white">
                                  Done
                                  <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 translate-x-[-3px] opacity-50 transition-transform group-hover:translate-x-0 group-hover:opacity-100"
                                    role="img"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <line
                                      x1="70"
                                      y1="128"
                                      x2="216"
                                      y2="128"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="24"
                                      className="origin-[216px_128px] scale-x-0 transition-transform group-hover:scale-x-100"
                                    />
                                    <polyline
                                      points="144 56 216 128 144 200"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="24"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <p></p>
                </div>
              </div>

              <hr className="mt-2 border-t border-gray-400" />
              <div className="flex justify-between font-semibold">
                <p className="text-xl">Total</p>
                <span className="flex flex-row gap-2 font-semibold">
                  $10.56
                </span>
              </div>
            </div>
          </section>

          <div>
            <CartItemsList />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
