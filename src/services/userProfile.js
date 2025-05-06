
export const storeUserName = (data,token) => {
    return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
};


export const updatePassword = (data, token) => {
    return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
}
