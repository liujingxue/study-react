'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/api/users/signup', controller.users.signup);
  router.post('/api/users/signin', controller.users.signin);
  router.get('/api/users/signout', controller.users.signout);

  router.resources('categories', '/api/categories', controller.categories);
  // router.get('/api/categories', controller.categories.index);
  // router.post('/api/categories', controller.categories.create);
  // router.put('/api/categories/:id', controller.categories.update); //改
  // router.delete('/api/categories/:id', controller.categories.destroy);


  router.resources('articles','/api/articles', controller.articles);

  //增加页面访问量
  router.get('/api/articles/pv/:id', controller.articles.addPv);
  //增加评论
  router.post('/api/articles/comment/:id', controller.articles.addComment);

};
