  //СКРОЛ НАДПИСЕЙ ВАРИАНТОВ ПОКАЗА class=commod
  const tabel = document.querySelectorAll('.commod__nav li')    
  tabel.forEach(function(tab) {
      tab.addEventListener('click', function() {
          const scroll = this.offsetLeft - 50;
          document.querySelector('.commod__nav').scrollLeft = scroll;
          console.log('scrolled')
      });
      
  });
  
    //СОЗДАНИЕ BURGER MENU, Добавление поведения изменения при клике на крестик
  const menu = document.querySelector('.header__menu');
  
  const div = document.createElement('div');
  div.classList.add('header__burger');
  
  const label = document.createElement('label');
  label.classList.add('nav__check')
  
  for (let i = 0; i < 3; i+=1) {
      const span = document.createElement('span');
      label.appendChild(span);
     
  }
  
  div.appendChild(label);
  menu.appendChild(div);
  
  
  const menuBody = document.querySelector('.menu__body');
  
  div.addEventListener('click', () => {
    if (menuBody.classList.contains('checked__burger')) {
      menuBody.classList.remove('checked__burger');
    } else {
      menuBody.classList.add('checked__burger');
    }
  })
  
  const upperSpan = document.querySelector('.nav__check span:first-child')
  const middleSpan = document.querySelector('.nav__check span:nth-child(2)')
  const buttonSpan = document.querySelector('.nav__check span:last-child')
  
  label.addEventListener('click', () => {
    if (menuBody.classList.contains('checked__burger')) {
      upperSpan.classList.remove('upper__stick');
      middleSpan.classList.remove('middle__stick');
      buttonSpan.classList.remove('button__stick');
    } else {
      upperSpan.classList.add('upper__stick');
      middleSpan.classList.add('middle__stick');
      buttonSpan.classList.add('button__stick');
    }
  })
  
  // Добавлние кнопки к скроллу .commod
  
  const button = document.createElement('button');
  button.classList.add('round__btn');
  button.textContent = '>';
  
  const ul = document.querySelector('.commod__nav');
  ul.prepend(button);
  
  button.addEventListener('click', function() {
      const items = document.querySelectorAll('.commod__item');
      for (let i = 0; i < items.length; i++) {
          if (items[i].classList.contains('_active')) {
              items[i].classList.remove('_active');
              if (i < items.length - 1) {
                  items[i+1].classList.add('_active');
                  break; 
              }
          }
      }
  });
  
  
  
  
  