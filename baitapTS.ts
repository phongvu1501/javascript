//Bài 1
class Student {
    name: string;
    age: number;
    grade: string;

    constructor(name: string, age: number, grade: string){
        this.name = name;
        this.age = age;
        this.grade = grade;
    } 
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

}
const student1 = new Student("Phong Vũ", 19, "Đại học");
student1.display();

//Bài 2
class BankAccount {
    accountNumber: string;
    balance: number;
  
    constructor(accountNumber: string, balance: number) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Gửi tiền: ${amount}. Số dư hiện tại: ${this.balance}`);
      } else {
        console.log("Số tiền gửi phải lớn hơn 0.");
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Rút tiền: ${amount}. Số dư hiện tại: ${this.balance}`);
      } else {
        console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư.");
      }
    }
  }
  
  class SavingAccount extends BankAccount {
    interestRate: number;
  
    constructor(accountNumber: string, balance: number, interestRate: number) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest(): number {
      const interest = this.balance * this.interestRate / 100;
      console.log(`Tiền lãi là: ${interest}`);
      return interest;
    }
  }
  
  const account1 = new BankAccount("12345678", 5000);
  account1.deposit(2000);
  account1.withdraw(3000);
  
  const savingAccount = new SavingAccount("87654321", 10000, 5);
  savingAccount.deposit(5000);
  savingAccount.calculateInterest();
  savingAccount.withdraw(12000);

  //Bài 3
class Book {
    title: string;
    author: string;
    ISBN: string;
  
    constructor(title: string, author: string, ISBN: string) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }
  }
  
  class Library {
    private books: Book[]; 
  
    constructor() {
      this.books = [];
    }
  
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Đã thêm sách: ${book.title}`);
    }
  
    removeBook(ISBN: string): void {
      const index = this.books.findIndex(book => book.ISBN === ISBN);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Đã xóa sách: ${removedBook.title}`);
      } else {
        console.log(`Không tìm thấy sách với ISBN: ${ISBN}`);
      }
    }
  
    findBook(title: string): Book | undefined {
      const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      if (book) {
        console.log(`Tìm thấy sách: ${book.title} - Tác giả: ${book.author}`);
      } else {
        console.log(`Không tìm thấy sách với tên: ${title}`);
      }
      return book;
    }
  }
  
  const library = new Library();
  
  const book1 = new Book("Lập trình TypeScript", "Phong", "123456789");
  const book2 = new Book("Học JavaScript", "Văn", "987654321");
  const book3 = new Book("Cơ bản PHP", "Vũ", "456789123");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  library.findBook("Học JavaScript");
  library.removeBook("987654321");
  library.findBook("Học JavaScript");

  //Bài 4
  
  abstract class Shape {
    abstract calculateArea(): number;
  }
  
  class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
  
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  const shapes: Shape[] = [
    new Rectangle(5, 10),
    new Circle(7)
  ];
  
  shapes.forEach((shape, index) => {
    console.log(`Diện tích hình ${index + 1}: ${shape.calculateArea().toFixed(2)}`);
  });


  //Bài 5

  class Employee {
    constructor(public name: string, public position: string, public salary: number) {}
  
    getDetails(): string {
      return `Tên: ${this.name}, Vị trí: ${this.position}, Lương: ${this.salary}`;
    }
  }
  
  class Manager extends Employee {
    constructor(name: string, salary: number) {
      super(name, "Manager", salary);
    }
  
    getDetails(): string {
      return `Quản lý - ${super.getDetails()}`;
    }
  }
  
  class Developer extends Employee {
    constructor(name: string, salary: number) {
      super(name, "Developer", salary);
    }
  
    getDetails(): string {
      return `Lập trình viên - ${super.getDetails()}`;
    }
  }
  
  const employees: Employee[] = [
    new Manager("Phong", 5000),
    new Developer("Vũ", 3000),
    new Developer("Văn", 3200)
  ];
  
  employees.forEach(employee => {
    console.log(employee.getDetails());
  });
  
  