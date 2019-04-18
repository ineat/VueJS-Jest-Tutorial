import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeroListItem from "@/hero-team-selector/components/HeroListItem.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("HeroListItem", () => {
  const propsData = {
    item: {
      id: 1,
      name: "Deadpool",
      real_name: "Wade Wilson",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg",
      description: "Sample Description"
    },
    title: "Heroes"
  };
  let wrapper: any;
  let store: any;
  let actions: any;

  beforeEach(() => {
    actions = {
      removeMember: jest.fn(),
      addMember: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
    wrapper = shallowMount(HeroListItem, {
      propsData,
      store,
      localVue
    });
  });

  it("render HeroListItem", () => {
    expect(wrapper.vm.title).toEqual("Heroes");
    expect(wrapper.find(".name").text()).toEqual("Deadpool");
  });

  it("Dispatch addMember event when click on Select Member Button", () => {
    wrapper.find("button").trigger("click");
    expect(actions.addMember).toHaveBeenCalled();
  });
});
