// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "prettier",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
  onUpdateTrigger: (table) => `
    create trigger ${table}_updated_at
    before update on ${table}
    for each row
    execute procedure on_update_timestamp();
  `,
};
