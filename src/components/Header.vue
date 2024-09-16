<template>
 <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Logo">
      </a>

      <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" @click="toggleNavbar" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          Carrinho 
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="navbar-item" href="#">
          <router-link class="nav-link" to="/cart"></router-link>
          Carrinho {{ data.countCartItems }}
        </a>
          <div class="buttons">
            
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
    
    </template>
    
    <script setup>
        import { useCartStore } from '@/stores/useCartStore';

const data = useCartStore()
    </script>