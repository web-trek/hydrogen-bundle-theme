import React from 'react';
import './Styles/CollectionItems.css';
import Item1 from '../assets/10-1.webp';
import Cookie from '../assets/Icons/cookie.webp';
import Star from '../assets/Icons/star.png';
import Mug from '../assets/Icons/mug.webp';
import icon from '../assets/star-solid.svg';
import { Await, Link } from '@remix-run/react';
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />;

function CollectionsItems({products}) {
  // console.log(products)
  return (
    <>
      <div
        class="container--large container--vertical-space   remove-empty-space"
        bis_skin_checked="1"
      >
        <div
          class="section-heading section-heading--left section-heading--one-row gutter-bottom--large"
          bis_skin_checked="1"
        >
          <div
            class="section-heading__text remove-empty-space"
            bis_skin_checked="1"
          >
            <h2 class="section-heading__title text-font--secondary text-size--large">
              Sets &amp; Bundles
            </h2>
            <span class="section-heading__subheading text-size--small text-color--opacity">
              Save up to 50%
            </span>
          </div>
        </div>
        <div
          class="grid grid--layout grid-4 grid-portable-3 grid-lap-2 grid-tiny-1 grid-palm-2"
          bis_skin_checked="1"
        >
          

          <Await resolve={products}>
                {(response) => {
                    // console.log(response.collection.products.nodes[0]);
                    return (
                        <>
                        {response.collection.products.nodes.map((product) => (
                          <Link key={product.id} to={`/products/${product.handle}`}>
                           <ProductItem product={product} />
                          </Link>
                        ))}
                        </>
                    )
                }}
                </Await>

        </div>
        <div class="section-footer " bis_skin_checked="1">
          <div class="section-footer__actions" bis_skin_checked="1">
            <a
              href="/collections/sets-bundles"
              class="button button--arrow-right   button--icon "
            >
              <span class="button__icon" role="img" aria-hidden="true">
                <svg
                  width="21"
                  height="9"
                  viewBox="0 0 21 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.354 4.854a.5.5 0 0 0 0-.708L17.172.964a.5.5 0 1 0-.707.708L19.293 4.5l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM0 5h20V4H0v1Z"
                    fill="#000"
                  ></path>
                </svg>
              </span>
              <Await resolve={products}>
                {(response)=> (
                  <Link to={`collections/${response.collection.handle}`}>
                  <span class="button__text text-weight-- text-size--">
                    View all products
                  </span>
                  </Link>
                )}
              </Await>
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionsItems;

function ProductItem({product}) {
  // console.log(product)
  return (
    <>
      <div
        id="product-item-8098476032318"
        class="product-item"
        data-js-product-item=""
        bis_skin_checked="1"
      >
        <a
          href={`/products/${product.handle}`}
          class="product-item__image !h-full"
          data-js-product-item-image=""
        >
          <figure
            class="!relative lazy-image lazy-image--background product-item__image-figure product-item__image-figure--top lazy-image--zoom-animation product-item__image-no-slider lazyloaded lazy-image--revealed"
            data-ratio="0.83333"
            data-crop="false"
          >
            <img
              src={product.featuredImage.url}
              alt="4 Planters Set"
              class="img !relative"
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
                  ${product.priceRange.maxVariantPrice.amount}
                </span>

                <del
                  class="product-price--compare"
                  data-js-product-price-compare=""
                >
                  <span> $380.00</span>
                </del>
                <span
                  class="product-price--unit pps text-size--regular"
                  data-js-product-price-unit=""
                ></span>
              </div>
            </div>
          </div>
          <a
            class="product-item__title"
            href="/collections/sets-bundles/products/planters-set"
            title="4 Planters Set"
          >
            <div class="remove-line-height-space--small" bis_skin_checked="1">
              <span class="text-animation--underline-thin text-size--large text-weight--bold mb-2">
                {product.title}
              </span>
            </div>
          </a>
          <div>
            <div
              class="product__details product-item__ratings !flex !align-middle gap-3 !h-4"
              bis_skin_checked="1"
            >
              <div className="stars flex align-middle gap-1 !h-4">
                <img className="h-full" src={Star} alt="" />
                <img className="h-full" src={Star} alt="" />
                <img className="h-full" src={Star} alt="" />
                <img className="h-full" src={Star} alt="" />
                <img className="h-full" src={Star} alt="" />
              </div>
              <span class=" !leading-none">(6)</span>
            </div>
          </div>
          <div class="product-item__icons" bis_skin_checked="1">
            <span class="pill pill--has-icon  pill--compact">
              <span class="pill__icon" aria-hidden="true">
                <img
                  src={Cookie}
                  sizes="24px"
                  width="24"
                  height="24"
                  loading="lazy"
                  alt=""
                />
              </span>
              <span class="pill__label">Concrete</span>
            </span>
            <span class="pill pill--has-icon  pill--compact">
              <span class="pill__icon" aria-hidden="true">
                <img
                  src={Mug}
                  sizes="24px"
                  width="24"
                  height="24"
                  loading="lazy"
                  alt=""
                />
              </span>
              <span class="pill__label">Hand-crafted</span>
            </span>
          </div>
        </div>
        <div class="product-item__badges" bis_skin_checked="1">
          <span class="product-item__badge">-29%</span>
          {/* <span class="product-item__badge">VALUE BUNDLE</span> */}
        </div>
      </div>
    </>
  );
}
