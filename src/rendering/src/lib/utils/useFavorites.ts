import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [favoriteProductsCount, setFavoriteProductsCount] = useState(0);

  useEffect(() => {
    const favoritesProductsStr = localStorage.getItem('aw_favorites_products');
    const favoritesProducts = (favoritesProductsStr && JSON.parse(favoritesProductsStr)) || [];

    // Update the local state with the data from local storage
    setFavoriteProducts(favoritesProducts);
    setFavoriteProductsCount(favoritesProducts.length);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFavoriteProductClick = (event: any) => {
      const closestFavoriteProduct = event.target.closest('.favorite-product');
      if (closestFavoriteProduct) {
        const productID = closestFavoriteProduct.getAttribute('data-product-id');
        // Favorites Products array from local storage,
        const favoritesProducts = JSON.parse(localStorage.getItem('aw_favorites_products') || '[]');

        // check if the product id already exists in the Favorites Products array
        const existingProductIndex = favoritesProducts.findIndex(
          (obj: string) => obj === productID
        );

        if (existingProductIndex !== -1) {
          // If the product id already exists, remove it from the array
          favoritesProducts.splice(existingProductIndex, 1);
          closestFavoriteProduct.classList.remove(
            'favorited',
            'border-[transparent_#f26924_transparent_transparent]'
          );
          setFavoriteProducts((prevProducts) =>
            prevProducts.filter((productId) => productId !== productID)
          );
          setFavoriteProductsCount((prevCount) => prevCount - 1);
        } else {
          // If the product id is new, add it to the array
          favoritesProducts.unshift(productID);
          closestFavoriteProduct.classList.add(
            'favorited',
            'border-[transparent_#f26924_transparent_transparent]'
          );
          setFavoriteProductsCount((prevCount) => prevCount + 1);
        }

        // if the Favorites Products array is empty, remove the key from local storage
        if (favoritesProducts.length === 0) {
          localStorage.removeItem('aw_favorites_products');
          localStorage.setItem('aw_favorites_products_count', '0');

          const countStorageEvent = new StorageEvent('storage', {
            key: 'aw_favorites_products_count',
            newValue: '0',
          });
          // Dispatch the event
          window.dispatchEvent(countStorageEvent);
        } else {
          // Save the updated Favorites Products array back to local storage
          localStorage.removeItem('aw_favorites_products_count');
          localStorage.setItem('aw_favorites_products', JSON.stringify(favoritesProducts));

          // Trigger the storage event to update count across tabs/windows
          const storageEvent = new StorageEvent('storage', {
            key: 'aw_favorites_products',
            newValue: JSON.stringify(favoritesProducts),
          });
          window.dispatchEvent(storageEvent);
        }
      }
    };

    // attach the event listener for the event handling to those specific sections (prodcut preview card and productintro)
    // where we have 'add to favroite product' option and consider event delegation
    const sectionElements1 = document.querySelectorAll(
      'section[data-component="listing/xupcardcollection"]'
    );
    const sectionElements2 = document.querySelectorAll(
      'section[data-component="product/productintro"]'
    );

    if (sectionElements1) {
      sectionElements1.forEach((sectionElement) => {
        sectionElement.addEventListener('click', handleFavoriteProductClick);
      });
    }

    if (sectionElements2) {
      sectionElements2.forEach((sectionElement) => {
        sectionElement.addEventListener('click', handleFavoriteProductClick);
      });
    }

    return () => {
      if (sectionElements1) {
        sectionElements1.forEach((sectionElement) => {
          sectionElement.removeEventListener('click', handleFavoriteProductClick);
        });
      }

      if (sectionElements2) {
        sectionElements2.forEach((sectionElement) => {
          sectionElement.removeEventListener('click', handleFavoriteProductClick);
        });
      }
    };
  }, []);

  return { favoriteProducts, favoriteProductsCount };
};
