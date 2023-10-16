import axios from 'axios'
const api = axios.create({
    baseURL: 'http://192.168.15.100:3333'
});

export const authService = {
    async authenticate(data: any) {
        return await api.post(`/login`, data);       
    }, 
    
    async signUp(data: any) {
        return await api.post(`/register`, data ,{
            headers: { 'Content-Type': 'application/json' }
        });       
    },

    async userInfo(data: any){
        return await api.get(`/showUser/${data}`);
    }
}

export default api;