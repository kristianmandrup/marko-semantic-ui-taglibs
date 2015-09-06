function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<dyn-tag' +
      attr("tag-name", data.tagName) +
      ' class="ui header">');

    tagBody(out, data.label || data.renderBody);

    out.w('</dyn-tag>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);