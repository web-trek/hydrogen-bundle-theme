import {useLoaderData, Link} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';
import {Pagination, getPaginationVariables, Image} from '@shopify/hydrogen';
import CollectionListGrid from '~/components/CollectionListGrid';
// import CollectionBanner from '~/components/CollectionBanner';

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });

  const [{collections}] = await Promise.all([
    context.storefront.query(COLLECTIONS_QUERY, {
      variables: paginationVariables,
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {collections};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function Collections() {
  /** @type {LoaderReturnData} */
  const {collections} = useLoaderData();

  return (
    <div className="collections">
      {/* <h1>Collections</h1> */}
      <CollectionBanner collection={collections} />
      <Pagination connection={collections}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div>
            <PreviousLink>
              {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
            </PreviousLink>
            {/* <CollectionsGrid collections={nodes} /> */}
            <CollectionListGrid collections={nodes} />
            <NextLink>
              {isLoading ? 'Loading...' : <span>Load more ↓</span>}
            </NextLink>
          </div>
        )}
      </Pagination>
    </div>
  );
}

function CollectionBanner({collection}) {
  return (
    <>
      <div
        id="shopify-section-template--17238268150078__banner"
        className="shopify-section main-collection-banner toggle-when-first container--remove-margin-after"
        data-js-inert=""
        bis_skin_checked="1"
      >
        <div
          className="container--large container--vertical-space-xsmall"
          bis_skin_checked="1"
        >
          <div
            className="breadcrumb-main breadcrumb-main--margin"
            bis_skin_checked="1"
          >
            <div className="breadcrumb-container" bis_skin_checked="1">
              <link
                href="//bundle-theme-demo-home.myshopify.com/cdn/shop/t/2/assets/component-breadcrumb.css?v=50496090104604657381684328656"
                rel="stylesheet"
                type="text/css"
                media="all"
              />
            </div>
          </div>
        </div>
        <div
          className="container--large container--vertical-space-small"
          bis_skin_checked="1"
        >
          <div
            class="section-heading section-heading--left section-heading--two-rows gutter-bottom--page"
            bis_skin_checked="1"
          >
            <div
              class="section-heading__text remove-empty-space"
              bis_skin_checked="1"
            >
              <h1 class="heading-size--page-title !font-normal">Collections</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function CollectionsGrid() {
//   return (
//     <>
//       <div
//         class="container container--large container--vertical-space-small remove-empty-space"
//         bis_skin_checked="1"
//       >
//         <div class="gutter-bottom--page" bis_skin_checked="1">
//           <h1 class="title heading-size--page-title">Collections</h1>
//         </div>
//         <div
//           class="grid grid--layout  grid-3 grid-lap-2 grid-tiny-1 "
//           bis_skin_checked="1"
//         >
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/home-accessories" title="Home Accessories">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?v=1675845668&amp;width=480"
//                     alt="Home Accessories"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=360&amp;v=1675845668&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=540&amp;v=1675845668&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=630&amp;v=1675845668&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=720&amp;v=1675845668&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=960&amp;v=1675845668&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1260&amp;v=1675845668&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1620&amp;v=1675845668&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1920&amp;v=1675845668&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2310&amp;v=1675845668&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2790&amp;v=1675845668&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=3150&amp;v=1675845668&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     Home Accessories
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/bedroom" title="Bedroom">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?v=1676030775&amp;width=480"
//                     alt="Bedroom"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=360&amp;v=1676030775&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=540&amp;v=1676030775&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=630&amp;v=1676030775&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=720&amp;v=1676030775&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=960&amp;v=1676030775&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=1260&amp;v=1676030775&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=1620&amp;v=1676030775&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=1920&amp;v=1676030775&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=2310&amp;v=1676030775&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=2790&amp;v=1676030775&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/22-4.jpg?crop=center&amp;height=3150&amp;v=1676030775&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     Bedroom
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/glassware" title="Glassware">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?v=1675845668&amp;width=480"
//                     alt="Glassware"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=360&amp;v=1675845668&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=540&amp;v=1675845668&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=630&amp;v=1675845668&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=720&amp;v=1675845668&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=960&amp;v=1675845668&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1260&amp;v=1675845668&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1620&amp;v=1675845668&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1920&amp;v=1675845668&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2310&amp;v=1675845668&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2790&amp;v=1675845668&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=3150&amp;v=1675845668&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     Glassware
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/w-s-collection" title="W&amp;S Collection">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?v=1675871329&amp;width=480"
//                     alt="W&amp;S Collection"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=360&amp;v=1675871329&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=540&amp;v=1675871329&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=630&amp;v=1675871329&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=720&amp;v=1675871329&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=960&amp;v=1675871329&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=1260&amp;v=1675871329&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=1620&amp;v=1675871329&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=1920&amp;v=1675871329&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=2310&amp;v=1675871329&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=2790&amp;v=1675871329&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-9.jpg?crop=center&amp;height=3150&amp;v=1675871329&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     loading="lazy"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     W&amp;S Collection
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/tradition" title="&amp;Tradition">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?v=1675845668&amp;width=480"
//                     alt="&amp;Tradition"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=360&amp;v=1675845668&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=540&amp;v=1675845668&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=630&amp;v=1675845668&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=720&amp;v=1675845668&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=960&amp;v=1675845668&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1260&amp;v=1675845668&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1620&amp;v=1675845668&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=1920&amp;v=1675845668&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2310&amp;v=1675845668&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=2790&amp;v=1675845668&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/18-3.jpg?crop=center&amp;height=3150&amp;v=1675845668&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     loading="lazy"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     &amp;Tradition
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//           <div
//             class="js-collection-item text-align--center"
//             bis_skin_checked="1"
//           >
//             <a href="/collections/sets-bundles" title="Sets &amp; Bundles">
//               <div
//                 class="card__image"
//                 style="padding-top:149.9999250000375%"
//                 bis_skin_checked="1"
//               >
//                 <figure
//                   class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
//                   data-ratio="0.666667"
//                   style="padding-top: 149.9999250000375%"
//                   data-crop="false"
//                 >
//                   <img
//                     src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?v=1673943158&amp;width=480"
//                     alt="Sets &amp; Bundles"
//                     srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=360&amp;v=1673943158&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=540&amp;v=1673943158&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=630&amp;v=1673943158&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=720&amp;v=1673943158&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=960&amp;v=1673943158&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1260&amp;v=1673943158&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1620&amp;v=1673943158&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1920&amp;v=1673943158&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=2310&amp;v=1673943158&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=2790&amp;v=1673943158&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=3150&amp;v=1673943158&amp;width=2100 2100w"
//                     class="img"
//                     width="3500"
//                     height="3500"
//                     data-ratio="0.666667"
//                     sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
//                     loading="lazy"
//                     onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
//                   />
//                 </figure>
//               </div>

//               <div
//                 class="gutter-top--regular spacing--xsmall remove-empty-space"
//                 bis_skin_checked="1"
//               >
//                 <span class="text-line-height--medium">
//                   <span class="text-size--regular text-weight--medium text-animation--underline-thin">
//                     Sets &amp; Bundles
//                   </span>
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

/**
 * @param {{collections: CollectionFragment[]}}
 */
function CollectionsGrid({collections}) {
  return (
    <div className="collections-grid">
      {collections.map((collection, index) => (
        <CollectionItem
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}
    </div>
  );
}

/**
 * @param {{
 *   collection: CollectionFragment;
 *   index: number;
 * }}
 */
function CollectionItem({collection, index}) {
  return (
    <Link
      className="collection-item"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      {collection?.image && (
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image}
          loading={index < 3 ? 'eager' : undefined}
        />
      )}
      <h5>{collection.title}</h5>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('storefrontapi.generated').CollectionFragment} CollectionFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
