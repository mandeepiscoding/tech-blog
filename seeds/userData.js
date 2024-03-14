const { User } = require('../models');

const userdata = [
  {
    username: 'Test1',
    email: 'test1@gtest.com',
    password: 'onlyfortest',
  },
  {
    username: 'Test2',
    email: 'test2@test.com',
    password: 'onlyfortest2',
  },
  {
    username: 'Test3',
    email: 'test3@test.com',
    password: 'onlyfortest3',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
