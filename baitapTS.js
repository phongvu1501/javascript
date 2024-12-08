var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Bài 1
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var student1 = new Student("Phong Vũ", 19, "Đại học");
student1.display();
//Bài 2
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("G\u1EEDi ti\u1EC1n: ".concat(amount, ". S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ").concat(this.balance));
        }
        else {
            console.log("Số tiền gửi phải lớn hơn 0.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("R\u00FAt ti\u1EC1n: ".concat(amount, ". S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ").concat(this.balance));
        }
        else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư.");
        }
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        var interest = this.balance * this.interestRate / 100;
        console.log("Ti\u1EC1n l\u00E3i l\u00E0: ".concat(interest));
        return interest;
    };
    return SavingAccount;
}(BankAccount));
var account1 = new BankAccount("12345678", 5000);
account1.deposit(2000);
account1.withdraw(3000);
var savingAccount = new SavingAccount("87654321", 10000, 5);
savingAccount.deposit(5000);
savingAccount.calculateInterest();
savingAccount.withdraw(12000);
//Bài 3
var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("\u0110\u00E3 th\u00EAm s\u00E1ch: ".concat(book.title));
    };
    Library.prototype.removeBook = function (ISBN) {
        var index = this.books.findIndex(function (book) { return book.ISBN === ISBN; });
        if (index !== -1) {
            var removedBook = this.books.splice(index, 1)[0];
            console.log("\u0110\u00E3 x\u00F3a s\u00E1ch: ".concat(removedBook.title));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch v\u1EDBi ISBN: ".concat(ISBN));
        }
    };
    Library.prototype.findBook = function (title) {
        var book = this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
        if (book) {
            console.log("T\u00ECm th\u1EA5y s\u00E1ch: ".concat(book.title, " - T\u00E1c gi\u1EA3: ").concat(book.author));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch v\u1EDBi t\u00EAn: ".concat(title));
        }
        return book;
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Lập trình TypeScript", "Phong", "123456789");
var book2 = new Book("Học JavaScript", "Văn", "987654321");
var book3 = new Book("Cơ bản PHP", "Vũ", "456789123");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.findBook("Học JavaScript");
library.removeBook("987654321");
library.findBook("Học JavaScript");
//Bài 4
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var shapes = [
    new Rectangle(5, 10),
    new Circle(7)
];
shapes.forEach(function (shape, index) {
    console.log("Di\u1EC7n t\u00EDch h\u00ECnh ".concat(index + 1, ": ").concat(shape.calculateArea().toFixed(2)));
});
//Bài 5
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "T\u00EAn: ".concat(this.name, ", V\u1ECB tr\u00ED: ").concat(this.position, ", L\u01B0\u01A1ng: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Manager", salary) || this;
    }
    Manager.prototype.getDetails = function () {
        return "Qu\u1EA3n l\u00FD - ".concat(_super.prototype.getDetails.call(this));
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Developer", salary) || this;
    }
    Developer.prototype.getDetails = function () {
        return "L\u1EADp tr\u00ECnh vi\u00EAn - ".concat(_super.prototype.getDetails.call(this));
    };
    return Developer;
}(Employee));
var employees = [
    new Manager("Phong", 5000),
    new Developer("Vũ", 3000),
    new Developer("Văn", 3200)
];
employees.forEach(function (employee) {
    console.log(employee.getDetails());
});
