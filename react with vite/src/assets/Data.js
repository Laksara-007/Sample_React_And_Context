export let books = [
  {
    id: 0,
    name: "book 1",
    category: "category 1",
    price: 100,
  },
  {
    id: 1,
    name: "book 2",
    category: "category 2",
    price: 200,
  },
  {
    id: 2,
    name: "book 3",
    category: "category 3",
    price: 300,
  },
  {
    id: 3,
    name: "book 4",
    category: "category 4",
    price: 400,
  },
  {
    id: 4,
    name: "book 5",
    category: "category 5",
    price: 500,
  },
];

export let Users = [
  {
    id: 0,
    name: "user 1",
    price: 100,
  },
  {
    id: 1,
    name: "user 2",
    category: "category 2",
    price: 200,
  },
  {
    id: 2,
    name: "user 3",
    category: "category 3",
    price: 300,
  },
];

export function deleteBook(id) {
  books = books.filter((book) => book.id != id);
}
