const { Post } = require('../models');

const postdata = [
  {
    title: 'Test 1',
    body: 'Testing 1',
  },
  {
    title: 'Test 2',
    body: 'Testing 2',
    user_id: 2,
  },
  {
    title: 'Test 3',
    body: 'Testing 3',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;