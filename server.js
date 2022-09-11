var getJSON = function(url, callback) {
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://api.themoviedb.org/3/trending/movie/day?api_key=7a38993b4df60f1442205e2906130f25',
function(err, data) {
  if (err !== null) {
    console.log('error')
  } else {
    console.log(data)
  }
});