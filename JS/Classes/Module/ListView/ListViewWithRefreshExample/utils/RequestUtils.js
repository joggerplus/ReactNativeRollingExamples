/*global fetch*/
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'))
    }, ms)
  })
}

const fetchWithTimeout = (timeout, ...args) => {
  return Promise.race([fetch(...args), delay(timeout)])
}

const RequestUtils = {
  getDateArray (i) { 
    return fetchWithTimeout(10000, 'https://api.github.com/search/users?sort=followers&page='+i+'&q=location:china+language:Objective-C').then(response => response.json())// 返回json对象
  },

}

module.exports = RequestUtils
