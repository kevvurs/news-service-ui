import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('article', params).then((results) => {
      return {
        articles: results,
        meta: results.get('meta')
      };
    });
  },
  setupController(controller, { articles, meta }) {
    this._super(controller, articles);
    controller.set('meta', meta);
  }
});
