var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.ui = input.ui || '';
  if (!input.sidebar)
    input.ui += ' ui'
  console.log('sub-menu', input);
  template.render(input, out);
};
