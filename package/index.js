const CustomSet = require('./src/DataStructures/set');
const CustomMap = require('./src/internal-custom-functions/Array_Object/Instance_Methods/_map');
const CustomFilter = require('./src/internal-custom-functions/Array_Object/Instance_Methods/_filter');
const CustomReduce = require('./src/internal-custom-functions/Array_Object/Instance_Methods/_reduce');
const CustomCall = require('./src/internal-custom-functions/Array_Object/Static_Methods/_call');
const CustomApply = require('./src/internal-custom-functions/Array_Object/Static_Methods/_apply');

Array.prototype.$map = CustomMap.__map;
Array.prototype.$filter = CustomFilter.__filter;
Array.prototype.$reduce = CustomReduce.__reduce;

Function.prototype.$call = CustomCall.__call;
Function.prototype.$apply = CustomApply.__apply;

module.exports = {
  $set: CustomSet,
  set_internals: CustomSet.generateInternals,
  map_internals: CustomMap.map_internals,
  filter_internals : CustomFilter.filter_internals,
  reduce_internals : CustomReduce.reduce_internals,
  call_internals : CustomCall.call_internals,
  apply_internals : CustomApply.apply_internals
};


