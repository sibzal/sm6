let news = [
    {
        id: 1,
        name: 'Название новости',
        authour: 'Эмиль',
        date: '01.01.2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
    },
    {
        id: 2,
        name: 'Нашлась карта',
        authour: 'Аноним))',
        date: '11.01.2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
    },
    {
        id: 3,
        name: 'Вечерняя Казань',
        authour: 'Аноним',
        date: '01.01.2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
    },
    {
        id: 4,
        name: 'В стране чудес',
        authour: 'Белка',
        date: '01.05.2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
    },
    {
        id: 5,
        name: 'Инетересная новость',
        authour: 'Мишка',
        date: '04.01.2022',
        text: 'Мишка мишкаМишка мишкаМишка мишкаМишка мишкаМишка мишка в лесу потерялся'
    }
]

let newsPlace = document.querySelector('.news-content')
news.forEach (x => {
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="news">
        <div class="name_and_date">
            <h1>${x.name}</h1>
            <p class="date">${x.date}</p>
        </div><br>
        <p class="descr-news">${x.text}</p>
        <br><br>
            <div class="authour_and_id">
            <h3 class="name">${x.authour}</h3>
            <p class="date">id: ${x.id}</p>
        </div>
    </div>
    `)
})