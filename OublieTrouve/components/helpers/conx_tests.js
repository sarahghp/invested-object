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
      return obj.distance_from_home <= 0.005;
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
      return obj.weather[0].main === 'rain';
    },
    'Clouds': function(obj){
      return obj.weather[0].main === 'clouds';
    },
    'Clear': function(obj){
      return obj.weather[0].main === 'clear';
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
}



export default tests;