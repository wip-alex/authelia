import { DomainExtractor } from "../../src/lib/utils/DomainExtractor";
import Assert = require("assert");

describe("test DomainExtractor", function () {
  describe("test fromUrl", function () {
    it("should return domain from https url", function () {
      const domain = DomainExtractor.fromUrl("https://www.example.com/test/abc");
      Assert.equal(domain, "www.example.com");
    });

    it("should return domain from http url", function () {
      const domain = DomainExtractor.fromUrl("http://www.example.com/test/abc");
      Assert.equal(domain, "www.example.com");
    });

    it("should return domain when url contains port", function () {
      const domain = DomainExtractor.fromUrl("https://www.example.com:8080/test/abc");
      Assert.equal(domain, "www.example.com");
    });
  });

  describe("test fromHostHeader", function () {
    it("should return domain when default port is used", function () {
      const domain = DomainExtractor.fromHostHeader("www.example.com");
      Assert.equal(domain, "www.example.com");
    });

    it("should return domain when non default port is used", function () {
      const domain = DomainExtractor.fromHostHeader("www.example.com:8080");
      Assert.equal(domain, "www.example.com");
    });
  });
});