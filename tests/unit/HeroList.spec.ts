import { shallowMount } from "@vue/test-utils";
import HeroList from "@/hero-team-selector/components/HeroList.vue";

describe("HeroList.vue", () => {
  const propsData = {
    list: [
      {
        id: 1,
        name: "Deadpool",
        real_name: "Wade Wilson",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg",
        description: "Sample Description"
      },
      {
        id: 2,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description: "Sample description."
      },
    ],
    title: "Heroes"
  };
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(HeroList, {
      propsData
    });
  });

  it("render HeroList", () => {
    expect(wrapper.find("h2").text()).toEqual("Heroes");
    expect(wrapper.findAll(".heroListItem").length).toEqual(2);
  });
});
