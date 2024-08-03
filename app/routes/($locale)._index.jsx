import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import FeaturedCollectionPlus from '~/components/FeaturedCollectionPlus';
import heroimage from '../assets/hero.webp'
import HeroSection from '~/components/HeroSection';
import '../components/Styles/HeaderMy.css'
import '../components/Styles/Theme.css'
import CollectionList from '~/components/CollectionList';
import CollectionsItems from '~/components/CollectionsItems';
import ImageWIthText from '~/components/ImageWIthText';
import DetailProductList from '~/components/DetailProductList';
import BannerWithText from '~/components/BannerWithText';
import FooterMy from '~/components/FooterMy';
import ControlledCarousel from '~/components/ControlledCarousel';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

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
async function loadCriticalData({context}) {
  // const [{collections}] = await Promise.all([
  //   context.storefront.query(COLLECTION_LIST_QUERY),
  //   // Add other queries here, so that they are loaded in parallel
  // ]);

  const [{collection}] = await Promise.all([
    context.storefront.query(CUSTOM_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  // const [{featuredcollection}] = await Promise.all([
  //   context.storefront.query(FEATURED_COLLECTION_QUERY2),
  //   // Add other queries here, so that they are loaded in parallel
  // ]);

  return {
    // featuredCollection: collections.nodes[0],
    collection: collection,
    // featuredcollection2: featuredcollection,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  const collectionlist = context.storefront
    .query(COLLECTION_LIST_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  const featuredcollection = context.storefront
    .query(FEATURED_COLLECTION_QUERY2)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
    collectionlist,
    featuredcollection,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  // console.log(data)
  return (
    <>
    {/* <FeaturedCollection collection={data.featuredCollection} /> */}
    <HeroSection/>
    <div className="home mx-8">
      <CollectionList collectionsdata={data.collectionlist} />
      <CollectionsItems products={data.featuredcollection} />
      <ImageWIthText/>
      <DetailProductList products={data.recommendedProducts}/>
      <BannerWithText/>
      {/* <FooterMy/> */}
      {/* <FeaturedCollectionPlus collection={data.collection}/> */}
      {/* <RecommendedProducts products={data.recommendedProducts} /> */}
    </div>
    </>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */



function FeaturedCollection({collection}) {
  if (!collection) return null;
  // const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {heroimage && (
        <div className="featured-collection-image w-full h-[98vh]">
          <img src={heroimage} alt="" className='w-full h-full !rounded-none' />
          {/* <Image data={heroimage} sizes="100vw" /> */}
        </div>
      )}
      {/* <h1>{collection.title}</h1> */}
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      className="recommended-product"
                      to={`/products/${product.handle}`}
                    >
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                      />
                      <h4>{product.title}</h4>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </Link>
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 3, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
`;
const CUSTOM_COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query collection {
    collection(id: "gid://shopify/Collection/482617458982") {
      id
      title
      description
      products(first: 4) {
        nodes {
          ...ProductItem
        }
      }
    }
  }
`;

const COLLECTION_LIST_QUERY = `#graphql
  query collectionlist {
  collections(first: 3) {
    edges {
      node {
        id
        title
        handle
        image {
          id
          originalSrc
        }
      }
    }
  }}
`;

const FEATURED_COLLECTION_QUERY2 =`#graphql
  query featuredcollection {
    collection(id: "gid://shopify/Collection/423684407553"){
      id
      title
      handle
      products(first: 4){
        nodes {
          id
          handle
          title
          featuredImage {
            id
            altText
            url
            width
            height
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;



/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
