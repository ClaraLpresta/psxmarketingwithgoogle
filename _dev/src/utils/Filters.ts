import Vue from 'vue';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
import utc from 'dayjs/plugin/utc';
import store from '@/store';
import countriesSelectionOptions from '../assets/json/countries.json';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/London');

Vue.filter(
  'timeConverterToDate', (timestamp : string) => {
    if (timestamp) {
      const a = new Date(timestamp);
      const year = a.getFullYear();
      const month = a.getMonth() + 1;
      const finalMonth = month < 10 ? `0${month}` : month;
      const day = a.getDate();
      const finalDay = day < 10 ? `0${day}` : day;
      const time = `${finalDay}/${finalMonth}/${year}`;
      return time;
    }
    return '-';
  });

Vue.filter(
  'timeConverterToHour', (timestamp : string) => {
    if (timestamp) {
      return new Date(timestamp).toLocaleTimeString(
        window.i18nSettings.languageLocale,
        {
          hour: '2-digit',
          minute: '2-digit',
        },
      );
    }
    return '-';
  });

Vue.filter(
  'changeCountriesCodesToNames', (countries : Array<string>) => countries.map((country) => {
    for (let i = 0; i < countriesSelectionOptions.length; i += 1) {
      if (country === countriesSelectionOptions[i].code) {
        return countriesSelectionOptions[i].country;
      }
    }
    return country;
  }));

Vue.filter(
  'formatPrice', (value: number, currencyCode) => {
    if (!currencyCode) {
      return '--';
    }
    return Intl.NumberFormat(window.i18nSettings.languageCode, {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  });

Vue.filter(
  'changeCountriesNamesToCodes', (countries : Array<string>) => countries.map((country) => {
    for (let i = 0; i < countriesSelectionOptions.length; i += 1) {
      if (country === countriesSelectionOptions[i].country) {
        return countriesSelectionOptions[i].code;
      }
    }
    return country;
  }));
