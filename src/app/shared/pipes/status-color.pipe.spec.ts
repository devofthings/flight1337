import { StatusColorPipe } from "./status-color.pipe";

fdescribe("StatusColorPipe", () => {
  it("create an instance", () => {
    const pipe = new StatusColorPipe();
    expect(pipe).toBeTruthy();
  });
});
