import React from 'react';
import './Styles/FooterMy.css';
import logo from '../assets/logo_white.webp';

function FooterMy() {
  // console.log(footer)
  return (
    <>
      <div className="footer__section">
        <div
          class="container--large gutter-top--xlarge gutter-bottom--xlarge footer-top"
          data-js-inert=""
          bis_skin_checked="1"
        >
          <div
            class="grid grid--layout grid--gap-xlarge grid-4 grid-portable-2 grid-lap-1"
            bis_skin_checked="1"
          >
            <div
              class="footer-item"
              id="footer-block-8c9148e3-9d70-4155-aa05-2646b3c38c41"
              bis_skin_checked="1"
            >
              <div class="footer-item__content rte" bis_skin_checked="1">
                <div class="footer-item__image-heading" bis_skin_checked="1">
                  <img
                    src={logo}
                    sizes="120px"
                    class="image-heading"
                    loading="lazy"
                    width="449"
                    height="123"
                    alt=""
                  />
                </div>
                <p>
                  The most natural, care-free and easy to use objects that you
                  can get.
                </p>
                <div class="social-icons" bis_skin_checked="1">
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
            </div>
            <LinkItems/>
            <div
              class="footer-item"
              id="footer-block-f86896bf-57dd-4f40-824d-2a9fd6e8a201"
              bis_skin_checked="1"
            >
              <h2 class="footer-item__title text-font--primary text-size--regular text-weight--bold">
                CONTACT INFO
              </h2>
              <div class="footer-item__content rte" bis_skin_checked="1">
                <p>
                  Streen Name, City, England
                  <br />
                  <a href="#" title="#">
                    mail@example.com
                    <br />
                  </a>
                  (123) 216-0550
                </p>
              </div>
            </div>
            <div
              class="footer-item"
              id="footer-block-1dbb53a0-d8f9-49e6-a0f3-66ad7ee8ecec"
              bis_skin_checked="1"
            >
              <h2 class="footer-item__title text-font--primary text-size--regular text-weight--bold">
                NEWSLETTER
              </h2>
              <div class="footer-item__newsletter" bis_skin_checked="1">
                <form
                  id="newsletter-footer-block"
                  accept-charset="UTF-8"
                  class=""
                >
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />
                  <fieldset>
                    <input
                      type="hidden"
                      name="contact[tags]"
                      value="newsletter"
                    />
                    <div class="form-row" bis_skin_checked="1">
                      <input
                        type="email"
                        class="newsletter__input"
                        value=""
                        placeholder="Enter your email"
                        name="contact[email]"
                        id="Email-newsletter-footer-block"
                        aria-label="Enter your email"
                        required=""
                      />
                      <button
                        type="submit"
                        id="Subscribe-newsletter-footer-block"
                        aria-label="Submit"
                      >
                        <span class="visually-hidden">Submit</span>
                        <span aria-hidden="true" role="img">
                          <svg
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M47.5 2.5 22.75 27.25M47.5 2.5l-15.75 45-9-20.25-20.25-9 45-15.75Z"
                              stroke="#fff"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div class="footer-item__newsletter" bis_skin_checked="1"></div>
            </div>
          </div>
        </div>
        <div class="footer-bottom" data-js-inert="" bis_skin_checked="1">
          <div
            class="container--large gutter-top--regular gutter-bottom--regular rte"
            bis_skin_checked="1"
          >
            <span>
              Copyright © 2024 <a href="/">Bundle Theme Demo Home</a>.
              <span class="powered-by-shopify">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
                >
                  Powered by Shopify
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterMy;

function LinkItems() {
  return (
    <>
      <div
        class="footer-item"
        id="footer-block-55f2c583-f6d8-4a67-9fe0-942b555c30e3"
        bis_skin_checked="1"
      >
        <h2 class="footer-item__title text-font--primary text-size--regular text-weight--bold">
          QUICK LINKS
        </h2>
        <nav class="footer-item__menu  rte">
          <span>
            <a href="/collections/sets-bundles">Sets &amp; Bundles</a>
          </span>
          <span>
            <a href="/collections/build-your-set">Build Your Set</a>
          </span>
          <span>
            <a href="/collections/all">All products</a>
          </span>
          <span>
            <a href="#">Lookbook</a>
          </span>
          <span>
            <a href="/pages/contact">Contact</a>
          </span>
        </nav>
      </div>
    </>
  );
}
