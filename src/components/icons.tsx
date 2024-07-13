import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import {
  Image,
  ArrowLeftRight,
  Banknote,
  Check,
  ChevronDown,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Lock,
  type LucideIcon,
  type LucideProps,
  Mail,
  Menu,
  Phone,
  Play,
  Search,
  ShoppingBag,
  Star,
  Truck,
  Twitter,
  User,
  X,
  Plus,
  SlidersHorizontal,
  Barcode,
  Tally4,
  Tally3,
  Tally2,
  Tally1,
  Equal,
  Minus,
  Calendar,
  Ticket,
  Trash,
  PictureInPicture,
  LogOut,
  Pencil,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
} from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type Icon = LucideIcon;

export const Icons = {
  chevronDown: ChevronDown,
  ChevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronUp: ChevronUp,
  edit: Pencil,
  logOut: LogOut,
  picture: PictureInPicture,
  trashCan: Trash,
  coupon: Ticket,
  close: X,
  check: Check,
  search: Search,
  star: Star,
  user: User,
  play: Play,
  truck: Truck,
  money: Banknote,
  lock: Lock,
  phone: Phone,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  mail: Mail,
  heart: Heart,
  eye: Eye,
  compare: ArrowLeftRight,
  shoppingBag: ShoppingBag,
  hamburgerMenu: Menu,
  placeholder: Image,
  plus: Plus,
  filter: SlidersHorizontal,
  tally5: Barcode,
  tally4: Tally4,
  tally3: Tally3,
  tally2: Tally2,
  tally1: Tally1,
  equal: Equal,
  minus: Minus,
  calendar: Calendar,
  "chevron-down": ChevronDown,
  cart: (props: LucideProps) => (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3075 7.0004C11.3075 6.82818 11.3947 6.4624 11.7486 6.13472C12.0904 5.81824 12.7518 5.47476 13.9998 5.47476C15.2478 5.47476 15.9093 5.81824 16.2511 6.13472C16.605 6.4624 16.6921 6.82818 16.6921 7.0004H18.3075C18.3075 6.39484 18.0447 5.59395 17.3486 4.94941C16.6404 4.29367 15.5518 3.85938 13.9998 3.85938C12.4478 3.85938 11.3593 4.29367 10.6511 4.94941C9.95497 5.59395 9.69214 6.39484 9.69214 7.0004H11.3075ZM11.3075 7.00042V8.82062H16.6921V7.00042H18.3075V8.82062H21.0819C21.5279 8.82062 21.8896 9.18224 21.8896 9.62831V20.6614C21.8896 21.2958 21.6355 21.9028 21.1853 22.3494C20.7353 22.7957 20.1264 23.0453 19.4929 23.0453H8.37006C7.73652 23.0453 7.12763 22.7957 6.67767 22.3494C6.2275 21.9028 5.97339 21.2958 5.97339 20.6614V9.62831C5.97339 9.18224 6.335 8.82062 6.78108 8.82062H9.69214V7.00042H11.3075ZM9.69214 12.8338V10.436H7.58877V20.6614C7.58877 20.8631 7.66948 21.0579 7.81529 21.2025C7.96131 21.3474 8.16075 21.4299 8.37006 21.4299H19.4929C19.7022 21.4299 19.9016 21.3474 20.0477 21.2025C20.1935 21.0579 20.2742 20.8631 20.2742 20.6614V10.436H18.3075V12.8338H16.6921V10.436H11.3075V12.8338H9.69214Z"
        fill="#121212"
      />
      <title className="sr-only">Cart</title>
    </svg>
  ),
  discount: (props: LucideProps) => (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M3.69946 10.9523C3.69946 6.77568 7.08531 3.38983 11.262 3.38983C15.4386 3.38983 18.8245 6.77568 18.8245 10.9523C18.8245 15.129 15.4386 18.5148 11.262 18.5148C7.08531 18.5148 3.69946 15.129 3.69946 10.9523ZM11.262 2.01483C6.32592 2.01483 2.32446 6.01629 2.32446 10.9523C2.32446 15.8884 6.32592 19.8898 11.262 19.8898C16.198 19.8898 20.1995 15.8884 20.1995 10.9523C20.1995 6.01629 16.198 2.01483 11.262 2.01483ZM10.5834 8.70833C10.5834 9.46772 9.96781 10.0833 9.20841 10.0833C8.44902 10.0833 7.83341 9.46772 7.83341 8.70833C7.83341 7.94894 8.44902 7.33333 9.20841 7.33333C9.96781 7.33333 10.5834 7.94894 10.5834 8.70833ZM14.4981 8.68847C14.7666 8.41998 14.7666 7.98468 14.4981 7.71619C14.2296 7.44771 13.7943 7.44771 13.5258 7.71619L8.02583 13.2162C7.75734 13.4847 7.75734 13.92 8.02583 14.1885C8.29431 14.457 8.72961 14.457 8.9981 14.1885L14.4981 8.68847ZM13.7917 14.6667C14.5511 14.6667 15.1667 14.0511 15.1667 13.2917C15.1667 12.5323 14.5511 11.9167 13.7917 11.9167C13.0324 11.9167 12.4167 12.5323 12.4167 13.2917C12.4167 14.0511 13.0324 14.6667 13.7917 14.6667Z"
      />
      <title className="sr-only">Discount</title>
    </svg>
  ),
  arrowRight: (props: LucideProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66666 16H25.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 24L25.3333 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 8L25.3333 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <title className="sr-only">Chevron Right</title>
    </svg>
  ),
  metaLogo: (props: LucideProps) => (
    <svg
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.05802 10.5514C3.05802 11.4712 3.25981 12.1773 3.52377 12.6045C3.86975 13.1641 4.38575 13.4016 4.91183 13.4016C5.59028 13.4016 6.21101 13.2332 7.40716 11.5788C8.3657 10.2527 9.49466 8.39145 10.2544 7.22456L11.5411 5.24764C12.4349 3.87471 13.4694 2.34851 14.6555 1.31399C15.6242 0.469568 16.6685 0.000488281 17.7197 0.000488281C19.4848 0.000488281 21.1659 1.0233 22.4526 2.94159C23.8607 5.04241 24.5442 7.68869 24.5442 10.4194C24.5442 12.0429 24.2243 13.2357 23.6797 14.1781C23.1537 15.0894 22.1284 16 20.4036 16V13.4012C21.8805 13.4012 22.249 12.0441 22.249 10.4911C22.249 8.27794 21.733 5.82196 20.5963 4.06702C19.7897 2.82223 18.7443 2.06165 17.5941 2.06165C16.3501 2.06165 15.3491 3.00001 14.2241 4.67262C13.626 5.56144 13.012 6.64449 12.3226 7.86668L11.5636 9.21116C10.0392 11.9147 9.65297 12.5302 8.89068 13.5461C7.55468 15.3251 6.41371 15.9996 4.91183 15.9996C3.13006 15.9996 2.00342 15.2281 1.3056 14.0654C0.73603 13.1181 0.456238 11.8749 0.456238 10.4585L3.05802 10.5514Z"
        fill="#0081FB"
      />
      <path
        d="M2.50728 3.12454C3.70011 1.28586 5.42154 0 7.39593 0C8.53932 0 9.67625 0.338415 10.863 1.30765C12.1614 2.36709 13.5452 4.11264 15.2717 6.98827L15.8907 8.01996C17.3851 10.5095 18.2353 11.7904 18.7329 12.3943C19.3728 13.1699 19.821 13.4012 20.4032 13.4012C21.8801 13.4012 22.2486 12.0441 22.2486 10.4911L24.5438 10.419C24.5438 12.0425 24.2239 13.2353 23.6793 14.1777C23.1533 15.089 22.128 15.9997 20.4032 15.9997C19.331 15.9997 18.3811 15.7668 17.3306 14.7758C16.5234 14.0152 15.579 12.664 14.8528 11.4494L12.6924 7.84076C11.6086 6.02973 10.6139 4.67939 10.0388 4.06784C9.41966 3.41019 8.62387 2.61611 7.35396 2.61611C6.3262 2.61611 5.45332 3.33734 4.72292 4.44057L2.50728 3.12454Z"
        fill="url(#paint0_linear_227_58183)"
      />
      <path
        d="M7.35439 2.61611C6.32664 2.61611 5.45376 3.33734 4.72335 4.44057C3.69045 5.99946 3.05852 8.32144 3.05852 10.5513C3.05852 11.4711 3.26032 12.1772 3.52427 12.6044L1.3056 14.0653C0.73603 13.118 0.456238 11.8748 0.456238 10.4584C0.456238 7.88253 1.16324 5.19781 2.50771 3.12454C3.70054 1.28586 5.42198 0 7.39637 0L7.35439 2.61611Z"
        fill="url(#paint1_linear_227_58183)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_227_58183"
          x1="5.67752"
          y1="7.58518"
          x2="22.2633"
          y2="8.42285"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0064E1" />
          <stop offset="0.4" stopColor="#0064E1" />
          <stop offset="0.83" stopColor="#0073EE" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_227_58183"
          x1="3.92625"
          y1="11.6436"
          x2="3.92625"
          y2="5.52866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0082FB" />
          <stop offset="1" stopColor="#0064E0" />
        </linearGradient>
      </defs>
      <title className="sr-only">Meta Logo</title>
    </svg>
  ),
  googleLogo: (props: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 10.2252C20 9.56683 19.9404 8.94183 19.8382 8.3335H10.2171V12.0918H15.7258C15.4789 13.3252 14.7552 14.3668 13.6824 15.0752V17.5752H16.9689C18.8931 15.8335 20 13.2668 20 10.2252Z"
        fill="#4285F4"
      />
      <path
        d="M10.2171 19.9999C12.9757 19.9999 15.2831 19.0999 16.9689 17.5749L13.6824 15.0749C12.7629 15.6749 11.5964 16.0415 10.2171 16.0415C7.55215 16.0415 5.29587 14.2832 4.48702 11.9082H1.09834V14.4832C2.77565 17.7499 6.22393 19.9999 10.2171 19.9999Z"
        fill="#34A853"
      />
      <path
        d="M4.48702 11.9083C4.27416 11.3083 4.16347 10.6666 4.16347 9.99993C4.16347 9.33327 4.28267 8.6916 4.48702 8.0916V5.5166H1.09834C0.40017 6.8666 0 8.38327 0 9.99993C0 11.6166 0.40017 13.1333 1.09834 14.4833L4.48702 11.9083Z"
        fill="#FBBC05"
      />
      <path
        d="M10.2171 3.95833C11.7241 3.95833 13.0694 4.46667 14.1337 5.45833L17.0456 2.60833C15.2831 0.991667 12.9757 0 10.2171 0C6.22393 0 2.77565 2.25 1.09834 5.51667L4.48702 8.09167C5.29587 5.71667 7.55215 3.95833 10.2171 3.95833Z"
        fill="#EA4335"
      />
      <title className="sr-only">Google Logo</title>
    </svg>
  ),
  payPalLogo: (props: LucideProps) => (
    <svg
      width="84"
      height="22"
      viewBox="0 0 84 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.553 0.0615236H4.21197C4.00205 0.0613903 3.79898 0.136766 3.63935 0.274068C3.47973 0.411371 3.37404 0.601573 3.34134 0.810403L0.776752 17.1858C0.764962 17.2618 0.769665 17.3395 0.790536 17.4135C0.811406 17.4874 0.847948 17.556 0.897648 17.6144C0.947347 17.6728 1.00902 17.7196 1.07843 17.7517C1.14783 17.7838 1.22332 17.8004 1.29968 17.8002H4.32694C4.53699 17.8003 4.74017 17.7248 4.89981 17.5874C5.05946 17.4499 5.16506 17.2594 5.19756 17.0504L5.88924 12.6337C5.92172 12.4249 6.02718 12.2346 6.18664 12.0971C6.34609 11.9596 6.54904 11.884 6.75894 11.8839H8.76629C12.9433 11.8839 15.3539 9.84831 15.9835 5.81445C16.2672 4.04963 15.9955 2.66299 15.175 1.69188C14.2738 0.625517 12.6753 0.0615236 10.553 0.0615236ZM11.2845 6.04229C10.9378 8.33374 9.19928 8.33374 7.5183 8.33374H6.56145L7.23273 4.0543C7.25238 3.9291 7.31575 3.81507 7.41145 3.73274C7.50714 3.6504 7.62887 3.60516 7.75473 3.60516H8.19329C9.33836 3.60516 10.4185 3.60516 10.9767 4.26253C11.3096 4.65471 11.4115 5.23738 11.2845 6.04229ZM29.5074 5.96852H26.4709C26.345 5.96852 26.2233 6.01376 26.1276 6.0961C26.0319 6.17843 25.9685 6.29246 25.9489 6.41766L25.8144 7.27299L25.6021 6.96298C24.9447 6.00213 23.4788 5.68092 22.0157 5.68092C18.6603 5.68092 15.7943 8.24037 15.2362 11.8307C14.946 13.6217 15.3586 15.3342 16.3673 16.5285C17.2927 17.6266 18.6167 18.0841 20.192 18.0841C22.8956 18.0841 24.3949 16.3333 24.3949 16.3333L24.2595 17.183C24.2475 17.259 24.2519 17.3367 24.2725 17.4108C24.2931 17.4849 24.3295 17.5536 24.379 17.6121C24.4285 17.6707 24.4901 17.7178 24.5594 17.7501C24.6287 17.7824 24.7042 17.7992 24.7806 17.7993H27.5158C27.7258 17.7994 27.929 17.7239 28.0887 17.5864C28.2483 17.4489 28.3539 17.2585 28.3864 17.0495L30.0275 6.58293C30.0396 6.50713 30.0352 6.42959 30.0146 6.35567C29.994 6.28175 29.9578 6.21321 29.9083 6.15479C29.8588 6.09637 29.7974 6.04946 29.7282 6.0173C29.6589 5.98514 29.5836 5.96849 29.5074 5.96852ZM25.2748 11.9203C24.9818 13.6674 23.6049 14.8402 21.8488 14.8402C20.9671 14.8402 20.2624 14.5554 19.81 14.0157C19.3612 13.4797 19.1906 12.7168 19.3334 11.8671C19.6069 10.135 21.007 8.92388 22.7362 8.92388C23.5984 8.92388 24.2994 9.21242 24.7611 9.7568C25.2238 10.3068 25.4074 11.0743 25.2748 11.9203ZM45.6793 5.96852H42.6279C42.484 5.96875 42.3424 6.00433 42.2152 6.07219C42.0881 6.14004 41.9793 6.23811 41.8983 6.3579L37.6898 12.601L35.9059 6.60161C35.8511 6.41863 35.7393 6.25826 35.587 6.14424C35.4347 6.03022 35.25 5.96861 35.0603 5.96852H32.0618C31.9776 5.96829 31.8946 5.98832 31.8197 6.02692C31.7447 6.06553 31.68 6.12161 31.631 6.19048C31.5819 6.25935 31.5499 6.33903 31.5376 6.42289C31.5252 6.50674 31.533 6.59235 31.5602 6.67258L34.9212 16.606L31.7614 21.0983C31.7052 21.178 31.6719 21.2716 31.6651 21.3691C31.6583 21.4665 31.6782 21.564 31.7227 21.6508C31.7673 21.7375 31.8346 21.8103 31.9175 21.8611C32.0004 21.9119 32.0955 21.9387 32.1925 21.9387H35.2401C35.3824 21.9389 35.5227 21.9043 35.6488 21.838C35.7749 21.7716 35.8832 21.6755 35.9643 21.5577L46.1132 6.80424C46.1682 6.72442 46.2005 6.63096 46.2065 6.53399C46.2125 6.43701 46.1921 6.34023 46.1474 6.25413C46.1027 6.16803 46.0354 6.0959 45.9529 6.04555C45.8704 5.9952 45.7758 5.96856 45.6793 5.96852Z"
        fill="#253B80"
      />
      <path
        d="M56.1861 0.0624388H49.7169C49.5029 0.0625262 49.296 0.136522 49.1334 0.271112C48.9707 0.405702 48.8631 0.592051 48.8297 0.79663L46.2137 16.8509C46.2015 16.9252 46.2062 17.0013 46.2273 17.0738C46.2484 17.1462 46.2855 17.2134 46.336 17.2707C46.3865 17.3279 46.4493 17.3739 46.5199 17.4054C46.5906 17.4369 46.6674 17.4532 46.7452 17.4532H50.0649C50.2147 17.453 50.3595 17.4011 50.4732 17.3068C50.5869 17.2125 50.6622 17.082 50.6854 16.9388L51.4278 12.3881C51.4609 12.1833 51.5685 11.9967 51.7312 11.862C51.8938 11.7272 52.1009 11.6531 52.315 11.653H54.3617C58.6234 11.653 61.0815 9.65727 61.7246 5.70253C62.015 3.97233 61.736 2.61288 60.8989 1.66081C59.9806 0.615371 58.351 0.0624388 56.1861 0.0624388ZM56.9323 5.9259C56.5795 8.17241 54.8062 8.17241 53.0905 8.17241H52.1154L52.8011 3.9769C52.8208 3.85415 52.8852 3.74227 52.9827 3.6615C53.0802 3.58074 53.2043 3.53642 53.3326 3.53657H53.78C54.9471 3.53657 56.0499 3.53657 56.6192 4.18105C56.9588 4.56554 57.0619 5.13678 56.9323 5.9259ZM75.5199 5.85358H72.4243C72.2959 5.85323 72.1717 5.89749 72.0741 5.97829C71.9766 6.05909 71.9122 6.17108 71.8928 6.29391L71.7556 7.13246L71.5381 6.82853C70.8675 5.88653 69.3732 5.57162 67.8807 5.57162C64.4579 5.57162 61.5354 8.08087 60.9661 11.6008C60.671 13.3566 61.09 15.0355 62.119 16.2064C63.0648 17.283 64.4135 17.7315 66.0204 17.7315C68.7783 17.7315 70.3076 16.0151 70.3076 16.0151L70.1695 16.8481C70.1572 16.9228 70.1618 16.9991 70.1829 17.0719C70.2041 17.1446 70.2413 17.2121 70.292 17.2695C70.3428 17.327 70.4058 17.3731 70.4767 17.4046C70.5477 17.4362 70.6249 17.4525 70.703 17.4523H73.4921C73.7062 17.4522 73.9132 17.3781 74.0759 17.2433C74.2385 17.1085 74.3461 16.922 74.3792 16.7172L76.0542 6.45594C76.0661 6.38139 76.0612 6.30524 76.0398 6.23271C76.0184 6.16018 75.981 6.093 75.9302 6.03577C75.8795 5.97854 75.8165 5.93262 75.7457 5.90118C75.6748 5.86973 75.5978 5.85349 75.5199 5.85358ZM71.2024 11.6887C70.9054 13.4015 69.499 14.5513 67.7077 14.5513C66.8101 14.5513 66.0894 14.2721 65.6279 13.7429C65.1701 13.2175 64.998 12.4695 65.1417 11.6365C65.4226 9.93832 66.8489 8.75098 68.6128 8.75098C69.4924 8.75098 70.2074 9.03385 70.6784 9.56756C71.1522 10.1068 71.3395 10.8593 71.2024 11.6887ZM79.1716 0.50277L76.5167 16.8509C76.5046 16.9252 76.5092 17.0013 76.5303 17.0738C76.5514 17.1462 76.5885 17.2134 76.6391 17.2707C76.6896 17.3279 76.7523 17.3739 76.823 17.4054C76.8936 17.4369 76.9705 17.4532 77.0483 17.4532H79.7173C80.1609 17.4532 80.5373 17.142 80.6054 16.7181L83.2233 0.664805C83.2355 0.590392 83.2308 0.514313 83.2097 0.4418C83.1886 0.369287 83.1515 0.302058 83.101 0.244735C83.0505 0.187412 82.9878 0.141354 82.9171 0.109728C82.8465 0.0781016 82.7696 0.0616568 82.6918 0.0615234H79.7031C79.5748 0.0619632 79.4508 0.106608 79.3534 0.187461C79.256 0.268314 79.1916 0.380092 79.1716 0.50277Z"
        fill="#179BD7"
      />
      <title className="sr-only">PayPal Logo</title>
    </svg>
  ),
  googlePayLogo: (props: LucideProps) => (
    <svg
      width="58"
      height="24"
      viewBox="0 0 58 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.808 18.7139V11.7323H30.3318C31.7758 11.7323 32.9945 11.2375 33.9881 10.2618L34.2266 10.0144C36.0414 7.99413 35.9222 4.84692 33.9881 2.97783C33.021 1.98831 31.6963 1.45233 30.3318 1.47981H24.6752V18.7139H26.808ZM26.8083 9.61569V3.59612H30.3857C31.1541 3.59612 31.8828 3.89848 32.4261 4.44821C33.5788 5.60264 33.6053 7.5267 32.4923 8.72237C31.9491 9.31333 31.1806 9.64317 30.3857 9.61569H26.8083Z"
        fill="#3C4043"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.1754 7.84285C43.2613 6.97702 42.0161 6.53723 40.4396 6.53723C38.4128 6.53723 36.8893 7.30686 35.8825 8.83236L37.7637 10.0555C38.4525 9.01103 39.3931 8.48878 40.5854 8.48878C41.3405 8.48878 42.0691 8.77739 42.6387 9.29963C43.1951 9.79439 43.513 10.509 43.513 11.2649V11.7734C42.6917 11.3062 41.6584 11.0588 40.3867 11.0588C38.9029 11.0588 37.7107 11.4161 36.8231 12.1445C35.9355 12.8729 35.4851 13.8349 35.4851 15.0581C35.4586 16.1713 35.9223 17.2295 36.7436 17.9442C37.5782 18.7138 38.638 19.0986 39.8833 19.0986C41.3537 19.0986 42.5195 18.4252 43.4071 17.0783H43.4998V18.7138H45.5399V11.4436C45.5399 9.91808 45.0895 8.70867 44.1754 7.84285ZM38.3867 16.5424C37.9494 16.2126 37.6844 15.6766 37.6844 15.0994C37.6844 14.4534 37.9759 13.9174 38.5457 13.4914C39.1286 13.0654 39.8574 12.8455 40.7186 12.8455C41.911 12.8317 42.8385 13.1066 43.501 13.6563C43.501 14.5909 43.1432 15.4017 42.441 16.0889C41.805 16.7486 40.9438 17.1196 40.0429 17.1196C39.4466 17.1334 38.8636 16.9272 38.3867 16.5424Z"
        fill="#3C4043"
      />
      <path
        d="M50.1236 23.895L57.2507 6.92203H54.9324L51.6338 15.3879H51.594L48.2159 6.92203H45.8976L50.574 17.9579L47.9245 23.895H50.1236Z"
        fill="#3C4043"
      />
      <path
        d="M19.4447 10.2206C19.4447 9.54718 19.3917 8.87376 19.2857 8.21408H10.2907V12.021H15.444C15.232 13.2441 14.5431 14.3436 13.5363 15.0308V17.5045H16.6097C18.4114 15.7866 19.4447 13.2441 19.4447 10.2206Z"
        fill="#4285F4"
      />
      <path
        d="M10.2911 19.896C12.8611 19.896 15.0333 19.0163 16.6097 17.5045L13.5363 15.0308C12.6752 15.6355 11.5761 15.9791 10.2911 15.9791C7.80056 15.9791 5.69422 14.2337 4.93912 11.8974H1.77298V14.4536C3.38917 17.7932 6.68778 19.896 10.2911 19.896Z"
        fill="#34A853"
      />
      <path
        d="M4.93912 11.8974C4.54163 10.6742 4.54201 9.34106 4.93949 8.10417V5.56166H1.77286C0.408153 8.35155 0.408153 11.6499 1.77286 14.4398L4.93912 11.8974Z"
        fill="#FBBC04"
      />
      <path
        d="M10.2911 4.02242C11.6556 3.99493 12.9671 4.53092 13.9474 5.50669L16.6763 2.67557C14.9409 0.998892 12.6624 0.078092 10.2911 0.105579C6.68777 0.105579 3.38904 2.22204 1.77286 5.56166L4.93912 8.11792C5.69422 5.76781 7.80056 4.02242 10.2911 4.02242Z"
        fill="#EA4335"
      />
      <title className="sr-only">Google Pay Logo</title>
    </svg>
  ),
};

const variants = cva("inline-flex justify-center items-center", {
  variants: {
    variant: {
      sharp: "rounded-none",
      rounded: "rounded-[var(--b-radius)]",
      circle: "rounded-full",
    },
    size: {
      large: "[&_>svg]:stroke-[1.5px] [&_>svg]:size-6 size-11 [--b-radius:4px]",
      medium:
        "[&_>svg]:stroke-[1.13px] [&_>svg]:size-[18px] size-9 [--b-radius:4px]",
      small: "[&_>svg]:stroke-1 [&_>svg]:size-4 size-6 [--b-radius:4px]",
      xSmall:
        "[&_>svg]:stroke-[0.75px] [&_>svg]:size-[14px] size-5 [--b-radius:3.33px]",
    },
  },
});
export interface IconBoxProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

const IconBox = forwardRef<HTMLButtonElement, IconBoxProps>(
  ({ variant, size, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(variants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export { IconBox };
