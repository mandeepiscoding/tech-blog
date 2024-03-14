const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Test 1',
    post_id: 1,
    user_id: 1,
  },
  {
    comment: 'Test 2',
    post_id: 2,
    user_id: 2,
  },
  {
    comment: 'Test 3',
    post_id: 3,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;