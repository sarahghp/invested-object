var Bean = require('ble-bean');

var connectedBean;

console.log('Node running.');

// use byId so it will work with wakeOnEnable
Bean.discoverById('654ca680ca394a679e181c8b4a8c8a2a', (bean) => {
  console.log('Bean discovered.')
  
  connectedBean = bean;
  process.on('SIGINT', process.exit);

  bean.on('serial', function(data){
    console.log(data.toString());
  });

  bean.on('accell', function(x, y, z, valid){
    var status = valid ? 'valid' : 'invalid';
    console.log('Received ' + status + ' accell\tx:\t' + x + '\ty:\t' + y + '\tz:\t' + z );
  });

  bean.on('disconnect', function(){
    process.exit();
  });

  bean.connectAndSetup(function(){

    console.log('Bean connected and setup.');

  });

});

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {

    var trimmed = chunk.trim();

    if (trimmed === 'buzz' || trimmed === 'z' || trimmed === 'Z') {
      console.log('Write to bean');
      connectedBean.write(Buffer.from([90]));
    }

    if (trimmed == 'a'){
      connectedBean.requestAccell(
        function(){
          console.log('Accell request sent.');
        });
    }
    process.stdout.write(`data: ${chunk}`);
  }
});