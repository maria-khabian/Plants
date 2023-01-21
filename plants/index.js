// console.log('ИТОГОВАЯ ОЦЕНКА = 110 \n 1) Вёрстка валидная ("Document checking completed. No errors or warnings to show.") +10  \n 2) Вёрстка семантическая +20 \n 3) В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше): \n <header>, <main>, <footer> +3 \n пять элементов <section> (по количеству секций) +3 \n только один заголовок <h1> +3 \n четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3 \n один элемент <nav> (панель навигации) +3 \n два списка ul > li > a (панель навигации, ссылки на соцсети) +3 \n пять кнопок <button> +2 \n 4) Вёрстка соответствует макету +48 \n блок <header> +6 \n секция welcome +7 \n секция about +7 \n секция service +7 \n секция prices +7 \n секция contacts +7 \n блок <footer> +7 \n 5) Требования к css + 12 \n для построения сетки используются флексы +2 \n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n фоновый цвет тянется на всю ширину страницы +2 \n иконки добавлены в формате .svg +2 \n изображения добавлены в формате .jpg или .png +2 \n есть favicon +2 \n 6) Интерактивность, реализуемая через css +20 \n плавная прокрутка по якорям +5 \n cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса +5 \n интерактивность (изменение внешнего вида курсора, изменение цвета фона или цвета шрифта) +5 \n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5')

const body = document.querySelector('.body')

// Меню бургер

const navIconMenu = document.querySelector('.nav-icon-menu');
const mainNav = document.querySelector('.main-nav');
const headerMenu = document.querySelector('.header-menu')
// console.log(navItem)

if(navIconMenu && mainNav) {
  navIconMenu.addEventListener('click', (event) => {
    document.body.classList.toggle('_lock');
    navIconMenu.classList.toggle('_active');
    mainNav.classList.toggle('_active');
    headerMenu.classList.toggle('_lock');
  })
}

// Удаление открытого меню при нажатии на ссылку с названием раздела

const itemLinks = document.querySelectorAll('.item-link');

if(itemLinks.length > 0) {
  itemLinks.forEach(itemLink => {
    itemLink.addEventListener('click', onItemClickLink)
  })

  function onItemClickLink(event) {
    const itemLink = event.target;
    if(navIconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      navIconMenu.classList.remove('_active');
      mainNav.classList.remove('_active');
      headerMenu.classList.remove('_lock');
    }
  }
}

// Закрытие открытого бургер меню при нажатии на область вне меню

headerMenu.addEventListener('click', (event) => {
  if(event.target.classList.contains('header-menu')) {
    document.body.classList.remove('_lock');
    navIconMenu.classList.remove('_active');
    mainNav.classList.remove('_active');
    headerMenu.classList.remove('_lock');
  }
})


