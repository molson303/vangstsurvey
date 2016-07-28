var knex = require('../db/knex');


module.exports = {

create: function (usr) {
  return knex.raw(`INSERT into vang (company, q1, q2, q3, q4, q5, comments)
     VALUES ('${usr.company}','${usr.q1}','${usr.q2}', '${usr.q3}', '${usr.q4}', '${usr.q5}', '${usr.comments}'); `)
}

};
