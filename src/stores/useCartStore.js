import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from "vue-toastification";

const toast = useToast()

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

    getters: {
        countCartItems(state) {
            return state.cartItems.length
        }
    },

    actions : {
        async fetchProducts(){
            try {
                const response = await axios.get('http://localhost:3000/products')
           
                this.products = response.data
            } catch(error) {
                console.error('Erro ao buscar dados do produto', error)
            }
        },

        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1) {
                this.cartItems[index].quantity += 1
                toast.success("Your item has been saved", {
                    timeout: 2000
                  })
            } else {
                item.quantity = 1
                this.cartItems.push(item)

                toast.success("Your item has been saved", {
                    timeout: 2000
                  })
            }
          },
          incrementQuantity(item) {
     
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                
                this.cartItems[index].quantity += 1

                toast.success("O item foi adicionado com sucesso.", {
                    timeout: 2000
                })
            }
          },
          decrementQuantity(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1) {
                this.cartItems[index].quantity -= 1
                if(this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
                toast.success("O item foi removido com sucesso.", {
                    timeout: 2000
                })
            }
          },
          removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id)
            toast.success("Item removido com sucesso.", {
                timeout: 2000
            })
          }
    },
    persist: {
        storage: localStorage, // ou sessionStorage se preferir
      },

})