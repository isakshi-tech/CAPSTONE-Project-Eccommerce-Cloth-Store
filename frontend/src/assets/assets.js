import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";
import p_img13 from "./p_img13.png";
import p_img14 from "./p_img14.png";
import p_img15 from "./p_img15.png";
import p_img16 from "./p_img16.png";
import p_img17 from "./p_img17.png";
import p_img18 from "./p_img18.png";
import p_img19 from "./p_img19.png";
import p_img20 from "./p_img20.png";
import p_img21 from "./p_img21.png";
import p_img22 from "./p_img22.png";
import p_img23 from "./p_img23.png";
import p_img24 from "./p_img24.png";
import p_img25 from "./p_img25.png";
import p_img26 from "./p_img26.png";
import p_img27 from "./p_img27.png";
import p_img28 from "./p_img28.png";
import p_img29 from "./p_img29.png";
import p_img30 from "./p_img30.png";
import p_img31 from "./p_img31.png";
import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";

import logo from "./logo.png";
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";

import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  logo,
  hero2,
  hero1,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};
//mock data
export const products = [
  {
    _id: "aaaaa",
    name: "Cotton Top",
    price: 100,
    image: [p_img1],
    category: "tops",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "Cotton T-shirt",
    price: 200,
    image: [p_img2_1],
    category: "tops",
    subCategory: "casual",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "Floral Top",
    price: 220,
    image: [p_img3],
    category: "tops",
    subCategory: "topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Basic T-shirt",
    price: 110,
    image: [p_img4],
    category: "tops",
    subCategory: "casual",
    sizes: ["S", "M", "XXL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Casual Top",
    price: 130,
    image: [p_img5],
    category: "tops",
    subCategory: "topwear",
    sizes: ["M", "L", "XL"],
    date: 1716622345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "Printed Top",
    price: 140,
    image: [p_img6],
    category: "tops",
    subCategory: "casual",
    sizes: ["S", "L", "XL"],
    date: 1716623423448,
    bestseller: true,
  },

  // 👇 Bottomwear → jeans / skirts
  {
    _id: "aaaag",
    name: "Tapered Jeans",
    price: 190,
    image: [p_img7],
    category: "jeans",
    subCategory: "bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "Slim Jeans",
    price: 110,
    image: [p_img10],
    category: "jeans",
    subCategory: "casual",
    sizes: ["S", "L", "XL"],
    date: 1716622235448,
    bestseller: false,
  },

  // 👇 Sarees & gowns → partywear
  {
    _id: "aaaat",
    name: "Silk Saree",
    price: 190,
    image: [p_img20],
    category: "sarees",
    subCategory: "partywear",
    sizes: ["Free Size"],
    date: 1716633245448,
    bestseller: false,
  },
  {
    _id: "aaaav",
    name: "Designer Saree",
    price: 200,
    image: [p_img22],
    category: "sarees",
    subCategory: "partywear",
    sizes: ["Free Size"],
    date: 1716635445448,
    bestseller: false,
  },
  {
    _id: "aaaae1",
    name: "Evening Gown",
    price: 800,
    image: [p_img5],
    category: "gowns",
    subCategory: "partywear",
    sizes: ["S", "M", "L"],
    date: 1716622345448,
    bestseller: true,
  },

  // 👇 Winterwear → sweaters
  {
    _id: "aaaau",
    name: "Winter Sweater",
    price: 170,
    image: [p_img21],
    category: "sweaters",
    subCategory: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: "Zip Jacket",
    price: 220,
    image: [p_img26],
    category: "sweaters",
    subCategory: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: false,
  },

  // 👇 Skirts (added for balance)
  {
    _id: "custom1",
    name: "Mini Skirt",
    price: 180,
    image: [p_img30],
    category: "skirts",
    subCategory: "partywear",
    sizes: ["S", "M", "L"],
    date: 1716644245448,
    bestseller: false,
  },
];
