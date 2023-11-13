
import axios from 'axios'
const api = axios.create({
    baseURL: 'https://database-six-rho.vercel.app/'
});

//'https://database-six-rho.vercel.app/'


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
    },

    async createNote(token: any, data: any) {
        return await api.post(`/notes`, data, {
            headers: { Authorization: `${token}`}
        });
    },

    async returnNote(token: any, id: any){
        return await api.get(`/returnNoteById/${id}`, {
            headers: { Authorization: `${token}`}
        });
    },

    async updateNotes(token: any, id: any, title: string, text: string){
        const data = { title: title, text: text };

        return await api.put(`/updateNotes/${id}`, data, {
            headers: { Authorization: `${token}`},
        });
    },

    async deleteNote(token: any, id: any){
        return await api.delete(`/deleteNotes/${id}`, {
            headers: { Authorization: `${token}`},
        });
    },

    async returnNews(){
        return await api.get(`/news`);
    }
}

export default api;