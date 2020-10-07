const a = 'babel';

function get() {
  return new Promise((resolve, reject) => {
    resolve('data');
  });
}

get().then((data) => console.log('data:', data));