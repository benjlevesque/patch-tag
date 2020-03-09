import { getNewValue } from "../src/lib";

describe("getNewValue", () => {
  it("should support format tag", () => {
    expect(getNewValue("abcd123", "abcd345")).toBe("abcd345");
  });

  it("should support format image:tag", () => {
    expect(getNewValue("my-docker-image:abcd123", "abcd345")).toBe(
      "my-docker-image:abcd345"
    );
  });

  it("should support format registry/image:tag", () => {
    expect(getNewValue("my-registry/my-docker-image:abcd123", "abcd345")).toBe(
      "my-registry/my-docker-image:abcd345"
    );
  });

  it("should handle line breaks", () => {
    expect(getNewValue("abcd\n", "abcd345")).toBe("abcd345");
  });
});
