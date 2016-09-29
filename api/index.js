module.exports = {
    "swagger": "2.0",
    "info": {
        "version": "0.0.1",
        "title": "AviaJ API",
        "description": "API для взаимодействия фронтенда и бэкенда в проекте AviaJ",
        "contact": {
            "url": "https://github.com/frontend-park-mail-ru/2016_2_AviaJ"
        }
    },
    "basePath": "/api",
    "schemes": [
        "http"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/users": {
            "get": {
                "summary": "Зарегистрированные пользователи",
                "description": "Возвращает список всех зарегистрированных пользователей.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "responses": {
                    "200": {
                        "description": "Список пользователей",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/User"
                            }
                        }
                    },
                    "default": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/users/top": {
            "get": {
                "summary": "Лучшие пользователи",
                "description": "Возвращает ТОП-10 лучших пользователей по рейтингу.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "responses": {
                    "200": {
                        "description": "Список пользователей",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/User"
                            }
                        }
                    },
                    "default": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/users/{userId}": {
            "get": {
                "summary": "Пользователь",
                "description": "Возвращает информацию о пользователе.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "type": "number",
                        "format": "long",
                        "required": true,
                        "description": "ID пользователя"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Информация о пользователе",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "404": {
                        "description": "Пользователь с таким ID не найден",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "default": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/users/login": {
            "post": {
                "summary": "Авторизация",
                "description": "Авторизация пользователя.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "parameters": [
                    {
                        "name": "loginData",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/UserLoginRequest"
                        },
                        "description": "Логин и пароль"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Информация об авторизованном пользователе",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "400": {
                        "description": "Введены неверные данные",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "default": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        },
        "/users/signup": {
            "post": {
                "summary": "Регистрация",
                "description": "Регистрация нового пользователя.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "parameters": [
                    {
                        "name": "signupData",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/UserSignupRequest"
                        },
                        "description": "Логин, E-mail и пароль"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Информация о зарегистрированном пользователе",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "400": {
                        "description": "Введены неверные данные",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    },
                    "default": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/Error"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "User": {
            "type": "object",
            "description": "Полученные данные о пользователе",
            "properties": {
                "userId": {
                    "type": "number",
                    "format": "long",
                    "description": "ID пользователя"
                },
                "login": {
                    "type": "string",
                    "description": "Логин (имя) пользователя"
                },
                "rating": {
                    "type": "number",
                    "description": "Рейтинг пользователя"
                }
            }
        },
        "UserLoginRequest": {
            "type": "object",
            "description": "Данные для авторизации",
            "properties": {
                "login": {
                    "type": "string",
                    "description": "Логин"
                },
                "password": {
                    "type": "string",
                    "description": "Пароль"
                }
            }
        },
        "UserSignupRequest": {
            "type": "object",
            "description": "Данные о пользователе для регистрации",
            "properties": {
                "login": {
                    "type": "string",
                    "description": "Логин"
                },
                "email": {
                    "type": "string",
                    "description": "E-mail"
                },
                "password": {
                    "type": "string",
                    "description": "Пароль"
                }
            }
        },
        "Error": {
            "type": "object",
            "description": "Данные об ошибке",
            "properties": {
                "code": {
                    "type": "number",
                    "format": "integer",
                    "description": "Код ошибки"
                }
            }
        }
    }
}