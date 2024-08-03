import React from 'react';

function FeaturedCollectionPlus({collection}) {
  console.log(collection);
  return (
    <div className="featured__collection_section mx-28">
      <h1>{collection.title}</h1>
      <div className="item__wrapper grid grid-cols-4 gap-6 pt-4">
        {collection.products.nodes.map((product) => {
          return (
            <div className="card__item">
              <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div class="relative px-1 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl aspect-[1/1]">
                  <img
                    src={product.featuredImage.url}
                    alt="card-image"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="p-2">
                  <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      Apple AirPods
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      $95.00
                    </p>
                  </div>
                </div>
                <div class="p-2 pb-6 pt-0">
                  <button
                    class="bg-[#f5f5f5] !w-full pointer-cursor  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button"
                  >
                    Add to Cart
                  </button>
                  
                <button
                  class="mt-4 align-middle select-none text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[.7rem] py-1 px-3 rounded-lg bg-[#f5f5f5] text-dark  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button">
                  Notifications
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCollectionPlus;
