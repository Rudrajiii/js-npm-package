const CustomSet = require('./src/DataStructures/set');
const CustomMap = require('./src/internal-custom-functions/_map');
const CustomFilter = require('./src/internal-custom-functions/_filter');

Array.prototype.$map = CustomMap.__map;
Array.prototype.$filter = CustomFilter.__filter;

module.exports = {
  $set: CustomSet,
  set_internals: CustomSet.generateInternals,
  map_internals: CustomMap.map_internals,
  filter_internals : CustomFilter.filter_internals
};


