// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success')
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 4000)
})

// #2) Run the above promise and make it console.log "success"
promise.then(result => {
  console.log(result);
})

promise2.then(console.log);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

/* Promise.resolve(value);
/Parameters/
value: Argument to be resolved by this Promise. Can also be a Promise or a thenable to resolve.
/Return value/
A Promise that is resolved with the given value, or the promise passed as value, if the value was a promise object. */

const promise3 = Promise.resolve(
  setTimeout(() => {
    console.log('success');
  }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'

// Promise.reject('failed')

const promise4 = Promise.reject('failed').catch(() => console.log('Oooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
  console.log(results[3])
}).catch(() => console.log('error'))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?