<template>
    <div class="card" style="width: 300px;">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="product.image" alt="Produto">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ product.name }}</p>
            <p class="subtitle is-6">R$ {{ product.price }}</p>
          </div>
        </div>
  
        <div class="content">
          {{ product.description }}
        </div>
      </div>
      <footer class="card-footer">

        <a class="card-footer-item" @click="data.addToCart(product)">Adicionar ao Carrinho</a>
      </footer>
    </div>
  </template>
  
  <script setup>
import { onMounted } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const data = useCartStore()

  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })


  </script>
  