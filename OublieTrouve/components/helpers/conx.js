import _  from 'lodash';

let tests = {
  'Elevation': {
    'Sea Level': function(obj){
      return obj.elevation >= 0 && obj.elevation <= 100;
    },

    'Up a Hill': function(obj){
      return obj.elevation > 100 && obj.elevation <= 1000;
    },

    'Up a Mountain': function(obj){
      return obj.elevation > 1000 && obj.elevation <= 10000;
    },

    'In the Air': function(obj){
      return obj.elevation > 10000;
    },

    'Underground': function(obj){
      return obj.elevation < 0;
    }
  },

  'Temp': {
    'Brrr': function(obj){
      return obj.temp <= 30;
    },

    'Meh': function(obj){
      return obj.temp > 30 && obj.temp <= 50;
    }, 

    'Ooooh': function(obj){
      return obj.temp > 50 && obj.temp <= 70;
    },

    'SoCal': function(obj){
      return obj.temp > 70 && obj.temp <= 90;
    },

    'Ugh, No': function(obj){
      return obj.temp > 90;
    }
  },

  'Humidity': {
    'Desert': function(obj){
      return obj.humidity <= 30;
    },

    'Average': function(obj){
      return obj.humidity > 30 && obj.humidity <= 70;
    },

    'Swamp': function(obj){
      return obj.humidity > 70;
    },
  },

  'Distance From Home': {
    'Home': function(obj){
      return obj.distance_from_home > 0 && obj.distance_from_home <= 0.005;
    },

    'Neighborhood': function(obj){
      return obj.distance_from_home > 0.005 && obj.distance_from_home <= 0.01;
    },

    'Local': function(obj){
      return obj.distance_from_home > 0.01 && obj.distance_from_home <= 0.05;
    },

    'Kinda Far': function(obj){
      return obj.distance_from_home > 0.05 && obj.distance_from_home <= 0.1;
    },

    'Traveling': function(obj){
      return obj.distance_from_home > 0.1;
    }
  },

  'Weather': {
    'Rain': function(obj){
      let weather = _.isArray(obj.weather) ? obj.weather[0] : obj.weather;
      return weather.main === 'rain';
    },
    'Clouds': function(obj){
      let weather = _.isArray(obj.weather) ? obj.weather[0] : obj.weather;
      return weather.main === 'clouds';
    },
    'Clear': function(obj){
      let weather = _.isArray(obj.weather) ? obj.weather[0] : obj.weather;
      return weather.main === 'clear';
    }
  },

  'Time of Day': {
    'Early': function(obj) {
      var hours = obj.posted.getHours();
      return hours >= 4 && hours < 7;
    } ,
    'Morning': function(obj) {
      var hours = obj.posted.getHours();
      return hours >= 7 && hours < 11;
    } ,
    'Day': function(obj) {
      var hours = obj.posted.getHours();
      return hours >= 11 && hours < 16 ;
    } ,
    'Evening': function(obj) {
      var hours = obj.posted.getHours();
      return hours >= 16 && hours < 20;
    } ,
    'Night': function(obj) {
      var hours = obj.posted.getHours();
      return hours >= 20 && hours < 24 ;
    } ,
    'Overnight': function(obj) {
      var hours = obj.posted.getHours();
      return hours < 4 ;
    } ,
  }
};

let conxList = [
  // Elevation groups
  { 
    type: 'Elevation',
    modifier: 'Sea Level',
    members: [],
    imageTitle: 'sea-level.png',
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Hill',
    members: [],
    imageTitle: 'hill.png',
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Mountain',
    members: [],
    imageTitle: 'mountain.png',
  },
  { 
    type: 'Elevation',
    modifier: 'In the Air',
    members: [],
    imageTitle: 'air.png',
  },
  { 
    type: 'Elevation',
    modifier: 'Underground',
    members: [],
    imageTitle: 'underground.png',
  },

  // Temp groups
  {
    type: 'Temp',
    modifier: 'Brrr',
    members: [],
    imageTitle: 'brrr.png',
  },
  {
    type: 'Temp',
    modifier: 'Meh',
    members: [],
    imageTitle: 'meh.png',
  },
  {
    type: 'Temp',
    modifier: 'Ooooh',
    members: [],
    imageTitle: 'ooooh.png',
  },
  {
    type: 'Temp',
    modifier: 'SoCal',
    members: [],
    imageTitle: 'so-cal.png',
  },
  {
    type: 'Temp',
    modifier: 'Ugh, No',
    members: [],
    imageTitle: 'ugh-no.png',
  },
  // Humidity groups
  {
    type: 'Humidity',
    modifier: 'Desert',
    members: [],
    imageTitle: 'desert.png',
  },
  {
    type: 'Humidity',
    modifier: 'Average',
    members: [],
    imageTitle: 'average.png',
  },
  {
    type: 'Humidity',
    modifier: 'Swamp',
    members: [],
    imageTitle: 'swamp.png',
  },

  // Distance groups
  // These may be garbage categories and I should probably use a distance API instead of just
  // differences in degrees ... what with the rounch globe distorting thngs like a jerk
  {
    type: 'Distance From Home',
    modifier: 'Home',
    members: [],
    imageTitle: 'home.png',
  },
  {
    type: 'Distance From Home',
    modifier: 'Neighborhood',
    members: [],
    imageTitle: 'neighborhood.png',
  },
  {
    type: 'Distance From Home',
    modifier: 'Local',
    members: [],
    imageTitle: 'local.png',
  },
  {
    type: 'Distance From Home',
    modifier: 'Kinda Far',
    members: [],
    imageTitle: 'kinda-far.png',
  },
  {
    type: 'Distance From Home',
    modifier: 'Traveling',
    members: [],
    imageTitle: 'traveling.png',
  },

  // Weather groups
  {
    type: 'Weather',
    modifier: 'Rain',
    members: [],
    imageTitle: 'rain.png',
  },
  {
    type: 'Weather',
    modifier: 'Clouds',
    members: [],
    imageTitle: 'clouds.png',
  },
  {
    type: 'Weather',
    modifier: 'Clear',
    members: [],
    imageTitle: 'clear.png',
  },

  // Time of day groups
  {
    type: 'Time of Day',
    modifier: 'Early',
    members: [],
    imageTitle: 'early.png',
  },
  {
    type: 'Time of Day',
    modifier: 'Morning',
    members: [],
    imageTitle: 'morning.png',
  },
  {
    type: 'Time of Day',
    modifier: 'Day',
    members: [],
    imageTitle: 'day.png',
  },
  {
    type: 'Time of Day',
    modifier: 'Evening',
    members: [],
    imageTitle: 'evening.png',
  },
  {
    type: 'Time of Day',
    modifier: 'Night',
    members: [],
    imageTitle: 'night.png',
  },  {
    type: 'Time of Day',
    modifier: 'Overnight',
    members: [],
    imageTitle: 'overnight.png',
  },
];



export { tests , conxList };