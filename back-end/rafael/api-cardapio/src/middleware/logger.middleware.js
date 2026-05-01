function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    const {method, originalUrl} = req;   
    const ip = req.ip

    console.log(`[${timestamp}] ${method} ${originalUrl} - IP: ${ip}`)

    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const status = res.statusCode;
    console.log(`[${timestamp}] ${method} ${originalUrl} - ${status} - ${duration}ms`);
    })

    next()

}
module.exports = {logger}