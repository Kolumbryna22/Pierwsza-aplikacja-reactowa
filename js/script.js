var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'images/harry.jpg',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'images/króllew.png',
    },
    {
        id: 3,
        title: 'Avengers',
        desc: 'Film o bohaterach',
        image: 'images/avengers.jpg',
    },
];

var MovieItem = React.createClass({
    propTypes: {
        movie: React.propTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('li', {key: this.props.movie.id},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {src: this.props.movie.image})
        );
    },
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(MovieItem, {movie: movie});
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
