import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
    state: () => ({
        // products: [
        //     {
        //         id: 1,
        //         name: 'Avião',
        //         price: 15000,
        //         image: 'https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338_960_720.jpg'
        //     },
        //     {
        //         id: 2,
        //         name: 'Avião',
        //         price: 18000,
        //         image: 'https://cdn.pixabay.com/photo/2019/09/21/06/57/p38-4493176_960_720.jpg'
        //       },
        // ],
        products : [],
        cartItems : []
    }),
    actions : {
        async fetchProducts(){
            try {
                const response = await axios.get('http://localhost:3000/products')
           
                this.products = response.data
            } catch(error) {
                console.error('Erro ao buscar dados do produto', error)
            }
        }
    },
    persist: {
        storage: localStorage, // ou sessionStorage se preferir
      }
})