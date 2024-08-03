import React from 'react';
import Image1 from '../assets/Product/A3.webp';
import { Await, Link } from '@remix-run/react';

function ProductRecommendation({recommendedProducts}) {
  console.log(recommendedProducts)
  return (
    <>
      <product-recommendations
        class="product-recommendations"
        data-url="/recommendations/products?section_id=template--17238268608830__product-recommendations&amp;product_id=8122844741950&amp;limit=4&amp;intent=related"
      >
        <div
          class="container--large container--vertical-space   remove-empty-space"
          bis_skin_checked="1"
        >
          <div
            class="section-heading section-heading--left section-heading--two-rows gutter-bottom--large"
            bis_skin_checked="1"
          >
            <div
              class="section-heading__text remove-empty-space"
              bis_skin_checked="1"
            >
              <span class="section-heading__title text-font--secondary text-size--large">
                You may also like
              </span>
            </div>
          </div>
          <div
            class="grid grid--layout grid-4 grid-laptop-3 grid-lap-2 grid-palm-2  reduce-recommendations-on-mobile "
            bis_skin_checked="1"
          >
            <Await resolve={recommendedProducts}>
              {(response) => {
                // console.log(response.products.nodes[0]);
                return (
                  <>
                    {response.products.nodes.map((product) => (
                      <Link key={product.id} to={`/products/${product.handle}`}>
                        {/* <ProductSet/> */}
                        <Item product={product} />
                      </Link>
                    ))}
                  </>
                );
              }}
            </Await>

            
            {/* <Item/>
            <Item/>
            <Item/> */}
          </div>
        </div>
      </product-recommendations>
    </>
  );
}

export default ProductRecommendation;


function Item({product}){
    return (
        <>
            <div
              id="product-item-8123511832894"
              class="product-item"
              data-js-product-item=""
              bis_skin_checked="1">
              <a
                href={`/products/${product.handle}`}
                class=" !block !aspect-[5/6] product-item__image
    "
                data-js-product-item-image=""
              >
                <figure
                  class="!relative lazy-image lazy-image--background product-item__image-figure product-item__image-figure--top lazy-image--zoom-animation product-item__image-no-slider lazyloaded lazy-image--revealed"
                  data-ratio="0.83333"
                  data-crop="false"
                >
                  <img
                    src={product.images.nodes[0].url}
                    alt={product.title}
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
                  href="/products/w-s-little-lion-sculpture?pr_prod_strat=collection_fallback&amp;pr_rec_id=38fa890d5&amp;pr_rec_pid=8123511832894&amp;pr_ref_pid=8122844741950&amp;pr_seq=uniform"
                  title="W&amp;S Little Lion Sculpture"
                >
                  <div
                    class="remove-line-height-space--small"
                    bis_skin_checked="1"
                  >
                    <span class="text-animation--underline-thin text-size--large text-weight--bold">
                      {product.title}
                    </span>
                  </div>
                </a>
                <div class="product-item__ratings" bis_skin_checked="1">
                <div class="product__details product-item__ratings !flex !align-middle gap-3 !h-4" bis_skin_checked="1"><div class="stars flex align-middle gap-1" bis_skin_checked="1"><img class="h-full" src="/app/assets/Icons/star.png" alt=""/><img class="h-full" src="/app/assets/Icons/star.png" alt=""/><img class="h-full" src="/app/assets/Icons/star.png" alt=""/><img class="h-full" src="/app/assets/Icons/star.png" alt=""/><img class="h-full" src="/app/assets/Icons/star.png" alt=""/></div><span class=" !leading-none">(6)</span></div>
                </div>
              </div>
              <div class="product-item__badges" bis_skin_checked="1"></div>
            </div>
        </>
    )
}
