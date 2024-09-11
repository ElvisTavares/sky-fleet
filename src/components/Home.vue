<template>
    <div class="columns is-multiline">
      <div
        v-for="product in products"
        :key="product.id"
        class="column is-one-quarter"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductItem from './ProductItem.vue';
  import { useCartStore } from '@/stores/useCartStore';
  import { onMounted } from 'vue'
  const cartStore = useCartStore()

  onMounted(() => {
    cartStore.fetchProducts()
})

const products = cartStore.products

  </script>
  
  <style scoped>
  .card {
    margin: 20px;
  }
  </style>
  