// JSON можно читать только по HTTP протоколу, чтение файла не предусмотренно в целях безопастности!!!
(async () => {
    let selectPortfolio = document.getElementById('select-portfolio');
    let burgerLink = document.querySelectorAll(".nav-link");
    let burgerLink1 = document.querySelector('.nav-link');
    let response = await fetch('data.json');
    if (response.ok) {

        let data = await response.json(); // получаем ответ в формате JSON
        //  console.log(data.burgerLinks); 

        let testArray = data.test.map((i)=> { // Перебираем полученный массив и преобразуем его элементы добавляя разметку HTML тэгов
        //  console.log(i);
            return `<option value="">${i}</option>`;
        });
        //   console.log(testArray);
        selectPortfolio.innerHTML = `${testArray}`; // Перезаписываем значение тэга <select class="select" name="portfolio" id="select-portfolio"> в HTML разметке

      // ссылки в хедер начало

        let linksJson = data.burgerLinks;
        let arrFromJson = [];
        for (let key in linksJson) {
          let a = `<a class="nav-link" href="${linksJson[key]}">${key}</a>`;
          arrFromJson.push(a); 
        }
        console.log(arrFromJson);

        // burgerLink1.innerHTML = arrFromJson[0];
        burgerLink.forEach(function(el, i) {
           el.innerHTML = `${arrFromJson[i]}`;
        })

        // ссылки в хедер конец

        
        // табы section-services начало

        

        // табы section-services конец

    }
})();






document.addEventListener('DOMContentLoaded', function(){


    /* плавный скрол якорных ссылок*/ 
const plavnScrollVseSsil = document.querySelectorAll('a[href^= "#"]');
for(let link of plavnScrollVseSsil){
    link.addEventListener('click',function (el){
        el.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

/* конец скрола якорных ссылок*/ 

/*меню открытие и закрытие начало */


 let header_1 = document.querySelector('.header-container');
 let menuUl = document.querySelector('.burger-menu-ul');
 let nav = document.querySelector('.nav');
//  header_1.addEventListener('click', event =>{
//     if(event.target.className === 'burger'){
//         menuUl.classList.add('js-visible');
//     }

//  });

//  nav.addEventListener('click', function(){
//     menuUl.classList.remove('js-visible');
//  });




 header_1.addEventListener('click',function(e){

   
    if(!menuUl.classList.contains('js-visible')){
        if(e.target.closest('.burger') ){
            menuUl.classList.toggle('js-visible');
            return;
        }
    }
    if(e.target.className === 'nav-link' || e.target.className === 'img-close-menu') {
        menuUl.classList.toggle('js-visible');
        return;
    }
},true);







//  if (menuUl.classList.contains('js-visible')){
//     console.log('est');
//  }


/*меню открытие и закрытие конец */


/*меню перемещение наверх страницы начало */
// window.onscroll = function() {
//     let scrolled = window.pageYOffset;
//     console.log( 'Позиция скрола: '+scrolled  );
// };
/*меню перемещение наверх страницы конец */


});