<template>
    <div class="columns is-multiline">
      <div
        v-for="product in data.products"
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
  
  const data = useCartStore()
  </script>
  
  <style scoped>
  .card {
    margin: 20px;
  }
  </style>
  