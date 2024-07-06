import{d as P,o as c,c as a,a as s,b as i,t as o,F as g,r as p,e as u,f as F,w as k,g as x,v as $,h as T,i as S,n as w,j as C}from"./index-CvWhEv35.js";const Q="/vnorme/img/search.svg",B="/vnorme/img/filterIcon.svg",m="/vnorme/img/favoriteIcon.svg",A="/vnorme/img/Card.png",D=P("psychologists",{state:()=>({psychologists:[{id:1,name:"Татьяна Сачкова",experience:9,age:30,methodologies:["Клиническая психология"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/tatiyana.png"},{id:2,name:"Елена",experience:12,age:30,methodologies:["Клиническая психология"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/elena.png"},{id:3,name:"Евгения",experience:11,age:30,methodologies:["Психодинамические подходы","Принятие и ответственности (ACT) / Фокусирование на сострадании (CFT)","Клиническая психология","КПТ/КБТ: Когнитивно-поведенческая терапия"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Упадок сил","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/jenya.png"},{id:4,name:"Татьяна",experience:8,age:30,methodologies:["Психодинамические подходы","Аналитическая психология (Юнгианский анализ)","EMDR: Десенсибилизация и переработка движением глаз"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Упадок сил","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/tanya.png"},{id:5,name:"Николай",experience:5,age:30,methodologies:["КПТ/КБТ: Когнитивно-поведенческая терапия"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Упадок сил","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/kolya.png"},{id:6,name:"Анастасия",experience:4,age:30,methodologies:["EMDR: Десенсибилизация и переработка движением глаз","КПТ/КБТ: Когнитивно-поведенческая терапия","Клиническая психология"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Упадок сил","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/nastya.png"},{id:7,name:"Светлана",experience:4,age:30,methodologies:["Гештальт-терапия","Арт-терапия","КПТ/КБТ: Когнитивно-поведенческая терапия"],issues:["Проблемы со сном","Панические атаки","Тревога и страхи","Поиск себя","Чувство одиночества","Утрата","Непонятные эмоции","Пищевое поведение"],sessionPrice:3800,sessionType:"Онлайн",photo:"img/sveta.png"}],availableFilters:["😴 Проблемы со сном","👩‍❤️‍👨 Отношения с партнёром","🌯 Пищевое поведение","🔎 Поиск себя","😞 Упадок сил","😨 Панические атаки","😔 Чувство одиночества","🤯 Непонятные эмоции"],selectedFilters:[],searchQuery:""}),getters:{filteredPsychologists(e){let t=e.psychologists;return e.selectedFilters.length>0&&(t=t.filter(r=>e.selectedFilters.some(l=>r.issues.includes(l)))),e.searchQuery&&(t=t.filter(r=>r.name.toLowerCase().includes(e.searchQuery.toLowerCase()))),t}},actions:{togglerFilter(e){const t=this.selectedFilters.indexOf(e);t===-1?this.selectedFilters.push(e):this.selectedFilters.splice(t,1)},resetFilters(){this.selectedFilters=[]},setSearchQuery(e){this.searchQuery=e}}}),L="/vnorme/img/time.svg",M="/vnorme/img/methods-info.svg",V={class:"psychologist"},j={class:"psychologist__details_top mobile"},q={class:"psychologist__title"},z=s("img",{class:"favorite-img",src:m,alt:"иконка"},null,-1),E={class:"psychologist__stats"},I=s("span",null," • ",-1),N={class:"psychologist__info"},O={class:"psychologist__photo"},R=["src"],Z={class:"psychologist__price"},U=s("div",{class:"psychologist__btns"},[s("button",{class:"psychologist__btn btn"},[s("img",{src:L,alt:"иконка времени"}),i("Записаться")]),s("button",{class:"psychologist__btn btn secondBtn"},"Подробнее о психологе")],-1),G={class:"psychologist__details"},H={class:"psychologist__details_top"},J={class:"psychologist__title"},K=s("img",{class:"favorite-img",src:m,alt:"иконка"},null,-1),W={class:"psychologist__stats"},X=s("span",null," • ",-1),Y={class:"psychologist__methods"},ss=s("h3",{class:"psychologist__methods_title"},"Методики:",-1),es={class:"psychologist__methods_items"},ts=s("div",{class:"psychologist__methods_item-popup"},[s("p",null,"В основе лежит принцип «здесь и сейчас». Суть в том, чтобы помочь человеку сделать свою жизнь более комфортной и яркой, осознать связь мыслей с телом и чувствами и жить в настоящем. ")],-1),os=s("img",{src:M,alt:"иконка методов"},null,-1),is={class:"psychologist__request"},ls=s("h3",{class:"psychologist__request_title"},"Работает с запросами:",-1),cs={class:"psychologist__request_list"},ns={__name:"Psychologist",props:{Psychologist:Object},setup(e){return(t,r)=>(c(),a("div",V,[s("div",j,[s("h2",q,[i(o(e.Psychologist.name)+" ",1),z]),s("p",E,[i("Опыт "+o(e.Psychologist.experience)+" лет ",1),I,i(" Возраст "+o(e.Psychologist.age)+" лет",1)])]),s("div",N,[s("div",O,[s("img",{src:e.Psychologist.photo,alt:"фото психолога"},null,8,R),s("div",Z,[s("p",null,[i(o(e.Psychologist.sessionType)+" сессия ",1),s("span",null,o(e.Psychologist.sessionPrice)+" ₽",1)])])]),U]),s("div",G,[s("div",H,[s("h2",J,[i(o(e.Psychologist.name)+" ",1),K]),s("p",W,[i("Опыт "+o(e.Psychologist.experience)+" лет ",1),X,i(" Возраст "+o(e.Psychologist.age)+" лет",1)])]),s("div",Y,[ss,s("div",es,[(c(!0),a(g,null,p(e.Psychologist.methodologies,l=>(c(),a("div",{class:"psychologist__methods_item",key:l},[ts,s("span",null,o(l),1),i(),os]))),128))])]),s("div",is,[ls,s("ul",cs,[(c(!0),a(g,null,p(e.Psychologist.issues,l=>(c(),a("li",{key:l},o(l),1))),128))])])])]))}},as={class:"filter-wrapper"},rs={class:"filter-wrapper__top"},_s=s("h1",{class:"filter-wrapper__title"},"Выберите подходящего психолога",-1),hs={class:"filter__form_label"},ds=s("img",{src:Q,alt:"иконка поиска"},null,-1),gs=s("button",{class:"filter__form_btn btn"},"Найти",-1),ps={class:"filters__list"},us=["onClick"],ms=s("button",{class:"allfilters"},[s("img",{src:B,alt:"Иконка фильтрации"}),i(" Все фильтры "),s("span",null,"5")],-1),ys=s("button",{class:"favorite"},[i("Только избранные "),s("img",{src:m,alt:"Иконка избранное"})],-1),vs={class:"psychologist__list"},fs=S('<div class="auth-block"><img src="'+A+'" alt="Просто карточка "><h2 class="auth-block__title">Зарегистрируйтесь и получите доступ ко полному списку специалистам</h2><div class="auth-block__btns"><button class="auth-block__btn secondBtn">Зарегистрироваться</button><button class="auth-block__btn login">Войти</button></div></div>',1),Fs={__name:"PsychologistPage",setup(e){const t=D(),r=u(()=>t.availableFilters);u(()=>t.psychologists);const l=u(()=>t.filteredPsychologists),d=F(""),y=_=>{const h=_.replace(/[^a-zA-Zа-яА-Я ]/g,"").trim();t.togglerFilter(h)},v=()=>{t.resetFilters()},f=_=>{const h=_.replace(/[^a-zA-Zа-яА-Я ]/g,"").trim();return t.selectedFilters.includes(h)},b=()=>{t.setSearchQuery(d.value)};return k(d,_=>{t.setSearchQuery(_)}),(_,h)=>(c(),a("div",as,[s("div",rs,[_s,s("span",null,o(l.value.length)+" психологов",1)]),s("form",{class:"filter__form",onSubmit:T(b,["prevent"])},[s("label",hs,[ds,x(s("input",{type:"search",placeholder:"Найти специалиста","onUpdate:modelValue":h[0]||(h[0]=n=>d.value=n)},null,512),[[$,d.value]])]),gs],32),s("div",ps,[(c(!0),a(g,null,p(r.value,n=>(c(),a("div",{class:w(["filters__list_item",{active:f(n)}]),key:n,onClick:bs=>y(n)},[s("span",null,o(n),1)],10,us))),128)),s("button",{class:"filters__list_reset",onClick:v},"Сбросить фильтры"),ms,ys]),s("div",vs,[(c(!0),a(g,null,p(l.value,n=>(c(),C(ns,{key:n.id,Psychologist:n},null,8,["Psychologist"]))),128))]),fs]))}};export{Fs as default};
