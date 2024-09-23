<template>
    <section class="section">
    <div class="container">
      <h1 class="title">Produtos</h1>
      
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
       
            <th>#</th>
            <th>Imagem</th>
            <th>Nome do Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Total</th>
            <th></th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartItems" :key="item.id" >
            <td>{{item.id}}</td>
            <td><img :src="item.image" alt="" width="60" height="60"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <span class="icon">
                <i class="fa-solid fa-circle-arrow-up" 
                style="margin-right: 5px;" 
                @click="cartStore.incrementQuantity(item)"></i>

                {{ item.quantity }}

                <i class="fa-solid fa-circle-arrow-down" style="margin-left: 5px;" @click="cartStore.decrementQuantity(item)"></i>
              </span>
            </td>
            <td>{{item.price * item.quantity}}</td>
            <td>
              <span class="icon">
              <i class="fa-solid fa-trash-can"  @click="cartStore.removeFromCart(item)"></i>
              </span>
            </td>
          </tr>

          <tr v-if="cartStore.cartItems.length > 0">
            <th>Total</th>
          <td>
            <span>
              R$ {{ cartStore.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0) }}
            </span>
          </td>
          </tr>
              <tr v-else>
            <td colspan="7" class="has-text-centered">Nenhum produto no carrinho</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  </template>
  
  <script setup>
      import { useCartStore } from '@/stores/useCartStore';
      const cartStore = useCartStore()
  </script>
  
  <style scoped>
  .total-price {
    margin-top: 20px;
    text-align: right;
  }
  
  .title {
    margin-bottom: 30px;
  }

  i{
    cursor: pointer;
  }
  </style>
  