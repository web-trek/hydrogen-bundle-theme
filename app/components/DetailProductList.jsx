import React from 'react';
import './Styles/DetailProductList.css';
// import ProductSet from './ProductSet';
import Icon from '../assets/Icons/Clear.webp';
import Image from '../assets/ProductDetailList.webp';
import './Styles/DetailProductList.css';
import {Await, Link} from '@remix-run/react';

function DetailProductList({products}) {
  // console.log(products);
  return (
    <>
      <div
        class="container--large container--vertical-space-small remove-empty-space"
        bis_skin_checked="1"
      >
        <div
          class="section-heading section-heading--center section-heading--two-rows gutter-bottom--large"
          bis_skin_checked="1"
        >
          <div
            class="section-heading__text remove-empty-space"
            bis_skin_checked="1"
          >
            <h2 class="section-heading__title text-font--secondary text-size--large">
              Buy set of 3 and save 30%
            </h2>
          </div>
        </div>

        <products-set
          class="products-set products-set--empty products-set--style-primary"
          data-set="3"
        >
          <div
            class="grid grid--layout grid-3 grid-lap-1 grid--align-items-stretch"
            bis_skin_checked="1"
          >
            <Await resolve={products}>
              {(response) => {
                // console.log(response.products.nodes[0]);
                return (
                  <>
                    {response.products.nodes.map((product) => (
                      <Link key={product.id} to={`/products/${product.handle}`}>
                        <ProductSet product={product} />
                      </Link>
                    ))}
                  </>
                );
              }}
            </Await>
          </div>
          <div class="set-action" bis_skin_checked="1">
            <span class="set-action__button">
              <div
                class="set-action__button-text element--hide-on-desk"
                bis_skin_checked="1"
              >
                <span class="set-action__button-text__title text-weight--bold">
                  Build your set
                </span>
              </div>

              {/* <a href="/collections/all" className='!cursor-pointer'> */}
              <div
                class="button button--solid button--fullwidth button--loader button--move"
                data-js-add-set-to-cart=""
              >
                  <span class="button__text text-white" data-js-add-set-to-cart-text="">
                    View Products List
                  </span>
                
                <span class="button__preloader">
                  <svg class="button__preloader-element" viewBox="25 25 50 50">
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke-width="4"
                    ></circle>
                  </svg>
                </span>
              </div>
              {/* </a> */}

            </span>
          </div>
        </products-set>
      </div>
    </>
  );
}

export default DetailProductList;

