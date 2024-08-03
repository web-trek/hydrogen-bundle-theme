import React, { useState } from 'react';
import Image1 from '../assets/Product/pillow.webp';
import Icon1 from '../assets/Icons/mug.webp';
import Icon2 from '../assets/Icons/cookie.webp';
import './Styles/ProductItem.css'
// import ProductCard from './ProductCard'

export default function CollectionGrid({collection}) {
  const [haveProducts, setHaveProducts] = useState(collection.products.nodes[0])
  console.log(collection.products.nodes[0])
  return (
    <>
      <div className="container--large" bis_skin_checked="1">
        <div id="CollectionProductGrid" bis_skin_checked="1">
          <div
            id="main-collection-product-grid"
            data-id="template--17238268150078__product-grid"
            className="collection grid grid--layout grid-4 grid-laptop-3 grid-lap-2 grid-palm-2"
            bis_skin_checked="1"
          >
            {collection.products.nodes.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}            
            
          </div>
          {!collection.products.nodes[0] && <h2 className='product_not_found'>No Products Found</h2> }
        </div>
      </div>
    </>
  );
}

function ProductItem({product}) {
  return (
    <>
      <div
        id="product-item-8122844741950"
        className="product-item"
        bis_skin_checked="1"
      >
        <a
          href={`/products/${product.handle}`}
          className="!h-full product-item__image"
        >
          <figure
            className="!relative lazy-image lazy-image--background product-item__image-figure product-item__image-figure--top lazy-image--zoom-animation product-item__image-no-slider lazyloaded lazy-image--revealed"
            data-ratio="0.83333"
            data-crop="false"
          >
            <img
              src={product.featuredImage.url}
              alt="Crafted Glass Vase - Large"
              className="!relative img"
              width="3500"
              height="3500"
              data-ratio="0.83333"
              sizes="(max-width: 474px) calc(50vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1360px) calc((100vw - 120px) / 4), 310px"
              loading="lazy"
              onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
            />
          </figure>
        </a>

        <div
          className="card__text product-item__text gutter-top--regular gutter-bottom--regular spacing--xlarge remove-empty-space text-align--left"
          bis_skin_checked="1"
        >
          <div
            className="product-item__text text-size--small  text-line-height--medium equalize-white-space"
            bis_skin_checked="1"
          ></div>
          <div
            className="product-item__price text-size--small equalize-white-space"
            bis_skin_checked="1"
          >
            <div
              className="remove-line-height-space"
              data-js-product-item-price=""
              bis_skin_checked="1"
            >
              <div
                className="product-price"
                id="product-price-"
                bis_skin_checked="1"
              >
                <span
                  className="product-price--original pps !mr-4 "
                  data-js-product-price-original=""
                >
                  ${product.priceRange.maxVariantPrice.amount}
                </span>

                <del
                  className="product-price--compare"
                  data-js-product-price-compare=""
                ></del>
                <span
                  className="product-price--unit pps text-size--regular"
                  data-js-product-price-unit=""
                ></span>
              </div>
            </div>
          </div>
          <a
            className="product-item__title"
            href="/collections/home-accessories/products/crafted-glass-vase-large"
            title="Crafted Glass Vase - Large"
          >
            <div
              className="remove-line-height-space--small"
              bis_skin_checked="1"
            >
              <span className="text-animation--underline-thin text-size--large text-weight--bold">
                Crafted Glass Vase - Large
              </span>
            </div>
          </a>
          <div
            class="product-item__ratings !flex !align-middle gap-1"
            bis_skin_checked="1">
            <svg
              class=" !self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg
              class=" !self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg
              class=" !self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg
              class=" !self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg
              class=" !self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <span class="ml-4"> (06)</span>
          </div>
          <div className="product-item__icons" bis_skin_checked="1">
            <span className="pill pill--has-icon  pill--compact">
              <span className="pill__icon" aria-hidden="true">
                <img
                  src={Icon1}
                  sizes="24px"
                  width="24"
                  height="24"
                  loading="lazy"
                  alt=""
                />
              </span>
              <span className="pill__label">Liquid-like effect</span>
            </span>
            <span className="pill pill--has-icon  pill--compact">
              <span className="pill__icon" aria-hidden="true">
                <img
                  src={Icon2}
                  sizes="24px"
                  width="24"
                  height="24"
                  loading="lazy"
                  alt=""
                />
              </span>
              <span className="pill__label">Mouth blown</span>
            </span>
          </div>
          <div
            className="product-item__quick-buy  product-item__quick-buy--no-border "
            data-id="quick_buy-template--17238268150078__product-grid-1"
            bis_skin_checked="1"
          >
            <quick-buy
              data-add-to-cart-price="true"
              data-default-to-first-variant="false"
            >
              

              <div
                id="add-to-cart-quick_buy-template--17238268150078__product-grid-1"
                className="product-form"
                data-js-quick-buy-form=""
                bis_skin_checked="1"
              >
                <form
                  method="post"
                  action="/cart/add"
                  id="product-form-quick_buy-template--17238268150078__product-grid-1"
                  accept-charset="UTF-8"
                  className="form"
                  enctype="multipart/form-data"
                  novalidate="novalidate"
                  data-type="add-to-cart-form"
                >
                  <input type="hidden" name="form_type" value="product" />
                  <input type="hidden" name="utf8" value="✓" />
                  <template>
                    <input type="hidden" name="id" value="44508739240254" />
                  </template>
                  <script>
                    document.getElementById('add-to-cart-quick_buy-template--17238268150078__product-grid-1').querySelector('form').append(document.getElementById('add-to-cart-quick_buy-template--17238268150078__product-grid-1').querySelector('template').content.cloneNode(true));
                  </script>
                  <input type="hidden" name="id" value="44508739240254" />

                  <button
                    type="submit"
                    name="add"
                    className="add-to-cart 
         button  button--outline button--outline-hover-solid button--fullwidth  button--loader button--move 
         
        "
                    data-js-product-add-to-cart=""
                  >
                    <span
                      className="button__text"
                      data-js-product-add-to-cart-text=""
                    >
                      Add to cart
                      <span className="element--hide-on-small"> - ${product.priceRange.maxVariantPrice.amount}</span>
                    </span>
                    <span className="button__preloader">
                      <svg
                        className="button__preloader-element"
                        viewBox="25 25 50 50"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="20"
                          fill="none"
                          stroke-width="4"
                        ></circle>
                      </svg>
                    </span>
                  </button>
                  <input
                    type="hidden"
                    name="product-id"
                    value="8122844741950"
                  />
                  <input
                    type="hidden"
                    name="section-id"
                    value="template--17238268150078__product-grid"
                  />
                </form>
              </div>
            </quick-buy>
          </div>
        </div>
        <div className="product-item__badges" bis_skin_checked="1">
          <span className="product-item__badge">NEW</span>
        </div>
      </div>
    </>
  );
}
