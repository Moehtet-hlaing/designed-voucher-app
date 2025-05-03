export const fetchVouchers = (url, token) => fetch(url,{headers:{"Authorization":`Bearer ${token}`}}).then((res) => res.json());

export const destroyVoucher = (id,token) => fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });


export const storeVoucher = (currentVoucher,token) => fetch(import.meta.env.VITE_API_URL + "/vouchers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  body: JSON.stringify(currentVoucher),
});