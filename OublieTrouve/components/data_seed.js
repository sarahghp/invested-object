import _ from 'lodash';

let titles = ['Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.'];
let lipsum = "Lorem ipsum dolor sit amet, nostro tritani in ius, at mundi vivendo sed, nec illum discere constituto at. Ferri probatus forensibus sed te, purto animal no qui. Nam ex nibh inani mollis, sed magna semper tibique ei, in pro alia errem dicant. Dicta tacimates ea his, in feugait mnesarchum quo. Ad nobis persecuti definitiones sea, eu quis alia agam usu, at per cibo eleifend sadipscing. Alienum corpora cu eam, ea etiam minim vel, stet ignota abhorreant et ius. Pri velit urbanitas ut."


function seed(){
  let momentsArr = _.map(titles, function(title){
    let obj = {};
    obj.title = title;
    obj.description = lipsum;
    obj.elevation = _.random(0, 20000);
    obj.location = undefined;
    obj.distance_from_home = _.random(2, 200);
    obj.temp = _.random(0, 100, true);
    obj.humidity = _.random(0, 100, true);
    obj.posted = _.random(0, Date.now());
    return obj;
  });

  return momentsArr;
} 

export default seed();