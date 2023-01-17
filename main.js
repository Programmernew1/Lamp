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


 let header_1 = document.querySelector('.burger-menu-wrap');
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
    let burgerLink = document.querySelector(".burger-menu-ul");
    let burgerLinkLaptop = document.querySelector(".burger-menu-ul-laptop");
    let footerLinkNav = document.querySelector(".footer-nav");
    let tabsContainer = document.querySelector('.tabs');
    let response = await fetch('data.json');
    if (response.ok) {

        let data = await response.json(); // получаем ответ в формате JSON
        //  console.log(data.burgerLinks); 

        let testArray = data.servicesTabs;
        let inputPortfolio = `<option value="">All categories</option>`;
        for(let z in testArray){
            let a = `<option value="">${testArray[z].nameTabs}</option>`;
            inputPortfolio += a;
        }
        

        //   console.log(testArray);
        selectPortfolio.innerHTML = inputPortfolio; // Перезаписываем значение тэга <select class="select" name="portfolio" id="select-portfolio"> в HTML разметке

      // ссылки в хедер начало
        let linksJson = data.burgerLinks;
        console.log(linksJson);
        let linksFromJsonText = `<img class='img-close-menu' src='./img/menu-close.png' alt=''>`;
        let linksFromJsonTextLaptop = "";
 
        for(let j in linksJson){
            let a = `<li><a class="nav-link" href="${linksJson[j]}">${j}</a></li>`;
            linksFromJsonText += a;
            linksFromJsonTextLaptop += a;

        }
        burgerLink.innerHTML = `${linksFromJsonText}`;
        burgerLinkLaptop.innerHTML = `${linksFromJsonTextLaptop}`;
        footerLinkNav.innerHTML = `${linksFromJsonTextLaptop}`;
 
        //  let arrFromJson = [];
        // for (let key in linksJson) {
        //   let a = `<li><a class="nav-link" href="${linksJson[key]}">${key}</a></li>`;
        //   arrFromJson.push(a); 
        // }
        // console.log(arrFromJson);

        // burgerLink1.innerHTML = arrFromJson[0];
        // burgerLink.forEach(function(el, i) {
        //    el.innerHTML = `${arrFromJson[i]}`;
        // });
        // burgerLinkLaptop.forEach(function(el,i){
        //     el.innerHTML = `${arrFromJson[i]}`;
        // })



        // ссылки в хедер конец

        
        // табы section-services JSON начало

        let allTabs = document.querySelector('.tabs-content-wrap');



        let linksNameTabs = data.servicesTabs;


        let testArr = "" ;
        let testArr2 = "";
        for(k in linksNameTabs){
            // console.log(linksNameTabs[k].text);

            let tt = `<div id="${linksNameTabs[k].number}" class="tabs-panel"> <p class="tabs-panel-text">${linksNameTabs[k].text} <a href="#">See more</a>  or <a href="">portfolio </a>  <img src="${linksNameTabs[k].img}" alt=""></p></div>`;
            testArr += tt;
            let tabLink = `<li class="tabs-item"><a class="tabs-item-a " href=#${linksNameTabs[k].number}>${linksNameTabs[k].nameTabs}</a> </li>`;
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
            let content = `<div  class="portfolio-card-item item col-lg-5" style="background:url('${portfolioCardItem[k].img}');" ><div class="card-item-content">
                <h3>${portfolioCardItem[k].h3}</h3>
                <p>${portfolioCardItem[k].p}
                    <span>${portfolioCardItem[k].span}</span>
                </p>
            </div>
          </div> `
         portfolioCardContent += content;
   
           
        
        }

        portfoliCardContainer.innerHTML =  portfolioCardContent;

        let contentSTR = `<h2 id="feedbacks" class="feedbacksH2">feedbacks</h2>`;
         data.feedbacks.map(function(el){
            contentSTR +=   ` <div class="background-img" style="  background: url('${el.img}') no-repeat 72px 10px/ 100px 100px;">
            <p> ${el.text}
                <span class="feedback-autor">${el.author}</span>
            </p>
          </div> `
        
        });
        document.querySelector(".containerFeedbacksJS").innerHTML = contentSTR;

        // <h2 id="feedbacks" class="feedbacksH2">feedbacks</h2>




          


        //section portfolio card json конец


        // ТАБЫ JS начало
        // let tabs = document.querySelector('.tabs');
        // console.log(tabs.classList.contains('col-lg-4'));
        // let tabsItemA = document.querySelector('.tabs-item-a');
        // tabsItemA.classList.add('active-tab');




        // tabs.addEventListener("click",function(event){
        //     if(event.target.classList.contains('active-tab')){
        //         return;
        //     }
        //     else{
        //         event.target.classList.add('active-tab');
        //     }
        // });
        // console.log(linksNameTabs.staus);
        // if(linksNameTabs.status = true && tabs.classList.contains('active-tab')){
            


        // }
       let tabsitema = document.querySelectorAll('.tabs-item-a');
       tabsitema.forEach(el => {
        el.addEventListener('click',function(e){
            e.preventDefault();  //убирает поведение по умолчанию
            const id = e.target.getAttribute('href').substring(1); // убираем первый элемент у строки
            console.log(id);

            document.querySelectorAll('.tabs-item-a').forEach(el =>{
                el.classList.remove('active-tab');
            });
            document.querySelectorAll('.tabs-panel').forEach(el =>{
                el.classList.remove('active-panel');
            });
            el.classList.add('active-tab');
             document.getElementById(id).classList.add('active-panel');
             console.log(document.getElementById(id));
        })
       });

       document.querySelector('.tabs-item-a').click(); // имитируем клик





        // ТАБЫ JS конец


        //зацикленный текст движение начало

        let arrovText = document.querySelector(".scroling-more img");
        let arrovTextProperty = window.getComputedStyle(arrovText);   // получить css свойства элемента
        let arrovTextPropertyValue = Number(arrovTextProperty.top.slice(0,-2)); // строку преобразуем в число 
        console.log(arrovTextPropertyValue);



        function move(){
            function up(){
                let z = 46;
                
                setTimeout(() => {

                    arrovText.style.top = `${z+5}px`;
                }, 1000);

            }
            function down(){
                let z = 50;
              
                setTimeout(() => {
                    arrovText.style.top = `${z-5}px`;
       
                }, 1500);  

            }
            up();
            down();
        }
        // move();
         setInterval(move,1000);
    

       

   
    //   move();
     // зацикленный текст конец



      





    }
})();

});