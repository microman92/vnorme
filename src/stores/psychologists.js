import { defineStore } from 'pinia'

export const usePsychologistsStore = defineStore('psychologists', {
  state: () => ({
    psychologists: [
      {
        id: 1,
        name: 'Татьяна Сачкова',
        experience: 9,
        age: 30,
        methodologies: ['Клиническая психология'],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/tatiyana.png'
      },
      {
        id: 2,
        name: 'Елена',
        experience: 12,
        age: 30,
        methodologies: ['Клиническая психология'],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/elena.png'
      },
      {
        id: 3,
        name: 'Евгения',
        experience: 11,
        age: 30,
        methodologies: [
          'Психодинамические подходы',
          'Принятие и ответственности (ACT) / Фокусирование на сострадании (CFT)',
          'Клиническая психология',
          'КПТ/КБТ: Когнитивно-поведенческая терапия'
        ],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Упадок сил',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/jenya.png'
      },
      {
        id: 4,
        name: 'Татьяна',
        experience: 8,
        age: 30,
        methodologies: [
          'Психодинамические подходы',
          'Аналитическая психология (Юнгианский анализ)',
          'EMDR: Десенсибилизация и переработка движением глаз'
        ],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Упадок сил',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/tanya.png'
      },
      {
        id: 5,
        name: 'Николай',
        experience: 5,
        age: 30,
        methodologies: ['КПТ/КБТ: Когнитивно-поведенческая терапия'],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Упадок сил',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/kolya.png'
      },
      {
        id: 6,
        name: 'Анастасия',
        experience: 4,
        age: 30,
        methodologies: [
          'EMDR: Десенсибилизация и переработка движением глаз',
          'КПТ/КБТ: Когнитивно-поведенческая терапия',
          'Клиническая психология'
        ],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Упадок сил',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/nastya.png'
      },
      {
        id: 7,
        name: 'Светлана',
        experience: 4,
        age: 30,
        methodologies: [
          'Гештальт-терапия',
          'Арт-терапия',
          'КПТ/КБТ: Когнитивно-поведенческая терапия'
        ],
        issues: [
          'Проблемы со сном',
          'Панические атаки',
          'Тревога и страхи',
          'Поиск себя',
          'Чувство одиночества',
          'Утрата',
          'Непонятные эмоции',
          'Пищевое поведение'
        ],
        sessionPrice: 3800,
        sessionType: 'Онлайн',
        photo: 'img/sveta.png'
      }
    ],
    availableFilters: [
      '😴 Проблемы со сном',
      '👩‍❤️‍👨 Отношения с партнёром',
      '🌯 Пищевое поведение',
      '🔎 Поиск себя',
      '😞 Упадок сил',
      '😨 Панические атаки',
      '😔 Чувство одиночества',
      '🤯 Непонятные эмоции'
    ],
    selectedFilters: [],
    searchQuery: ''
  }),
  getters: {
    filteredPsychologists(state) {
      let filtered = state.psychologists;
      if (state.selectedFilters.length > 0) {
        filtered = filtered.filter(psychologist =>
          state.selectedFilters.some(filter => psychologist.issues.includes(filter))
        );
      }
      if (state.searchQuery) {
        filtered = filtered.filter(psychologist =>
          psychologist.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      return filtered;
    }
  },
  actions: {
    togglerFilter(filter) {

      const index = this.selectedFilters.indexOf(filter);
      if (index === -1) {
        this.selectedFilters.push(filter);
      } else {
        this.selectedFilters.splice(index, 1);
      }
    },
    resetFilters() {
      this.selectedFilters = [];
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    }

  }
})
