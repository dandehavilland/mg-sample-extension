(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['d3', 'jquery', 'MG'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('d3'), require('jquery'), require('MG'));
  } else {
    root.Mg_sample_extension = factory(root.d3, root.jQuery, root.MG);
  }
}(this, function(d3, $, MG) {
/**
  Sample chart extension.

  ... not really a chart. This just adds a title to the document
*/
function sampleChart(args) {
  this.init = function(args) {
    this.args = args;
    MG.chart_title(args);
  };

  this.init(args);
}

var defaults = {
  title: 'This is a sample chart',
  top: 40,                      // the size of the top margin
  bottom: 30,                   // the size of the bottom margin
  right: 10,                    // size of the right margin
  left: 10,                     // size of the left margin
  buffer: 8,                    // the buffer between the actual chart area and the margins
  legend_target: '',
  width: 350,
  height: 220,
  scalefns: {},
  scales: {},
  show_missing_background: true,
  interpolate: 'cardinal'
};

MG.register('sample-chart', sampleChart, defaults);

return ;
}));