function ProductSet({product}) {
  // console.log(product);
  return (
    <>
      <div
        id="product-item-8119735157054"
        class="product-item"
        data-js-product-item=""
        bis_skin_checked="1"
      >
        <a
          href="/products/carafe-1-2ltr"
          class="product-item__image !h-full
                            "
          data-js-product-item-image=""
        >
          <figure
            class="lazy-image !relative lazy-image--background product-item__image-figure product-item__image-figure--top lazy-image--zoom-animation product-item__image-no-slider lazyloaded lazy-image--revealed"
            data-ratio="0.83333"
            data-crop="false"
          >
            <img
              src={product.images.nodes[0].url}
              alt="Carafe 1.2Ltr."
              class="img !relative"
              width="3500"
              height="3500"
              data-ratio="0.83333"
              sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1360px) calc((100vw - 120px) / 3), 413px"
              loading="lazy"
              onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
            />
          </figure>
        </a>

        <div
          class="card__text product-item__text gutter-top--regular gutter-bottom--regular spacing--xlarge remove-empty-space text-align--left"
          bis_skin_checked="1"
        >
          <div
            class="product-item__price text-size--small equalize-white-space"
            bis_skin_checked="1"
          >
            <div
              class="remove-line-height-space"
              data-js-product-item-price=""
              bis_skin_checked="1"
            >
              <div
                class="product-price"
                id="product-price-"
                bis_skin_checked="1"
              >
                <span
                  class="product-price--original pps "
                  data-js-product-price-original=""
                >
                  ${product.priceRange.minVariantPrice.amount}
                </span>
                <del
                  class="product-price--compare"
                  data-js-product-price-compare=""
                ></del>
                <span
                  class="product-price--unit pps text-size--regular"
                  data-js-product-price-unit=""
                ></span>
              </div>
            </div>
          </div>

          <a
            class="product-item__title"
            href="/products/carafe-1-2ltr"
            title="Carafe 1.2Ltr."
          >
            <div class="remove-line-height-space--small" bis_skin_checked="1">
              <span class="text-animation--underline-thin text-size--large text-weight--bold">
                {product.title}
              </span>
            </div>
          </a>

          <div class="product-item__ratings !mb-6" bis_skin_checked="1">
            <div
              class="product-item__ratings !mt-2 !ml-0 !flex !align-middle gap-1"
              bis_skin_checked="1"
            >
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
          </div>

          <div class="product-item__icons" bis_skin_checked="1">
            <span class="pill pill--has-icon  pill--compact">
              <span class="pill__icon" aria-hidden="true">
                <img
                  src={Icon}
                  sizes="24px"
                  width="24"
                  height="24"
                  loading="lazy"
                  alt=""
                />
              </span>
              <span class="pill__label">Whirlpool motif</span>
            </span>
            <span class="pill pill--has-icon  pill--compact">
              <span class="pill__label">Modern</span>
            </span>
          </div>
          <div
            class="product-item__quick-buy "
            data-id="add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
            bis_skin_checked="1"
          >
            <quick-buy
              data-add-to-cart-price=""
              data-default-to-first-variant="false"
            />
            <div
              id="product-price-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
              data-js-quick-buy-product-price=""
              bis_skin_checked="1"
            >
              <div
                class="product-price"
                id="product-price-"
                bis_skin_checked="1"
              >
                <del
                  class="product-price--compare"
                  data-js-product-price-compare=""
                ></del>
                <span
                  class="product-price--unit pps text-size--regular"
                  data-js-product-price-unit=""
                ></span>
              </div>
            </div>
            <product-variants
              data-variants="1"
              data-hide-variants="hide"
              data-url="/products/carafe-1-2ltr"
              data-id="add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
              data-style="radio"
              data-no-history=""
              class="product-variants--hide-unavailable"
              data-variant-required=""
              data-has-variants=""
              data-show-bundle-wording=""
            >
              <div class="product-variants no-js-hidden" bis_skin_checked="1">
                <div
                  class="product-variant"
                  data-name="product-color-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                  data-js-product-variant=""
                  bis_skin_checked="1"
                >
                  <span class="product-variant__name text-size--small">
                    Select Color
                  </span>
                  <css-slider
                    data-options='{
                                            "selector": ".product-variant__item",
                                            "groupCells": true,
                                            "navigation": false,
                                            "thumbnails": false,
                                            "delayDrag": 300
                                            }'
                    class="css-slider css-slider--scrollbars-visible css-slider--no-snap enabled"
                    data-slides-per-page-difference="large"
                    data-slider-length="1"
                  >
                    <div class="css-slider-viewport" bis_skin_checked="1">
                      <div
                        class="css-slider-holder css-slider--no-drag"
                        bis_skin_checked="1"
                      >
                        <div class="css-slider-container" bis_skin_checked="1">
                          <div
                            class="product-variant__container product-variant__container--radio"
                            data-js-product-variant-container="radio"
                            bis_skin_checked="1"
                          >
                            <div
                              class="product-variant__item product-variant__item--radio product-variant__item--color css-slide css-slide--snap css-slide-active"
                              data-index="0"
                              bis_skin_checked="1"
                            >
                              <input
                                type="radio"
                                name="product-color-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                id="carafe-1-2ltr-option-color-1-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                value="Clear"
                                class="product-variant__input product-variant-value"
                              />
                              <label
                                for="carafe-1-2ltr-option-color-1-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                class="product-variant__label"
                              >
                                <img
                                  class="product-variant__item-swatch product-variant__item-swatch--color"
                                  src={Icon}
                                  sizes="30px"
                                  width="30"
                                  height="30"
                                  loading="lazy"
                                  alt=""
                                />
                                <span class="visually-hidden">Clear</span>
                              </label>
                            </div>
                            <div
                              class="product-variant__item product-variant__item--radio product-variant__item--color css-slide"
                              bis_skin_checked="1"
                            >
                              <input
                                type="radio"
                                name="product-color-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                id="carafe-1-2ltr-option-color-2-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                value="Amber"
                                class="product-variant__input product-variant-value"
                              />
                              <label
                                for="carafe-1-2ltr-option-color-2-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                class="product-variant__label"
                              >
                                <img
                                  class="product-variant__item-swatch product-variant__item-swatch--color"
                                  src={Icon}
                                  sizes="30px"
                                  width="30"
                                  height="30"
                                  loading="lazy"
                                  alt=""
                                />
                                <span class="visually-hidden">Amber</span>
                              </label>
                            </div>
                            <div
                              class="product-variant__item product-variant__item--radio product-variant__item--color css-slide"
                              bis_skin_checked="1"
                            >
                              <input
                                type="radio"
                                name="product-color-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                id="carafe-1-2ltr-option-color-3-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                value="Moss"
                                class="product-variant__input product-variant-value"
                              />
                              <label
                                for="carafe-1-2ltr-option-color-3-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                                class="product-variant__label"
                              >
                                <img
                                  class="product-variant__item-swatch product-variant__item-swatch--color"
                                  src={Icon}
                                  sizes="30px"
                                  width="30"
                                  height="30"
                                  loading="lazy"
                                  alt=""
                                />
                                <span class="visually-hidden">Moss</span>
                              </label>
                            </div>
                            <div
                              class="product-variant__item product-variant__item--radio css-slide"
                              bis_skin_checked="1"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </css-slider>
                  <span class="product-variant__item-text-label text-size--small text-line-height--small text-color--opacity">
                    3 colors available
                  </span>
                </div>
              </div>
              <noscript>
                <label
                  for="Variants-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                  class="text-size--small"
                >
                  Variants
                </label>
                <select
                  name="id"
                  id="Variants-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                  class="productSelect"
                  form="product-form-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
                >
                  <option selected="selected" value="44498401526078">
                    Clear - $55.00
                  </option>
                  <option value="44498401558846">Amber - $55.00</option>
                  <option value="44498401591614">Moss - $55.00</option>
                </select>
              </noscript>
            </product-variants>
            <div
              id="add-to-cart-add-quick-buy-template--17238267691326__627a9841-5ef4-4a4b-8ba7-aacbfbb91f3f-1"
              class="product-form"
              bis_skin_checked="1"
            ></div>
            <div data-js-quick-buy-product-images="" bis_skin_checked="1">
              <template data-media-id="32713204859198" data-init="true">
                <figure
                  class="lazy-image lazy-image--background product-item__image-figure product-item__image-figure--primary lazy-image--zoom-animation product-item__image-no-slider"
                  data-ratio="1.0"
                  data-crop="true"
                >
                  <img
                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=480"
                    alt="Carafe 1.2Ltr."
                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=2820 2820w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-2.jpg?v=1675678472&amp;width=3360 3360w"
                    class="img"
                    width="3500"
                    height="3500"
                    data-ratio="1.0"
                    sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1360px) calc((100vw - 120px) / 3), 413px"
                    loading="lazy"
                    onload="this.parentNode.classList.add('lazyloaded');"
                  />
                </figure>
              </template>
              <template data-media-id="32713204793662" data-init="true">
                <figure
                  class="lazy-image lazy-image--background product-item__image-figure product-item__image-figure--primary lazy-image--zoom-animation product-item__image-no-slider"
                  data-ratio="1.0"
                  data-crop="true"
                >
                  <img
                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=480"
                    alt="Carafe 1.2Ltr."
                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=2820 2820w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-3.jpg?v=1675678472&amp;width=3360 3360w"
                    class="img"
                    width="3500"
                    height="3500"
                    data-ratio="1.0"
                    sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1360px) calc((100vw - 120px) / 3), 413px"
                    loading="lazy"
                    onload="this.parentNode.classList.add('lazyloaded');"
                  />
                </figure>
              </template>
              <template data-media-id="32713204760894" data-init="true">
                <figure
                  class="lazy-image lazy-image--background product-item__image-figure product-item__image-figure--primary lazy-image--zoom-animation product-item__image-no-slider"
                  data-ratio="1.0"
                  data-crop="true"
                >
                  <img
                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=480"
                    alt="Carafe 1.2Ltr."
                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=2820 2820w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/15-5.jpg?v=1675678472&amp;width=3360 3360w"
                    class="img"
                    width="3500"
                    height="3500"
                    data-ratio="1.0"
                    sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1360px) calc((100vw - 120px) / 3), 413px"
                    loading="lazy"
                    onload="this.parentNode.classList.add('lazyloaded');"
                  />
                </figure>
              </template>
            </div>
          </div>
        </div>
        <div class="product-item__badges" bis_skin_checked="1">
          <span class="product-item__badge">NEW</span>
        </div>
      </div>
    </>
  );
}
