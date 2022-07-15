module.exports = {
    mysql: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        hostname: process.env.MYSQL_HOSTNAME,
        port: process.env.MYSQL_PORT,
        dbname: process.env.MYSQL_DB_NAME,
    },
    pg: {
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        hostname: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dbname: process.env.PG_DB,
    }
};