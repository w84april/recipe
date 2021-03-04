import React from "react";
import "../style.css";
import logo from "./img/barbecue.jpg";

export const RecipesPage = () => {
  return (
    <div>
      <div className="header">
        <h5 className="header__text">Мои рецепты:</h5>
      </div>
      <div className="row">
        <ul className="collapsible list">
          <li>
            <div className="collapsible-header listitem">
              Шашлык
              <i className="large material-icons">close</i>
            </div>
            <div className="collapsible-body">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="collapsible-header listitem">
              <div>
                <img className="logo" src={logo} alt="hi.jpg" />
                <p>
                  Вам понадобится: баранина — 1 кг гранатовый сок — 200 г
                  лимонный сок — 20 г масло оливковое — 4 ст. л. чеснок — 5
                  зубчиков лук — 1 шт. болгарский перец — 1 шт. соль — по вкусу
                  перец черный молотый — по вкусу Лук нарезать кольцами, чеснок
                  измельчить. В миску влить гранатовый и лимонный соки и
                  оливковое масло, добавить лук, чеснок, соль и перец. Все
                  тщательно перемешать. Очищенное от прожилок и пленок мясо
                  выложить в чистую емкость, залить маринадом, накрыть крышкой
                  или пленкой и оставить на 4 часа. Перец помыть и нарезать на
                  крупные кусочки. На шампур насадить мясо и перец по очереди.
                  Жарить до готовности, периодически переворачивая.
                </p>
              </div>
            </div>
            <div className="collapsible-body">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header listitem">
              Ризотто
              <i className="large material-icons">close</i>
            </div>
            <div className="collapsible-body">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header listitem">
              Хлеб с маслом
              <i className="large material-icons">close</i>
            </div>
            <div className="collapsible-body">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
