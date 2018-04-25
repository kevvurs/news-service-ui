import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: 'page',
  page: null,
  meta: '',
  nextPage: computed('meta', function() {
    let meta = this.get('meta');
    return meta.nextPage;
  }),
  lastPage: computed('meta', function() {
    let meta = this.get('meta');
    return meta.lastPage;
  })
});
