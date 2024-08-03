import React from 'react';
import './Styles/CollectionBanner.css'

function CollectionBanner({collection}) {
  // console.log(collection)
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

              <nav
                className="breadcrumb"
                role="navigation"
                aria-label="breadcrumbs"
              >
                <span className="breadcrumb__link">
                  <a href="/">
                    <span className="text-animation--underline-thin">Home</span>
                  </a>
                </span>
                <span className="breadcrumb__separator">/</span>
                <span className="breadcrumb__link">
                  <a href="/collections/all">
                    <span className="text-animation--underline-thin">
                      Collections
                    </span>
                  </a>
                </span>
                <span className="breadcrumb__separator">/</span>
                <span className="breadcrumb__current">{collection.title}</span>
              </nav>
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
              <h1 class="heading-size--page-title !font-normal">{collection.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionBanner;
