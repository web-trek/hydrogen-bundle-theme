import React from 'react';
import './Styles/HeaderMy.css';
// import './Styles/Header'
import Logo from '../assets/logo_white.webp';
import LogoBlack from '../assets/logo_41a7ae97-9bed-4590-ab96-f3200de18a1c.webp';

function HeaderMy() {
  return (
    <>
      <section
        id="site-header"
        className="site-header site-header--border site-header--alignment-left site-header--absolute  site-header--style-two-rows">
        <div class="header-container header-container--top">
          <div class="container--large">
            <div
              class="header__top header__top--logo-left  site-header--menu-classic"
              id="header-top"
            >
              <div id="logo" class="logo area--logo">
                <a
                  class="logo-img logo-img--mobile"
                  title="Bundle Theme Demo Home"
                  href="/"
                >
                  <img
                    alt=""
                    width="449"
                    height="123"
                    class="absolute-header-icon"
                  />
                  <img
                    // src={Logo}
                    alt=""
                    width="449"
                    height="123"
                  />
                </a>
                <a
                  class="logo-img  logo-img--desk-only "
                  title="Bundle Theme Demo Home"
                  href="/"
                >
                  <img
                    // src="https://bundle-theme-demo-home.myshopify.com/cdn/s…ae97-9bed-4590-ab96-f3200de18a1c.png?v=1671468458"
                    src={LogoBlack}
                    alt=""
                    width="449"
                    height="123"
                    class="absolute-header-icon"
                  />
                  <img src={Logo} alt="" width="449" height="123" />
                </a>
              </div>
              <a
                href="/pages/build-your-set"
                class="area--custom-icon icon-button icon-button--text-none"
                title="Build a Kit"
              >
                <span
                  class="button__icon button__icon--special"
                  role="img"
                  aria-hidden="true"
                >
                  <svg
                    height="64"
                    viewBox="0 0 64 64"
                    width="64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m10 36.125v14.037l22 11.58 22-11.58v-14.037"></path>
                      <path d="m54 23.246 7-8.549-21.742-11.42-7.324 8.42z"></path>
                      <path d="m32 61.742v-27"></path>
                      <path d="m31.934 11.704-7.258-8.42-21.676 11.485 7 8.742z"></path>
                      <path d="m32 34.742-8.584 8.929-20.449-11.676 7.033-8.484zm22-11.496 7 8.742-20.324 11.743-8.676-8.989z"></path>
                    </g>
                  </svg>
                </span>
              </a>
              <a
                href="/search"
                class="area--search  icon-button icon-button--text-none "
                title="Open search"
                data-js-open-search-drawer=""
                data-js-sidebar-handle=""
                aria-expanded="false"
                aria-controls="site-search-sidebar"
                role="button"
              >
                <span class="button__icon" role="img" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="7.5"
                      stroke="black"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="M17.1213 15.2929L16.4142 14.5858L15 16L15.7071 16.7071L17.1213 15.2929ZM19.2426 20.2426C19.6331 20.6332 20.2663 20.6332 20.6568 20.2426C21.0473 19.8521 21.0473 19.219 20.6568 18.8284L19.2426 20.2426ZM15.7071 16.7071L19.2426 20.2426L20.6568 18.8284L17.1213 15.2929L15.7071 16.7071Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                class="no-js-hidden area--cart icon-button icon-button--text-none "
                data-js-sidebar-handle=""
                aria-expanded="false"
                aria-controls="site-cart-sidebar"
                role="button"
                title="Open cart"
                tabindex="0"
              >
                <span class="visually-hidden">Open cart</span>
                <span class="button__icon" role="img" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="circle"
                      d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      class="circle"
                      d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span
                  data-header-cart-count=""
                  aria-hidden="true"
                  class="icon-button__label"
                >
                  0
                </span>
              </a>

              <noscript>
                <a
                  class="button button--solid button--icon button--regular data-js-hidden"
                  href="/cart"
                  tabindex="0"
                >
                  <span class="button__icon" role="img" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="circle"
                        d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        class="circle"
                        d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                        fill="white"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span data-header-cart-total aria-hidden="true">
                    $0.00
                  </span>
                  &nbsp; (
                  <span data-header-cart-count aria-hidden="true">
                    0
                  </span>
                  )
                </a>
              </noscript>
              <button
                data-js-sidebar-handle=""
                class="mobile-menu-button hide lap-show area--menu icon-button icon-button--text-none"
                aria-expanded="false"
                aria-controls="site-menu-sidebar"
              >
                <span class="visually-hidden">Open menu</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 20 16"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#000">
                    <path d="m0 0h20v2h-20z"></path>
                    <path d="m0 7h20v2h-20z"></path>
                    <path d="m0 14h20v2h-20z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="header-container header-container--bottom no-header-blocks">
          <div class="header__bottom  container--large">
            <div class="site-nav style--classic">
              <div class="site-nav-container">
                <nav>
                  <ul class="link-list">
                    <li>
                      <a
                        href="/"
                        class="menu-link menu-link--is-icon no-focus-link area--custom-icon icon-button"
                      >
                        <span
                          class="button__icon button__icon--special"
                          role="img"
                          aria-hidden="true"
                        >
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 14 16"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m13.9999 5.58883-6.99997-5.58883-6.99993 5.58883v10.16117h4.9609l.00014-5.7299h4.07806v5.7299h4.9609z"
                              fill="var(--color-text-header)"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li class="has-submenu submenu-is-mega-menu js-mega-menu-item">
                      <a class="menu-link " tabindex="0">
                        <span>
                          <span class="text-animation--underline-in-header">
                            Shop
                          </span>
                        </span>
                        <span class="icon">
                          <svg
                            fill="none"
                            height="7"
                            viewBox="0 0 12 7"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#000">
                              <path d="m1.2334.554688 5.65685 5.656852-.7071.70711-5.656858-5.65686z"></path>
                              <path d="m11.8247 1.26221-5.65685 5.65685-.7071-.70711 5.65685-5.65685z"></path>
                            </g>
                          </svg>
                        </span>
                      </a>

                      <ul class="submenu mega-menu" id="SiteNavLabel--classic">
                        <div
                          class="submenu-holder 
       container--large 
       submenu-holder--promotion-width-third 
       submenu-holder--promotion-both 
    "
                        >
                          <div
                            class="submenu-masonry 
           
            with-promotion column-size--third
             
              column-size--both
            
          "
                            data-columns="1"
                          >
                            <li class="mega-link " data-macy-complete="1">
                              <a
                                class="menu-link  no-focus-link  "
                                href="/collections/all-products"
                              >
                                <span>
                                  <span class="text-animation--underline-in-header">
                                    All products
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li
                              class="mega-link  has-babymenu "
                              data-macy-complete="1"
                            >
                              <a
                                class="menu-link  "
                                href="/collections/sets-bundles"
                              >
                                <span>
                                  <span class="text-animation--underline-in-header">
                                    Sets &amp; Bundles
                                  </span>
                                </span>
                                <span class="icon">
                                  <svg
                                    fill="none"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g fill="#000">
                                      <path d="m1.2334.554688 5.65685 5.656852-.7071.70711-5.656858-5.65686z"></path>
                                      <path d="m11.8247 1.26221-5.65685 5.65685-.7071-.70711 5.65685-5.65685z"></path>
                                    </g>
                                  </svg>
                                </span>
                              </a>
                              <div class="babymenu">
                                <ul id="SiteNavLabel-sets-bundles-classic">
                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/products/2-glasses-carafe"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          2 Glasses &amp; Carafe
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/products/bronzed-brass-candleholder-set"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          Bronzed Brass Candleholder Set
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/products/planters-set"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          4 Planters Set
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/products/candleholder-set"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          Candleholder Set
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/products/glass-vases"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          Glass Vases Set
                                        </span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              class="mega-link  has-babymenu "
                              data-macy-complete="1"
                            >
                              <a class="menu-link  " href="/collections">
                                <span>
                                  <span class="text-animation--underline-in-header">
                                    Collections
                                  </span>
                                </span>
                                <span class="icon">
                                  <svg
                                    fill="none"
                                    height="7"
                                    viewBox="0 0 12 7"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g fill="#000">
                                      <path d="m1.2334.554688 5.65685 5.656852-.7071.70711-5.656858-5.65686z"></path>
                                      <path d="m11.8247 1.26221-5.65685 5.65685-.7071-.70711 5.65685-5.65685z"></path>
                                    </g>
                                  </svg>
                                </span>
                              </a>
                              <div class="babymenu">
                                <ul id="SiteNavLabel-collections-classic">
                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/collections/tradition"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          &amp;Tradition
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/collections/glassware"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          Glassware
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/collections/w-s-collection"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          W&amp;S Collection
                                        </span>
                                      </span>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      class="menu-link  no-focus-link "
                                      href="/collections/textiles"
                                    >
                                      <span>
                                        <span class="text-animation--underline-in-header">
                                          Textiles
                                        </span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </div>
                          <li class="mega-link has-promotion">
                            <div class="menu-promotion">
                              <a
                                href="/pages/build-your-set"
                                class="menu-promotion-background-image"
                              >
                                <figure
                                  class="lazy-image lazyloaded"
                                  data-ratio="0.8428150021070375"
                                  data-crop="true"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=480"
                                    alt=""
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo5_43832dfe-9300-4d04-ac13-b2d2de9b7fff.jpg?v=1675927943&amp;width=1860 1860w"
                                    class="img"
                                    width="2000"
                                    height="2373"
                                    data-ratio="0.8428150021070375"
                                    sizes="(max-width: 474px) calc(100vw - 40px), (max-width: 1023px) 335px, (max-width: 1360px) calc((100vw - 100px) / 1.33), 947.3684210526316px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');"
                                  />
                                </figure>
                              </a>
                              <div class="menu-promotion-content gutter-top--small rte remove-empty-space">
                                <p>
                                  Trending
                                  <br />
                                  <a
                                    href="/pages/build-your-set"
                                    title="Build Your Set"
                                  >
                                    <strong>Build Your Set &amp; Save</strong>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li class="mega-link has-promotion">
                            <div class="menu-promotion">
                              <a
                                href="/products/bronzed-brass-candleholder-set"
                                class="menu-promotion-background-image"
                              >
                                <figure
                                  class="lazy-image lazyloaded"
                                  data-ratio="0.724112961622013"
                                  data-crop="true"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=480"
                                    alt=""
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/files/promo8.jpg?v=1675928055&amp;width=1860 1860w"
                                    class="img"
                                    width="2000"
                                    height="2762"
                                    data-ratio="0.724112961622013"
                                    sizes="(max-width: 474px) calc(100vw - 40px), (max-width: 1023px) 335px, (max-width: 1360px) calc((100vw - 100px) / 1.33), 947.3684210526316px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');"
                                  />
                                </figure>
                              </a>
                              <div class="menu-promotion-content gutter-top--small rte remove-empty-space">
                                <p>
                                  Bestseller
                                  <br />
                                  <a
                                    href="/products/bronzed-brass-candleholder-set"
                                    title="Bronzed Brass Candleholder Set"
                                  >
                                    <strong>Bronzed Brass Candleholdler</strong>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li class="has-submenu submenu-is-mega-menu js-mega-menu-item">
                      <a class="menu-link " href="/collections/all">
                        <span>
                          <span class="text-animation--underline-in-header">
                            Bestsellers
                          </span>
                        </span>
                        <span class="icon">
                          <svg
                            fill="none"
                            height="7"
                            viewBox="0 0 12 7"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#000">
                              <path d="m1.2334.554688 5.65685 5.656852-.7071.70711-5.656858-5.65686z"></path>
                              <path d="m11.8247 1.26221-5.65685 5.65685-.7071-.70711 5.65685-5.65685z"></path>
                            </g>
                          </svg>
                        </span>
                      </a>

                      <ul class="submenu mega-menu" id="SiteNavLabel--classic">
                        <div
                          class="submenu-holder 
       container--large 
      
      
    "
                        >
                          <div class="grid grid--layout grid-6 grid-portable-2">
                            <a
                              href="/products/bronzed-brass-candleholder-set"
                              title="Bronzed Brass Candleholder Set"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?v=1673880127&amp;width=480"
                                    alt="Bronzed Brass Candleholder Set"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=288&amp;v=1673880127&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=432&amp;v=1673880127&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=504&amp;v=1673880127&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=576&amp;v=1673880127&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=768&amp;v=1673880127&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=1008&amp;v=1673880127&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=1296&amp;v=1673880127&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=1536&amp;v=1673880127&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=1848&amp;v=1673880127&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=2232&amp;v=1673880127&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=2520&amp;v=1673880127&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=2952&amp;v=1673880127&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/8-1.jpg?crop=center&amp;height=3384&amp;v=1673880127&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps "
                                        data-js-product-price-original=""
                                      >
                                        $170.00
                                      </span>

                                      <del
                                        class="product-price--compare"
                                        data-js-product-price-compare=""
                                      >
                                        <span>$255.00</span>
                                      </del>
                                      <span
                                        class="product-price--unit pps text-size--regular"
                                        data-js-product-price-unit=""
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      Bronzed Brass Candleholder Set
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/products/glass-vases"
                              title="Glass Vases Set"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?v=1673879809&amp;width=480"
                                    alt="Glass Vases Set"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=288&amp;v=1673879809&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=432&amp;v=1673879809&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=504&amp;v=1673879809&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=576&amp;v=1673879809&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=768&amp;v=1673879809&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=1008&amp;v=1673879809&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=1296&amp;v=1673879809&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=1536&amp;v=1673879809&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=1848&amp;v=1673879809&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=2232&amp;v=1673879809&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=2520&amp;v=1673879809&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=2952&amp;v=1673879809&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/6-1.jpg?crop=center&amp;height=3384&amp;v=1673879809&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps "
                                        data-js-product-price-original=""
                                      >
                                        $140.00
                                      </span>

                                      <del
                                        class="product-price--compare"
                                        data-js-product-price-compare=""
                                      >
                                        <span>$220.00</span>
                                      </del>
                                      <span
                                        class="product-price--unit pps text-size--regular"
                                        data-js-product-price-unit=""
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      Glass Vases Set
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/products/tray"
                              title="Tray"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?v=1675755240&amp;width=480"
                                    alt="Tray"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=288&amp;v=1675755240&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=432&amp;v=1675755240&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=504&amp;v=1675755240&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=576&amp;v=1675755240&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=768&amp;v=1675755240&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=1008&amp;v=1675755240&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=1296&amp;v=1675755240&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=1536&amp;v=1675755240&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=1848&amp;v=1675755240&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=2232&amp;v=1675755240&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=2520&amp;v=1675755240&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=2952&amp;v=1675755240&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/16-1.jpg?crop=center&amp;height=3384&amp;v=1675755240&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps"
                                        data-js-product-price-original=""
                                      >
                                        From $106.00
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
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      Tray
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/products/w-s-complot-candleholder"
                              title="W&amp;S Complot Candleholder"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?v=1675869346&amp;width=480"
                                    alt="W&amp;S Complot Candleholder"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=288&amp;v=1675869346&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=432&amp;v=1675869346&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=504&amp;v=1675869346&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=576&amp;v=1675869346&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=768&amp;v=1675869346&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=1008&amp;v=1675869346&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=1296&amp;v=1675869346&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=1536&amp;v=1675869346&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=1848&amp;v=1675869346&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=2232&amp;v=1675869346&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=2520&amp;v=1675869346&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=2952&amp;v=1675869346&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/19-11.jpg?crop=center&amp;height=3384&amp;v=1675869346&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps "
                                        data-js-product-price-original=""
                                      >
                                        $70.00
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
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      W&amp;S Complot Candleholder
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/products/planters-set"
                              title="4 Planters Set"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?v=1673943158&amp;width=480"
                                    alt="4 Planters Set"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=288&amp;v=1673943158&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=432&amp;v=1673943158&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=504&amp;v=1673943158&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=576&amp;v=1673943158&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=768&amp;v=1673943158&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1008&amp;v=1673943158&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1296&amp;v=1673943158&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1536&amp;v=1673943158&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=1848&amp;v=1673943158&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=2232&amp;v=1673943158&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=2520&amp;v=1673943158&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=2952&amp;v=1673943158&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/10-1.jpg?crop=center&amp;height=3384&amp;v=1673943158&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps "
                                        data-js-product-price-original=""
                                      >
                                        $200.00
                                      </span>

                                      <del
                                        class="product-price--compare"
                                        data-js-product-price-compare=""
                                      >
                                        <span>$280.00</span>
                                      </del>
                                      <span
                                        class="product-price--unit pps text-size--regular"
                                        data-js-product-price-unit=""
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      4 Planters Set
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/products/2-glasses-carafe"
                              title="2 Glasses &amp; Carafe"
                              class="product-item"
                            >
                              <div
                                class="card__image product-item__image
                "
                              >
                                <figure
                                  class="lazy-image lazy-image--background product-item__image-figure lazy-image--animation lazyloaded lazy-image--revealed"
                                  data-ratio="0.83333"
                                  data-crop="false"
                                >
                                  <img
                                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?v=1673886287&amp;width=480"
                                    alt="2 Glasses &amp; Carafe"
                                    srcset="//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=288&amp;v=1673886287&amp;width=240 240w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=432&amp;v=1673886287&amp;width=360 360w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=504&amp;v=1673886287&amp;width=420 420w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=576&amp;v=1673886287&amp;width=480 480w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=768&amp;v=1673886287&amp;width=640 640w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=1008&amp;v=1673886287&amp;width=840 840w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=1296&amp;v=1673886287&amp;width=1080 1080w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=1536&amp;v=1673886287&amp;width=1280 1280w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=1848&amp;v=1673886287&amp;width=1540 1540w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=2232&amp;v=1673886287&amp;width=1860 1860w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=2520&amp;v=1673886287&amp;width=2100 2100w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=2952&amp;v=1673886287&amp;width=2460 2460w,//bundle-theme-demo-home.myshopify.com/cdn/shop/products/9-1.jpg?crop=center&amp;height=3384&amp;v=1673886287&amp;width=2820 2820w"
                                    class="img"
                                    width="3500"
                                    height="3500"
                                    data-ratio="0.83333"
                                    sizes="(max-width: 1360px) calc((100vw - 200px) / 6), 226px"
                                    loading="lazy"
                                    onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                                  />
                                </figure>
                              </div>

                              <div class="card__text product-item__text gutter-top--small spacing--large remove-empty-space">
                                <div class="product-item__price text-size--small equalize-white-space">
                                  <div
                                    class="remove-line-height-space"
                                    data-js-product-item-price=""
                                  >
                                    <div
                                      class="product-price"
                                      id="product-price-"
                                    >
                                      <span
                                        class="product-price--original pps "
                                        data-js-product-price-original=""
                                      >
                                        $88.00
                                      </span>

                                      <del
                                        class="product-price--compare"
                                        data-js-product-price-compare=""
                                      >
                                        <span>$112.00</span>
                                      </del>
                                      <span
                                        class="product-price--unit pps text-size--regular"
                                        data-js-product-price-unit=""
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="product-item__title">
                                  <div class="remove-line-height-space--small">
                                    <span class="text-animation--underline-in-header text-size--regular text-weight--bold">
                                      2 Glasses &amp; Carafe
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="mega-menu__footer">
                            <a
                              href="/collections/all"
                              class="button button--outline button--outline-hover   button--icon "
                            >
                              <span
                                class="button__icon"
                                role="img"
                                aria-hidden="true"
                              >
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
                              <span class="button__text text-weight-- text-size--">
                                More products
                              </span>
                            </a>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li id="menu-item-build-your-set-classic">
                      <a
                        class="menu-link   no-focus-link  "
                        href="/pages/build-your-set"
                      >
                        <span>
                          <span class="text-animation--underline-in-header">
                            Build Your Set
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-lookbook-classic">
                      <a
                        class="menu-link   no-focus-link  "
                        href="/pages/lookbook"
                      >
                        <span>
                          <span class="text-animation--underline-in-header">
                            Lookbook
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-sale-classic">
                      <a class="menu-link   no-focus-link  " href="/pages/sale">
                        <span>
                          <span class="text-animation--underline-in-header">
                            SALE
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-theme-features-classic">
                      <a
                        class="menu-link   no-focus-link  "
                        href="/pages/theme-features"
                      >
                        <span>
                          <span class="text-animation--underline-in-header">
                            THEME FEATURES
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <script
                    src="//bundle-theme-demo-home.myshopify.com/cdn/shop/t/2/assets/vendor-macy.js?v=6843837194850696251671005888"
                    defer=""
                  ></script>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderMy;