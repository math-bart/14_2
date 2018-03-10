var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
    id: 3,
    title: 'Władca pierścieni',
    desc: 'Kolejny film o czarodzieju:)',
    img: 'images/wladca.jpg'
  },
  {
    id: 4,
    title: 'Szklana pułapka',
    desc: 'Tu to już prawdziwe czary',
    img: 'images/die.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.img, width: 200})
  );
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);
  
ReactDOM.render(element, document.getElementById('app'));