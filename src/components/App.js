import React from 'react';

import Header from './Header';

function App() {
  return (
    <>
      <svg display="none">
        <symbol id="ruble" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="" d="M291.75,308.1a105.8,105.8,0,1,0,0-211.6H136v32h39.943V276.1H136v32h39.943V352H136v32h39.943v56h32V384H304V352H207.943V308.1ZM207.943,128.5H291.75a73.8,73.8,0,1,1,0,147.6H207.943Z" className="ci-primary" />
        </symbol>
      </svg>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <div className="categories">
                <ul>
                  <li className="active">Все</li>
                  <li>Мясные</li>
                  <li>Вегетарианская</li>
                  <li>Гриль</li>
                  <li>Острые</li>
                  <li>Закрытые</li>
                </ul>
              </div>
              <div className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span>популярности</span>
                </div>
                <div className="sort__popup">
                  <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg></div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395<svg className="ruble-svg"><use xlinkHref="#ruble" /></svg>  </div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
