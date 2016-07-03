var Bean = require('ble-bean');

var connectedBean;

console.log('Node running.');

// use byId so it will work with wakeOnEnable
Bean.discoverById('654ca680ca394a679e181c8b4a8c8a2a', function(bean){
  console.log('Bean discovered')
  
  connectedBean = bean;
  process.on('SIGINT', process.exit);


  bean.connectAndSetup(function(){

    console.log('Bean connected and setup.');

    bean.on("serial", function(data, valid){
      console.log(data.toString());
    });

    bean.on("disconnect", function(){
      process.exit();
    });

  });

});

process.stdin.resume(); //so the program will not close instantly