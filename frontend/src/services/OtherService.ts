import { BookService } from '@/services/BookService';

export default class OtherService {
  public static getUniqueBookCategories(): string[] {

    const books = BookService.getBooks();
    const categories = books.map((book) => book.category);
    const uniqueCategories = new Set(categories);
    
    return Array.from(uniqueCategories);
  }
}
