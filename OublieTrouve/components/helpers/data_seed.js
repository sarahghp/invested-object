import _                    from 'lodash';
import source               from './source_text';
import LibroIpsum           from 'libroipsum';
import { tests, conxList }  from './conx';
import seed                 from './seed_moments';
import {_populateMembers,
        _complexConx  }      from './data_actions';

// These functions generate mostly-nonsense seeds and have been retired in favor of 
// more sensical seeds. Saved in case we need to return to generating more.

// let titles = ['Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.',];

// function moreTitles() {
//   _.times(100, function(){
//     let date = new Date(_.random(0, Date.now())),
//         cleaned = date.toString().split(' ').slice(0, 5).join(', ');
//     titles.push(cleaned);
//   });
// }

// let seed = (function(){
//   moreTitles();
//   let momentsArr = _.map(titles, function(title, idx){
//     let obj = {};
//     obj.title = title;
//     obj.description =  new LibroIpsum(source).generate(120);
//     obj.elevation = _.random(1, 10) > 8 ? _.random(0, 1500) : _.random(0, 20000);
//     obj.distance_from_home = _.random(.003, 1);
//     obj.temp = _.random(0, 100, true);
//     obj.humidity = _.random(0, 100, true);
//     obj.posted = _.random(0, Date.now());
//     obj.id = idx;
//     return obj;
//   });

//   return momentsArr;
// })();

let conx = (function(cx, moments, tests){

  _.each(moments, (moment) => {
    _populateMembers(moment, cx, tests, true);
  });

  return cx;

})(conxList, seed, tests);

let compConx = _complexConx(conxList);

console.log('compConx', compConx);

export { seed, conx, compConx };