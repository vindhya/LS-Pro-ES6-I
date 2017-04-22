var me = 'LambdaSchool';

var you = 'Student';

var numberOfCatsIOwn = 0;

function buyCat() {
  numberOfCatsIOwn++;
  console.log('I now own ' + numberOfCatsIOwn + ' cats!');
}

var favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
];

var likesCaptainUnderpants = function(bookList) {
  bookList = bookList || favoriteBooks;
  var yes = false;
  bookList.forEach(function(book) {
    if (book === 'Captain Underpants') yes = true;
  });
  return yes;
}

var result = likesCaptainUnderpants();

var sumInput = function() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

var sum = sumInput(1, 2, 3, 4, 5);

var add = function(x, x) {
  return x + x;
}

var sum = add(5, 5);
