import Component from '@ember/component';
import { inject } from '@ember/service';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default Component.extend({
  session: inject(),

  init(...args) {
    this._super(...args);
    const uiConfig = {
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      callbacks: {
        signInSuccess: () => {
          this.get('session').fetch();
        },
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    this.set('uiConfig', uiConfig);
  }
});
