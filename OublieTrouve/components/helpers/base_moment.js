import PromisedLocation from 'promised-location';

export default class BaseMoment {
  constructor(){
    // kick off api calls
    let date = new Date();

    this.title = date.toString().split(' ').slice(0, 5).join(', ');
    this.description = '';

    this.distance_from_home = _.random(2, 200);
    this.temp =  _.random(0, 100, true);
    this.humidity = _.random(0, 100, true);
    this.posted = date;
    this.id = 9999;
    this.complete = false;
  }

  populate() {
    return this._getLocation()
      .then((position) => {
        console.log('locator', position.coords);
        this.elevation = position.coords.altitude;
        return true;
      });
  }

  _getLocation() {
    let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    };
     
    let locator = new PromisedLocation(options);
    // locator
    //   .then(function (position) {
    //     console.log('locator', position.coords);
    //     this.elevation = position.coords.altitude;
    //   })
    //   .catch(function (err) {
    //     console.error('Position Error ', err.toString());
    //   });

    locator
      .catch(function (err) {
        console.error('Position Error ', err.toString());
      });

    return locator;
  }




}