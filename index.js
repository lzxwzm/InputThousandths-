// 金额添加千分位
export function comdify (n) {
  n = n.toString().replace(/[^0-9.]/g, '')
  if (!n) return n
  let o = n.toString().split('.')
  let k = ''
  let p = ''
  if (o.length > 2) {
    k = o[0] + '.' + o[1]
  } else {
    if (o[1]) {
      p = o[1].slice(0, 2)
      k = o[0] + '.' + p
    } else {
      k = n
    }
  }
  let str = k.toString().split('.')
  let re = /\d{1,3}(?=(\d{3})+$)/g
  let n1 = str[0].replace(re, '$&,')
  if (str[1]) {
    return (n1 + '.' + str[1])
  } else {
    return k.replace(re, '$&,')
  }
}

// 去除千分位中的',
export function delcommafy (num) {
  if (!num) return num
  num = num.toString()
  num = num.replace(/,/gi, '')
  return num
}

// 获取输入框的值
export function getInputValue (val) {
  let n = Number(val) < 0 ? '-' : ''
  if (Number(val) === 0) {
    return val
  }
  let inputVal = val || ''
  return n + comdify(delcommafy(inputVal))
}
