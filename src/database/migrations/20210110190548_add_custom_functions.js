const CUSTOM_FUNCTIOSN = `
    create or replace function on_update_timestamp()
    returns trigger as $$
    begin
        new.updated_at = now();
        return new;
    end;
    $$ language 'plpgsql';
`;

const DROP_CUSTOM_FUNCTIONS = `
    drop function on_update_timestamp()
`;

exports.up = async (knex) => knex.raw(CUSTOM_FUNCTIOSN);
exports.down = async (knex) => knex.raw(DROP_CUSTOM_FUNCTIONS);
