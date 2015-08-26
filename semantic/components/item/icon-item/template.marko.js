function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      __tag = __helpers.t,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="item">');
    __tag(out,
      ______icon_ui_icon_renderer_js,
      data.icon);

    out.w('<div class="content"><a class="header">' +
      escapeXml(data.label) +
      '</a><div class="description">' +
      escapeXml(data.desc) +
      '</div></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);