import React from 'react';
import Banner from '../assets/Banner.webp'
import './Styles/Banner.css'

function BannerWithText() {
  return (
    <>
      <div className="banner__with_text !mt-24">
        <div className="banner__wrapper">
          <div
            class="container--large remove-empty-space align-content align-content--horizontal-left align-content--vertical-bottom"
            bis_skin_checked="1"
          >
            <div
              class="card__text  gutter-bottom--large gutter-top--large  spacing--custom remove-empty-space"
              bis_skin_checked="1"
            >
              <h3 class="text-font--heading heading-size--regular">
                <span class=" text-animation--underline-large  underline-mobile">
                  Create Your Set
                </span>
              </h3>
              <span class="text-size--regular">
                Add 3 items or more to save 33%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerWithText;
