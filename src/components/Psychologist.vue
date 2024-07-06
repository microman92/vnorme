<template>
    <div class="psychologist">

        <div class="psychologist__details_top mobile">
            <h2 class="psychologist__title">{{ Psychologist.name }} <img class="favorite-img"
                    src="/img/favoriteIcon.svg" alt="иконка"> </h2>
            <p class="psychologist__stats">Опыт {{ Psychologist.experience }} лет <span> • </span> Возраст {{
                Psychologist.age }} лет</p>
        </div>

        <div class="psychologist__info">
            <div class="psychologist__photo">
                <img :src="Psychologist.photo" alt="фото психолога">
                <div class="psychologist__price">
                    <p>{{ Psychologist.sessionType }} сессия <span>{{ Psychologist.sessionPrice }} ₽</span></p>
                </div>
            </div>
            <div class="psychologist__btns">
                <button class="psychologist__btn btn"><img src="/img/time.svg" alt="иконка времени">Записаться</button>
                <button class="psychologist__btn btn secondBtn">Подробнее о психологе</button>
            </div>
        </div>

        <div class="psychologist__details">
            <div class="psychologist__details_top">
                <h2 class="psychologist__title">{{ Psychologist.name }} <img class="favorite-img"
                        src="/img/favoriteIcon.svg" alt="иконка"> </h2>
                <p class="psychologist__stats">Опыт {{ Psychologist.experience }} лет <span> • </span> Возраст {{
                    Psychologist.age }} лет</p>
            </div>

            <div class="psychologist__methods">
                <h3 class="psychologist__methods_title">Методики:</h3>
                <div class="psychologist__methods_items">
                    <div class="psychologist__methods_item" v-for="methodologies in Psychologist.methodologies"
                        :key="methodologies">
                        <div class="psychologist__methods_item-popup">
                            <p>В основе лежит принцип «здесь и сейчас». Суть в том, чтобы помочь человеку сделать свою
                                жизнь
                                более комфортной и яркой, осознать связь мыслей с телом и чувствами и жить в настоящем.
                            </p>
                        </div>
                        <span>{{ methodologies }}</span> <img src="/img/methods-info.svg" alt="иконка методов">
                    </div>
                </div>
            </div>

            <div class="psychologist__request">
                <h3 class="psychologist__request_title">Работает с запросами:</h3>
                <ul class="psychologist__request_list">
                    <li v-for="issues in Psychologist.issues" :key="issues">{{ issues }}</li>

                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>


const props = defineProps({
    Psychologist: Object
})




</script>
