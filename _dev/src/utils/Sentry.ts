import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import store from '@/store';

const appVersion = process.env.VUE_APP_BUILD_VERSION || 'dev';

// @ts-ignore
if (store.state.app.psxMktgWithGoogleOnProductionEnvironment) {
  Sentry.init({
    Vue,
    // @ts-ignore
    dsn: global.psxMktgWithGoogleDsnSentry,
    allowUrls: [
      'https://storage.googleapis.com/psxmarketing-cdn/',
    ],
    tracesSampleRate: 1.0,
    logErrors: true,
    initialScope: {
      tags: {
        // @ts-ignore
        'prestashop-version': store.state.app.psVersion,
        // @ts-ignore
        'module-version': store.state.app.psxMktgWithGoogleModuleVersion,
        'app-version': appVersion,
      },
      user: {
        id: window.shopIdPsAccounts ? window.shopIdPsAccounts.toString() : 'unknown',
      },
    },
    // @ts-ignore
    release: appVersion,
  });
}
