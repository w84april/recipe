import TextareaAutosize from "react-textarea-autosize";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { useHistory } from "react-router-dom";
import "../style.css";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const message = useMessage();

  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    recipename: "",
    recipe: "",
  });

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loadrecipeHandler = async () => {
    try {
      const data = await request(
        "api/recipe/loadrecipe",
        "POST",
        { ...form },
        { Authorization: `Bearer ${auth.token}` }
      );
      message(data.message);
      history.push(`/r/${data.recipe._id}`);
    } catch (e) {}
  };

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="input-field">
            <input
              className="input"
              id="recipename"
              type="text"
              name="recipename"
              onChange={changeHandler}
            />
            <label htmlFor="recipe">Введите название рецепта</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s8 offset-s2">
          <textarea
            type="text"
            name="recipetext"
            placeholder="Введите рецепт."
            onChange={changeHandler}
            id="textarea2"
            className="materialize-textarea"
            data-length="120"
          ></textarea>
        </div>
      </div>

      <div className="button">
        <button
          className="add_photo btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Добавить фото
          <i className="material-icons ">add_a_photo</i>
        </button>
        <button
          className="btn btn-header white-text text-darken-4 teal accent-3"
          disabled={loading}
          onClick={loadrecipeHandler}
        >
          Добавить рецепт
        </button>
      </div>
    </div>
  );
};
