import SimpleStore from 'react-native-simple-store';

let savedMoments = [
   {
      "home":{
         "longitude":"-73.92112375618241",
         "latitude":"40.70915962617131"
      },
      "title":"Tue, Nov, 01, 2016, 11:29:54",
      "description":"",
      "distance_from_home":0.004703280469722448,
      "posted":"2016-11-01T15:29:54.126Z",
      "id":25,
      "complete":true,
      "conx":[

      ],
      "elevation":19.07212257385254,
      "temp":53.84,
      "humidity":83,
      "weather":{
         "id":800,
         "main":"Clear",
         "description":"clear sky",
         "icon":"01d"
      }
   },
   {
      "home":{
         "longitude":"-73.92112375618241",
         "latitude":"40.70915962617131"
      },
      "title":"Thu, Oct, 27, 2016, 11:35:19",
      "description":"",
      "distance_from_home":0.004603061390802711,
      "posted":"2016-10-27T15:35:19.252Z",
      "id":24,
      "complete":true,
      "conx":[

      ],
      "elevation":17.527557373046875,
      "temp":45.7,
      "humidity":100,
      "weather":{
         "id":500,
         "main":"Rain",
         "description":"light rain",
         "icon":"10d"
      }
   },
   {
      "home":{
         "longitude":"-73.92112375618241",
         "latitude":"40.70915962617131"
      },
      "title":"Wed, Oct, 26, 2016, 20:53:59",
      "description":"",
      "distance_from_home":0.06628570845962861,
      "posted":"2016-10-27T00:53:59.106Z",
      "id":23,
      "complete":true,
      "conx":[

      ],
      "elevation":34.69340515136719,
      "temp":41.91,
      "humidity":100,
      "weather":{
         "id":801,
         "main":"Clouds",
         "description":"few clouds",
         "icon":"02n"
      }
   },
   {
      "home":{
         "longitude":"-73.92112375618241",
         "latitude":"40.70915962617131"
      },
      "title":"Fri, Oct, 21, 2016, 15:19:03",
      "description":"",
      "distance_from_home":0.004709061950489351,
      "posted":"2016-10-21T19:19:03.590Z",
      "id":22,
      "complete":true,
      "conx":[

      ],
      "elevation":17.944427490234375,
      "temp":68.61,
      "humidity":96,
      "weather":{
         "id":500,
         "main":"Rain",
         "description":"light rain",
         "icon":"10d"
      }
   }
]; 

let ts = function({key, dataBlob}) {

  // Block used to reset date in development; saves current data before deleting
  // if (key === 'all_conx' || key === 'comp_conx') {
  //   SimpleStore.get(key)
  //     .then((data) => {
  //       savedMoments = data;
  //     })
  //     .then(SimpleStore.delete(key))
  // }
  
  SimpleStore.get(key)
    .then((data) => {
      if (!data){
        console.log('Reloaded ' + key + ' data');
        SimpleStore.save(key, dataBlob)
          .then(() => SimpleStore.get(key))
          .then(data => {
            // console.log(data);
          })
          .catch(error => {
            console.error(error.message);
          });
      } else {
        console.log(key + ' data was already loaded.');
        // console.log(data);
      }
    })
    .catch(error => {
      console.error(error.message);
    }); 
}

export {ts, savedMoments};