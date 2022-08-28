import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("DOMContentLoaded", ()=>{

    // Modal Window
    const modal = document.querySelector(".modal"),
        modalTrigger = document.querySelectorAll(".card-link"),
        modalCloseBtn = document.querySelector("[data-close]"),
        parentContantWrap = document.querySelector(".modal-content");

    // ф-я перебора триггеров
    modalTrigger.forEach(btn =>{

        btn.addEventListener("click", (e)=>{
            console.log(e.target.parentNode.parentNode.querySelector('[src]').src);

            const parentCard = e.target.parentNode.parentNode;

            if(parentCard.classList.contains("card")){
                const modalContent = document.createElement('div');

                modalContent.innerHTML = `
                            <h3 class="modal-title">${parentCard.querySelector('.card-title').innerHTML}</h3>
                            <div class='modal-container'>
                                <img class="modal-img" src="${parentCard.querySelector('[src]').src}" alt="${parentCard.querySelector('.card-title').innerHTML}">
                                <p>${parentCard.querySelector('p').innerHTML}</p>
                            </div>`;

                parentContantWrap.appendChild(modalContent);

                modal.classList.add("show");
                modal.classList.remove("hide");

                // Запрет скролла бади при открытии модального окна
                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
                const body = document.body;
                body.classList.add("fixed");
                body.style.top = `-${scrollY}`;
            }
        });
    });

    // ф-я закрытия модального окна
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        parentContantWrap.innerHTML = "";

        // Скролл бади на позицию
        const body = document.body;
        const scrollY = body.style.top;
        body.classList.remove("fixed");
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.getElementById('dialog').classList.remove('show');
    }


    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e)=>{
        if(e.target === modal){
            closeModal();
        }
    });

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });


    // закрытие по кнопке Esc
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){
            closeModal();
        }
    });

});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
