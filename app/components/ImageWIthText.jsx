import React from 'react';
import './Styles/ImageWithText.css';
import Image from '../assets/Image-with-text.webp'

function ImageWIthText() {
  return (
    <>
      <div
        class=" container--fullwidth   container--vertical-space  "
        bis_skin_checked="1"
      >
        <div
          id="element-template--17238267691326__1662457498c47086cb"
          class="card 
   card--no-radius card--no-sideborders  
   
    element--height-large 
   
rich-text"
          bis_skin_checked="1"
        >
          <div
            class="rich-text__container rich-text__container--image-right  rich-text__container--fullwidth "
            bis_skin_checked="1"
          >
            <div
              class="rich-text__image !relative
       
      "
              aria-hidden="true"
              bis_skin_checked="1"
            >
              <figure
                class="lazy-image lazyloaded lazy-image--revealed !h-full"
                data-ratio="1.0"
                data-crop="true"
              >
                <img
                  src={Image}
                  alt=""
                  class=" !relative img"
                  width="3500"
                  height="3500"
                  data-ratio="1.0"
                  loading="lazy"
                  id="responsive-background-template--17238267691326__1662457498c47086cb"
                  onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
                  sizes="714px"
                />
              </figure>
              <script>
                rbi.push(document.getElementById('responsive-background-template--17238267691326__1662457498c47086cb'));
                rbiSetSize(document.getElementById('responsive-background-template--17238267691326__1662457498c47086cb'));
              </script>
            </div>

            <div
              class="rich-text__text 
      align-content align-content--horizontal-left align-content--vertical-middle 
      
       container--large gutter-top--xlarge gutter-bottom--xlarge "
              bis_skin_checked="1"
            >
              <div
                class="card__text 
        spacing--custom remove-empty-space"
                bis_skin_checked="1"
              >
                <div class="rte text-size--regular" bis_skin_checked="1">
                  <p>Beautifully crafted</p>
                </div>
                <div bis_skin_checked="1">
                  <h2 class="heading-size--large !leading-none !font-normal">
                    Simple &amp; Decidedly Modern
                  </h2>
                </div>
                <div class="rte text-size--large" bis_skin_checked="1">
                  <p>
                    Subtle whirlpool motif that mirrors the swirling nature of
                    water.
                  </p>
                </div>
                <div bis_skin_checked="1">
                  <a href="" class="button button--solid button--icon">
                    <span aria-hidden="true" class="button__icon">
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
                    <span>Show more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageWIthText;
