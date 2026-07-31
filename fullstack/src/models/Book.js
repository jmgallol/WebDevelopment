export class Book {
    id;
    title;
    Category;
    price;
    stock;
    constructor(id, title, Category, price, stock) {
        this.id = id;
        this.title = title;
        this.Category = Category;
        this.price = price;
        this.stock = stock;
    }
    static findById(books, id) {
        const book = books.find(book => book.id === id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }
        return book;
    }
}
//# sourceMappingURL=Book.js.map