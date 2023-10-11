import axios from 'axios'
const api = axios.create({
    baseURL: 'http://192.168.15.100:3333'
});

export const authService = {
    async authenticate(data: any) {
        return await api.post(`/login`, data);       
    }, 
    
    async signUp(data: any) {
        return await api.post(`/register`, data);       
    },  
}



export default api;