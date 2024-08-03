import {Link} from '@remix-run/react';
import {VariantSelector} from '@shopify/hydrogen';
import { useState } from 'react';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
export function ProductForm({product, selectedVariant, variants}) {
  const {open} = useAside();
  // console.log(selectedVariant)
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options.filter((option) => option.values.length > 1)}
        variants={variants}
      >
        {({option}) => <ProductOptions key={option.name} option={option} />}
      </VariantSelector>
      <TotalPrice selectedVariant={selectedVariant} />
      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          open('cart');
        }}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                  selectedVariant,
                },
              ]
            : []
        }
      >
        {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}

/**
 * @param {{option: VariantOption}}
 */
function ProductOptions({option}) {
  return (
    <>
      {/* <div className="product-options" key={option.name}>
        <h5>{option.name}</h5>
        <div className="product-options-grid">
          {option.values.map(({value, isAvailable, isActive, to}) => {
            return (
              <Link
                className="product-options-item"
                key={option.name + value}
                prefetch="intent"
                preventScrollReset
                replace
                to={to}
                style={{
                  border: isActive
                    ? '1px solid black'
                    : '1px solid transparent',
                  opacity: isAvailable ? 1 : 0.3,
                }}
              >
                {value}
              </Link>
            );
          })}
        </div>
        <br />
      </div> */}

      <div class="sidebar-widget sidebar-widget--outline" bis_skin_checked="1">
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
            <div class="product-variants no-js-hidden" bis_skin_checked="1">
              <div
                class="product-variant"
                data-name="product-title-template--17238268608830__main"
                data-js-product-variant=""
                bis_skin_checked="1"
              >
                <span class="product-variant__name text-size--small">
                  {option.name}
                </span>

                {option.values.map(({value, isAvailable, isActive, to}) => {
                  const [valueCheck, setValueCheck] = useState('')
                  return (
                    <Link
                      className=" !border-none"
                      key={option.name + value}
                      prefetch="intent"
                      preventScrollReset
                      replace
                      to={to}
                      style={{
                        border: isActive
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: isAvailable ? 1 : 0.3,
                      }}
                    >
                      <div
                        class="product-variant__container product-variant__container--radio product-variant__container--radio--wrap"
                        bis_skin_checked="1"
                      >
                        <div
                          class="product-variant__item product-variant__item--radio"
                          bis_skin_checked="1"
                        >
                          <input
                            type="radio"
                            class="product-variant__input product-variant-value"
                            name={value}
                            value={value}
                            onChange={()=> setValueCheck('checked')}
                            checked={isActive ? 'checked' : ''}
                          />
                          <label
                            class="product-variant__label text-size--small"
                          >
                            {value}
                          </label>
                        </div>
                      </div>
                    </Link>
                  );
                })}

              </div>
            </div>
            <noscript></noscript>
          </product-variants>
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */

function TotalPrice({selectedVariant}) {
  // console.log(selectedVariant);
  return (
    <>
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
                ${selectedVariant.price.amount}
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
    </>
  );
}
