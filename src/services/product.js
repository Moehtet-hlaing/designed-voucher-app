export const fetchProduct = (url,token) => fetch(url,{headers:{"Authorization":`Bearer ${token}`}}).then((res) => res.json());

export const storeProduct = (product_name, price, token) => {
    return  fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_name: product_name,
        price: price,
      }),
    });
}

export const destroyProduct = (id,token) => fetch(import.meta.env.VITE_API_URL + `/products/${id}`,{
  method:"DELETE",
  headers:{"Authorization":`Bearer ${token}`
}
});

export const updateProduct = (id,product_name,price,token) => fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({
    product_name: product_name,
    price: price,
    created_at: new Date().toISOString()}),
});