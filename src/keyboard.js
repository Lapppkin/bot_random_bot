const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.usluga_1, kb.home.usluga_2],
        [kb.home.usluga_3],
        [kb.home.usluga_4]
    ],
    usluga_1_prices: [
        [kb.usluga_1_price.menu_1],
        [kb.usluga_1_price.menu_2, kb.usluga_1_price.menu_3],
        [kb.back]
    ],
    usluga_2_prices: [
        [kb.usluga_2_price.menu_4],
        [kb.usluga_2_price.menu_5, kb.usluga_2_price.menu_6],
        [kb.back]
    ],
    usluga_3_prices: [
        [kb.usluga_3_price.menu_7],
        [kb.usluga_3_price.menu_8, kb.usluga_3_price.menu_9],
        [kb.back]
    ],
    usluga_4_prices: [
        [kb.usluga_4_price.menu_10],
        [kb.usluga_4_price.menu_11, kb.usluga_4_price.menu_12],
        [kb.back]
    ]
}