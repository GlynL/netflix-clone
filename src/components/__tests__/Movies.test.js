import React from "react";
import { mount } from "enzyme";
import Movies from "../Movies";

// https://medium.com/@wvm/asynchronous-api-testing-in-react-cf3b180bc3d
// testing hooks hard!!

it("fetches api data on mount", async () => {
  expect.assertions(2);
  const movies = ["movie 1", "movie 2"];
  window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () =>
      new Promise((resolve, reject) => {
        resolve({
          results: movies
        });
      })
  }));

  const wrapper = mount(<Movies />);
  const instance = await wrapper.instance();
  expect(wrapper.find("h2").length).toBe(1);
  console.log(instance);
  expect(instance.find("MoviesList").prop("movies")).toBe(movies);
  // console.log(wrapper.contains("MoviesList"));
  // expect(wrapper.contains("<h2>Trending Now</h2>").toBe(true));
});
