export const urlToParamObj = (url) => {
    const currentUrl = new URL(url);
    const newSearchParams = new URLSearchParams(currentUrl.search);
    const paramObj = Object.fromEntries(newSearchParams);
    return paramObj;
};