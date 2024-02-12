// Click handler for search button
const captureSearchValue = () => {
    const searchInput = document.getElementById("search-bar").value;
     return searchInput;
};

// Filter books based on search input
   const filterBooks = (searchInput, booksList) => {
   const filteredBooks = booksList.filter(book => {
        // Check if any tag in the book matches the search input exactly
        return book.tags.some(tag => tag.toLowerCase() === searchInput.toLowerCase());
    });

    return filteredBooks;
   };

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
   const structureBooksAsHtml = (booksList) => {
     // Iterate over the list of books and format them as HTML
     const formattedBooks = booksList.map(book => structureBookAsHtml(book));
     return formattedBooks;
   };

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
// Capture search value
  const searchValue = captureSearchValue();

  // Filter books based on the search value
  const filteredBooks = filterBooks(searchValue, books);

  // Structure filtered books as HTML
  const bookElements = structureBooksAsHtml(filteredBooks);

  // Render books to the DOM
  renderBooksToDom(bookElements);

  // Ensure expected behavior
  const bookTitleDiv = document.querySelectorAll(".bookTitle");
  console.log("Number of child elements in bookTitle div:", bookTitleDiv.length);
}

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", searchBtnClickHandler);