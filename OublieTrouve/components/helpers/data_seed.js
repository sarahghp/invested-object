import _ from 'lodash';
import source from './source_text';
import LibroIpsum from 'libroipsum';

let titles = ['Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.',];
// let conxList = [
//   {
//     type: 'Elevation',
//     modifier: 'Sea Level',
//     members: [],
//   },
//   {
//     type: 'Elevation',
//     modifier: 'Up a Hill',
//     members: [],
//   },
//   {
//     type: 'Elevation',
//     modifier: 'Up a Mountain',
//     members: [],
//   },
//   {
//     type: 'Elevation',
//     modifier: 'In the Air',
//     members: [],
//   },
// ];

// Add more weathery ones as well using open weather codes, plus compound temp & humidity
// Remember these don't have to be exhaustive
let conxList = [
  // Elevation groups
  { 
    type: 'Elevation',
    modifier: 'Sea Level',
    test: function(obj){
      return obj.elevation <= 100;
    },
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Hill',
    test: function(obj){
      return obj.elevation > 100 && obj.elevation <= 1000;
    },
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Mountain',
    test: function(obj){
      return obj.elevation > 1000 && obj.elevation <= 10000;
    },
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'In the Air',
    test: function(obj){
      return obj.elevation > 10000;
    },
    members: [],
  },

  // Temp groups
  {
    type: 'Temp',
    modifier: 'Brrr',
    test: function(obj){
      return obj.temp <= 30;
    },
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Meh',
    test: function(obj){
      return obj.temp > 30 && obj.temp <= 50;
    },
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Ooooh',
    test: function(obj){
      return obj.temp > 50 && obj.temp <= 70;
    },
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'SoCal',
    test: function(obj){
      return obj.temp > 70 && obj.temp <= 90;
    },
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Ugh, No',
    test: function(obj){
      return obj.temp > 90;
    },
    members: [],
  },
  // Humidity groups
  {
    type: 'Humidity',
    modifier: 'Desert',
    test: function(obj){
      return obj.humidity <= 30;
    },
    members: [],
  },
  {
    type: 'Humidity',
    modifier: 'Average',
    test: function(obj){
      return obj.humidity > 30 && obj.humidity <= 70;
    },
    members: [],
  },
  {
    type: 'Humidity',
    modifier: 'Swamp',
    test: function(obj){
      return obj.humidity > 70;
    },
    members: [],
  },

  // Distance groups
  // These may be garbage categories and I should probably use a distance API instead of just
  // differences in degrees ... what with the rounch globe distorting thngs like a jerk
  {
    type: 'Distance From Home',
    modifier: 'Home',
    test: function(obj){
      return obj.distance_from_home <= 0.005;
    },
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Neighborhood',
    test: function(obj){
      return obj.distance_from_home > 0.005 && obj.distance_from_home <= 0.01;
    },
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Local',
    test: function(obj){
      return obj.distance_from_home > 0.01 && obj.distance_from_home <= 0.05;
    },
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Kinda Far',
    test: function(obj){
      return obj.distance_from_home > 0.05 && obj.distance_from_home <= 0.1;
    },
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Traveling',
    test: function(obj){
      return obj.distance_from_home > 0.1;
    },
    members: [],
  },
];

function moreTitles() {

  _.times(100, function(){

    let date = new Date(_.random(0, Date.now())),
        cleaned = date.toString().split(' ').slice(0, 5).join(', ');

    titles.push(cleaned);
  });

}

let seed = (function(){
  moreTitles();
  let momentsArr = _.map(titles, function(title, idx){
    let obj = {};
    obj.title = title;
    obj.description =  new LibroIpsum(source).generate(120);
    obj.elevation = _.random(1, 10) > 8 ? _.random(0, 1500) : _.random(0, 20000);
    obj.distance_from_home = _.random(.003, 1);
    obj.temp = _.random(0, 100, true);
    obj.humidity = _.random(0, 100, true);
    obj.posted = _.random(0, Date.now());
    obj.id = idx;
    return obj;
  });

  return momentsArr;
})();

function populateMembers(moment, cxList){
   
   _.each(cxList, function(category){

    if (category.test(moment)){
      category.members.push(moment);
    }

  });
}

let conx = (function(cx, moments){

  _.each(moments, (moment) => {
    populateMembers(moment, cx);
  });

  return cx;

})(conxList, seed);

export { seed, conx };