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
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = require('./src/utility/');
const getGenres = require('./src/controllers/genres');

const connection = async () => {
  try {
    await conn.authenticate();
    conn.sync({ force: false }).then(() => {
      getGenres();
      server.listen(process.env.PORT || PORT, () => {
        console.log(`Listening on ${PORT}`); // eslint-disable-line no-console
      });
    });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error);
  }
};

connection();
