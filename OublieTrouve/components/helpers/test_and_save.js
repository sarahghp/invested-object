import SimpleStore from 'react-native-simple-store';

let ts = function({key, dataBlob}) {
  
  if (key == 'all_conx') {
    SimpleStore.delete(key);
  }
  
  SimpleStore.get(key)
    .then((data) => {
      if (!data){
        console.log('Reloaded ' + key + ' data');
        SimpleStore.save(key, dataBlob)
          .then(() => SimpleStore.get(key))
          .then(data => {
            // console.log(data);
          })
          .catch(error => {
            console.error(error.message);
          });
      } else {
        console.log(key + ' data was already loaded.');
        // console.log(data);
      }
    })
    .catch(error => {
      console.error(error.message);
    }); 
}

export default ts;