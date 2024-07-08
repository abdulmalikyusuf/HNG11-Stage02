import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input, InputLabel, InputElement } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { formatPrice } from "@/lib/utils";
import CartImage from "@/assets/img/new-arrivals/Paste image.png";

function CheckoutPage() {
  return (
    <>
      <div className="px-4 py-8 md:py-13 md:px-0 flex justify-center">
        <h3 className="heading-4 md:heading-3">Checkout</h3>
      </div>
      <div className="flex justify-center p-4 py-6 md:px-13 md:py-0 mb-10 md:mb-20">
        <div className="flex flex-wrap md:justify-center md: items-start gap-4 md:gap-8 w-full md:max-w-[1108px]">
          <div className="flex-1 flex flex-col gap-6">
            <div className="p-6 flex flex-col gap-6 border border-primary rounded-md">
              <p className="col-span-full button-lg">Shipping address</p>
              <div className="grid md:grid-cols-2 gap-8">
                <Input className="col-span-full">
                  <InputLabel>Street address *</InputLabel>
                  <InputElement
                    variant="contained"
                    placeholder="Street address"
                  />
                </Input>
                <Input className="col-span-full">
                  <InputLabel>Country *</InputLabel>
                  <InputElement variant="contained" placeholder="Country" />
                </Input>
                <Input className="col-span-full">
                  <InputLabel>Town / City *</InputLabel>
                  <InputElement variant="contained" placeholder="Town / City" />
                </Input>
                <Input>
                  <InputLabel>State</InputLabel>
                  <InputElement variant="contained" placeholder="State" />
                </Input>
                <Input>
                  <InputLabel>Zip code</InputLabel>
                  <InputElement variant="contained" placeholder="Zip code" />
                </Input>
              </div>
              <div className="flex items-center-gap-3">
                <div className="shrink-0">
                  <Checkbox />
                </div>
                <p className="fs-16 text-black-600">
                  Use a different billing address (optional)
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-6 border border-primary rounded-md">
              <p className="col-span-full button-lg">Payment information</p>
              <div className="">
                <div className="px-4 py-[13px] relative has-[input:checked]:bg-black-50 rounded-[4px] border border-primary has-[input:checked]:border-black-900">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="size-[18px] before:absolute before:inset-0"
                      />
                      <p className="fs-16">Pay by card</p>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title className="sr-only">Credit card</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.59399 7.94727C3.59399 6.70462 4.60135 5.69727 5.84399 5.69727H17.844C19.0866 5.69727 20.094 6.70462 20.094 7.94727V9.19727H3.59399V7.94727ZM2.09399 9.94727V7.94727C2.09399 5.8762 3.77293 4.19727 5.84399 4.19727H17.844C19.9151 4.19727 21.594 5.8762 21.594 7.94727V9.94727V15.9473C21.594 18.0183 19.9151 19.6973 17.844 19.6973H5.84399C3.77293 19.6973 2.09399 18.0183 2.09399 15.9473V9.94727ZM20.094 10.6973V15.9473C20.094 17.1899 19.0866 18.1973 17.844 18.1973H5.84399C4.60135 18.1973 3.59399 17.1899 3.59399 15.9473V10.6973H20.094ZM6.09399 14.9473C6.09399 14.5331 6.42978 14.1973 6.84399 14.1973H6.85399C7.26821 14.1973 7.60399 14.5331 7.60399 14.9473C7.60399 15.3615 7.26821 15.6973 6.85399 15.6973H6.84399C6.42978 15.6973 6.09399 15.3615 6.09399 14.9473ZM10.844 14.1973C10.4298 14.1973 10.094 14.5331 10.094 14.9473C10.094 15.3615 10.4298 15.6973 10.844 15.6973H12.844C13.2582 15.6973 13.594 15.3615 13.594 14.9473C13.594 14.5331 13.2582 14.1973 12.844 14.1973H10.844Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-8">
                  <Input className="col-span-full">
                    <InputLabel>Card number</InputLabel>
                    <InputElement
                      variant="contained"
                      placeholder="1234 1234 1234"
                    />
                  </Input>
                  <Input>
                    <InputLabel>Expiry date</InputLabel>
                    <InputElement variant="contained" placeholder="MM/YY" />
                  </Input>
                  <Input>
                    <InputLabel>CVC code</InputLabel>
                    <InputElement variant="contained" placeholder="CVC code" />
                  </Input>
                </div>
              </div>
            </div>
            <div className="">
              <p className="fs-16 text-black-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="mt-4">
                <Button
                  size="large"
                  fill="solid"
                  colour="light"
                  roundness="rounded"
                  iconRight="arrowRight"
                  className="w-full bg-primary"
                >
                  Place order
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-6 md:py-4 flex-1 md:flex-none flex flex-col gap-4 md:w-[424px] border border-primary rounded-md">
            <p className="button-lg border-b border-primary">Order summary</p>
            <div className="py-4 border-b border-primary flex gap-4">
              <div className="w-[77px] h-[102px]">
                <img src={CartImage} alt="" className="" />
              </div>
              <div className="flex items-end md:items-start justify-between md:gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <p className="fs-14 font-semibold">Zefison Chair</p>
                  <p className="fs-12 text-black-600">Color: Brown</p>
                  <button type="button" className="inline-flex items-center">
                    <Icons.trashCan className="size-5 text-black-600" />
                    <span className="text-base font-medium capitalize">
                      remove
                    </span>
                  </button>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-2">
                  <p className="fs-14 font-semibold">$350</p>
                </div>
              </div>
            </div>
            <div className="pb-4 flex flex-col gap-5 md:gap-3">
              {[
                { title: "Free shipping", price: 0.0 },
                { title: "Express shipping", price: 15.0 },
              ].map((shippingMethod) => (
                <div
                  key={shippingMethod.title}
                  className="px-4 py-[13px] relative has-[input:checked]:bg-primary/50 rounded-[4px] border border-primary has-[input:checked]:border-primary"
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
            <div className="">
              <div className="py-[13px] flex items-center justify-between">
                <p className="fs-14 md:fs-16">Shipping</p>
                <p className="fs-14 md:fs-16 font-semibold">Free</p>
              </div>
              <div className="py-[13px] flex items-center justify-between border-b border-primary fs-16 md:fs-18 font-semibold">
                <p className="">Subtotal</p>
                <p className="">$370.00</p>
              </div>
              <div className="py-[13px] flex items-center justify-between fs-16 md:fs-18 font-semibold">
                <p className="">Total</p>
                <p className="">$370.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
