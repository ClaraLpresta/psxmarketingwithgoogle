/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
export interface State {
  isCountryMemberOfEuropeanUnion: boolean;
  psxMktgWithGoogleApiUrl: string;
  psxMktgWithGoogleAdminUrl: string;
  psxMktgWithGoogleAdminAjaxUrl: string;
  psxMktgWithGoogleShopUrl: string;
  psxMktgWithGoogleShopCurrency: ShopCurrency;
  psxMtgWithGoogleDefaultShopCountry: string | null;
  psxMktgWithGoogleDocumentAndFaq: HelpInformations;
  psVersion: string;
  psxMktgWithGoogleModuleVersion: string;
  shopIsOnMaintenanceMode: boolean;
  psxMktgWithGoogleMaintenanceSettingsUrl: string;
  psxMktgWithGoogleCarriersUrl: string;
  psxMktgWithGoogleAttributesUrl: string;
  psxMktgWithGoogleProductDetailUrl: string;
  psxMktgWithGoogleStoreSettingsUrl: string;
  psxMktgWithGoogleOnProductionEnvironment: boolean;
  debugData: DebugData;
  adBlockerExists: boolean;
  eventbusVersion: string;
}

export interface ShopCurrency {
  isoCode: string;
}

export interface HelpInformations {
  faq: object;
  doc: string;
  contactUs: string;
}

export interface DebugData {
  urlEventBusHealthCheck?: string;
  urlAccountsHealthCheck?: string;
  typesOfSync: string[];
}

export const state: State = {
  psxMktgWithGoogleApiUrl: '',
  psxMktgWithGoogleAdminUrl: '',
  psxMktgWithGoogleAdminAjaxUrl: '',
  psxMktgWithGoogleShopUrl: '',
  isCountryMemberOfEuropeanUnion: false,
  psxMtgWithGoogleDefaultShopCountry: null,
  psxMktgWithGoogleShopCurrency: {
    isoCode: '',
  },
  psxMktgWithGoogleDocumentAndFaq: {
    faq: {},
    doc: '',
    contactUs: '',
  },
  psxMktgWithGoogleModuleVersion: '',
  psVersion: '',
  psxMktgWithGoogleMaintenanceSettingsUrl: '',
  shopIsOnMaintenanceMode: document.getElementById('maintenance-mode') !== null,
  psxMktgWithGoogleCarriersUrl: '',
  psxMktgWithGoogleAttributesUrl: '',
  psxMktgWithGoogleProductDetailUrl: '',
  psxMktgWithGoogleStoreSettingsUrl: '',
  psxMktgWithGoogleOnProductionEnvironment: false,
  debugData: {
    typesOfSync: [],
  },
  adBlockerExists: false,
  eventbusVersion: '1.5.0',
};
