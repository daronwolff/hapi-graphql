// Data example
const authors = [
  {
    name: 'Jeff Long',
    age: 60,
    books: ['El descenso'],
  },
  {
    name: 'Jk Rowling',
    age: 40,
    books: ['Harry potter'],
  },
  {
    name: 'Susan Collings ',
    age: 48,
    books: ['Juegos del hambre'],
  },
  {
    name: 'Bran Stoker ',
    age: 100,
    books: ['dracula'],
  },
  {
    name: 'JJ benitez',
    age: 72,
    books: ['Caballo de troya 1', 'Caballo de troya 2', 'Caballo de troya 3'],
  },
  {
    name: 'Stephen King',
    age: 65,
    books: ['It', 'Naufrago', 'Carrie'],
  },
];

// Resolvers
const resolvers = {
  Query: {
    authors: () => authors,
  },
};

// Exporting resolvers
export default resolvers;
