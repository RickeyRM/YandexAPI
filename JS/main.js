ymaps.ready(init);
let storage = localStorage;

function init (){
    let map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    })
    map.events.add('click', function (e) {
        if (!map.balloon.isOpen()) {
            var coords = e.get('coords');
            map.balloon.open(coords, {
                contentBody: `<div class="balloon">
                                    <h1 class="title">Отзыв:</h1>
                                    <input class="input" type="text" placeholder="Укажите ваше имя">
                                    <input class="input" type="text" placeholder="Укажите место">
                                    <textarea class="textarea" placeholder ="Оставить отзыв"></textarea>
                                    <button class="button">Добавить</button>
                                </div>`,
                contentFooter:'<sup>Щелкните еще раз для выхода</sup>'
            });
        } else {
            map.balloon.close();
        }
    });   
};
const btn = document.querySelector('.button');

    btn.addEventListener('click', () => {
        console.log('click!!!')
    })

