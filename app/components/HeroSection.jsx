import React from 'react';
import '../styles/LayoutCss/HeroSection.css';
import '../components/Styles/Theme.css';
import '../components/Styles/HeaderMy.css';
// import Image from '../assets/hero.webp'

function HeroSection() {
  return (
    <>
      <div className="hero__section h-screen !text-[#fff]">
        <div
          class="container--large gutter-top--xlarge gutter-bottom--xlarge container--large-with-mobile-padding  align-content align-content--horizontal-left align-content--vertical-bottom card__text-parent"
          bis_skin_checked="1"
        >
          <div
            class="card__text  spacing--custom remove-empty-space gap-4 flex flex-col"
            bis_skin_checked="1"
          >
            <span class="text-size--large">SAVE 30%. By &amp;Tradition.</span>
            <h2 class="text-font--heading heading-size--large gutter-bottom--small">
              <span class="text-animation--underline underline-mobile">
              Linen Cushion Bundle
              </span>
            </h2>
            <div bis_skin_checked="1">
              <a
                href="/products/linen-cushion-bundle"
                class="button button--solid !bg-white !text-gray-900 !border-none button--icon "
              >
                <span class="button__icon" role="img" aria-hidden="true">
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
                  Show more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default HeroSection;
