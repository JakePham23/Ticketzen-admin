exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "john_doe",
          password: "hashed_password", // Store hashed passwords in production
          email: "john@example.com",
        },
        {
          username: "jane_doe",
          password: "hashed_password",
          email: "jane@example.com",
        },
      ]);
    });
};
