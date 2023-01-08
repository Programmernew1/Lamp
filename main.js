// JSON можно читать только по HTTP протоколу, чтение файла не предусмотренно в целях безопастности!!!







document.addEventListener('DOMContentLoaded', function(){


    /* плавный скрол якорных ссылок*/ 
// const plavnScrollVseSsil = document.querySelectorAll('a[href^= "#"]');
// for(let link of plavnScrollVseSsil){
//     link.addEventListener('click',function (el){
//         el.preventDefault();
//         const id = link.getAttribute('href');
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// }

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




// ТАБЫ

// active-panel
//ТАБЫ


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


(async () => {
    let portfoliCardContainer = document.querySelector('.portfolio-card-wrap');
    let selectPortfolio = document.getElementById('select-portfolio');
    let burgerLink = document.querySelectorAll(".nav-link");
    let footerLinkNav = document.querySelector(".footer-nav");
    let tabsContainer = document.querySelector('.tabs');
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
        let linksFromJsonText = "";
        for(let j in linksJson){
            let a = `<li><a class="nav-link" href="${linksJson[j]}">${j}</a></li>`;


            linksFromJsonText += a;
        }
        footerLinkNav.innerHTML = `${linksFromJsonText}`;
 



        let arrFromJson = [];
        for (let key in linksJson) {
          let a = `<a class="nav-link" href="${linksJson[key]}">${key}</a>`;
          arrFromJson.push(a); 
        }
        // console.log(arrFromJson);

        // burgerLink1.innerHTML = arrFromJson[0];
        burgerLink.forEach(function(el, i) {
           el.innerHTML = `${arrFromJson[i]}`;
        })


        // ссылки в хедер конец

        
        // табы section-services JSON начало

        let allTabs = document.querySelector('.tabs-content-wrap');



        let linksNameTabs = data.servicesTabs;


        let testArr = "" ;
        let testArr2 = "";
        for(k in linksNameTabs){
            // console.log(linksNameTabs[k].text);

            let tt = `<div data-index="" class="tabs-panel"> <p class="tabs-panel-text">${linksNameTabs[k].text} <a href="">See more</a>  or <a href="">portfolio </a>  <img src="${linksNameTabs[k].img}" alt=""></p></div>`;
            testArr += tt;
            let tabLink = `<li class="tabs-item"><a class="tabs-item-a " href="#">${linksNameTabs[k].nameTabs}</a> </li>`;
            testArr2 += tabLink;



            // let tt = `<p class="tabs-panel-text">${linksNameTabs[k][0]} <a href="">See more</a>  or <a href="">portfolio </a>  <img src="${linksNameTabs[k][1]}" alt=""></p>`;
            //  console.log(testArr);
            // console.log(linksNameTabs[k][0]);
            // console.log(linksNameTabs[k][1]);
            //  testArr.push(tt);
            //  testArr2.push(tabLink);

        }


        tabsContainer.innerHTML = testArr2;
        allTabs.innerHTML = testArr;

        // табы section-services JSON конец

        //section portfolio card json начало
        let portfolioCardItem = data.portfolioCardItem;


        let portfolioCardContent = "";
        for( let k in portfolioCardItem){
            let content = `<div class="portfolio-card-item item col-lg-5"><div class="card-item-content">
                <h3>${portfolioCardItem[k].h3}</h3>
                <p>${portfolioCardItem[k].p}
                    <span>${portfolioCardItem[k].span}</span>
                </p>
            </div>
        </div> `
        portfolioCardContent += content; 
        }

        portfoliCardContainer.innerHTML =  portfolioCardContent;




        //section portfolio card json конец


        // ТАБЫ JS начало

         let tabsClickContainer = document.querySelector(".tabs");

         tabsClickContainer.addEventListener("click", function(event){
            if(event.target.classList.contains("active-tab")){
                console.log("URA2");
            }
        });






        // ТАБЫ JS конец
      





    }
})();






});