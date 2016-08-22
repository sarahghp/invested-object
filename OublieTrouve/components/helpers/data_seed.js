import _ from 'lodash';
import source from './source_text';
import LibroIpsum from 'libroipsum';

let titles = ['Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.',];
let conxList = [
  {
    type: 'Elevation',
    modifier: 'sea level',
    members: [],
  },
  {
    type: 'Elevation',
    modifier: 'up a hill',
    members: [],
  },
  {
    type: 'Elevation',
    modifier: 'up a mountain',
    members: [],
  },
  {
    type: 'Elevation',
    modifier: 'in the air',
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
  let momentsArr = _.map(titles, function(title){
    let obj = {};
    obj.title = title;
    obj.description =  new LibroIpsum(source).generate(120);
    obj.elevation = _.random(0, 20000);
    obj.location = undefined;
    obj.distance_from_home = _.random(2, 200);
    obj.temp = _.random(0, 100, true);
    obj.humidity = _.random(0, 100, true);
    obj.posted = _.random(0, Date.now());
    return obj;
  });

  return momentsArr;
})();

let conx = (function(cx){
   _.each(seed, function(s){

    switch(true) {
      case (s.elevation <= 100):
        cx[0].members.push(s);
        break;
      case (s.elevation > 100 && s.elevation <= 1000):
        cx[1].members.push(s);
        break;
      case (s.elevation > 1000 && s.elevation <= 10000):
        cx[2].members.push(s);
        break;
      case (s.elevation > 10000):
        cx[3].members.push(s);
        break;
      default:
        console.log('Nonmatching item: ', s);
    }

  });

  return cx;

})(conxList);

export { seed, conx };