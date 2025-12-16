// src/utils/imageUtils.js
export const getImageUrl = (imageName) => {
  // Using Vite's asset import
  return new URL(`../assets/img/${imageName}`, import.meta.url).href;
};