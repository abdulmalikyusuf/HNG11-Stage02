import { Link as RRDLink } from "react-router-dom";

import { Icons } from "@/components/icons";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import CartImage from "@/assets/img/new-arrivals/Paste image.png";

function Cart() {
  return (
    <>
      <div className="px-4 py-8 md:py-13 md:px-0 flex justify-center">
        <h3 className="heading-4 md:heading-3">Cart</h3>
      </div>
      <div className="flex justify-center">
        <p className="fs-16 md:fs-18 text-center">
          Get 30% discount on any order above
          <span className="font-semibold"> $500</span>
        </p>
      </div>
      <div className="flex justify-center p-4 md:p-13">
        <div className="grid grid-cols-12 justify-center md:max-w-[1108px] w-full">
          <div className="col-span-full grid grid-cols-subgrid font-semibold pt-5 pb-2.5 border-t border-b border-primary">
            <div className="col-span-5">
              <p className="button-sm">Product</p>
            </div>
            <div className="col-span-3 justify-self-center">
              <p className="button-sm">Quantity</p>
            </div>
            <div className="col-span-2 justify-self-center">
              <p className="button-sm">Price</p>
            </div>
            <div className="col-span-2 justify-self-end">
              <p className="button-sm col-span-2">Subtotal</p>
            </div>
          </div>
          <div className="py-6 col-span-full grid grid-cols-subgrid items-center border-b border-primary">
            <div className="col-span-5 flex items-center gap-4">
              <div className="w-[77px] h-[102px]">
                <img src={CartImage} alt="" className="" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="fs-14 font-semibold">Zefison Chair</p>
                <p className="fs-12 text-black-600">Color: Brown</p>
                <Link
                  size="xSmall"
                  colour="light"
                  icon="close"
                  iconBefore="trashCan"
                  className="[&_span]:text-black-600 first:text-black-600"
                >
                  Remove
                </Link>
              </div>
            </div>
            <div className="col-span-3 justify-self-center">
              <div className="py-1.5 px-2 w-fit flex items-center gap-[13px] border border-primary rounded-[4px]">
                <button
                  type="button"
                  className="flex items-center justify-center"
                >
                  <Icons.minus className="stroke-[1.25px] size-4" />
                </button>
                <p className="fs-12 font-semibold">1</p>
                <button
                  type="button"
                  className="flex items-center justify-center"
                >
                  <Icons.plus className="stroke-[1.25px] size-4" />
                </button>
              </div>
            </div>
            <div className="col-span-2 justify-self-center">
              <p className="fs-18">$350</p>
            </div>
            <div className="col-span-2 justify-self-end">
              <p className="fs-18 font-semibold">$350</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4 md:p-13">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-md:gap-10 w-full md:max-w-[1108px]">
          <div className="md:max-w-[424px] flex flex-col gap-4">
            <div className="flex flex-col gap-[7px]">
              <p className="button-md md:button-lg">Have a coupon?</p>
              <p className="fs-14 md:fs-16 text-black-600">
                Add your code for an instant cart discount
              </p>
            </div>
            <div className="border border-primary rounded-md flex items-center gap-2 px-4 h-[46px] md:h-[52px] focus:border-black-900 disabled:border-black-400 invalid:border-red-500">
              <input
                type="text"
                placeholder="Input"
                className="peer w-full fs-14 md:fs-16 text-black-900 placeholder:text-black-400 bg-transparent focus:outline-none"
              />
              <Link size="xSmall" colour="light" className="">
                Apply
              </Link>
            </div>
          </div>
          <div className="md:max-w-[538px] p-4 md:p-6 border border-primary rounded-md">
            <div className="flex flex-col gap-4">
              <p className="button-lg">Cart summary</p>
              <div className="">
                <div className="pb-6 md:pb-8">
                  <div className="pb-4 flex flex-col gap-5 md:gap-3">
                    {[
                      { title: "Free shipping", price: 0.0 },
                      { title: "Express shipping", price: 15.0 },
                    ].map((shippingMethod) => (
                      <div
                        key={shippingMethod.title}
                        className="px-4 py-[13px] relative has-[input:checked]:bg-black-50 rounded-[4px] border border-primary has-[input:checked]:border-black-900"
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="shippingProvider"
                              checked
                              className="size-[18px] before:absolute before:inset-0 "
                            />
                            <p className="fs-14">{shippingMethod.title}</p>
                          </div>
                          <p className="fs-14">
                            {formatPrice(shippingMethod.price, "USD")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-b border-primary py-[13px] flex justify-between items-center">
                    <p className="fs-14 md:fs-16 inline-flex items-center gap-2">
                      <Icons.coupon className="" />
                      <span className="">Subtotal</span>
                    </p>
                    <p className="fs-14 md:fs-16 font-semibold">$160.00</p>
                  </div>
                  <div className="py-[13px] flex justify-between items-center">
                    <p className="fs-16 md:fs-18 font-semibold">Total</p>
                    <p className="fs-16 md:fs-18 font-semibold">$160.00</p>
                  </div>
                </div>

                <RRDLink to="/checkout">
                  <Button
                    size="medium"
                    fill="solid"
                    colour="light"
                    roundness="rounded"
                    iconRight="arrowRight"
                    className="w-full bg-primary"
                  >
                    Checkout
                  </Button>
                </RRDLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
