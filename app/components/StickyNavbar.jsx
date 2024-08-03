import React, {Suspense, useState} from 'react';
import './Styles/StickyNavbar.css';
import Image1 from '../assets/MenuFeature/A1.webp';
import Image2 from '../assets/MenuFeature/A2.webp';
import {Await, Link} from '@remix-run/react';
import Logo from '../assets/logo_41a7ae97-9bed-4590-ab96-f3200de18a1c.webp';
import {useAside} from './Aside';
import {useAnalytics} from '@shopify/hydrogen';

function StickyNavbar({header, cart, isLoggedIn}) {
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  // console.log(header);
  return (
    <>
      <div class="sticky-header site-header show" bis_skin_checked="1">
        <div
          class="header__bottom header-container container--large portable-hide"
          bis_skin_checked="1"
        >
          <div class="site-nav style--classic" bis_skin_checked="1">
            <div class="site-nav-container" bis_skin_checked="1">
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
                  {header.menu.items.map((item) => (
                    <NavItem item={item} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div bis_skin_checked="1" className="icon__wrapper">
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
              // href="/search"
              class="area--search  icon-button icon-button--text-none "
              title="Open search"
              data-js-open-search-drawer=""
              data-js-sidebar-handle=""
              aria-expanded="false"
              aria-controls="site-search-sidebar"
              role="button"
              onClick={() => setOpenSearchDrawer('!grid')}
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
              
              <CartToggle cart={cart} />
            </a>
          </div>
        </div>
      </div>

      <MobileNav className="moblie__nav" header={header} cart={cart} />

      <SearchDrawer
        openSearchDrawer={openSearchDrawer}
        setOpenSearchDrawer={setOpenSearchDrawer}
      />

      {/* <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} /> */}
      {/* <CartToggle cart={cart} /> */}
    </>
  );
}

export default StickyNavbar;

function NavItem({item}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavHandler = () => {
    if (menuOpen == false) {
      setMenuOpen(true);
    }
    if (menuOpen == true) {
      setMenuOpen(false);
    }
  };

  const url =
    item.url.includes('myshopify.com') ||
    item.url.includes(publicStoreDomain) ||
    item.url.includes(primaryDomainUrl)
      ? new URL(item.url).pathname
      : item.url;

  return (
    <>
      <li
        class="has-submenu submenu-is-mega-menu js-mega-menu-item"
        onClick={NavHandler}
      >
        <a class="menu-link " tabindex="0">
          <a href={url}>
            <span>
              <span class="text-animation--underline-in-header">
                {item.title}
              </span>
            </span>
          </a>
          {item.items[0] && (
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
          )}
        </a>

        {menuOpen == true && item.items[0] && (
          <ul
            class="submenu submenu__hero mega-menu"
            id="SiteNavLabel--classic-sticky"
          >
            <div
              class="submenu-holder container--large submenu-holder--promotion-width-third submenu-holder--promotion-both "
              bis_skin_checked="1"
            >
              <div
                class="submenu-masonry !flex !flex-col with-promotion column-size--third column-size--both"
                data-columns="1"
                bis_skin_checked="1"
              >
                {item.items.map((submenu) => {
                  console.log(submenu);
                  const url =
                    submenu.url.includes('myshopify.com') ||
                    submenu.url.includes(publicStoreDomain) ||
                    submenu.url.includes(primaryDomainUrl)
                      ? new URL(submenu.url).pathname
                      : item.url;
                  return (
                    <li
                      class="mega-link  has-babymenu opened"
                      data-macy-complete="1"
                    >
                      <a class="menu-link  " href={url}>
                        <span>
                          <span class="text-animation--underline-in-header">
                            {submenu.title}
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
                    </li>
                  );
                })}
              </div>
              <li class="mega-link has-promotion">
                <div class="menu-promotion" bis_skin_checked="1">
                  <a
                    href="/pages/build-your-set"
                    class="menu-promotion-background-image"
                  >
                    <figure
                      class="lazy-image lazyloaded !h-full !relative"
                      data-ratio="0.8428150021070375"
                      data-crop="true"
                    >
                      <img
                        src={Image1}
                        alt=""
                        class="img !relative"
                        width="2000"
                        height="2373"
                        data-ratio="0.8428150021070375"
                        sizes="(max-width: 474px) calc(100vw - 40px), (max-width: 1023px) 335px, (max-width: 1360px) calc((100vw - 100px) / 1.33), 947.3684210526316px"
                        loading="lazy"
                        onload="this.parentNode.classList.add('lazyloaded');"
                      />
                    </figure>
                  </a>
                  <div
                    class="menu-promotion-content gutter-top--small rte remove-empty-space"
                    bis_skin_checked="1"
                  >
                    <p>
                      Trending
                      <br />
                      <a href="/pages/build-your-set" title="Build Your Set">
                        <strong>Build Your Set &amp; Save</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="mega-link has-promotion">
                <div class="menu-promotion" bis_skin_checked="1">
                  <a
                    href="/products/bronzed-brass-candleholder-set"
                    class="menu-promotion-background-image"
                  >
                    <figure
                      class="lazy-image lazyloaded !h-full !relative"
                      data-ratio="0.724112961622013"
                      data-crop="true"
                    >
                      <img
                        src={Image2}
                        alt=""
                        class="img !relative"
                        width="2000"
                        height="2762"
                        data-ratio="0.724112961622013"
                        sizes="(max-width: 474px) calc(100vw - 40px), (max-width: 1023px) 335px, (max-width: 1360px) calc((100vw - 100px) / 1.33), 947.3684210526316px"
                        loading="lazy"
                        onload="this.parentNode.classList.add('lazyloaded');"
                      />
                    </figure>
                  </a>
                  <div
                    class="menu-promotion-content gutter-top--small rte remove-empty-space"
                    bis_skin_checked="1"
                  >
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
        )}
      </li>
    </>
  );
}

function MobileNav({header, cart}) {
  // console.log(header.menu)
  const [openSidebar, setOpenSideBar] = useState(false);
  const [openSearchDrawer, setOpenSearchDrawer] = useState('');
  console.log(openSearchDrawer);

  return (
    <>
      {openSidebar == true && (
        <sidebar-drawer
          id="site-menu-sidebar"
          class="sidebar !grid right-0 bottom-0 border sidebar--right sidebar--opened"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
        >
          <div class="sidebar__header" onClick={() => setOpenSideBar(false)}>
            <span class="sidebar__title">Menu</span>
            <button class="sidebar__close" data-js-close="">
              <span class="visually-hidden">Close sidebar</span>
              <span aria-hidden="true" aria-role="img">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L1 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1 1L17 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <Sidebar header={header} />
        </sidebar-drawer>
      )}

      <div
        class="site-header element--hide-on-portable-plus"
        bis_skin_checked="1"
      >
        <div class="container--large" bis_skin_checked="1">
          <div
            class="header__top header__top--logo-left  site-header--menu-classic"
            id="header-top-sticky"
            bis_skin_checked="1"
          >
            <div id="logo-sticky" class="logo area--logo" bis_skin_checked="1">
              <a
                class="logo-img logo-img--mobile"
                title="Bundle Theme Demo Home"
                href="/"
              >
                <img
                  src={Logo}
                  alt=""
                  width="449"
                  height="123"
                  class="absolute-header-icon"
                />
              </a>
              <a
                class="logo-img  logo-img--desk-only "
                title="Bundle Theme Demo Home"
                href="/"
              >
                <img
                  src={Logo}
                  alt=""
                  width="449"
                  height="123"
                  class="absolute-header-icon"
                />
                <img src="" alt="" width="449" height="123" />
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
              // href="/search"
              class="area--search  icon-button icon-button--text-none "
              title="Open search"
              data-js-open-search-drawer=""
              data-js-sidebar-handle=""
              aria-expanded="true"
              aria-controls="site-search-sidebar"
              role="button"
              onClick={() => setOpenSearchDrawer('!grid')}
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
              <CartToggle cart={cart} />
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
              onClick={() => { console.log('hii'); setOpenSideBar(true)}}
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

      <SearchDrawer
        openSearchDrawer={openSearchDrawer}
        setOpenSearchDrawer={setOpenSearchDrawer}
      />
    </>
  );
}

function Sidebar({header}) {
  const [linkOpened, setLinkOpened] = useState('');
  const [openFirstMenu, setOpenFirstMenu] = useState('');

  const [closebar, setCloseBar] = useState(false);

  console.log('hii', header);

  return (
    <>
      <div class="sidebar__body">
        <mobile-navigation class={openFirstMenu}>
          <div class="site-nav style--sidebar">
            <div class="site-nav-container">
              <nav>
                <ul class="link-list">
                  <li id="menu-item-home !border-t-4 !border-indigo-500">
                    <a class="menu-link" href="/">
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
                      <span>Home</span>
                    </a>
                  </li>

                  {header.menu.items.map((item) => {
                    const url =
                      item.url.includes('myshopify.com') ||
                      item.url.includes(publicStoreDomain) ||
                      item.url.includes(primaryDomainUrl)
                        ? new URL(item.url).pathname
                        : item.url;
                    return (
                      <li
                        class={`has-submenu submenu-is-mega-menu js-mega-menu-item ${linkOpened}`}
                      >
                        <a
                          class="menu-link text-weight--bold text-size--large"
                          tabindex="0"
                        >
                          <Link to={url}>
                            <span>
                              <span class="">{item.title}</span>
                            </span>
                          </Link>

                          {item.items[0] && (
                            <span
                              class="icon"
                              onClick={() => {
                                setLinkOpened('opened');
                                setOpenFirstMenu('opened-first-submenu');
                              }}
                            >
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
                          )}
                        </a>

                        <ul
                          class="submenu mega-menu"
                          id="SiteNavLabel--sidebar"
                        >
                          <div class="submenu-holder submenu-holder--promotion-width-third submenu-holder--promotion-both  ">
                            <div
                              class="submenu-masonry with-promotion column-size--thirdcolumn-size--both"
                              data-columns="1"
                            >
                              <li
                                class="submenu-back"
                                onClick={() => {
                                  setLinkOpened('');
                                  setOpenFirstMenu('');
                                }}
                              >
                                <a>
                                  <span
                                    class="icon"
                                    onClick={() => {
                                      setLinkOpened('opened');
                                      setOpenFirstMenu('opened-first-submenu');
                                    }}
                                  >
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
                                  Back
                                </a>
                              </li>

                              {item.items.map((submenu) => {
                                const url =
                                  submenu.url.includes('myshopify.com') ||
                                  submenu.url.includes(publicStoreDomain) ||
                                  submenu.url.includes(primaryDomainUrl)
                                    ? new URL(submenu.url).pathname
                                    : submenu.url;
                                return (
                                  <li class="mega-link !pt-4">
                                    <a
                                      class="menu-link  no-focus-link  text-weight--bold text-size--large"
                                      href={url}
                                    >
                                      <span>
                                        <span class="">{submenu.title}</span>
                                      </span>
                                    </a>
                                  </li>
                                );
                              })}
                            </div>
                          </div>
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </mobile-navigation>
      </div>

      <div class="sidebar__footer site-menu-sidebar-footer">
        <div class="social-icons">
          <a href="#" target="_blank">
            <span class="visually-hidden">Facebook</span>
            <span class="icon" aria-hidden="true">
              <svg
                fill="none"
                height="120"
                viewBox="0 0 120 120"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m81.3942 66.8069 2.8527-18.2698h-17.8237v-11.8507c0-5.0051 2.4876-9.8755 10.4751-9.8755h8.1017v-15.5765s-7.3485-1.2344-14.4004-1.2344c-14.6743 0-24.2822 8.7533-24.2822 24.5991v13.938h-16.3174v18.2698h16.3174v44.1931h20.083v-44.1931z"
                  fill="#000"
                ></path>
              </svg>
            </span>
          </a>
          <a href="#" target="_blank">
            <span class="visually-hidden">Instagram</span>
            <span class="icon" aria-hidden="true">
              <svg
                fill="none"
                height="120"
                viewBox="0 0 120 120"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m60 10c-13.606 0-15.2957.0667-20.6092.289-5.3357.2668-8.9595 1.0894-12.1387 2.3344-3.2903 1.2895-6.0916 3.0013-8.8484 5.7803-2.779 2.7568-4.5131 5.5581-5.7803 8.8484-1.245 3.1792-2.0676 6.803-2.3344 12.1387-.2445 5.3357-.289 7.0254-.289 20.6092s.0667 15.2957.289 20.6092c.2668 5.3357 1.0894 8.9595 2.3344 12.1387 1.2895 3.2903 3.0013 6.0916 5.7803 8.8481 2.7568 2.779 5.5581 4.513 8.8484 5.781 3.1792 1.222 6.8253 2.067 12.1387 2.334 5.3357.245 7.0254.289 20.6092.289s15.2957-.067 20.6092-.289c5.3357-.267 8.9595-1.112 12.1387-2.334 3.2903-1.29 6.0916-3.002 8.8481-5.781 2.779-2.7565 4.513-5.5578 5.781-8.8481 1.222-3.1792 2.067-6.8253 2.334-12.1387.245-5.3357.289-7.0254.289-20.6092s-.067-15.2957-.289-20.6092c-.267-5.3357-1.112-8.9817-2.334-12.1387-1.29-3.2903-3.002-6.0916-5.781-8.8484-2.7565-2.779-5.5578-4.5131-8.8481-5.7803-3.1792-1.245-6.8253-2.0676-12.1387-2.3344-5.3135-.2445-7.0032-.289-20.6092-.289zm0 9.004c13.3615 0 14.94.0667 20.2312.289 4.8688.2223 7.5145 1.0449 9.2708 1.7341 2.3566.9115 3.9795 1.9787 5.7581 3.735 1.7341 1.7341 2.8235 3.4015 3.735 5.7581.6892 1.7564 1.5119 4.402 1.7339 9.2708.223 5.269.289 6.8697.289 20.2312s-.066 14.94-.311 20.2312c-.267 4.8689-1.0672 7.5145-1.7564 9.2708-.9559 2.3566-2.0008 3.9796-3.7572 5.7581-1.7563 1.7342-3.446 2.8235-5.7581 3.735-1.7341.6892-4.4242 1.5117-9.3152 1.7337-5.3135.223-6.8698.289-20.2535.289s-14.94-.066-20.2534-.311c-4.8689-.267-7.559-1.0669-9.3153-1.7561-2.3788-.956-4.0018-2.0009-5.7581-3.7573-1.7563-1.7563-2.8902-3.4459-3.735-5.7581-.7114-1.7341-1.5118-4.4242-1.7563-9.3152-.1779-5.2468-.2668-6.8697-.2668-20.1868 0-13.317.0889-14.9399.2668-20.2534.2668-4.8911 1.0671-7.5589 1.7563-9.3153.8671-2.3788 1.9787-4.0017 3.735-5.7581 1.7341-1.7341 3.3793-2.8679 5.7581-3.7572 1.7563-.6892 4.3797-1.4896 9.2708-1.7341 5.3135-.2001 6.8697-.2668 20.2312-.2668zm0 15.3402c-14.2063 0-25.6781 11.494-25.6781 25.678 0 14.2063 11.494 25.6781 25.6781 25.6781 14.2063 0 25.6781-11.494 25.6781-25.6781 0-14.184-11.494-25.678-25.6781-25.678zm0 42.3521c-9.2263 0-16.6741-7.4477-16.6741-16.6741 0-9.2263 7.4478-16.674 16.6741-16.674s16.6741 7.4477 16.6741 16.674c0 9.2264-7.4478 16.6741-16.6741 16.6741zm32.7257-43.3748c0 3.3348-2.7124 6.0026-6.0027 6.0026-3.3348 0-6.0027-2.69-6.0027-6.0026s2.7123-6.0027 6.0027-6.0027c3.2903 0 6.0027 2.6901 6.0027 6.0027z"
                  fill="#000"
                ></path>
              </svg>
            </span>
          </a>
          <a href="#" target="_blank">
            <span class="visually-hidden">Pinterest</span>
            <span class="icon" aria-hidden="true">
              <svg
                fill="none"
                height="120"
                viewBox="0 0 120 120"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m59.9889 10c-27.6161 0-49.9889 22.3828-49.9889 50.0111 0 21.2047 13.1749 39.2754 31.7707 46.5439-.4221-3.957-.8442-10.0247.1778-14.3367.9109-3.912 5.8653-24.85 5.8653-24.85s-1.4885-3.0007-1.4885-7.4239c0-6.9571 4.0213-12.1582 9.0424-12.1582 4.2657 0 6.3319 3.2007 6.3319 7.0238 0 4.2898-2.7327 10.7134-4.1546 16.6259-1.1997 4.9789 2.4883 9.0464 7.3983 9.0464 8.887 0 15.7077-9.3798 15.7077-22.8939 0-11.9583-8.6203-20.3379-20.8621-20.3379-14.219 0-22.5505 10.669-22.5505 21.7159 0 4.3121 1.6441 8.9131 3.7103 11.4026.3999.489.4665.9335.3332 1.4447-.3777 1.5782-1.2219 4.9789-1.3997 5.668-.2221.9335-.7109 1.1113-1.6662.689-6.2431-2.9117-10.1311-12.0471-10.1311-19.3599 0-15.7812 11.4419-30.2511 33.0149-30.2511 17.3294 0 30.8153 12.3583 30.8153 28.8731 0 17.226-10.8642 31.118-25.9275 31.118-5.0656 0-9.8201-2.645-11.4419-5.7568 0 0-2.5106 9.5354-3.1105 11.8915-1.133 4.3565-4.1768 9.7795-6.2208 13.0915 4.6878 1.445 9.6423 2.223 14.7967 2.223 27.5939 0 49.9889-22.3828 49.9889-50.0111-.022-27.6061-22.395-49.9889-50.0111-49.9889z"
                  fill="#000"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

function SearchDrawer({openSearchDrawer, setOpenSearchDrawer}) {
  return (
    <sidebar-drawer
      id="site-search-sidebar"
      class={`sidebar sidebar--right sidebar--opend ${openSearchDrawer}`}
      tabindex="-1"
      role="dialog"
      // {...openSearchDrawer == true && }
      // style={{display: "grid"}}
      aria-modal="true"
    >
      <div class="sidebar__header" bis_skin_checked="1">
        <span class="sidebar__title">Search</span>
        <button
          class="sidebar__close"
          data-js-close=""
          onClick={() => setOpenSearchDrawer('')}
        >
          <span class="visually-hidden">Close sidebar</span>
          <span aria-hidden="true" aria-role="img">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L1 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 1L17 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div class="sidebar__body" bis_skin_checked="1">
        <search-form class="sidebar-large-padding">
          <form
            action="/search"
            method="get"
            class="input-group search-bar ajax subtitle"
            role="search"
            autocomplete="off"
          >
            <label for="search-form-sidebar" class="visually-hidden">
              Search
            </label>
            <input
              id="search-form-sidebar"
              type="search"
              name="q"
              value=""
              placeholder="Type a keyword..."
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              data-js-search-input=""
            />
          </form>
          <div class="top" bis_skin_checked="1">
            <div
              id="search-results"
              class="search-results predictive-search"
              data-js-search-results=""
              bis_skin_checked="1"
            ></div>
          </div>
        </search-form>
      </div>
    </sidebar-drawer>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <CartToggle cart={cart} />
    </nav>
  );
}

function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();
  // console.log(count)

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      <div>
        <span class="visually-hidden">Open cart </span>
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
          {count == null ? <span>&nbsp;</span> : count}
        </span>
      </div>
    </a>
  );
}

function CartToggle({cart}) {
  // console.log(cart)
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
