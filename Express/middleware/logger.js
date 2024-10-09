const logger =(req, res, next) => {
    const {method, url} = req
    // Get month, day, year, and time
    const time = getTime()
    console.log(method, url, time)
    next()
}

function getTime() {
    // Get date
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    // Get time
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    return `Date: ${month}/${day}/${year} Time: ${hours}:${minutes}:${seconds}`;
}
module.exports = logger;