const data = [
  {
    id: '1',
    title: 'Baby Driver',
    category: 'Comedy',
    image: 'baby-driver.jpg',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'The Dark knight',
    category: 'Comedy',
    image: 'batman.jpeg',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Dunkirk',
    category: 'Animation',
    image: 'dunkirk.jpg',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Eternal sunshine',
    category: 'Thriller',
    image: 'eternal.jpeg',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Forrest Gump',
    category: 'Drame',
    image: 'forrest.jpeg',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    image: 'pulp.jpeg',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Matrix',
    category: 'Thriller',
    image: 'matrix.jpeg',
    likes: 2,
    dislikes: 32
  }, {
    id: '8',
    title: 'Flew over the nest',
    category: 'Thriller',
    image: 'nest.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Silence of the lambs',
    category: 'Thriller',
    image: 'silence.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    image: 'gone.jpg',
    likes: 22,
    dislikes: 12
  },
]

// Fake data fetch with a timeout
export const movies = new Promise((resolve, reject) => setTimeout(resolve, 100, data))