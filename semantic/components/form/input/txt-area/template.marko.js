function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      attr = __helpers.a;

  return function render(data, out) {
    var __strip0 = !(!data.fieldWrap);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.field) +
        ' field">');
    }

    if (data.label) {
      out.w('<label>' +
        escapeXml(data.label) +
        '</label>');
    }

    out.w('<textarea' +
      attr("name", data.name) +
      attr("placeholder", data.placeholder) +
      attr("rows", data.rows) +
      attr("class", data.ui) +
      '>' +
      escapeXml(data.value) +
      '</textarea>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);