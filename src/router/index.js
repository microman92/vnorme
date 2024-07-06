// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    /* Чтобы по умолчаю странца была по ТЗ  */
    {
        path: '/',
        redirect: '/Psychologist'
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/Psychologist',
        name: 'Psychologist',
        component: () => import('@/pages/PsychologistPage.vue')
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
