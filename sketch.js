postRequest('https://samples.openweathermap.org/data/2.5/forecast?q=Wien,AT&appid=b6907d289e10d714a6e88b30761fae22')
  .then(data => console.log(data)) // Result from the `response.json()` call
  .catch(error => console.error(error))

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response.json())
}



//var x = 0;
//
//var spaceData;
//
//function preload() {
//  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
//}
//
//
//
//function setup() {
//  createCanvas(200, 200);
//  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
//}
