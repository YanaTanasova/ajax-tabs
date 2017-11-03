// function Tabs() {

//         this.tabsBtn = document.querySelector('.tab-btns');
//         this.tabContent = document.querySelectorAll('.tab-content');
//         this.childBtn = document.querySelectorAll('.tab-btn');
//         this.line = document.querySelector('.line');

//         this.changeContent_ = event => {

//             if( event.target.tagName === 'A' && event.target.hasAttribute('href') ) {

//                 let anchor = event.target.getAttribute('href').slice(1);

//                 this.childBtn.forEach( el => {
//                     if( el.classList.contains('active-tab') ) {
//                         el.classList.remove('active-tab');
//                         return;
//                     }
//                 })          
//                 event.target.classList.add('active-tab');

//                 this.tabContent.forEach( el => {
//                     if( el.classList.contains('active-content') ) {
//                         el.classList.remove('active-content');
//                         return;
//                     }
//                 });
//                 document.getElementById(anchor).classList.add('active-content');

//                 this.containerRect = this.tabsBtn.getBoundingClientRect();
//                 this.curTabRect = document.querySelector('.active-tab').getBoundingClientRect();

//                 this.line.style.left = (this.curTabRect.left - this.containerRect.left) + 'px';
//             }
//         }

//         this.events_ = () => {

//             this.tabsBtn.addEventListener('click', this.changeContent_);
//         }
//         this.init_ = () => {
//             this.events_();
//         }

//         this.init_();
//     }

//     const tabs = new Tabs();


$(document).ready(function(){
    var tabsBtn = $('.tab-btns'),
        tabContent = $('.tab-content'),
        childBtn = $('.tab-btn'),
        line = $('.line');

    let lineWidth = $('.active-tab').css('width');
    line.css('width', lineWidth);

    $(tabsBtn).on('click', '.tab-btn', function(e){

        let anchor = $(e.target).attr('href');

        childBtn.removeClass('active-tab');
        tabContent.removeClass('active-content');

        $(e.target).addClass('active-tab');
        $(anchor).addClass('active-content');

        let linePosition = $(e.target).position().left;
        line.css('left', linePosition);

        return false;

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://ajax-tabs.firebaseio.com/');
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            let data = xhr.response;

            for({link, desc} of data){
                let img = document.createElement('img');
                let p = document.createElement('p');
                // img.addEventListener('load', function(){

                // })
                img.setAttribute('src', link);
                tabContent.appendChild(img);
                tabContent.appendChild(p);
            }
        });
        xhr.send();
    })
})

