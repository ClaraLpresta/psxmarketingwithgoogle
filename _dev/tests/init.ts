import {config, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import {messages} from '@/lib/translations';

let windowSpy;
let localVue; // eslint-disable-line
const defaultLocale = 'en';
let filters; // eslint-disable-line
let VBTooltip;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    // add data needed in window
    i18nSettings: {
      languageLocale: 'en', // needed in _dev/src/store/modules/product-feed/actions.ts
      languageCode: 'en-US', // needed in _dev/src/store/modules/product-feed/actions.ts
      isoCode: 'en',
    },
    scrollTo: jest.fn(),
  }));
  VBTooltip = jest.fn();
  localVue = createLocalVue();
  localVue.use(Vuex);

  filters = {
    timeConverterToDate: jest.fn(),
    timeConverterToHour: jest.fn(),
    changeCountriesCodesToNames: jest.fn().mockImplementation(() => []),
    timeConverterToStringifiedDate: jest.fn().mockImplementation(() => ''),
    slugify: jest.fn().mockImplementation(() => 'foo'),
  };

  localVue.filter('timeConverterToDate', filters.timeConverterToDate);
  localVue.filter('timeConverterToHour', filters.timeConverterToHour);
  localVue.filter('changeCountriesCodesToNames', filters.changeCountriesCodesToNames);
  localVue.filter('timeConverterToStringifiedDate', filters.timeConverterToStringifiedDate);
  localVue.filter('slugify', filters.slugify);
  localVue.directive('b-tooltip', VBTooltip);
});

afterEach(() => {
  windowSpy.mockRestore();
});

config.mocks.$t = (key) => {
  const parts = key.split('.');
  const {length} = parts;
  let property = messages[defaultLocale];

  for (let i = 0; i < length; i += 1) {
    property = property[parts[i]];
  }

  return property;
};

config.mocks.$tc = (key) => {
  const parts = key.split('.');
  const {length} = parts;
  let property = messages[defaultLocale];

  for (let i = 0; i < length; i += 1) {
    property = property[parts[i]];
  }

  return property;
};

config.mocks.$te = (key) => {
  const parts = key.split('.');
  const {length} = parts;
  let property = messages[defaultLocale];

  for (let i = 0; i < length; i += 1) {
    property = property[parts[i]];
  }

  return property;
};

config.mocks.$segment = {
  track: () => null,
};

config.mocks.$i18n = {
  t: config.mocks.$t,
  tc: config.mocks.$tc,
};

config.mocks.fetch = {

};
export default {config};

export {cloneStore} from './store';

export {localVue, filters};
