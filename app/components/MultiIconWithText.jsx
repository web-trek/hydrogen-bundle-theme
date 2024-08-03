import React from 'react';
import Clock from '../assets/Icons/Clock.webp'
import Exchange from '../assets/Icons/Exchange.webp'
import House from '../assets/Icons/House.webp'

function MultiIconWithText() {
  return (
    <>
      <div
        class="container--large container--vertical-space   remove-empty-space"
        bis_skin_checked="1"
      >
        <css-slider
          data-options='{"selector": ".js-slider-item","groupCells": true,
        "navigationDOM": "<span class=\"css-slider-button css-slider-prev\" style=\"display:none\"><svg fill=\"none\" height=\"11\" viewBox=\"0 0 6 11\" width=\"6\" xmlns=\"http://www.w3.org/2000/svg\"><path clip-rule=\"evenodd\" d=\"m4.32845 10.0708-4.18198-4.18194c-.195261-.19526-.195261-.51185 0-.70711l4.18198-4.181979c.19527-.195262.51185-.195262.70711 0 .19526.195259.19526.511849 0 .707109l-3.32843 3.32842s-.70713.4647-.00002 1l3.32845 3.32843c.19526.19526.19526.51185 0 .70707-.19526.1953-.51185.1953-.70711 0z\" fill=\"#000\" fill-rule=\"evenodd\"/></svg></span><span class=\"css-slider-button css-slider-next\" style=\"display:none\"><svg fill=\"none\" height=\"11\" viewBox=\"0 0 6 11\" width=\"6\" xmlns=\"http://www.w3.org/2000/svg\"><path clip-rule=\"evenodd\" d=\"m.853555.999962 4.181985 4.181978c.19526.19526.19526.51185 0 .70711l-4.181983 4.18195c-.195263.1953-.511845.1953-.707108 0-.1952631-.19523-.1952632-.51181 0-.70708l3.328431-3.32842s.70713-.4647.00002-1l-3.328453-3.32843c-.1952626-.19526-.1952627-.51185 0-.707108.195263-.195262.511845-.195262.707108 0z\" fill=\"#000\" fill-rule=\"evenodd\"/></svg></span>","thumbnailsDOM": "<div class=\"css-slider-dot-navigation\" style=\"display:none;--size:3\"></div>"}'
          class="css-slider css-slider--bottom-navigation enabled"
          data-slides-per-page-difference="large"
          data-slider-length="1"
        >
          <div class="css-slider-viewport" bis_skin_checked="1">
            <div
              class="css-slider-holder css-slider--no-drag"
              bis_skin_checked="1"
            >
              <div class="css-slider-container" bis_skin_checked="1">
                <div
                  class="grid grid--layout grid-3 grid-laptop-3 grid-lap-2 !md:grid-cols-1 grid-palm-1 grid-palm-1 grid--align-items-stretch"
                  bis_skin_checked="1"
                >
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
              </div>
            </div>
          </div>
        </css-slider>
      </div>
    </>
  );
}

export default MultiIconWithText;

function Item() {
  return (
    <>
      <div
        id="element-template--17238268608830__769fa8a8-c439-4055-bc9e-3156324f419d-167161210675f7ecad-1"
        class="!border-none card text-align--center js-slider-item css-slide css-slide--snap css-slide-active"
        data-index="0"
        bis_skin_checked="1"
      >
        <div class="card__icon card__icon--is-img " bis_skin_checked="1">
          <img
            src={Clock}
            loading="lazy"
            onload="this.classList.add('lazyloaded');"
            sizes="64px"
            width="64"
            height="64"
            class="lazyloaded"
          />
        </div>
        <div
          class="spacing--small remove-empty-space gutter-top--regular"
          bis_skin_checked="1"
        >
          <div bis_skin_checked="1">
            <h3 class="text-font--primary text-size--large">
              <span class="text-animation--underline-thin">
                Free &amp; Fast Delivery
              </span>
            </h3>
          </div>
          <div
            class="text-size--small text-color--opacity"
            bis_skin_checked="1"
          >
            A free fully trackable 2 day delivery service on all orders over
            $150. Guaranteed!
          </div>
        </div>
      </div>
    </>
  );
}
