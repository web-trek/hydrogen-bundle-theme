import React, {Suspense, useState} from 'react';
import './Styles/ProductDetails.css';
import './Styles/Breadcrum.css';
// import './Scripts/ProductDetails'
import Image1 from '../assets/Product/A3.webp';
import Image2 from '../assets/Product/A4.webp';
import Star from '../assets/Icons/star.png';
import HookIcon from '../assets/Icons/Hoots.webp';
import LeafIcon from '../assets/Icons/leaf.webp';
import RecycleIcon from '../assets/Icons/recycle.webp';
import {Await, useNavigate} from '@remix-run/react';
import {useOptimisticCart, useOptimisticVariant} from '@shopify/hydrogen';
import { ProductForm } from './ProductForm';

function ProductDetails({product}, {variants}) {
  const [selectedVar, setSelectedVar] = useState(product.selectedVariant.title);
  console.log(product);

  const selectedVariant = useOptimisticVariant(
    product.selectedVariant,
    variants,
  );

  // const { addToCart } = useOptimisticCart();
  // const navigate = useNavigate();

  const handleAddToCart = async () => {
    console.log('clicked');
    // navigate('/cart');
  };

  return (
    <>
      <div
        id="shopify-section-template--17238268608830__main"
        class="!mb-16 shopify-section mount-css-slider mount-toggles mount-product-page mount-show-more"
        data-js-inert=""
        bis_skin_checked="1"
      >
        <div
          class="container--large container--vertical-space-xsmall"
          bis_skin_checked="1"
        >
          <div
            class="breadcrumb-main breadcrumb-main--margin breadcrumb-main--scroll element--hide-on-portable-plus"
            bis_skin_checked="1"
          >
            <div class="breadcrumb-container" bis_skin_checked="1">
              <link
                href="//bundle-theme-demo-home.myshopify.com/cdn/shop/t/2/assets/component-breadcrumb.css?v=50496090104604657381684328656"
                rel="stylesheet"
                type="text/css"
                media="all"
              />

              <nav
                class="breadcrumb"
                role="navigation"
                aria-label="breadcrumbs"
              >
                <span class="breadcrumb__link">
                  <a href="/">
                    <span class="text-animation--underline-thin">Home</span>
                  </a>
                </span>
                <span class="breadcrumb__separator">/</span>
                <span class="breadcrumb__link">
                  <a
                    href={`/collections/${product.collections.edges[0].node.handle}`}
                  >
                    <span class="text-animation--underline-thin">
                      {product.collections.edges[0].node.title}
                    </span>
                  </a>
                </span>
                <span class="breadcrumb__separator">/</span>
                <span class="breadcrumb__current">{product.title}</span>
              </nav>
            </div>
          </div>
        </div>
        <div
          class="container container--large container--vertical-space-small "
          bis_skin_checked="1"
        >
          <product-page
            id="product-template--17238268608830__main"
            class="grid grid--layout grid--gap-xlarge grid-3 grid-portable-5 grid-lap-1 grid--no-stretch main-product main-product--mobile-padding--false"
            data-collection="home-accessories"
            data-id="8122844741950"
            data-availability="true"
          >
            <div
              class="grid-offset-2 grid-offset-portable-3 grid-offset-lap-1 element--is-sticky"
              bis_skin_checked="1"
            >
              <div
                class="product-gallery product-gallery--scroll lap--grid--slider-container"
                data-js-product-gallery=""
                bis_skin_checked="1"
              >
                <css-slider
                  data-options='{"selector": ".product-gallery-item","autoHeight": false,"watchCSS": true,"navigationDOM": "<span class=\"css-slider-button css-slider-prev\" style=\"display:none\"><svg fill=\"none\" height=\"11\" viewBox=\"0 0 6 11\" width=\"6\" xmlns=\"http://www.w3.org/2000/svg\"><path clip-rule=\"evenodd\" d=\"m4.32845 10.0708-4.18198-4.18194c-.195261-.19526-.195261-.51185 0-.70711l4.18198-4.181979c.19527-.195262.51185-.195262.70711 0 .19526.195259.19526.511849 0 .707109l-3.32843 3.32842s-.70713.4647-.00002 1l3.32845 3.32843c.19526.19526.19526.51185 0 .70707-.19526.1953-.51185.1953-.70711 0z\" fill=\"#000\" fill-rule=\"evenodd\"/></svg></span><span class=\"css-slider-button css-slider-next\" style=\"display:none\"><svg fill=\"none\" height=\"11\" viewBox=\"0 0 6 11\" width=\"6\" xmlns=\"http://www.w3.org/2000/svg\"><path clip-rule=\"evenodd\" d=\"m.853555.999962 4.181985 4.181978c.19526.19526.19526.51185 0 .70711l-4.181983 4.18195c-.195263.1953-.511845.1953-.707108 0-.1952631-.19523-.1952632-.51181 0-.70708l3.328431-3.32842s.70713-.4647.00002-1l-3.328453-3.32843c-.1952626-.19526-.1952627-.51185 0-.707108.195263-.195262.511845-.195262.707108 0z\" fill=\"#000\" fill-rule=\"evenodd\"/></svg></span>","thumbnailsDOM": "<div class=\"css-slider-dot-navigation\" style=\"display:none;--size:2\"></div>","listenScroll": false}'
                  class="css-slider--bottom-navigation element--border-radius"
                >
                  <div
                    class="grid  grid--layout  grid-1 lap--grid--slider grid--gap-small"
                    bis_skin_checked="1"
                  >
                    {product.images.edges.map((image) => (
                      <div
                        id="FeaturedMedia-template--17238268608830__main-32729201082686"
                        class="product-gallery-item element--border-radius  element--border-radius"
                        data-product-media-type="image"
                        data-product-single-media-wrapper=""
                        data-media-id="32729201082686"
                        data-video=""
                        tabindex="0"
                        data-index="0"
                        data-ratio="1"
                        bis_skin_checked="1"
                      >
                        <figure
                          class="!relative lazy-image lazy-image--background apply-gallery-animation lazyloaded lazy-image--revealed"
                          data-ratio="1"
                          data-crop="false"
                        >
                          <img
                            src={image.node.src}
                            className="!relative"
                            alt="Crafted Glass Vase - Large"
                            onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                          />
                        </figure>
                      </div>
                    ))}
                  </div>
                </css-slider>
              </div>
            </div>

            <div
              class="product-text grid-portable-2 grid-offset-portable-2 grid-offset-lap-1 element--is-sticky remove-empty-space"
              bis_skin_checked="1"
            >
              <div
                class="element--hide-on-portable gutter-bottom--small"
                bis_skin_checked="1"
              >
                <div class="container-- container--" bis_skin_checked="1">
                  <div
                    class="breadcrumb-main breadcrumb-main--scroll breadcrumb-main--smaller"
                    bis_skin_checked="1"
                  >
                    <div class="breadcrumb-container" bis_skin_checked="1">
                      <link
                        href="//bundle-theme-demo-home.myshopify.com/cdn/shop/t/2/assets/component-breadcrumb.css?v=50496090104604657381684328656"
                        rel="stylesheet"
                        type="text/css"
                        media="all"
                      />

                      <nav
                        class="breadcrumb"
                        role="navigation"
                        aria-label="breadcrumbs"
                      >
                        <span class="breadcrumb__link">
                          <a href="/">
                            <span class="text-animation--underline-thin">
                              Home
                            </span>
                          </a>
                        </span>
                        <span class="breadcrumb__separator">/</span>
                        <span class="breadcrumb__link">
                          <a
                            href={`/collections/${product.collections.edges[0].node.handle}`}
                          >
                            <span class="text-animation--underline-thin">
                              {product.collections.edges[0].node.title}
                            </span>
                          </a>
                        </span>
                        <span class="breadcrumb__separator">/</span>
                        <span class="breadcrumb__current">{product.title}</span>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <h1 class="product__title heading-size--page-title !font-normal">
                {product.title}
              </h1>
              <div bis_skin_checked="1">
                <div
                  class="product__details product-item__ratings !flex !align-middle gap-3 !h-4"
                  bis_skin_checked="1"
                >
                  <div className="stars flex align-middle gap-1">
                    <img className="h-full" src={Star} alt="" />
                    <img className="h-full" src={Star} alt="" />
                    <img className="h-full" src={Star} alt="" />
                    <img className="h-full" src={Star} alt="" />
                    <img className="h-full" src={Star} alt="" />
                  </div>
                  <span class=" !leading-none">(6)</span>
                </div>
              </div>
              <div data-js-product-price-compact="" bis_skin_checked="1">
                <div
                  class="product-price"
                  id="product-price-template--17238268608830__main"
                  bis_skin_checked="1"
                >
                  <span
                    class="product-price--original pps "
                    data-js-product-price-original=""
                  >
                    ${product.selectedVariant.price.amount}
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
              <div
                class="product__description rte remove-empty-space"
                bis_skin_checked="1"
                dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
              />
              {/* {product.description}
              </div> */}
              <div class="product-icons-list" bis_skin_checked="1">
                <div class="product-icons-list-container" bis_skin_checked="1">
                  <span class="pill pill--has-icon  pill--no-bg pill--large">
                    <span class="pill__icon" aria-hidden="true">
                      <img
                        src={HookIcon}
                        sizes="24px"
                        width="24"
                        height="24"
                        loading="lazy"
                        alt=""
                      />
                    </span>
                    <span class="pill__label">Piece of art</span>
                  </span>
                  <span class="pill pill--has-icon  pill--no-bg pill--large">
                    <span class="pill__icon" aria-hidden="true">
                      <img
                        src={LeafIcon}
                        sizes="24px"
                        width="24"
                        height="24"
                        loading="lazy"
                        alt=""
                      />
                    </span>
                    <span class="pill__label">Eco friendly</span>
                  </span>
                  <span class="pill pill--has-icon  pill--no-bg pill--large">
                    <span class="pill__icon" aria-hidden="true">
                      <img
                        src={RecycleIcon}
                        sizes="24px"
                        width="24"
                        height="24"
                        loading="lazy"
                        alt=""
                      />
                    </span>
                    <span class="pill__label">Recycled materials</span>
                  </span>
                </div>
              </div>

              {/* {product.options[0].name != 'Title' && (
                <div
                  class="sidebar-widget sidebar-widget--outline"
                  bis_skin_checked="1"
                >
                  <span class="sidebar-widget__title">Choose variants</span>
                  <div class="sidebar-widget__content" bis_skin_checked="1">
                    <product-variants
                      data-main-product-variants=""
                      data-variants="1"
                      data-hide-variants="hide"
                      data-url="/products/crafted-glass-vase-large"
                      data-id="template--17238268608830__main"
                      data-style="radio"
                      class="product-variants--hide-unavailable variant-selected"
                    >
                      <div
                        class="product-variants no-js-hidden"
                        bis_skin_checked="1"
                      >
                        <div
                          class="product-variant"
                          data-name="product-title-template--17238268608830__main"
                          data-js-product-variant=""
                          bis_skin_checked="1"
                        >
                          {product.options.map((option) => {
                            // if(product.selectedVariant.title == option.name){
                            //   console.log('matched')
                            // }
                            return (
                              <>
                                <span class="product-variant__name text-size--small">
                                  {option.name}
                                </span>
                                {option.values.map((value) => {
                                  // const [valuee, setValuee] = useState(value)
                                  console.log(value);
                                  return (
                                    <div
                                      class="product-variant__container product-variant__container--radio product-variant__container--radio--wrap"
                                      // data-js-product-variant-container="radio"
                                      // bis_skin_checked="1"
                                    >
                                      <div
                                        class="product-variant__item product-variant__item--radio"
                                        // bis_skin_checked="1"
                                      >
                                        <input
                                          type="radio"
                                          name="value"
                                          // id="crafted-glass-vase-large-option-title-1-template--17238268608830__main"
                                          value={value}
                                          // onChange={e => setValuee(e.target.value)}
                                          // checked={value == selectedVar && 'checked'}
                                          class="product-variant__input product-variant-value"
                                        />
                                        <label
                                          for="crafted-glass-vase-large-option-title-1-template--17238268608830__main"
                                          class="product-variant__label text-size--small"
                                        >
                                          {value}
                                        </label>
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            );
                          })}
                        </div>
                      </div>

                      <noscript>
                        <label
                          for="Variants-template--17238268608830__main"
                          class="text-size--small"
                        >
                          Variants
                        </label>
                        <select
                          name="id"
                          id="Variants-template--17238268608830__main"
                          class="productSelect"
                          form="product-form-template--17238268608830__main"
                        >
                          <option selected="selected" value="44508739240254">
                            Default Title - $90.00
                          </option>
                        </select>
                      </noscript>
                    </product-variants>
                  </div>
                </div>
              )} */}

              <Suspense
                fallback={
                  <ProductForm
                    product={product}
                    selectedVariant={selectedVariant}
                    variants={[]}
                  />
                }
              >
                <Await
                  errorElement="There was a problem loading product variants"
                  resolve={variants}
                >
                  {(data) => (
                    <ProductForm
                      product={product}
                      selectedVariant={selectedVariant}
                      variants={data?.product?.variants.nodes || []}
                    />
                  )}
                </Await>
              </Suspense>

              {/* <div class="product-actions" bis_skin_checked="1">
                <div
                  class="sidebar-widget sidebar-widget--outline "
                  data-js-product-price-extended=""
                  bis_skin_checked="1"
                >
                  <span class="sidebar-widget__title">Price</span>
                  <div class="sidebar-widget__content" bis_skin_checked="1">
                    <div bis_skin_checked="1">
                      <div
                        class="product-price"
                        id="product-price-template--17238268608830__main"
                        bis_skin_checked="1"
                      >
                        <span
                          class="product-price--original pps "
                          data-js-product-price-original=""
                        >
                          $90.00
                        </span>

                        <del
                          class="product-price--compare"
                          data-js-product-price-compare=""
                        ></del>
                        <span
                          class="product-price--saving pps"
                          data-js-product-price-saving=""
                        ></span>
                        <span
                          class="product-price--unit pps text-size--regular"
                          data-js-product-price-unit=""
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <product-form
                  id="add-to-cart-template--17238268608830__main"
                  class="product-form"
                  data-ajax-cart=""
                  data-js-product-form=""
                >
                  <form
                    method="post"
                    action="/cart/add"
                    id="product-form-template--17238268608830__main"
                    accept-charset="UTF-8"
                    class="form"
                    enctype="multipart/form-data"
                    novalidate="novalidate"
                    data-type="add-to-cart-form"
                  >
                    <input type="hidden" name="form_type" value="product" />
                    <input type="hidden" name="utf8" value="✓" />
                    <template>
                      <input type="hidden" name="id" value="44508739240254" />
                    </template>

                    <input type="hidden" name="id" value="44508739240254" />
                    <div class="product__cart-functions" bis_skin_checked="1">
                      <div class="flex-buttons" bis_skin_checked="1">
                        <button
                          type="submit"
                          name="add"
                          class="add-to-cart button button--solid button--product button--loader button--move "
                          data-js-product-add-to-cart=""
                          data-main-product-add-to-cart=""
                          onClick={handleAddToCart}
                        >
                          <span
                            class="button__text"
                            data-js-product-add-to-cart-text=""
                          >
                            Add to cart
                          </span>
                          <span class="button__preloader">
                            <svg
                              class="button__preloader-element"
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
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="product-id"
                      value="8122844741950"
                    />
                    <input
                      type="hidden"
                      name="section-id"
                      value="template--17238268608830__main"
                    />
                  </form>
                </product-form>
                <form
                  method="post"
                  action="/cart/add"
                  id="product-form-installment"
                  accept-charset="UTF-8"
                  class="shopify-product-form"
                  enctype="multipart/form-data"
                >
                  <input type="hidden" name="form_type" value="product" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="id" value="44508739240254" />

                  <input
                    type="hidden"
                    name="product-id"
                    value="8122844741950"
                  />
                  <input
                    type="hidden"
                    name="section-id"
                    value="template--17238268608830__main"
                  />
                </form>
              </div> */}

              <div class="product-recommendation" bis_skin_checked="1">
                <div class="" bis_skin_checked="1">
                  <div
                    class="sidebar-widget sidebar-widget--primary"
                    bis_skin_checked="1"
                  >
                    <span class="sidebar-widget__title">March Sale</span>
                    <div class="sidebar-widget__content" bis_skin_checked="1">
                      <div
                        class="product-item-compact product-item-compact--expanded"
                        bis_skin_checked="1"
                      >
                        <div
                          class="product-item-compact__image"
                          bis_skin_checked="1"
                        >
                          <a href="/products/woolen-blanket">
                            <figure
                              class="lazy-image lazy-image--small lazy-image--scale-animation lazyloaded"
                              data-ratio=""
                            >
                              <img
                                src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/20-1.jpg?crop=center&amp;height=144&amp;v=1675943831&amp;width=120"
                                srcset="
          //bundle-theme-demo-home.myshopify.com/cdn/shop/products/20-1.jpg?crop=center&amp;height=144&amp;v=1675943831&amp;width=120 100w, 
          //bundle-theme-demo-home.myshopify.com/cdn/shop/products/20-1.jpg?crop=center&amp;height=264&amp;v=1675943831&amp;width=220 200w, 
          //bundle-theme-demo-home.myshopify.com/cdn/shop/products/20-1.jpg?crop=center&amp;height=384&amp;v=1675943831&amp;width=320 300w
        "
                                alt="Woolen Blanket Bundle"
                                loading="lazy"
                                sizes="100px"
                                width="3500"
                                height="3500"
                                onload="this.parentNode.classList.add('lazyloaded')"
                              />
                            </figure>
                          </a>
                        </div>

                        <div
                          class="product-item-compact__details"
                          bis_skin_checked="1"
                        >
                          <div
                            class="product-item-compact__price"
                            id="product-price-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                            data-js-product-price=""
                            bis_skin_checked="1"
                          >
                            <span data-js-product-price-original="">
                              $800.00
                            </span>
                            <del data-js-product-price-compare="">
                              <span>$1,000.00</span>
                            </del>
                            <span data-js-product-price-unit=""></span>
                          </div>

                          <a href="/products/woolen-blanket" class="">
                            <span class="text-animation--underline-thin text-weight--bold">
                              Woolen Blanket Bundle
                            </span>
                          </a>
                          <div
                            class="product-item-compact__form product-item-compact__form--horizontal"
                            bis_skin_checked="1"
                          >
                            <quick-buy
                              data-add-to-cart-price="false"
                              data-default-to-first-variant="false"
                            >
                              <div
                                id="product-price-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                data-js-quick-buy-product-price=""
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
                                    $800.00
                                  </span>

                                  <del
                                    class="product-price--compare"
                                    data-js-product-price-compare=""
                                  >
                                    <span>$1,000.00</span>
                                  </del>
                                  <span
                                    class="product-price--unit pps text-size--regular"
                                    data-js-product-price-unit=""
                                  ></span>
                                </div>
                              </div>
                              <product-variants
                                data-variants="1"
                                data-hide-variants="hide"
                                data-url="/products/woolen-blanket"
                                data-id="product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                data-style="select"
                                data-no-history=""
                                class="product-variants--hide-unavailable variant-selected"
                              >
                                <div
                                  class="product-variants no-js-hidden"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    class="product-variant"
                                    data-name="product-title-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                    data-js-product-variant=""
                                    bis_skin_checked="1"
                                  >
                                    <label
                                      class="product-variant__name text-size--small 
              "
                                      for="product-title-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                    >
                                      Select Title
                                    </label>
                                    <select
                                      class="product-variant__container product-variant__container--select text-size--small"
                                      id="product-title-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                      data-js-product-variant-container="select"
                                    >
                                      <option
                                        class="product-variant-value"
                                        value="Default Title"
                                        selected=""
                                      >
                                        Default Title
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <noscript>
                                  <label
                                    for="Variants-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                    class="text-size--small"
                                  >
                                    Variants
                                  </label>
                                  <select
                                    name="id"
                                    id="Variants-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                    class="productSelect"
                                    form="product-form-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                  >
                                    <option
                                      selected="selected"
                                      value="44515293036862"
                                    >
                                      Default Title - $800.00
                                    </option>
                                  </select>
                                </noscript>
                              </product-variants>

                              <div
                                id="add-to-cart-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                class="product-form"
                                data-js-quick-buy-form=""
                                bis_skin_checked="1"
                              >
                                <form
                                  method="post"
                                  action="/cart/add"
                                  id="product-form-product-recommendation-466c65a3-26d9-45bd-88c3-8a9866f61e1c"
                                  accept-charset="UTF-8"
                                  class="form"
                                  enctype="multipart/form-data"
                                  novalidate="novalidate"
                                  data-type="add-to-cart-form"
                                >
                                  <input
                                    type="hidden"
                                    name="form_type"
                                    value="product"
                                  />
                                  <input type="hidden" name="utf8" value="✓" />
                                  <template>
                                    <input
                                      type="hidden"
                                      name="id"
                                      value="44515293036862"
                                    />
                                  </template>

                                  <input
                                    type="hidden"
                                    name="id"
                                    value="44515293036862"
                                  />

                                  <button
                                    type="submit"
                                    name="add"
                                    class="add-to-cart 
         button  button--solid  button--loader button--move 
         
        "
                                    data-js-product-add-to-cart=""
                                  >
                                    <span
                                      class="button__text"
                                      data-js-product-add-to-cart-text=""
                                    >
                                      Add to cart
                                    </span>
                                    <span class="button__preloader">
                                      <svg
                                        class="button__preloader-element"
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
                                    value="8124843491646"
                                  />
                                  <input
                                    type="hidden"
                                    name="section-id"
                                    value="template--17238268608830__main"
                                  />
                                </form>
                              </div>
                            </quick-buy>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </product-page>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
