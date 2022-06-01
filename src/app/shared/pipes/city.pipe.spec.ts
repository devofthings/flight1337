import { CityPipe } from "./city.pipe";

fdescribe("CityPipe", () => {
  it("create an instance", () => {
    const pipe = new CityPipe();
    expect(pipe).toBeTruthy();
  });
});
