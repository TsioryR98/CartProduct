import { instanceProduct } from "./api";

//export data from API/dummyJSON

const fecthProductData = async () => {
  try {
    const response = await instanceProduct.get(`/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Category Tech combined with fetch

const fecthTechData = async () => {
  try {
    //Async for promise 3 categories
    const accessories = await instanceProduct.get(
      `/products/category/mobile-accessories`
    );
    const smartphones = await instanceProduct.get(
      `/products/category/smartphones`
    );
    const tablets = await instanceProduct.get(`/products/category/tablets`);

    const [accessoriesData, smartphonesData, tabletsData] = await Promise.all([
      accessories,
      smartphones,
      tablets,
    ]);

    const combinedTechData = [
      ...accessoriesData.data.products,
      ...smartphonesData.data.products,
      ...tabletsData.data.products,
    ];
    return combinedTechData;
  } catch (error) {
    console.error("error during loading fecthTechData", error);
  }
};

//Category womendress products combined with fetch

const fecthMenData = async () => {
  try {
    //Async for promise 3 categories
    const shirts = await instanceProduct.get(`/products/category/mens-shirts`);
    const shoes = await instanceProduct.get(`/products/category/mens-shoes`);
    const watches = await instanceProduct.get(
      `/products/category/mens-watches`
    );
    const sportAcc = await instanceProduct.get(
      `/products/category/sports-accessories`
    );

    // all promise
    const [shirtData, shoesData, watchData, sportAccData] = Promise.all([
      shirts,
      shoes,
      watches,
      sportAcc,
    ]);

    const combinedMenData = [
      ...shirtData.data.products,
      ...shoesData.data.products,
      ...watchData.data.products,
      ...sportAccData.data.products,
    ];

    return combinedMenData;
  } catch (error) {
    console.error("error during loading fecthMenData", error);
  }
};

//Category womendress products combined with fetch

const fecthWomenDressData = async () => {
  try {
    /// async promise
    const bags = await instanceProduct.get(`/products/category/womens-bags`);
    const dresses = await instanceProduct.get(
      `/products/category/womens-dresses`
    );
    const jewellery = await instanceProduct.get(
      `/products/category/womens-jewellery`
    );
    const womenShoes = await instanceProduct.get(
      `/products/category/womens-shoes`
    );
    const womenWatches = await instanceProduct.get(
      `/products/category/womens-watches`
    );
    const tops = await instanceProduct.get(`/products/category/tops`);

    const [
      bagsData,
      dressData,
      jewelleryData,
      womenWatchesData,
      topsData,
      womenShoesData,
    ] = Promise.all([bags, jewellery, dresses, womenShoes, womenWatches, tops]);

    const combinedWomenData = [
      ...bagsData.data.products,
      ...dressData.data.products,
      ...jewelleryData.data.products,
      ...womenWatchesData.data.products,
      ...topsData.data.products,
      ...womenShoesData.data.products,
    ];

    return combinedWomenData;
  } catch (error) {
    console.error("error during loading womenDressData", error);
  }
};
/*
const fecthBodyData = async () => {};

const fecthDecoData = async () => {};

const fecthCategoryData = async () => {};
*/

export { fecthTechData, fecthProductData, fecthMenData };
