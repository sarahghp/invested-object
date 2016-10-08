import _                    from 'lodash';
import source               from './source_text';
import LibroIpsum           from 'libroipsum';
import tests                from './conx_tests';

let titles = ['Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.',];

// TODO: Add time of day conx, complex conx?

let conxList = [
  // Elevation groups
  { 
    type: 'Elevation',
    modifier: 'Sea Level',
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Hill',
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'Up a Mountain',
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'In the Air',
    members: [],
  },
  { 
    type: 'Elevation',
    modifier: 'Underground',
    members: [],
  },

  // Temp groups
  {
    type: 'Temp',
    modifier: 'Brrr',
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Meh',
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Ooooh',
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'SoCal',
    members: [],
  },
  {
    type: 'Temp',
    modifier: 'Ugh, No',
    members: [],
  },
  // Humidity groups
  {
    type: 'Humidity',
    modifier: 'Desert',
    members: [],
  },
  {
    type: 'Humidity',
    modifier: 'Average',
    members: [],
  },
  {
    type: 'Humidity',
    modifier: 'Swamp',
    members: [],
  },

  // Distance groups
  // These may be garbage categories and I should probably use a distance API instead of just
  // differences in degrees ... what with the rounch globe distorting thngs like a jerk
  {
    type: 'Distance From Home',
    modifier: 'Home',
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Neighborhood',
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Local',
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Kinda Far',
    members: [],
  },
  {
    type: 'Distance From Home',
    modifier: 'Traveling',
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

function populateMembers(moment, cxList, testList){

   _.each(cxList, function(category){

    // Have to do it this way becasue JSON won't let us save functions
    let test = testList[category.type][category.modifier];

    if (test(moment)){
      category.members.unshift(moment);
    }

  });
}

let conx = (function(cx, moments, tests){

  _.each(moments, (moment) => {
    populateMembers(moment, cx, tests);
  });

  return cx;

})(conxList, seed, tests);

export { seed, conx };