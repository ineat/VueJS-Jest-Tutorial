import { shallowMount } from "@vue/test-utils";
import EmptyCard from "@/hero-team-selector/components/EmptyCard.vue";

describe("EmptyCard.vue", () => {
  it("render default card with image", () => {
    const wrapper = shallowMount(EmptyCard, {});
    expect(wrapper.find("img").exists()).toBe(true);
  });
});
