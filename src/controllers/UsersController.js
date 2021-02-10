const knex = require("../database");

module.exports = {
  async index(req, res) {
    const response = await knex("users");

    return res.json(response);
  },
};
