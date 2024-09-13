const CustomSet = require('./src/DataStructures/set');
const CustomMap = require('./src/internal-custom-functions/_map');
const CustomFilter = require('./src/internal-custom-functions/_filter');
const CustomReduce = require('./src/internal-custom-functions/_reduce');

Array.prototype.$map = CustomMap.__map;
Array.prototype.$filter = CustomFilter.__filter;
Array.prototype.$reduce = CustomReduce.__reduce;

module.exports = {
  $set: CustomSet,
  set_internals: CustomSet.generateInternals,
  map_internals: CustomMap.map_internals,
  filter_internals : CustomFilter.filter_internals,
  reduce_internals : CustomReduce.reduce_internals,
};


