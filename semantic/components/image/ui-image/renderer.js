var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.src = input.src || input.image || input.avatar;
  template.render(input, out);
};
