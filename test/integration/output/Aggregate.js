module.exports = {
  'has a sum': {
    mysql: {
      bindings: [],
      sql: 'select sum(`logins`) from `accounts`',
      result: [{
        'sum(`logins`)': 10
      }]
    },
    postgresql: {
      bindings: [],
      sql: 'select sum("logins") from "accounts"',
      result: [{
        'sum': '10'
      }]
    },
    sqlite3: {
      bindings: [],
      sql: 'select sum("logins") from "accounts"',
      result: [{
        'sum("logins")': 10
      }]
    }
  },
  'has a count': {
    mysql: {
      bindings: [],
      sql: 'select count(`id`) from `accounts`',
      result: [{
        'count(`id`)': 6
      }]
    },
    postgresql: {
      bindings: [],
      sql: 'select count("id") from "accounts"',
      result: [{
        'count': '6'
      }]
    },
    sqlite3: {
      bindings: [],
      sql: 'select count("id") from "accounts"',
      result: [{
        'count("id")': 6
      }]
    }
  },
  'support the groupBy function': {
    mysql: {
      bindings: [[],[]],
      sql: ['select count(`id`) from `accounts` group by `logins`','select count(`id`) from `accounts` group by `first_name`'],
      result: [[{
        'count(`id`)': 2
      },{
        'count(`id`)': 4
      }],[{
        'count(`id`)': 6
      }]]
    },
    postgresql: {
      bindings: [[],[]],
      sql: ['select count("id") from "accounts" group by "logins"','select count("id") from "accounts" group by "first_name"'],
      result: [[{
        'count': '2'
      },{
        'count': '4'
      }],[{
        'count': '6'
      }]]
    },
    sqlite3: {
      bindings: [[],[]],
      sql: ['select count("id") from "accounts" group by "logins"','select count("id") from "accounts" group by "first_name"'],
      result: [[{
        'count("id")': 2
      },{
        'count("id")': 4
      }],[{
        'count("id")': 6
      }]]
    }
  }
};
