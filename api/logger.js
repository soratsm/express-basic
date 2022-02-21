// nextは必ずつける
// 『(req, res, next)』3つは関数
// 『(err, req, res, next)』4つはERROR
export default (req, res, next) => {
  const ipaddress =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    (req.connection.socket && req.connection.socket.remoteAddress) ||
    "0.0.0.0";
  const date = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ua = req.headers["user-agent"];

  console.log(`${ipaddress} [${date}] "${method} ${url}" - ${ua}`);

  next();
};
