import { instanceProduct } from "../api/api";

//export data from API/dummyJSON

const fetchProductData = async () => {
  try {
    const response = await instanceProduct.get(`/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//Category Tech combined with fetch

const fetchTechData = async () => {
  try {
    //Async for promise 3 categories
    const accessories = await instanceProduct.get(
      `/products/category/mobile-accessories`
    );
    const smartphones = await instanceProduct.get(
      `/products/category/smartphones`
    );
    const tablets = await instanceProduct.get(`/products/category/tablets`);
    const laptops = await instanceProduct.get(`/products/category/laptops`);
    const [accessoriesData, smartphonesData, tabletsData, laptopsData] =
      await await Promise.all([accessories, smartphones, tablets, laptops]);

    const combinedTechData = [
      ...accessoriesData.data.products,
      ...smartphonesData.data.products,
      ...tabletsData.data.products,
      ...laptopsData.data.products,
    ];
    return combinedTechData;
  } catch (error) {
    console.error("error during loading fetchTechData", error);
  }
};

//Category womendress products combined with fetch

const fetchMenData = async () => {
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
    const [shirtData, shoesData, watchData, sportAccData] = await Promise.all([
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
    console.error("error during loading fetchMenData", error);
  }
};

//Category womendress products combined with fetch and await with promise all to wait all promises are finished

const fetchWomenData = async () => {
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
    ] = await Promise.all([
      bags,
      jewellery,
      dresses,
      womenShoes,
      womenWatches,
      tops,
    ]);

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

//Category BodyData products combined with fetch and await with promise all to wait all promises are finished

const fetchBodyData = async () => {
  /// async promise

  try {
    const skinCare = await instanceProduct.get(`/products/category/skin-care`);
    const beauty = await instanceProduct.get(`/products/category/beauty`);
    const fragrances = await instanceProduct.get(
      `/products/category/fragrances`
    );
    const [skinCareData, beautyData, fragrancesData] = await Promise.all([
      skinCare,
      beauty,
      fragrances,
    ]);

    const combinedBodyData = [
      ...skinCareData.data.products,
      ...beautyData.data.products,
      ...fragrancesData.data.products,
    ];
    return combinedBodyData;
  } catch (error) {
    console.error("error during loading fetchBodyData  ", error);
  }
};

//Category DECO  products combined with fetch and await with promise all to wait all promises are finished

const fetchDecoData = async () => {
  /// async promise

  try {
    const furniture = await instanceProduct.get(`/products/category/furniture`);
    const homeDecoration = await instanceProduct.get(
      `/products/category/home-decoration`
    );
    const kitchenAccessories = await instanceProduct.get(
      `/products/category/kitchen-accessories`
    );
    const [furnitureData, homeDecorationData, kitchenAccessoriesData] =
      await Promise.all([homeDecoration, kitchenAccessories, furniture]);

    const combinedDecoData = [
      ...furnitureData.data.products,
      ...homeDecorationData.data.products,
      ...kitchenAccessoriesData.data.products,
    ];
    return combinedDecoData;
  } catch (error) {
    console.error("error during loading fetchBodyData  ", error);
  }
};

export {
  fetchTechData,
  fetchProductData,
  fetchMenData,
  fetchWomenData,
  fetchBodyData,
  fetchDecoData,
};
