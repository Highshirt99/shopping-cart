import product1 from "./assets/image-product-1.jpg"
import product1small from "./assets/image-product-1-thumbnail.jpg"
import product2 from "./assets/image-product-2.jpg"
import product2small from "./assets/image-product-2-thumbnail.jpg"
import product3 from "./assets/image-product-3.jpg"
import product3small from "./assets/image-product-3-thumbnail.jpg"
// import product4 from "./assets/image-product-4.jpg"
// import product4small from "./assets/image-product-4-thumbnail.jpg"
import product5 from "./assets/product5.jpg"
import product6 from "./assets/product6.jpg"
import product7 from "./assets/product7.jpg"
import product8 from "./assets/product8.jpg"
import product9 from "./assets/product9.jpg"
import product10 from "./assets/product10.jpg"

export const productsList = [
    {
      id: 1,
      image: product1,
      company: "SNEAKER COMPANY",
      heading: "Fall Limited Edition Sneakers",
      about: `These low-profile sneakers are your perfect casual wear companion.
       Featuring a durable rubber outer sole,
       they'll withstand everything the weather can offer.`,
      price: 125.00,
      discount: "50%",
      originalPrice: 250.00,
      amount: 1,
      images: [
        {
         img:  product1,
         id: 4
        },
        {
         img:  product2,
         id: 5
        },
        {
         img:  product3,
         id: 6
        },
         ],
      thumbnails: [product1small, product2small, product3small]
    },
    {
      id: 2,
      image: product5,
      company: "SNEAKER COMPANY",
      heading: "Fall Limited Edition Sneakers",
      about: `These low-profile sneakers are your perfect casual wear companion.
       Featuring a durable rubber outer sole,
       they'll withstand everything the weather can offer.`,
      price: 315.00,
      discount: "10%",
      originalPrice: 350.00,
      amount: 1,
      images: [  {
        img:  product5,
        id: 7
       },
       {
        img:  product6,
        id: 8
       },
       {
        img:  product7,
        id: 9
       },],
      thumbnails: [product5, product6, product7]
    },
    {
      id: 3,
      image: product8,
      company: "SNEAKER COMPANY",
      heading: "Fall Limited Edition Sneakers",
      about: `These low-profile sneakers are your perfect casual wear companion.
       Featuring a durable rubber outer sole,
       they'll withstand everything the weather can offer.`,
      price: 350.00,
      discount: "30%",
      originalPrice: 500.00,
      amount: 1,
      images: [  {
        img:  product8,
        id: 10
       },
       {
        img:  product9,
        id: 11
       },
       {
        img:  product10,
        id: 12
       },],
      thumbnails: [product8, product9, product10]
    },

]


