<template>
    <div class="filter-wrapper">
        <div class="filter-wrapper__top">
            <h1 class="filter-wrapper__title">Выберите подходящего психолога</h1>
            <span>{{ filteredPsychologists.length }} психологов</span>
        </div>
        <form class="filter__form" @submit.prevent="applySearch">
            <label class="filter__form_label">
                <img src="/img/search.svg" alt="иконка поиска">
                <input type="search" placeholder="Найти специалиста" v-model="searchQuery">
            </label>
            <button class="filter__form_btn btn">Найти</button>
        </form>

        <div class="filters__list">
            <div class="filters__list_item" v-for="item in availableFiltersList" :key="item" @click="toggleFilter(item)"
                :class="{ active: isActiveFilter(item) }">
                <span>{{ item }}</span>
            </div>
            <button class="filters__list_reset" @click="resetFilters">Сбросить фильтры</button>

            <button class="allfilters">
                <img src="/img/filterIcon.svg" alt="Иконка фильтрации"> Все фильтры <span>5</span>
            </button>
            <button class="favorite">Только избранные <img src="/img/favoriteIcon.svg" alt="Иконка избранное"></button>
        </div>

        <div class="psychologist__list">
            <PsychologistPage v-for="Psychologist in filteredPsychologists" :key="Psychologist.id"
                :Psychologist="Psychologist" />
        </div>

        <div class="auth-block">
            <img src="/img/Card.png" alt="Просто карточка ">
            <h2 class="auth-block__title">Зарегистрируйтесь и получите доступ ко полному списку специалистам</h2>
            <div class="auth-block__btns">
                <button class="auth-block__btn secondBtn">Зарегистрироваться</button>
                <button class="auth-block__btn login">Войти</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { usePsychologistsStore } from '@/stores/psychologists'
import PsychologistPage from '@/components/Psychologist.vue'
import { computed, watch, ref } from 'vue'

const PsychologistStore = usePsychologistsStore()

const availableFiltersList = computed(() => PsychologistStore.availableFilters)
const PsychologistList = computed(() => PsychologistStore.psychologists)
const filteredPsychologists = computed(() => PsychologistStore.filteredPsychologists)

const searchQuery = ref('')


const toggleFilter = (filter) => {
    const cleanedFilter = filter.replace(/[^a-zA-Zа-яА-Я ]/g, '').trim();
    PsychologistStore.togglerFilter(cleanedFilter)
}

const resetFilters = () => {
    PsychologistStore.resetFilters()
}

const isActiveFilter = (item) => {
    const cleanedItem = item.replace(/[^a-zA-Zа-яА-Я ]/g, '').trim()
    return PsychologistStore.selectedFilters.includes(cleanedItem)
}

const applySearch = () => {
    PsychologistStore.setSearchQuery(searchQuery.value)
}

watch(searchQuery, (newQuery) => {
    PsychologistStore.setSearchQuery(newQuery)
})



</script>

<style lang="scss" scoped></style>