const errorHandler = (err, req, res, next) => {
  res.status(err.code || 500).send(err.message || 'Internal Server Error');
};

export default errorHandler;
