
//1. create a database HR

CREATE SCHEMA hr;
USE hr;
SET AUTOCOMMIT=0;

//2. create a table employee

CREATE TABLE employee(
    EmployeeID INT(4),
    FirstName VARCHAR(10) NOT NULL,
    LastName VARCHAR(10) NOT NULL,
    Email VARCHAR(20),
    Salary VARCHAR(8),
    JoiningDate DATE,
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
    EmployeeID INT(4) REFERENCES employee(EmployeeID)
    PRIMARY KEY (EmployeeID)
);

//4. Insert 10-20 rows in each table with relevant fields.

//TABLE employee

SELECT * FROM db_hr.employee;
INSERT INTO employee(EmployeeID, FirstName, LastName, Email, Salary, JoiningDate)
VALUES 
('1234', 'Tania', 'Raiz', 'Tania@gmail.com', '20000', '2019-01-01'),
('5678', 'Yullia', 'Panchuk', 'Yullia@gmail.com', '15000', '2020-01-01'),
('9101', 'Tonis', 'Rand', 'Tonis@gmail.com', '18000', '2019-05-01'),
('1213', 'Priscilla', 'Silva', 'Silva@gmail.com', '25000', '2020-07-01'),
('1415', 'Jarrod', 'Brandreth', 'Jarrod@gmail.com', '22000', '2021-01-01'),
('1617', 'Lisa', 'Smeke', 'Lisa@gmail.com', '20000', '2022-05-01'),
('1819', 'Stefan', 'Penk', 'Penk@gmail.com', '25000', '2021-06-01'),
('2021', 'Rupali', 'Mohapatra', 'Rupali@gmail.com', '22000', '2019-09-01'),
('2223', 'Mariia', 'Ujica', 'Ujica@gmail.com', '19000', '2018-01-01'),
('2425', 'Waqas', 'Rauf', 'Waqas@gmail.com', '23000', '2019-04-01'),
('2627', 'Priya', 'Pradhan', 'Priya@gmail.com', '20000', '2022-09-01')

//TABLE locations

SELECT * FROM db_hr.locations;
INSERT INTO locations(LocationID, Address, Street, City, Country, PostalCode, EmployeeID)
VALUES 
('3132', 'Admedsg', '11B', 'Lund', 'Sweden', '25234', '1234'),
('3233', 'Gludtan', '12A', 'Helsingborg', 'Sweden', '24236', '5678'),
('3435', 'Trakatan', '13D', 'Malmo', 'Sweden', '26273', '9101'),
('4142', 'Furlasen', '16E', 'Helsingborg', 'Sweden', '24236', '1213'),
('4344', 'Naunda', '28A', 'Eslov', 'Sweden', '29235', '1415'),
('4546', 'Ramlösa', '12A', 'Lomma', 'Denmark', '22334', '1617'),
('4748', 'Targata', '10C', 'Elinberg', 'Franch', '21221', '1819'),
('5253', 'Norvag', '13A', 'Sona', 'Finland', '24546', '2021'),
('6162', 'Cansgata', '11D', 'Tona', 'Norway', '27290', '2223'),
('7678', 'Medgatan', '19A', 'Borger', 'Iceland', '28261', '2425'),
('6796', 'Gatan', '18F', 'Helborg', 'Sweden', '21213', '2627')


