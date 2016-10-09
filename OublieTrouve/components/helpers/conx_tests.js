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
  }
}


export default tests;