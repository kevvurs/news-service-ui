import DS from 'ember-data';

export default DS.Model.extend({
  source:       DS.attr(),
  author:       DS.attr(),
  title:        DS.attr(),
  description:  DS.attr(),
  url:          DS.attr(),
  image:        DS.attr(),
  published:    DS.attr()
});
