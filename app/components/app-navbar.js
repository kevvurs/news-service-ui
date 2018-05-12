import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';

const { Logger } = Ember;

export default Component.extend({
  session: inject(),
  actions: {
    logout: function() {
      this.get('session').close()
        .then(() => Logger.info('User logged out'))
        .catch(() => Logger.warn('Logging out failed'));
    }
  }
});
