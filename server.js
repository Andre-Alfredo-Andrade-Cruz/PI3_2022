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
    var fs = require(`fs`);
    const d = new Date();
    var aux = "./DataBank/Lista_" + d.getDate() + "_" + (d.getMonth()+1) + "_" + d.getFullYear() + "_" + d.getHours() + "-" + d.getMinutes() + ".txt";
    fs.writeFile(aux,"",function(err) {
      if (err) {
          console.log(err);
      }
    });
    for(var t=0; t < 20;t++){     
      var jsonData = JSON.stringify(data.results[t] /*+ ";" + data.results[t].original_title + ";" + data.results[t].genre_ids + ";" + data.results[t].popularity + ";" + data.results[t].release_date + ";" + data.results[t].vote_average + ";" + data.results[t].vote_count*/) + "\n";
      var auxjson = jsonData.replace(/"/g,"");
      fs.appendFile(aux, auxjson, function(err) {
        if (err) {
            console.log(err);
        }
      });
    }
  }
});