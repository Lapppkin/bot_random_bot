const TelegramBot = require('node-telegram-bot-api')
const config = require('./config.js')
const helper = require('./helper.js')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
const fs = require('fs')
const Promise = require('bluebird');
Promise.config({
    cancellation: true
})

helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

bot.on('message', msg => {
    console.log('Working', msg.from.first_name)

    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.home.usluga_1:
            bot.sendMessage(chatId, 'Выберите тип услуги:', {
                reply_markup: {keyboard: keyboard.usluga_1_prices, resize_keyboard: true}
            })
            break
        case kb.usluga_1_price.menu_1:

            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение сайта услуг https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                // })
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_1_price.menu_2:
            // bot.sendMessage(chatId, 'https://msk.lapkinlab.ru/seo')
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет магазина https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }

                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_1_price.menu_3:
            // bot.sendMessage(chatId, 'https://msk.lapkinlab.ru/seo')
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.home.usluga_2:
            bot.sendMessage(chatId, 'Выберите тип услуги:', {
                reply_markup: {keyboard: keyboard.usluga_2_prices}
            })
            break
        case kb.usluga_2_price.menu_4:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_2_price.menu_5:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_2_price.menu_6:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })

            break
        case kb.home.usluga_3:
            bot.sendMessage(chatId, 'Выберите тип услуги:', {
                reply_markup: {keyboard: keyboard.usluga_3_prices}
            })
            break
        case kb.usluga_3_price.menu_7:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/seo'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_3_price.menu_8:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/kontekstnaya-reklama'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_3_price.menu_9:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'https://msk.lapkinlab.ru/smm'
                                }
                            ],
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.home.usluga_4:
            bot.sendMessage(chatId, 'Выберите тип услуги:', {
                reply_markup: {keyboard: keyboard.usluga_4_prices}
            })
            break
        case kb.usluga_4_price.menu_10:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_4_price.menu_11:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Для заказа нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Подробнее',
                                    url: 'http://chatbot.lapkinlab.ru/'
                                }
                            ],

                        ]
                    }
                })
            })
            break
        case kb.usluga_4_price.menu_12:
            bot.sendPhoto(chatId, fs.readFileSync(__dirname + '/tovar.png')).then(() => {
                // bot.sendMessage(chatId, 'Заказать продвижение интернет портала https://msk.lapkinlab.ru/#form_zakaz_seo_servicev')
                bot.sendMessage(chatId, 'Чтобы задать вопрос нажмите на кнопку', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Задать вопрос',
                                    url: 'https://t.me/LapkinLAb'
                                }
                            ],

                        ]
                    }
                })
            })
            break

        case kb.back:
            bot.sendMessage(chatId, 'Какая услуга Вас интересует?', {
                reply_markup: {keyboard: keyboard.home}
            })
            break
    }

})

bot.onText(/\/start/, msg => {

    const text = `Здравствуйте, ${msg.from.first_name}\nВыберите интересующую Вас услугу:`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })

})
