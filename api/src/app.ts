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

import Server from './models/server'

const server = new Server()

server.listen()

// import server from './models/server'
// import db from './db'
// import { PORT } from './config/env'
// import getGenres from './controllers/genres'

// db.conn
//     .sync({ force: false })
//     .then(() => {
//         getGenres()
//         server.listen(process.env.PORT || PORT, () => {
//             console.log(`Listening on ${process.env.PORT || PORT}`)
//         })
//     })
//     .catch((e) => console.log(e))
