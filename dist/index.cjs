var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  test: () => test
});
function test() {
  return 1 + 1;
}
__name(test, "test");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  test
});
