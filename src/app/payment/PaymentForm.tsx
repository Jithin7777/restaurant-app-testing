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
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  CreditCard,
  MapPin,
  Store,
} from "lucide-react";
import React from "react";
import { useCart } from "@/context/CartContext";
import CartItemsList from "./CartItemsList";
import CouponDialog from "./CouponDialog";
import OrderSummaryDrawer from "./OrderSummaryDrawer";

const PaymentForm = () => {
  const { subtotal, cartItems } = useCart();

  const totalCartCount = cartItems.reduce((total, cartItem) => {
    const mainQty = cartItem.quantity;
    const extrasQty =
      cartItem.extras?.reduce((eTotal, extra) => eTotal + extra.quantity, 0) ||
      0;
    return total + mainQty + extrasQty;
  }, 0);

  return (
    <div className="grid min-h-screen bg-transparent px-4 pt-14 pb-20 lg:grid lg:grid-cols-[1fr_25rem] lg:px-2 lg:pt-0 lg:pb-0">
      <div>
        <div className="mx-auto flex flex-col gap-8 overflow-y-auto sm:w-[31.25rem] lg:gap-10 lg:pt-16 lg:pb-20">
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
                  <p className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary flex flex-wrap items-start gap-2 px-4 py-2">
                    <span className="flex flex-row items-start gap-2">
                      <Store className="h-5 w-5 shrink-0" />

                      <span>
                        Pick up from <b>1420 W Horizon Ridge Pkwy, Henderson</b>
                      </span>
                    </span>
                  </p>
                  <p className="flex flex-row items-center gap-2 px-4 py-2">
                    {" "}
                    <Clock /> Tomorrow by 11:45 AM PDT
                  </p>

                  <CouponDialog>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 p-4 transition-colors hover:bg-gray-100 lg:hidden"
                      aria-haspopup="dialog"
                      aria-controls="coupon-dialog"
                    >
                      <CreditCard className="text-mercury-ui-primary h-5 w-5" />
                      <span className="flex grow items-center justify-between">
                        <span className="text-mercury-ui-secondary">
                          Add coupon or gift card
                        </span>
                        <ChevronRight className="text-mercury-ui-secondary h-5 w-5" />
                      </span>
                    </button>
                  </CouponDialog>

                  <OrderSummaryDrawer>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="cart-dialog"
                      data-state="closed"
                      className="w-full lg:hidden"
                    >
                      <span className="flex grow flex-row items-center gap-2 p-4">
                        <CreditCard className="text-mercury-ui-primary h-5 w-5 shrink-0" />

                        <span className="flex grow items-center justify-between">
                          <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary">
                            {totalCartCount}{" "}
                            {totalCartCount === 1 ? "item" : "items"}
                          </span>
                          <span className="text-mercury-ui-text-base text-mercury-ui-primary font-mercury-ui-secondary flex gap-2">
                            ${subtotal}
                          </span>
                        </span>

                        <ChevronRight className="text-mercury-ui-secondary h-5 w-5 shrink-0" />
                      </span>
                    </button>
                  </OrderSummaryDrawer>
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
                  <Input
                    type="text"
                    placeholder="First name"
                    className="py-6"
                  />
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
              from Metro Pizza and our technology partner Owner.com and consent
              to our <a href="">Terms & Policies</a>. You may receive email or
              SMS notifications from us for order updates and account access and
              can opt out any time.
            </p>

            <div className="flex flex-col gap-4">
              {/* Powered by Owner */}
              <a
                aria-label="Powered by Owner Opens in new tab"
                target="_blank"
                href="https://owner.com"
                className="flex items-center gap-1"
              >
                <MapPin className="text-mercury-ui-primary h-5 w-5" />
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
      </div>

      <div className="hidden h-auto rounded-xl bg-[rgb(235,235,236)] lg:block lg:py-2">
        <div className="sticky top-2 flex min-h-[calc(100vh-1rem)] flex-col gap-2 overflow-clip p-2">
          <section className="flex flex-col gap-4 overflow-clip rounded-xl bg-white p-4">
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
                  <CouponDialog>
                    <button
                      type="button"
                      className="flex items-center gap-2 transition-colors"
                    >
                      Add coupon or gift card
                    </button>
                  </CouponDialog>
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

          <div className="flex-1 overflow-y-auto pb-4">
            <CartItemsList />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
