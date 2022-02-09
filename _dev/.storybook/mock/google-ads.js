export const googleAdsNotChosen = {
  status: null,
  accountChosen: null,
  list: [
    {
      id: '415-056-4877',
      name: 'Lui Corpette',
      isAdmin: false,
      isTestAccount: true,
      isAccountCancelled: false,
      isAccountSuspended: false,
    },
    {
      id: '415-056-4874',
      name: 'Tata Corpette',
      isAdmin: false,
      isTestAccount: false,
      isAccountCancelled: false,
      isAccountSuspended: false,
    },
    {
      id: '415-056-4875',
      name: 'Tutu Corpette',
      isAdmin: true,
      isTestAccount: false,
      isAccountCancelled: false,
      isAccountSuspended: false,
    },
    {
      id: '999-056-4321',
      name: 'This is Fine Corpette 🔥',
      isAdmin: true,
      isTestAccount: false,
      isAccountCancelled: true,
      isAccountSuspended: false,
    },
  ],
};

export const googleAdsAccountChosenisTestAccount = {
  ...googleAdsNotChosen,
  accountChosen:  {
    id: '415-056-4875',
    name: 'Tata Corpette',
    isAdmin: false,
    isTestAccount: true,
    billingSettings: {
      isSet: false,
      link: 'string',
    },
    country: {
      // eslint-disable-next-line camelcase
      iso_code: '12',
      name: 'France'
    },
    currencyCode: 'EUR',
    timeZone:  'USA',
  },
}
export const googleAdsAccountChosen = {
  ...googleAdsNotChosen,
  accountChosen:  {
    id: '415-056-4875',
    name: 'Tata Corpette',
    isAdmin: false,
    isTestAccount: false,
    billingSettings: {
      isSet: false,
      link: 'string',
    },
    country: {
      // eslint-disable-next-line camelcase
      iso_code: '12',
      name: 'France'
    },
    currencyCode: 'EUR',
    timeZone:  'USA',
  },
}

export const adsAccountStatus = {
  customer: {
    id: '415-056-4875',
    name: 'Tata Corpette',
    descriptiveName: 'PrestaShop Marketing with Google TEST',
    isAdmin: true,
    isTestAccount: false,
    isAccountSuspended: false,
    isAccountCancelled: false,
  },
  billingSettings: {
    isSet: true,
  },
}

export default googleAdsNotChosen;
