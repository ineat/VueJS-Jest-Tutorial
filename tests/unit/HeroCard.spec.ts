import { shallowMount, createLocalVue } from "@vue/test-utils";
import HeroCard from "@/hero-team-selector/components/HeroCard.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("HeroCard.vue", () => {
  const propsData = {
    member: {
      id: 2,
      name: "Hulk",
      real_name: "Robert Bruce Banner",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
      description: "Sample description."
    },
    teamType: "Team of heroes"
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
    wrapper = shallowMount(HeroCard, {
      propsData,
      store,
      localVue
    });
  });

  it("render HeroCard", () => {
    expect(wrapper.find(".member-name").text()).toEqual("Hulk");
    expect(wrapper.find("img").attributes("src")).toEqual(
      "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
    );
    expect(wrapper.find("img").attributes("alt")).toEqual("Hulk");
  });

  it("could dispatch removeMember event on click to remove button", () => {
    wrapper.find(".remove-btn").trigger("click");
    expect(actions.removeMember).toHaveBeenCalled();
  });
});
