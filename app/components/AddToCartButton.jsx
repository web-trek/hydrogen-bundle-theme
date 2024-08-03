import {CartForm} from '@shopify/hydrogen';
import '../styles/app.css'

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 * }}
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
        <div>
          {/* <TotalPrice/> */}
        </div>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            className=' add-to-cart-hydrogen'
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */

function TotalPrice(){
  return (
    <>
    <div class="sidebar-widget sidebar-widget--outline " data-js-product-price-extended="" bis_skin_checked="1"><span class="sidebar-widget__title">Price</span><div class="sidebar-widget__content" bis_skin_checked="1"><div bis_skin_checked="1"><div class="product-price" id="product-price-template--17238268608830__main" bis_skin_checked="1"><span class="product-price--original pps " data-js-product-price-original="">$90.00</span><del class="product-price--compare" data-js-product-price-compare=""></del><span class="product-price--saving pps" data-js-product-price-saving=""></span><span class="product-price--unit pps text-size--regular" data-js-product-price-unit=""></span></div></div></div></div>
    </>
  )
}
