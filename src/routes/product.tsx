import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { Swatches } from "@/components/products/swatches";
import { Icons } from "@/components/icons";
import { RatingText } from "@/components/products/rating";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import Images from "@/components/product/images";
import { getProduct } from "@/queries/product";
import { queryClient } from "@/App";
import { postCart } from "@/queries/cart";
import { formatPrice } from "@/lib/utils";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";

function Page() {
  const params = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const availableQuantity = 10;

  const changeQuantity = (amount: 1 | -1) => {
    if (amount === 1) {
      setQuantity((prev) =>
        prev >= availableQuantity ? availableQuantity : prev + 1
      );
    } else {
      setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
    }
  };

  const { status, data: product } = useQuery({
    queryKey: ["products", params.productId],
    queryFn: () => getProduct(params.productId),
  });

  const mutation = useMutation({
    mutationFn: postCart,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  if (status === "pending") return <Loading />;
  if (status === "error" || !product) return <ErrorComponent />;

  return (
    <>
      <div className="p-4 md:py-13 md:px-0 md:flex flex-row justify-center items-start gap-20 wfit mx-auto">
        <Breadcrumb className="md:hidden mb-4">
          <BreadcrumbList className="gap-3">
            <BreadcrumbItem className="gap-1 fs-12 text-black-600">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="gap-1 fs-12 text-black-600">
              <BreadcrumbLink href="/products?q=clothing">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="gap-1 fs-12">
              <BreadcrumbLink href={`/products/${params.productId}`}>
                "{product.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Images images={product.photos} productName={product.name} />
        <div className="md:w-[456px] py-6 md:py-0">
          <div className="flex flex-col gap-4 pb-6">
            <div className="flex flex-col gap-2">
              <Breadcrumb className="max-md:hidden">
                <BreadcrumbList className="gap-3">
                  <BreadcrumbItem className="gap-1 fs-12 text-black-600">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className="gap-1 fs-12 text-black-600">
                    <BreadcrumbLink href="/products?q=clothing">
                      Products
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className="gap-1 fs-12">
                    <BreadcrumbLink href={`/products/${params.productId}`}>
                      "{product.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex flex-col gap-3">
                <h5 className="button-xl md:heading-5">{product.name}</h5>
                <p className="fs-14 text-text-blue">{product.description}</p>
                <RatingText noOfreviews={23} size="sm" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="fs-22 md:fs-26 font-semibold">
                {formatPrice(product.current_price as unknown as number)}
              </p>
              {product.discounted_price && (
                <p className="fs-16 line-through text-black-400">
                  {formatPrice(product.discounted_price as unknown as number)}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 md:gap-2 pt-2">
              <Icons.eye className="size-5 md:size-6" />
              <p className="fs-16">
                <span className="font-semibold">32</span> people are looking at
                this product
              </p>
            </div>
          </div>
          <div className="py-6 flex flex-col gap-6">
            <div className="">
              <p className="fs-12 font-semibold text-black-600 capitalize">
                color:
              </p>
              <div className="mt-3">
                <Swatches
                  colours={[
                    "bg-red-300",
                    "bg-blue-200",
                    "bg-indigo-100",
                    "bg-black-900",
                  ]}
                  size="large"
                  variant="circle"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-6 flex flex-col gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex justify-between px-4 py-3 bg-black-100">
                  <button
                    type="button"
                    className=""
                    onClick={() => changeQuantity(-1)}
                  >
                    <Icons.minus className="size-5" />
                  </button>
                  <p className="fs-16 font-semibold">{quantity}</p>
                  <button
                    type="button"
                    className=""
                    onClick={() => changeQuantity(1)}
                  >
                    <Icons.plus className="size-5" />
                  </button>
                </div>
                <Button
                  size="medium"
                  roundness="sharp"
                  iconRight="arrowRight"
                  className="w-full"
                  onClick={() =>
                    mutation.mutate({ quantity, uniqueId: params.productId })
                  }
                >
                  Add to Cart
                </Button>
                <Button
                  size="medium"
                  roundness="sharp"
                  iconRight="arrowRight"
                  className="w-full bg-white border border-primary text-primary"
                  onClick={() => {
                    mutation.mutate({ quantity, uniqueId: params.productId });
                    navigate("/cart");
                  }}
                >
                  Proced to checkout
                </Button>
              </div>
              <div className="flex gap-8">
                <Link
                  size="small"
                  colour="light"
                  icon="heart"
                  iconPlacement="left"
                  className="max-md:gap-0.5 max-md:button-xs max-md:[--icon-size:18px]"
                >
                  Wishlist
                </Link>
                <Link
                  size="small"
                  colour="light"
                  icon="heart"
                  iconPlacement="left"
                  className="max-md:gap-0.5 max-md:button-xs max-md:[--icon-size:18px]"
                >
                  Ask question
                </Link>
                <Link
                  size="small"
                  colour="light"
                  icon="heart"
                  iconPlacement="left"
                  className="max-md:gap-0.5 max-md:button-xs max-md:[--icon-size:18px]"
                >
                  Share
                </Link>
              </div>
            </div>
            <div className="">
              <div className="py-6 flex flex-col gap-4">
                <div className="flex gap-1 md:gap-2">
                  <Icons.calendar className="size-5 md:size-6" />
                  <p className="fs-14 md:fs-16">
                    <span className="font-semibold">Delivery:</span> 10 - 12
                    Oct, 2023
                  </p>
                </div>
                <div className="flex gap-1 md:gap-2">
                  <Icons.truck className="size-5 md:size-6" />
                  <p className="fs-14 md:fs-16">
                    <span className="font-semibold">Shipping:</span> Free for
                    orders above $100
                  </p>
                </div>
              </div>
              <div className="py-6 flex flex-col gap-4">
                <p className="fs-14 text-black-700">
                  Guaranteed & secure checkout
                </p>
                <div className="flex gap-5 md:gap-6">
                  <svg
                    width="31"
                    height="20"
                    viewBox="0 0 31 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5433 2.52493H11.2239V17.4748H19.5433V2.52493Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M11.7521 9.99988C11.7508 8.5601 12.0771 7.13889 12.7063 5.84384C13.3354 4.54879 14.251 3.41385 15.3836 2.52494C13.981 1.42248 12.2965 0.736873 10.5226 0.546489C8.74877 0.356105 6.95713 0.668614 5.35249 1.44831C3.74785 2.22801 2.39496 3.44344 1.44845 4.95566C0.501935 6.46788 0 8.21588 0 9.99988C0 11.7839 0.501935 13.5319 1.44845 15.0441C2.39496 16.5563 3.74785 17.7717 5.35249 18.5514C6.95713 19.3311 8.74877 19.6437 10.5226 19.4533C12.2965 19.2629 13.981 18.5773 15.3836 17.4748C14.251 16.5859 13.3354 15.451 12.7063 14.1559C12.0771 12.8609 11.7508 11.4397 11.7521 9.99988Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M30.7668 9.99988C30.7668 11.7838 30.2649 13.5318 29.3185 15.0441C28.372 16.5563 27.0192 17.7717 25.4146 18.5514C23.81 19.3311 22.0183 19.6437 20.2445 19.4533C18.4707 19.2629 16.7862 18.5773 15.3836 17.4748C16.5153 16.585 17.4301 15.4499 18.0592 14.155C18.6882 12.8602 19.0151 11.4394 19.0151 9.99988C19.0151 8.56032 18.6882 7.13956 18.0592 5.84471C17.4301 4.54987 16.5153 3.41475 15.3836 2.52494C16.7862 1.42247 18.4707 0.736868 20.2445 0.546486C22.0183 0.356104 23.81 0.668628 25.4146 1.44833C27.0192 2.22804 28.372 3.44347 29.3185 4.95569C30.2649 6.46791 30.7668 8.21591 30.7668 9.99988Z"
                      fill="#F79E1B"
                    />
                    <path
                      d="M29.8596 15.8914V15.5853H29.9831V15.523H29.6687V15.5853H29.7922V15.8914H29.8596ZM30.4699 15.8914V15.5224H30.3735L30.2627 15.7762L30.1519 15.5224H30.0555V15.8914H30.1235V15.613L30.2274 15.853H30.298L30.4019 15.6124V15.8914H30.4699Z"
                      fill="#F79E1B"
                    />
                    <title className="sr-only">Mastercard</title>
                  </svg>
                  <Icons.googlePayLogo className="h-[19px]" />
                  <Icons.payPalLogo className="h-[19px]" />
                  <svg
                    width="39"
                    height="14"
                    viewBox="0 0 39 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.73392 13.1248H6.4568L3.99935 3.47377C3.88271 3.02983 3.63505 2.63735 3.27075 2.45237C2.36159 1.98751 1.35975 1.61756 0.266846 1.43097V1.05941H5.54604C6.27464 1.05941 6.8211 1.61756 6.91217 2.26579L8.18723 9.2274L11.4628 1.05941H14.6488L9.73392 13.1248ZM16.4702 13.1248H13.3753L15.9238 1.0594H19.0188L16.4702 13.1248ZM23.0245 4.40004C23.1156 3.75021 23.6621 3.37864 24.2996 3.37864C25.3014 3.28535 26.3927 3.47194 27.3035 3.93519L27.8499 1.33745C26.9392 0.965884 25.9373 0.779297 25.0282 0.779297C22.0243 0.779297 19.8385 2.45053 19.8385 4.77C19.8385 6.53453 21.3868 7.46103 22.4797 8.01918C23.6621 8.57572 24.1174 8.94729 24.0264 9.50383C24.0264 10.3386 23.1156 10.7102 22.2064 10.7102C21.1135 10.7102 20.0206 10.4319 19.0204 9.96708L18.4739 12.5664C19.5668 13.0297 20.7492 13.2163 21.8421 13.2163C25.2103 13.3079 27.3035 11.6383 27.3035 9.13227C27.3035 5.97638 23.0245 5.7914 23.0245 4.40004V4.40004ZM38.1324 13.1248L35.675 1.0594H33.0354C32.4889 1.0594 31.9425 1.43097 31.7603 1.98751L27.2097 13.1248H30.3958L31.0317 11.3619H34.9464L35.3107 13.1248H38.1324ZM33.4916 4.30738L34.4007 8.85463H31.8522L33.4916 4.30738Z"
                      fill="#172B85"
                    />
                    <title className="sr-only">VISA</title>
                  </svg>
                  <svg
                    width="42"
                    height="18"
                    viewBox="0 0 42 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.30239 2.41343C7.83085 3.01298 7.07639 3.48587 6.32193 3.41831C6.22762 2.60765 6.59699 1.74632 7.02924 1.21433C7.50078 0.597886 8.32597 0.158778 8.99398 0.125C9.07257 0.969439 8.76607 1.79699 8.30239 2.41343ZM8.98605 3.57871C8.32138 3.5376 7.7149 3.79349 7.22503 4.00017C6.90979 4.13318 6.64284 4.24581 6.43974 4.24581C6.21183 4.24581 5.93385 4.12716 5.62175 3.99394C5.2128 3.81937 4.74525 3.61979 4.25495 3.62937C3.13111 3.64626 2.08587 4.33026 1.51216 5.41958C0.333318 7.59823 1.20566 10.824 2.34522 12.5973C2.9032 13.4755 3.57122 14.4382 4.45142 14.4044C4.83866 14.3887 5.11721 14.2617 5.40549 14.1303C5.73738 13.9789 6.08216 13.8217 6.6205 13.8217C7.14018 13.8217 7.46987 13.9748 7.78636 14.1218C8.08729 14.2615 8.37628 14.3957 8.80529 14.3875C9.71693 14.3706 10.2906 13.5093 10.8486 12.6311C11.4508 11.6885 11.7154 10.7686 11.7556 10.629L11.7603 10.6129C11.7593 10.6118 11.7519 10.6082 11.7387 10.6017C11.5374 10.5027 9.9989 9.7459 9.98414 7.71645C9.96932 6.01303 11.2045 5.14997 11.3989 5.01411C11.4107 5.00585 11.4187 5.00027 11.4223 4.99736C10.6364 3.74759 9.41043 3.61248 8.98605 3.57871ZM15.2969 14.2946V1.12985H19.8944C22.2678 1.12985 23.926 2.88628 23.926 5.45337C23.926 8.02046 22.2363 9.79378 19.8315 9.79378H17.1987V14.2946H15.2969ZM17.1986 2.85259H19.3912C21.0416 2.85259 21.9847 3.79836 21.9847 5.46191C21.9847 7.12545 21.0416 8.07966 19.3834 8.07966H17.1986V2.85259ZM30.2054 12.7155C29.7025 13.7457 28.5943 14.3959 27.3998 14.3959C25.6315 14.3959 24.3977 13.2644 24.3977 11.5586C24.3977 9.86975 25.5922 8.89865 27.8006 8.75509L30.174 8.60309V7.87688C30.174 6.80444 29.5217 6.22178 28.3586 6.22178C27.3998 6.22178 26.7003 6.75377 26.5589 7.56443H24.8456C24.9006 5.85867 26.3938 4.61735 28.4136 4.61735C30.5905 4.61735 32.0051 5.84178 32.0051 7.74177V14.2946H30.2447V12.7155H30.2054ZM27.9105 12.8338C26.8967 12.8338 26.2523 12.3103 26.2523 11.5081C26.2523 10.6805 26.8731 10.1992 28.0598 10.1232L30.1739 9.97962V10.7227C30.1739 11.9556 29.1994 12.8338 27.9105 12.8338ZM37.8443 14.8098C37.082 17.1151 36.2096 17.8751 34.3549 17.8751C34.2134 17.8751 33.7419 17.8582 33.6319 17.8244V16.2453C33.7498 16.2622 34.0405 16.2791 34.1899 16.2791C35.0308 16.2791 35.5023 15.8991 35.7931 14.9111L35.966 14.3284L32.7438 4.74406H34.7321L36.9719 12.5213H37.0112L39.251 4.74406H41.1844L37.8443 14.8098Z"
                      fill="black"
                    />
                    <title className="sr-only">Apple Pay</title>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MoreDetails /> */}
      {/* <SimilarItems /> */}
    </>
  );
}

export default Page;
