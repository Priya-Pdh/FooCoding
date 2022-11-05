//1. create a database HR

CREATE SCHEMA hr;
USE hr;

//2. create a table employee

CREATE TABLE employee(
    EmployeeID INT(4),
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    Salary VARCHAR(255),
    JoiningDate DATE,
    LocationID INT(4),
    PRIMARY KEY (EmployeeID)
);

//3. create a table locations

CREATE TABLE locations(
    LocationID INT(4),
    Address VARCHAR(10) NOT NULL,
    Street VARCHAR(10) NOT NULL,
    City VARCHAR(20),
    Country VARCHAR(8),
    PostalCode VARCHAR(5),
    employee(LocationID) REFERENCES locations(LocationID),
    PRIMARY KEY (LocationID)
);

//4. Insert 10-20 rows in each table with relevant fields.

//TABLE employee

SELECT * FROM db_hr.employee;
INSERT INTO employee(EmployeeID, FirstName, LastName, Email, Salary, JoiningDate, LocationID)
VALUES 
('1234', 'Tania', 'Raiz', 'Tania@gmail.com', '20000', '2019-01-01', '3132'),
('5678', 'Yullia', 'Panchuk', 'Yullia@gmail.com', '15000', '2020-01-01', '3233'),
('9101', 'Tonis', 'Rand', 'Tonis@gmail.com', '18000', '2019-05-01', '3435'),
('1213', 'Priscilla', 'Silva', 'Silva@gmail.com', '25000', '2020-07-01', '4142'),
('1415', 'Jarrod', 'Brandreth', 'Jarrod@gmail.com', '22000', '2021-01-01', '4344'),
('1617', 'Lisa', 'Smeke', 'Lisa@gmail.com', '20000', '2022-05-01', '4546'),
('1819', 'Stefan', 'Penk', 'Penk@gmail.com', '25000', '2021-06-01', '4748'),
('2021', 'Rupali', 'Mohapatra', 'Rupali@gmail.com', '22000', '2019-09-01', '5253'),
('2223', 'Mariia', 'Ujica', 'Ujica@gmail.com', '19000', '2018-01-01', '6162'),
('2425', 'Waqas', 'Rauf', 'Waqas@gmail.com', '23000', '2019-04-01', '7678'),
('2627', 'Priya', 'Pradhan', 'Priya@gmail.com', '20000', '2022-09-01', '6796');

//TABLE locations

SELECT * FROM db_hr.locations;
INSERT INTO locations(LocationID, Address, Street, City, Country, PostalCode)
VALUES 
('3132', 'Admedsg', '11B', 'Lund', 'Sweden', '25234'),
('3233', 'Gludtan', '12A', 'Helsingborg', 'Sweden', '24236'),
('3435', 'Trakatan', '13D', 'Malmo', 'Sweden', '26273'),
('4142', 'Furlasen', '16E', 'Helsingborg', 'Sweden', '24236'),
('4344', 'Naunda', '28A', 'Eslov', 'Sweden', '29235'),
('4546', 'Ramlösa', '12A', 'Lomma', 'Denmark', '22334'),
('4748', 'Targata', '10C', 'Elinberg', 'Franch', '21221'),
('5253', 'Norvag', '13A', 'Sona', 'Finland', '24546'),
('6162', 'Cansgata', '11D', 'Tona', 'Norway', '27290'),
('7678', 'Medgatan', '19A', 'Borger', 'Iceland', '28261'),
('6796', 'Gatan', '18F', 'Helborg', 'Sweden', '21213');
