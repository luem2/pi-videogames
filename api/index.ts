//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import server from './src/app'
import { conn } from './src/db'
import { PORT } from './config'
import getGenres from './src/controllers/genres'

conn.sync({ force: false })
    .then(() => {
        getGenres()
        server.listen(process.env.PORT || PORT, () => {
            console.log(`Listening on ${process.env.PORT || PORT}`) // eslint-disable-line no-console
        })
    })
    .catch((e) => console.log(e))
