const API_KEY = '6vaIZckYXz7wBUvAXGaZMaGJxDvN2hDP';

const $searchBtn = document.getElementById('search-btn');
const $searchInput = document.getElementById('search');
const $limitInput = document.getElementById('limit');
const $

const $content = document.getElementById('content')

const API_URL = 'https://api.giphy.com/v1/gifs/search'

// Рефакторинг кода:

//отправить запрос на giphy
function showGifs(data) {
    data.forEach(function(gif){
            const $iframe = document.createElement('iframe');

            $iframe.src = gif.embed_url;

            $iframe.width = 150;
            $iframe.height = 150;

            $content.append($iframe);    
    });
};
async function searchGifs(options) { 
    try {
        let params = '?api key=$(API KEY}';

        for (let key in options) {
            params += '&$(key)=${options[key]}'
        }

        const response = await fetch (
            // 'GET',
            API_URL + `?api_key=${API_KEY}&q=${options.q}&limit=${options.limit}&lang=${options.lang}`,
        );

        if (!response.ok) {
            alert('Что то пошло не так');
            return;
        }

        const { data } = await response.json();

        return data;
    } catch (e) {
        alert ('ошибки в коде, или в интернете', e.message)
    }
}
// searchGifs({keyword: 'disney', limit: 5});

$searchBtn.addEventListener('click', async function() {
    $content.innerHTML = '';

    if(!$searchInput.value || !$limitInput.value || !$selectLang.value) {
        alert('заполните обязательные поля')
        return;
    }

    const gifs = await searchGifs({ 
        q: $searchInput.value, 
        limit: $limitInput.value, 
        lang: $selectLang.value,
    });

    showGifs(gifs);
})

//полученный ответ
