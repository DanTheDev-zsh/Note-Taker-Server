// Custom middleware that logs out the type and path of each request to the server
const c_middle = (req, res, next) => {
    const fgCyan = "\x1b[36m";
    const fgBlue = "\x1b[34m";
    const fgMagenta = "\x1b[35m";
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgBlue}${req.method} request to ${req.path}`);
        break;
      }
      default: {
        console.log(`📙${fgMagenta}${req.method} request to ${req.path}`);
      }
    }
  
    next();
  };
  
  exports.c_middle = c_middle;