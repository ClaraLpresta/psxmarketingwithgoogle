/**
 * @jest-environment jsdom
 */
import Vuex from 'vuex';

// Import this file first to init mock on window
import {shallowMount} from '@vue/test-utils';
import config, {cloneStore} from '@/../tests/init';

import Stepper from '@/components/commons/stepper.vue';
import {state} from '../../store/modules/product-feed/state';

describe('stepper.vue', () => {
  const productFeedSettingsRoute = {
    name: 'product-feed-settings',
  };
  const fooRoute = {
    name: 'foo',
  };

  const mockRouter = {
    push: jest.fn(),
  };

  const propsData = {
    activeStep: 3,
    steps: [
      {
        title: 'Shipping settings',
      },
      {
        title: 'Export rules',
      },
      {
        title: 'Attribute mapping',
      },
      {
        title: 'Summary',
      },
    ],
  };

  let mutations;
  let store;
  beforeEach(() => {
    mutations = {
      SET_ACTIVE_CONFIGURATION_STEP: jest.fn(),
    };
    store = cloneStore();
    store.modules.productFeed.mutations = {
      ...store.modules.productFeed.mutations,
      ...mutations,
    };
  });

  it('steps before activeStep are completed', () => {
    const wrapper = shallowMount(Stepper, {
      propsData,
      ...config,
      store: new Vuex.Store(store),
    });

    // Check if all steps before the active one have the class .complete
    expect(wrapper.findAll('.complete').length).toEqual(2);
  });

  it('steps before activeStep are <a>', () => {
    const wrapper = shallowMount(Stepper, {
      propsData,
      ...config,
      store: new Vuex.Store(store),
    });

    // Check if all steps before the active one are links
    expect(wrapper.findAll('a').length).toEqual(2);
  });

  it('steps active has a class .active', () => {
    const wrapper = shallowMount(Stepper, {
      propsData,
      ...config,
      store: new Vuex.Store(store),
    });

    // Check if the active step has the class .active
    expect(wrapper.findAll('li').at(2).classes()).toContain('active');
  });

  it('test mutation commited when we click on a previous step on product-feed-settings route', async () => {
    const wrapper = shallowMount(Stepper, {
      mocks: {
        $route: productFeedSettingsRoute,
        $router: mockRouter,
      },
      propsData,
      ...config,
      store: new Vuex.Store(store),
    });

    // Check if the mutation SET_ACTIVE_CONFIGURATION_STEP has been called
    await wrapper.findAll('a').at(0).trigger('click');
    expect(mutations.SET_ACTIVE_CONFIGURATION_STEP).toHaveBeenCalledWith(state, 1);
  });

  it('test event emited when we click on a previous step on any other page', async () => {
    const wrapper = shallowMount(Stepper, {
      mocks: {
        $route: fooRoute,
        $router: mockRouter,
      },
      propsData,
      ...config,
      store: new Vuex.Store(store),
    });

    // Check clicking on a previous step is emiting the event changeStep
    await wrapper.findAll('a').at(0).trigger('click');
    expect(wrapper.emitted('changeStep')).toBeTruthy();
  });
});
