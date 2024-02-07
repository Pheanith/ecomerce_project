const getAll = (req, res) => {
  res.json({
    message: "List all customer",
  });
};
const getOne = (req, res) => {
  res.json({
    message: "List one customer",
  });
};
const create = (req, res) => {
  res.json({
    message: "Create customer",
  });
};
const remove = (req, res) => {
  res.json({
    message: "Remove customer",
  });
};
const update = (req, res) => {
  res.json({
    message: "Update customer",
  });
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
