import { StatusFilterPipe } from "./status-filter.pipe";

fdescribe("StatusFilterPipe", () => {
  it("create an instance", () => {
    const pipe = new StatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
