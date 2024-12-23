import React from 'react';
import Contact from './Contact.jsx'
import ReactDOM from 'react-dom/client';
import './index.css';
import masckot from './Masckot.png'
import img2 from './image.png'
import img3 from './aboutus.svg'
import mail from './mail.png'
import profile from './profile.svg'

import kartinka0 from './kartinka0.svg'
import kartinka1 from './kartinka1.svg'
import kartinka2 from './kartinka2.svg'
import kartinka3 from './kartinka3.svg'
import kartinka4 from './kartinka4.svg'

import sms from './sms.svg'
import book from './book.svg'

import happy from './happy-masckot.svg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='body'>
  
  <div className='header'>
    <nav className='header__nav-panel'>
      <a href='#'>Услуги111
        <img src={book}></img>
      </a>
      <a href='#'>Контакты
        <img src={sms}></img>
      </a>
      <a href='#'>Вакансии
        <img src={profile}></img>
      </a>
    </nav>
    <div className='header__logo'>
      <a href='#'><span>M</span><span>ARLO</span></a>
    </div>
    <a className='button' id='button__discuss'>Обсудить проект</a>
  </div>


  <div className='main'>
    <div className='main__title'><span>M</span><span>ARLO</span></div>
    <span className='main__subtitle'>Больше, чем приложение!</span>


    <span className='main__title-about-us'>О нас</span>
    <div className='main__about-us-container'>
      <div className='main__about-us-image'>
        <img src={kartinka0} alt='billy'></img>
      </div>
      <div className='main__about-us-text'>
        <span className='main__text-title'>
          <span>M</span>
          <span>ARLO</span>
          <span> - это про людей.</span>
        </span>
        <span>Мы - команда профессионалов с огромным опытом разработки, которые не утратили свой энтузиазм!</span>
        <span>Наша миссия - сделать мир доступнее и удобнее для всех. Мы разрабатываем сервисы, которые делают жизнь проще, а также помогаем с реализацией единомышленникам.</span>
      </div>
    </div>

    <div className='main__container-services-title'>
      <span>Наши услуги</span>
      <span>Разработаем веб-сервис любой сложности для ваших задач.</span>
    </div>

    <div className='main__container-services'>
      <div className='services__content-box'>
        <div className='content-box'>
          <img src={kartinka1} alt='komp'></img>
        </div>
        <div className='content-text-box'>
          <div>Делаем только <span>качественные</span> сайты и приложения.</div>
        </div>
      </div>

      <div className='services__content-box'>
        <div className='content-text-box'>
          <div>Наши продукты не только красивые снаружи, но и <span>качественные внутри.</span></div>
        </div>
        <div className='content-box1'>
          <img src={kartinka2} alt='oc'></img>
        </div>
      </div>

      <div className='services__content-box'>
        <div className='content-box'>
          <img src={kartinka3} alt='oc'></img>
        </div>
        <div className='content-text-box'>
          <div>Используем <span>самые актуальные</span> методы и закладываем возможности для масштабирования уже на этапе проектирования.</div>
        </div>
      </div>

      <div className='services__content-box'>
      <div className='content-text-box'>
          <div>Доступная цена и сроки разработки - удовлетворим <span>любой</span> запрос.</div>
        </div>
        <div className='content-box1'>
          <img src={kartinka4} alt='oc'></img>
        </div>
      </div>
    </div>

    <div className='main__discuss-project'>
        <span className='main__discuss-project-title'>Давайте обсудим ваш проект!</span>
        <div className='main__discuss-project-content'>
          <div className='main__discuss-project-text'>
            <span>У тебя есть крутая идея которая перевернет мир, но нет ресурсов на ее воплощение?
            </span><br></br>
            <span className='project-text-subtitle'>Мы поможем!</span>
            <span  className='list'>
              <li><span>Разработка сервисов и приложений от идеи до готового продукта</span></li>
              <li><span>Поможем оценить перспективы и разработаем план развития</span></li>
              <li><span>К вашим услугам программисты, дизайнеры и менеджеры с большим опытом ведения проектов и стартапов</span></li>
            </span>
          </div>
          <div className='project-text-discuss-submittance'>
            <a href='#' className='button1' id='button__discuss'>Обсудить проект</a>
            <img src={happy} alt='happy-masckot'></img>
          </div>
        </div>
    </div>

    <div className='main__searching-talents'>
      <span className='searching-talents-title'>Мы ищем таланты!</span>
      <div className='searching-talents-text'>
        <div className='searching-talents-content-box'>
          <span>Сильная команда<br></br> и уникальная среда</span>
          <div>
            <img src={img2} alt='team'></img>
          </div>
          <span className='searching-talents-subtext'>Быстрое развитие специалиста в работе<br></br> над разнообразными и интересными проектами
          </span>
        </div>

        <div className='main__vacancies'>
          <span className='main__vacancies-title'>Открытые вакансии</span>
          <div className='vacancies-available'>
            <li><span>Графический дизайнер</span></li>
            <li><span>Бизнес-аналитик</span></li>
            <li><span>Новый бизнес-менеджер в UX/UI</span></li>
          </div>
          <div className='input-field'>
            <div><Contact/></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='footer'>
  <nav className='header__nav-panel'>
      <a href='#'>Услуги</a>
      <a href='#'>Контакты</a>
      <a href='#'>Вакансии</a>
    </nav>
    <div className='header__logo'>
      <a href='#'><span>M</span><span>ARLO</span></a>
    </div>
    <a className='button' id='button__discuss'>Обсудить проект</a>
  </div>
</div>
);

