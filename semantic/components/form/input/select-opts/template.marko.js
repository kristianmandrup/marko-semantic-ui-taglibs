function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___select_opt_renderer_js = __renderer(require("../select-opt/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    forEach(data.list, function(item) {
      __tag(out,
        ___select_opt_renderer_js,
        item);
    });
  };
}
(module.exports = require("marko").c(__filename)).c(create);