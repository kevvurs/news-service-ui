import Component from '@ember/component';

export default Component.extend({
  classNames: ['container'],

  didRender() {
    this._super(...arguments);
    this.$(window).scrollTop(0);
  }
});
