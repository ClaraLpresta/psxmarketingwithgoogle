import TunnelProductFeed from '../src/views/tunnel-product-feed.vue';
import {productFeed, productFeedNoCarriers ,productFeedIsReadyForExport, productFeedSyncScheduleNow} from '../.storybook/mock/product-feed';
import {initialStateApp, appMultiCountries} from '../.storybook/mock/state-app';
import {rest} from 'msw';

export default {
  title: 'Product feed/Settings',
  component: TunnelProductFeed,
  parameters: {
    jest: [
      'tunnel-product-feed.spec.ts',
      'summary.spec.ts',
      'target-countries.spec.ts',
      'shipping-settings-provider.spec.ts',
      'shipping-settings.vue',
      'table-row-carrier.vue',
    ],
    msw: {
      handlers: [
        rest.get('/incremental-sync/status/', (req, res, ctx) => {
          return res(
            ctx.json({
              "syncSchedule": "At 01:00 AM, every day",
              "nextJobAt": "2021-12-16T01:00:00.000Z",
              "jobEndedAt": null,
              "lastUpdatedAt": null,
              "success": true
            }),
          );
        }),
        rest.get('/incremental-sync/settings/', (req, res, ctx) => {
          return res(
            ctx.status(404)
          );
        }),
        rest.get('/product-feeds/attributes', (req, res, ctx) => {
          return res(
            ctx.json({
              "gtin": [
                {
                  "type": "product",
                  "id": "upc"
                }
              ],
              "energyEfficiencyClass": [],
              "color": [],
              "minEnergyEfficiencyClass": [],
              "mpn": [
                {
                  "type": "product",
                  "id": "mpn"
                }
              ],
              "brand": [],
              "ageGroup": [],
              "gender": [],
              "description": [
                {
                  "id": "description",
                  "type": "product"
                }
              ],
              "size": [],
              "maxEnergyEfficiencyClass": []
            })
          );
        }),
        rest.post('/', (req, res, ctx) => {
          const payload = req.body.action;
          if (payload === 'getProductsReadyToSync') {
            return res(
              ctx.json({
                "total": "717"
              })
            );
          } else if (payload === 'getShopAttributes') {
            return res(
              ctx.json([])
            );
          }
        }),
      ],
    },
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {TunnelProductFeed},
  template: '<div><TunnelProductFeed v-bind="$props" /></div>',
  beforeMount: args.beforeMount,
});

export const TargetCountry:any = Template.bind({});
TargetCountry.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeed);
    this.$store.state.app = Object.assign({},initialStateApp);
    this.$store.state.productFeed.stepper = 1;
  },
};

export const ShippingSettings:any = Template.bind({});
ShippingSettings.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeed);
    this.$store.state.productFeed.stepper = 2;
  },
};


export const ShippingSettingsNoCarriers:any = Template.bind({});
ShippingSettingsNoCarriers.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeedNoCarriers);
    this.$store.state.productFeed.stepper = 2;
  },
};

export const AttributeMapping:any = Template.bind({});
AttributeMapping.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeed);
    this.$store.state.productFeed.stepper = 3;
  },
};

export const SyncSchedule:any = Template.bind({});
SyncSchedule.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeedSyncScheduleNow);
    this.$store.state.productFeed.stepper = 4;
  },
};

export const Summary:any = Template.bind({});
Summary.args = {
  beforeMount(this: any) {
    this.$store.state.productFeed = Object.assign({},productFeedIsReadyForExport);
    this.$store.state.productFeed.stepper = 5;
  },
};
