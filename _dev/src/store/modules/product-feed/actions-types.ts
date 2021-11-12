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

enum ActionsTypes {
  /** PRODUCT FEED SETTINGS CARD */
  GET_PRODUCT_FEED_SYNC_STATUS = 'GET_PRODUCT_FEED_SYNC_STATUS',
  GET_PRODUCT_FEED_SETTINGS = 'GET_PRODUCT_FEED_SETTINGS',
  SEND_PRODUCT_FEED_SETTINGS = 'SEND_PRODUCT_FEED_SETTINGS',
  GET_SHOP_SHIPPING_SETTINGS = 'GET_SHOP_SHIPPING_SETTINGS',
  GET_SAVED_ADDITIONAL_SHIPPING_SETTINGS = 'GET_SAVED_ADDITIONAL_SHIPPING_SETTINGS',
  DUPLICATE_DELIVERY_DETAILS = 'DUPLICATE_DELIVERY_DETAILS',
  GET_PRODUCT_FEED_SYNC_SUMMARY = 'GET_PRODUCT_FEED_SYNC_SUMMARY',
  GET_TOTAL_PRODUCTS = 'GET_TOTAL_PRODUCTS',
  REQUEST_REPORTING_PRODUCTS_STATUSES = 'REQUEST_REPORTING_PRODUCTS_STATUSES',
  REQUEST_SYNCHRONISATION = 'REQUEST_SYNCHRONISATION',
  REQUEST_FULL_SYNCHRONISATION = 'REQUEST_FULL_SYNCHRONISATION',
  REQUEST_GOOGLE_SYNCHRONISATION = 'REQUEST_GOOGLE_SYNCHRONISATION',
  REQUEST_SHOP_TO_GET_ATTRIBUTE = 'REQUEST_SHOP_TO_GET_ATTRIBUTE',
}

export {ActionsTypes as default};
