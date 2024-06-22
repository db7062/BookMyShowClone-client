const api= axios.create({
  baseURL: 'https://localhost:8000'
});

export const LoginUser=(data)=>api.post("/auth/login",data);
