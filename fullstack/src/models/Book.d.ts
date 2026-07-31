export declare class Book {
    id: number;
    title: string;
    Category: string;
    price: number;
    stock: number;
    constructor(id: number, title: string, Category: string, price: number, stock: number);
    static findById(books: Book[], id: number): Book;
}
//# sourceMappingURL=Book.d.ts.map