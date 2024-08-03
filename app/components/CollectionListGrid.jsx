import React from 'react';
import CollectionImage from '../assets/Collections/1.webp'

function CollectionListGrid({collections}) {
  console.log(collections)
  return (
    <>
      <div
        class="container !mb-24 container--large container--vertical-space-small remove-empty-space"
        bis_skin_checked="1"
      >
        <div
          class="grid grid--layout  grid-3 grid-lap-2 grid-tiny-1 "
          bis_skin_checked="1"
        >
          {collections.map((item)=> {
            return (
              <Collection item={item} />
            )
          })}
          
          {/* <Collection/>
          <Collection/>
          <Collection/>
          <Collection/> */}
        </div>
      </div>
    </>
  );
}

export default CollectionListGrid;

function Collection({item}) {
  return (
    <>
      <div class="js-collection-item text-align--center" bis_skin_checked="1">
        <a href={`/collections/${item.handle}`} title="Home Accessories">
          <div class="card__image !h-full aspect-[4/5]" bis_skin_checked="1">
            <figure
              class="!relative lazy-image lazy-image--background lazy-image--animation lazyloaded lazy-image--revealed"
              data-ratio="0.666667"
              data-crop="false"
            >
              <img
                src={item.image.url}
                alt={item.image.altText}
                class="!relative img"
                width="3500"
                height="3500"
                data-ratio="0.666667"
                sizes="(max-width: 359px) calc(100vw - 20px), (max-width: 767px) calc((100vw - 50px) / 2), (max-width: 1360px) calc((100vw - 120px) / 3), 453px"
                onload="this.parentNode.classList.add('lazyloaded');imageReveal.observe(this.parentNode);"
              />
            </figure>
          </div>

          <div
            class="gutter-top--regular spacing--xsmall remove-empty-space"
            bis_skin_checked="1"
          >
            <span class="text-line-height--medium">
              <span class="text-size--regular text-weight--medium text-animation--underline-thin">
                {item.title}
              </span>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
