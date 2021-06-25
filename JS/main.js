ymaps.ready(init);

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
            let placemark = new ymaps.Placemark(coords, {
                balloonContent: `<div class="balloon">
                                    <h1 class="title">Отзыв:</h1>
                                    ${renderReviwes()}
                                    <input class="input input__name" type="text" placeholder="Укажите ваше имя">
                                    <input class="input input__place" type="text" placeholder="Укажите место">
                                    <textarea class="textarea textarea__reviews" placeholder ="Оставить отзыв"></textarea>
                                    <button class="button">Добавить</button>
                                </div>`,
            });
            map.geoObjects.add(placemark);
            addReviews(coords);
        } else {
            map.balloon.close();
        }
        
        
    });  
    
};

let saveReviews = [];
let storage = localStorage;


        
function addReviews (key){
    document.addEventListener('click', (evt) => {

        const name = document.querySelector('.input__name');
        const place = document.querySelector('.input__place');
        const reviews = document.querySelector('.textarea__reviews');
    
        if (evt.target.classList.contains('button')) {
            // if(storage.data){
            //     saveReviews.push(JSON.parse(storage.data));
                
            // }
            saveReviews.push({
                name: name.value,
                place: place.value,
                reviews: reviews.value
            })
            storage[key] = JSON.stringify(saveReviews)

            name.value = '';
            place.value = '';
            reviews.value = '';
    
            
        }
    
    })
}
 
const renderReviwes = () =>{
    if(storage.data){
        let returnReviews = JSON.parse(storage.data);
        console.log(returnReviews)

        return `<div>${returnReviews[0].name}</div>
                <div>${returnReviews[0].place}</div>
                <div>${returnReviews[0].reviews}</div>`
    }
}
