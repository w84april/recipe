import React, {useContext, useEffect, useState} from 'react'
import '../App.css'
import { AuthContext } from '../context/AuthContext'

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import bg from "../assets/bg.png";
import Left from "../assets/left-img.png";
import Right from "../assets/right-img.png";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const[form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect( () => {
        window.M.updateTextFields() 
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POSt', {...form})
            message(data.message)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POSt', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div>
            <div className='row'>
                <div className='col s12 l6'>
                    <img className='responsive-img' src={bg} alt='bg'/>
                </div>
                <div className='col s12 l6'>
                    <h1 className='title purple-text text-darken-4'>
                        Вкуснотища
                    </h1>
                    <h6 className='font'>
                        <b>Готовить - просто!</b>
                    </h6>
                    <p className='para'>
                        На сайте размещены миллионы рецептов от пользователей со всего мира.
                    </p>
                    <h6 className='font'>
                        <b>Выберите подходящее для вас блюдо!</b>
                    </h6>
                    <p className='para'>
                        Пользователи сайта регулярно делятся своими рецептами друг с другом.
                        <br/>Узнакомьтесь со всем разнообразием мировой кухни!<br/>
                    </p>
                    <h6 className='font'>
                        <b>Оставьте рецепт Вашего любимого блюда на сайте.</b>
                    </h6>
                    <h4 className='font purple-text text-darken-4'>
                        Приятного аппетита!
                    </h4>
                </div>
            </div>

            <footer className='page-footer grey lighten-2'>
                <div className='row'>
                    <p className='para center black-text'>
                        Создавать кулинарные шедевры по силам каждому.
                    <br />Ознакомьтесь с рецептами на сайте и готовьте с удовольствием.
                    </p>
                    <h2 className='font center black-text'>
                        <b>Войти в систему</b>
                    </h2>

                    <div className='col m4 s12'>
                        <img className='responsive-img' src={Left} alt='bg' />
                    </div>

                    <div className='col m4 s12'>
                        <div className='card'>
                            <div className='card-content'>
                                <div className='input-field one'>
                                    <i className='material-icons prefix teal-text text-accent-3'>
                                    mail
                                    </i>
                                    <input
                                            id="email"
                                            type="text"
                                            name="email"
                                            value={form.email}
                                            onChange={changeHandler}
                                            />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className='input-field'>
                                    <i className='material-icons prefix teal-text text-accent-3'>
                                    security
                                    </i>
                                    <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={form.password}
                                            onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Пароль</label>
                                </div>
                            </div>
                            
                            <div className="card-action">
                                <button
                                    className='btn btn-header white-text text-darken-4 teal accent-3'
                                    style={{marginRight: 10}}
                                    disabled={loading}
                                    onClick={loginHandler}
                                >
                                    Войти
                                </button>
                                <button
                                    className="btn btn-header white-text text-darken-4 purple darken-4"
                                    onClick={registerHandler}
                                    disabled={loading}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col m4 s12'>
                        <img className='responsive-img' src={Right} alt='bg' />
                    </div>
                </div>

                <div className='footer-copyright purple darken-4'>
                    <div className='container'>
                        © <b className='font'>2021 ВКУСНОТИЩА</b>
                        <a className='grey-text text-lighten-4 right' href='#!'>
                            <b>Макиенко Игорь КТбо3-6</b>
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}