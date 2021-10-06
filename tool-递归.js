
/**
 * 根据id找无限嵌套层级的对象
 * @param {Arrary} Arr  [{value: 1, children: [{value:2}, {value: 3}]}, {value: 4}, {value: 5}, {value: 6, children: [{value:7, children: [{value: 8}]}]}] 
 * @param {String} ID   '3'
 * @returns 
 */
export function findId(Arr, ID) {
    var _result = null;
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i].value == ID) return Arr[i];
      if (Arr[i].children) _result = findId(Arr[i].children, ID)
      if (_result != null) return _result;
    }
    return _result
  }