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
                                    <input class="input input__name" type="text" placeholder="Укажите ваше имя">
                                    <input class="input input__place" type="text" placeholder="Укажите место">
                                    <textarea class="textarea textarea__reviews" placeholder ="Оставить отзыв"></textarea>
                                    <button class="button">Добавить</button>
                                </div>`,
                contentFooter:'<sup>Щелкните еще раз для выхода</sup>'
                
            });
        } else {
            map.balloon.close();
        }
        document.addEventListener('click', (evt) => {

            const name = document.querySelector('.input__name');
            const place = document.querySelector('.input__place');
            const reviews = document.querySelector('.textarea__reviews');

            if (evt.target.classList.contains('button')) {

                let saveReviews = [];
                let storage = localStorage;
                storage.data = JSON.stringify({
                    name: name.value,
                    place: place.value,
                    reviews: reviews.value
                })
                saveReviews.push(JSON.parse(storage.data));
                console.log(saveReviews)
            }
          })
    });   
};


