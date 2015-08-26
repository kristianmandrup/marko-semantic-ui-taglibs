function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ______item_icon_item_renderer_js = __renderer(require("../../item/icon-item/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' list">');

    forEach(data.list, function(item) {
      __tag(out,
        ______item_icon_item_renderer_js,
        {
          "ui": item.ui,
          "icon": item.icon,
          "label": item.label,
          "desc": item.desc
        });
    });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);