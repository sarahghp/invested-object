import _                    from 'lodash';

let moments = [

  {
    date_time: new Date(2016, 8, 14, 13),
    location: {
      longitude: '-74.0114537',
      latitude: '40.6715006',
    },
    title: 'Old In the 80s',
    description: `Duvet with flowers, 70s botanical style
      Reminds me of blankets that were old when we were kids, especially Heather’s house and her old sagging bed`,
    elevation: 0.4,
    temp: 88,
    humidity: 39,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear'
              }],
  },
  {
    date_time: new Date(2016, 8, 12, 19),
    location: {
      longitude: '-73.9383396',
      latitude: '40.7511339',
    },
    description: `Empty and vaguely industrial like Williamsburg used to be. I think BBQs at Mike Legrand’s and the first Bike Kill out by the river. We had to sneak through the fence but there are condos there now.`,
    elevation: 9.77,
    temp: 69,
    humidity: 61,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2014, 6, 29, 12),
    location: {
      longitude: '-73.997351',
      latitude: '40.692322',
    },
    title: 'Disruption Proust',
    description: `Reading passages in Swann’s Way where the narrator talks about reading books as a child and the sensation of being swept away on a long summer afternoon. Very soothing on an afternoon where we don’t really live anywhere and I am convinced I am a failure.`,
    elevation: 12.7,
    temp: 72.9,
    humidity: 46,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 6, 15, 16),
    location: {
      longitude: '-122.5012922',
      latitude: '40.692322',
    },
    description: `Little wood houses near the beach with buoys and stucco and weathered wood. Going to the beach at Huntington.`,
    elevation: 27,
    temp: 73,
    humidity: 44,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2015, 11, 27, 11),
    location: {
      longitude: '-117.9225193',
      latitude: '33.738048',
    },
    description: `Ugly low building fronts remind me of preschool ramps and allium out front.`,
    elevation: 19,
    temp: 59,
    humidity: 14,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 9, 10, 16),
    location: {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    },
    description: `First crisp fall day. Pavement comes on. My first autumn in Providence. Leaves were yellow!`,
    elevation: 8.7,
    temp: 62,
    humidity: 32,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 5, 16, 14),
    location: {
      longitude: '-122.484992',
      latitude: '37.747726',
    },
    description: `Can see the Farallones. I think of Catalina, perfect days. Wet sand and yearning. Proust on Balbec.`,
    elevation: 114.7,
    temp: 64,
    humidity: 54,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 7, 14, 8),
    location: {
      longitude: '-122.484992',
      latitude: '37.747726',
    },
    description: `Foggy mornings. Trying to get lost on the school field at Eader. My eternal sorrow that it was never foggy enough to actually be lost.`,
    elevation: 114.7,
    temp: 57.9,
    humidity: 84,
    weather: [{id: 741,
              main: 'fog',
              description: 'fog',
              }],
  },
  {
    date_time: new Date(2016, 2, 30, 12),
    location: {
      longitude: '-73.9273727',
      latitude: '40.6974577',
    },
    title: 'No. 1',
    description: `Wilson Ave graveyard. I would like to be buried here.`,
    elevation: 14.7,
    temp: 52,
    humidity: 21,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 2, 31, 9),
    location: {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    },
    title: 'No. 2',
    description: `The lettering on the tiles. All the different reasons I have come to this stop. When I lived with Mark. Eternal transfers. Our wedding day.`,
    elevation: -100,
    temp: 57.9,
    humidity: 58,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
    distance_from_home: -100,
    underground:  true,
  },
  {
    date_time: new Date(2016, 3, 1, 11),
    location: {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    },
    title: 'No. 3',
    description: `The trees are in bloom again. Providence. Kissed spring afternoons. Taking drugs and climbing trees after the last paper is turned in. Gloria in excelsis.`,
    elevation: 8.7,
    temp: 72,
    humidity: 61,
    weather: [{id: 802,
              main: 'clouds',
              description: 'scattered clouds',
              }],
  },
  {
    date_time: new Date(2016, 3, 4, 9, 45),
    location: {
      longitude: '-73.9857007',
      latitude: '40.689954',
    },
    title: 'No. 4',
    description: `Raw wet morning, like the blustery day in McCarren Park back when I still lived in Greenpoint. Feeling as though one were on the cusp of something.`,
    elevation: 13.2,
    temp: 39.9,
    humidity: 79,
    weather: [{id: 500,
              main: 'rain',
              description: 'light rain',
              }],
  },
  {
    date_time: new Date(2016, 3, 5, 6, 45),
    location: {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    },
    title: 'No. 5',
    description: `Warm feelings of orange and all in it togetherness.`,
    elevation: -100,
    temp: 41,
    humidity: 21,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
    distance_from_home: -100,
    underground:  true,
  },
  {
    date_time: new Date(2016, 3, 10, 21),
    location: {
      longitude: '-73.9890605',
      latitude: '40.7272659',
    },
    title: 'No. 6',
    description: `Flower smell outside the bodega. Summers of being the only one in town, hot Fridays.`,
    elevation: 11,
    temp: 46.9,
    humidity: 30,
    weather: [{id: 804,
              main: 'clouds',
              description: 'overcast',
              }],
  },
  {
    date_time: new Date(2016, 4, 10, 16),
    location: {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    },
    description: ``,
    elevation: -100,
    temp: 59,
    humidity: 35,
    weather: [{id: 803,
              main: 'clouds',
              description: 'broken clouds',
              }],
    distance_from_home: -100,
    underground:  true,
  },
  {
    date_time: new Date(2015, 11, 22, 15),
    location: {
      longitude: '-105.9302561',
      latitude: '39.9923406',
    },
    description: `Sledding on a tube. My first winter camp when I was 10. The first snow I saw. Getting the wind knocked out of me after launching off a jump.`,
    elevation: 2670.6,
    temp: 17,
    humidity: 10,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2014, 9, 22, 18),
    location: {
      longitude: '-122.4160968',
      latitude: '37.7418168',
    },
    description: `Dusty paths. Low scrub. The fun of catching lizards and hiking around the park at the North County Y.`,
    elevation: 108,
    temp: 73.9,
    humidity: 57,
    weather: [{id: 801,
              main: 'clouds',
              description: 'few clouds',
              }],
  },
  {
    date_time: new Date(2012, 8, 12, 19),
    location: {
      longitude: '-122.4235903',
      latitude: '37.7541405',
    },
    title: 'Chlorine',
    description: `A whiff of chlorine passing CCSF on Valencia Street. I think of Baruch, leaving Wednesday nights in the dark. The sisterhood at John Jay. A place I was and can never return.`,
    elevation: 34,
    temp: 63,
    humidity: 70,
    weather: [{id: 803,
              main: 'clouds',
              description: 'broken clouds',
              }],
  },
  {
    date_time: new Date(2016, 8, 25, 9, 15),
    location: {
      longitude: '-73.9905188',
      latitude: '40.7332058',
    },
    title: 'My God Is a Chlorine God',
    description: `Sundays at the pool and the feeling of holiness about it. Everyone is gone and it is time for quiet magic. Doing things I never thought I could. Long pull sets or kick with fins. Sliding through the water.`,
    elevation: 12.3,
    temp: 59,
    humidity: 53,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2015, 10, 30, 17, 15),
    location: {
      longitude: '-73.921569',
      latitude: '40.7056173',
    },
    description: `Lights coming up. Cold air. Christmas decorations. Carrying the tree home and all the other narcissistic celebrations of a December.`,
    elevation: 10.2,
    temp: 43,
    humidity: 71,
    weather: [{id: 803,
              main: 'clouds',
              description: 'broken clouds',
              }],
  },
  {
    date_time: new Date(2013, 9, 23, 14, 42),
    location: {
      longitude: '-122.3171118',
      latitude: '37.8385554',
    },
    description: `I see the boats arrayed at Emeryville and think of swimming out to the last row of yachts and back when I was 9, 10 maybe. We’d stop by and talk to people sitting on their boats. Just kids. I never wore a bikini because I had to swim. I had a one piece with a hole in the middle cut out instead. We were undersupervised, certainly.`,
    elevation: 0,
    temp: 71,
    humidity: 59,
    weather: [{id: 800,
              main: 'clear',
              description: 'clear',
              }],
  },
  {
    date_time: new Date(2016, 2, 14, 14),
    location: {
      longitude: '-122.501618',
      latitude: '37.7500379',
    },
    description: `Flower scent. I don’t know what kind of flower it is, but the smell is the smell of hot hills in California. Mountain dust. Summer camp. Putting on wet bathing suits in the morning chill and ashy legs.`,
    elevation: 22.5,
    temp: 61,
    humidity: 60,
    weather: [{id: 804,
              main: 'clouds',
              description: 'overcast clouds',
              }],
  },

]

let populated_moments = _.map(moments, function(m, i){

  m.home = {
    longitude: '-73.92112375618241',
    latitude: '40.70915962617131',
  };


  let longDiff = Math.abs(m.home.longitude - m.location.longitude),
      latDiff  = Math.abs(m.home.latitude  - m.location.latitude);

  m.complete = true;
  m.conx = [];

  m.title = m.title || m.date_time.toString().split(' ').slice(0, 5).join(', ');

  m.posted = m.date_time;
  m.distance_from_home = m.distance_from_home || Math.sqrt(Math.pow(longDiff, 2) + Math.pow(latDiff, 2));

  m.id = i;

  return m;


});

export default populated_moments;
