export const googleAdsNotChosen = {
  status: null,
  accountChosen: null,
  shopInfos: {
    country: {
      // eslint-disable-next-line camelcase
      iso_code: null,
      name: null,
    },
    currency: 'DIR',
    timeZone: {
      text: null,
      offset: null,
    },
  },
  list: [
    {
      id: '415-056-4877',
      name: 'Lui Corpette',
      isAdmin: false,
      isTestAccount: true,
    },
    {
      id: '415-056-4874',
      name: 'Tata Corpette',
      isAdmin: false,
      isTestAccount: false,
    },
    {
      id: '415-056-4875',
      name: 'Tutu Corpette',
      isAdmin: true,
      isTestAccount: false,
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
  },
}
export const googleAdsAccountChosen = {
  ...googleAdsNotChosen,
  accountChosen:  {
    id: '415-056-4875',
    name: 'Tata Corpette',
    isAdmin: false,
    isTestAccount: false,
  },
}


export default googleAdsNotChosen;