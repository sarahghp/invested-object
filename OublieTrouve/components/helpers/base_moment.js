export default class BaseMoment {
  constructor(){
    // kick off api calls
    let date = new Date();

    this.title = date.toString().split(' ').slice(0, 5).join(', ');
    this.description = '';
    this.elevation = 5555;
    this.distance_from_home = _.random(2, 200);
    this.temp =  _.random(0, 100, true);
    this.humidity = _.random(0, 100, true);
    this.posted = date;
    this.id = 9999;
  }
}