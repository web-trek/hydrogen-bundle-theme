import React, {Suspense} from 'react';
import './Styles/CollectionList.css';
import Image1 from '../assets/promo3_b51ba7a2-c621-4e41-a9d2-0528e3c6f299.webp';
import Image2 from '../assets/promo4.jpg';
import Image3 from '../assets/promo5.webp';
import {Await, Link} from '@remix-run/react';

function CollectionList({collectionsdata}) {
  // console.log(collectionsdata)
  return (
    <>
      <div
        class="featured__collections container--large container--vertical-space   remove-empty-space"
        bis_skin_checked="1"
      >
        <div
          class="section-heading section-heading--left section-heading--one-row gutter-bottom--large"
          bis_skin_checked="1"
        >
          <div
            class="section-heading__text remove-empty-space"
            bis_skin_checked="1"
          >
            <h2 class="section-heading__title text-font--secondary text-size--large">
              Kit Up &amp; Save
            </h2>
            <span class="section-heading__subheading text-size--small text-color--opacity">
              Up to <strong>50%</strong> discount on selected kits &amp; bundles
            </span>
          </div>
        </div>
        <div
          class="grid grid--layout grid-3 grid-lap-1 grid--align-items-stretch"
          bis_skin_checked="1"
        >
            {/* <Card/>
            <Card/>
            <Card/> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={collectionsdata}>
                {(response) => {
                    // console.log(response.collections.edges[0].node);
                    return (
                        <>
                        {response.collections.edges.map((collection) => (
                          <Link to={`/collections/${collection.node.handle}`}><Card collection={collection.node} /></Link>
                        ))}
                        </>
                    )
                }}
                </Await>
            </Suspense>
        </div>
      </div>
      
    </>
  );
}

export default CollectionList;

function Card({collection}) {
    // console.log(collection)
  return (
    <>
      <div
        id="element-1664890690c0b1684f-0"
        class="card card--animation"
        bis_skin_checked="1"
      >
        <div bis_skin_checked="1" className='card__wrapper'>
          <div class="card__image" bis_skin_checked="1">
            <figure
              class="lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
              data-ratio="0.83333"
              data-crop="false"
            >
              <img
                src={collection.image.originalSrc}
                alt="Glass Vases Set"
                class="img"
                width="2000"
                height="2373"
                data-ratio="0.83333"
                sizes="(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 33vw, 453px"
                loading="lazy"
                onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
              />
            </figure>
          </div>

          <div
            class=" flex flex-col gap-6 gutter--large spacing--custom text-align--center remove-empty-space"
            bis_skin_checked="1"
          >
            <div bis_skin_checked="1">
              <span class="text-size--regular !mb-0">NEW</span>
            </div>
            <h3 class="text-font--heading heading-size--small !mb-2">
              <span>{collection.title}</span>
            </h3>
            <div bis_skin_checked="1">
              <a
                href="/pages/crafted-glass-vases"
                class="button button--outline   button--icon "
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
                <Link to={`/collections/${collection.handle}`}>
                  <span class="button__text text-weight-- text-size--">
                    Learn more
                  </span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
