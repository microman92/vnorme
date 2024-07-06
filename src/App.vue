<template>
  <div class="wrapper">
    <nav class="nav">
      <a href="#!" class="logo">
        <img src="/img/logo.svg" alt="Логотип">
      </a>
      <div class="nav__links" :class="{ active: !menu }">
        <ul class="nav__list">
          <li v-for="link in links" :key="link.link">
            <router-link class="nav__list_link link" :to="link.url">{{ link.link }}</router-link>
          </li>
        </ul>
        <button class="nav__btn login btn ">Войти</button>
      </div>
      <button class="burgerMenu" @click="menu = !menu" v-if="menu">
        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13.5H37M1 1.5H37M1 25.5H37" stroke="black" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg></button>

      <button class="close" @click="menu = true" v-else-if="!menu">
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.1665 20.3333L19.8332 8.66667" stroke="#030303" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M19.8332 20.3333L8.1665 8.66667" stroke="#030303" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg></button>
    </nav>




    <router-view />

    <footer class="footer">
      <a href="" class="footer__logo">
        <img src="/img/logo.svg" alt="Логотип">
      </a>
      <p class="footer__desc">Внорме не может заменить экстренную психологическую помощь и психиатрическое лечение. В
        случае угрожающих жизни и здоровью ситуаций, необходимо обратиться по телефонам доверия или в экстренную
        психологическую службу.</p>

      <ul class="footer__list">
        <li v-for="link in footerLinks" :key="link.link"> <a href="" class="footer__list_link">{{ link.link }}</a> </li>
      </ul>

    </footer>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
const menu = ref(true)

const router = useRouter()
router.push('/Psychologist')

const links = ref([
  { link: 'Стать психологом Vnorme', url: '/' },
  { link: 'Для психологов', url: '/' },
  { link: 'Подобрать психолога', url: '/Psychologist' },
  { link: 'Контакты', url: '/' },
])
const footerLinks = ref([
  { link: 'Контакты', url: '/' },
  { link: 'Политика конфиденциальности', url: '/' },
  { link: 'Оферта', url: '/Psychologist' },
  { link: 'Вопросы-ответы', url: '/' },
  { link: 'Стать психологом Внорме', url: '/' },
])


</script>

<style lang="scss" scoped></style>