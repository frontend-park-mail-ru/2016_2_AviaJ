module.exports = {
    "swagger": "2.0",
    "info": {
        "version": "0.0.2",
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
                            "$ref": "#/definitions/UserList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
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
                            "$ref": "#/definitions/UserList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/users/id/{userId}": {
            "get": {
                "summary": "Пользователь по ID",
                "description": "Возвращает информацию о пользователе по его ID.",
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
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/users/login/{login}": {
            "get": {
                "summary": "Пользователь по ID",
                "description": "Возвращает информацию о пользователе по его ID.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи"
                ],
                "parameters": [
                    {
                        "name": "login",
                        "in": "path",
                        "type": "string",
                        "required": true,
                        "description": "Логин пользователя"
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
                        "description": "Пользователь с таким логином не найден",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/auth/signup": {
            "post": {
                "summary": "Регистрация",
                "description": "Регистрация нового пользователя.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи",
                    "Сессии"
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
                            "$ref": "#/definitions/UserProfile"
                        }
                    },
                    "400": {
                        "description": "Введены неверные данные",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "403": {
                        "description": "Для регистрации необхожимо завершить сессию (логаут)",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/auth/login": {
            "post": {
                "summary": "Авторизация",
                "description": "Авторизация пользователя.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи",
                    "Сессии"
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
                            "$ref": "#/definitions/UserProfile"
                        }
                    },
                    "400": {
                        "description": "Введены неверные данные",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "403": {
                        "description": "Для входа необхожимо заверщить сессию (логаут)",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/auth/authenticate": {
            "get": {
                "summary": "Аутентификация",
                "description": "Аутентификация пользователя (если кратко - проверка, авторизован ли пользователь).",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи",
                    "Сессии"
                ],
                "responses": {
                    "200": {
                        "description": "Информация об авторизованном пользователе",
                        "schema": {
                            "$ref": "#/definitions/UserProfile"
                        }
                    },
                    "401": {
                        "description": "Пользователь не авторизован",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    }
                }
            }
        },
        "/auth/logout": {
            "post": {
                "summary": "Логаут",
                "description": "Завершение сессии пользователя.",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Пользователи",
                    "Сессии"
                ],
                "responses": {
                    "200": {
                        "description": "Информация об авторизованном пользователе"
                    },
                    "401": {
                        "description": "Пользователь не авторизован",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
                        }
                    },
                    "500": {
                        "description": "Неизвестная ошибка",
                        "schema": {
                            "$ref": "#/definitions/ErrorList"
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
                "id": {
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
        "UserList": {
            "type": "object",
            "description": "Список пользователей",
            "properties": {
                "users": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/User"
                    }
                }
            }
        },
        "UserProfile": {
            "type": "object",
            "description": "Полный профиль пользователя",
            "properties": {
                "id": {
                    "type": "number",
                    "format": "long",
                    "description": "ID пользователя"
                },
                "login": {
                    "type": "string",
                    "description": "Логин (имя) пользователя"
                },
                "email": {
                    "type": "string",
                    "description": "E-mail пользователя"
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
        "ErrorCode": {
            "type": "number",
            "format": "integer",
            "description": "10: Такого логина не существует<br> 11: Неправильный пароль<br> 21: Логин занят<br> 22: E-mail уже есть в базе<br>  23: Пустой логин<br> 24: Пустой E-mail<br> 25: Пустой пароль<br> 100: Нет пользователя с таким ID<br> 101: Пользователь уже авторизован<br> 102: Пользователь не авторизован<br> 900: Неизвестная ошибка<br>"
        },
        "Error": {
            "type": "object",
            "description": "Данные об ошибке",
            "properties": {
                "code": {
                    "$ref": "#/definitions/ErrorCode"
                }
            }
        },
        "ErrorList": {
            "type": "object",
            "description": "Спиок ошибок",
            "properties": {
                "errors": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Error"
                    }
                }
            }
        }
    }
}
