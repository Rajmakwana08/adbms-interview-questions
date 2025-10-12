import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Study basic SQL statements.",
      answer: "\nQuery to study CREATE table command \nQuery to study ALTER table commands \nQuery to study DROP table command \nQuery to study RENAME table command \nQuery to study INSERT command \nQuery to study UPDATE command \nQuery to study DELETE command",
      codeExample: `
1️⃣ CREATE TABLE Command

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    City VARCHAR(30)
);


✅ Output:
Table created successfully.

----------------------------------------------------------------------------------

2️⃣ INSERT Command

INSERT INTO Students (StudentID, Name, Age, City)
VALUES (1, 'Raj', 21, 'Keshod'),
       (2, 'Mihir', 22, 'Junagadh'),
       (3, 'Priya', 20, 'Surat');


✅ Output:
3 rows inserted successfully.


✅ After Insert — Table Data:
| StudentID | Name  | Age | City     |
| --------- | ----- | --- | -------- |
| 1         | Raj   | 21  | Keshod   |
| 2         | Mihir | 22  | Junagadh |
| 3         | Priya | 20  | Surat    |

----------------------------------------------------------------------------------

3️⃣ ALTER TABLE Command

➕ Add a new column

ALTER TABLE Students
ADD Email VARCHAR(50);


✅ Output:
Table altered successfully.


✅ Now Table Structure:
| Column Name | Data Type   |
| ----------- | ----------- |
| StudentID   | INT         |
| Name        | VARCHAR(50) |
| Age         | INT         |
| City        | VARCHAR(30) |
| Email       | VARCHAR(50) |

----------------------------------------------------------------------------------

4️⃣ UPDATE Command

UPDATE Students
SET City = 'Rajkot', Email = 'raj@example.com'
WHERE StudentID = 1;


✅ Output:
1 row updated successfully.

✅ After Update — Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |
| 3         | Priya | 20  | Surat    | NULL                                      |

----------------------------------------------------------------------------------

5️⃣ DELETE Command

DELETE FROM Students
WHERE StudentID = 3;


✅ Output:
1 row deleted successfully.


✅ After Delete — Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |

----------------------------------------------------------------------------------

6️⃣ RENAME TABLE Command

RENAME TABLE Students TO CollegeStudents;


✅ Output:

Table renamed successfully.


✅ Now the table name is:
CollegeStudents

✅ Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |

----------------------------------------------------------------------------------

7️⃣ DROP TABLE Command

DROP TABLE CollegeStudents;


✅ Output:
Table dropped successfully.


✅ Now if you try:

SELECT * FROM CollegeStudents;


❌ Error:

ERROR: Table 'CollegeStudents' doesn't exist.

✅ Summary (With Results)
| Command      | Purpose           | Example Output               |
| ------------ | ----------------- | ---------------------------- |
| CREATE TABLE | Creates table     | Table created successfully   |
| INSERT       | Adds data         | 3 rows inserted successfully |
| ALTER TABLE  | Changes structure | Table altered successfully   |
| UPDATE       | Changes data      | 1 row updated successfully   |
| DELETE       | Removes data      | 1 row deleted successfully   |
| RENAME TABLE | Renames table     | Table renamed successfully   |
| DROP TABLE   | Deletes table     | Table dropped successfully   |




-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------

🔹 Meaning of AS

The keyword AS is used to give a temporary name (alias) to a column or table in an SQL query.
It does not change the real column or table name in the database — it only renames it for the duration of the query result.

📘 Your Example
SELECT ProductName AS Name FROM Products
UNION
SELECT CustomerName AS Name FROM Customers;

Step-by-step explanation:

First query:

SELECT ProductName AS Name FROM Products;


This selects the column ProductName from the Products table.

Using AS Name, it renames the output column to Name instead of showing “ProductName” in the result.

✅ Output example:

Name
Laptop
Keyboard

Second query:

SELECT CustomerName AS Name FROM Customers;


Similarly, it selects CustomerName from Customers and renames it to Name.

✅ Output example:

Name
Rajesh Kumar
Neha Sharma

UNION combines both results:

Because both subqueries have the same column name (Name), the union works smoothly.

The final output merges all product and customer names into a single column called Name.

✅ Final Output:
| Name         |
| ------------ |
| Laptop       |
| Keyboard     |
| Rajesh Kumar |
| Neha Sharma  |


`
    },
    {
      id: 2,
      question: "2. STUDY BASIC SQL STATEMENTS",
      answer: "",
      codeExample: `
A. Basic SELECT Queries

📘 Question:
Write an SQL query to retrieve all columns and rows from the Employees table.

SELECT * FROM Employees;

✅ Explanation:
* means all columns — this shows the full Employees table.

Example Output:
| EmployeeID | FirstName | LastName | Salary | DepartmentID |
| ---------- | --------- | -------- | ------ | ------------ |
| 1          | Raj       | Doe      | 50000  | D01          |
| 2          | Mihir     | Patel    | 60000  | D02          |
| 3          | Priya     | Shah     | 55000  | D01          |


----------------------------------------------------------------------------------

B. Filtering Data

📘 Question:
Find all employees whose last name is 'Doe'.

SELECT * FROM Employees
WHERE LastName = 'Doe';


✅ Explanation:
WHERE is used to filter specific rows that meet the condition.

Example Output:
| EmployeeID | FirstName | LastName | Salary | DepartmentID |
| ---------- | --------- | -------- | ------ | ------------ |
| 1          | Raj       | Doe      | 50000  | D01          |


----------------------------------------------------------------------------------

C. Sorting Data

📘 Question:
List all books from the Books table, ordered by publication year in descending order.

SELECT * FROM Books
ORDER BY PublicationYear DESC;


✅ Explanation:
ORDER BY arranges rows; DESC = descending (newest first).

Example Output:
| BookID | Title       | Author   | PublicationYear |
| ------ | ----------- | -------- | --------------- |
| 3      | Learn SQL   | Sam Roy  | 2024            |
| 1      | DBMS Basics | A. Mehta | 2023            |
| 2      | Data Models | S. Shah  | 2020            |


----------------------------------------------------------------------------------

D. Aggregating Data

📘 Question:
Find the total number of orders in the Orders table.

SELECT COUNT(*) AS TotalOrders
FROM Orders;


✅ Explanation:
COUNT(*) counts total rows (orders).

Example Output:
| TotalOrders |
| ----------- |
| 150         |


----------------------------------------------------------------------------------

E. Grouping Data

📘 Question:
Find the average salary of employees in each department.

SELECT DepartmentID, AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY DepartmentID;


✅ Explanation:
GROUP BY groups data by department, and AVG() calculates the average per group.

Example Output:
| DepartmentID | AverageSalary |
| ------------ | ------------- |
| D01          | 52500         |
| D02          | 60000         |


----------------------------------------------------------------------------------

F. Using DISTINCT

📘 Question:
List all unique job titles from the Employees table.

SELECT DISTINCT JobTitle
FROM Employees;


✅ Explanation:
DISTINCT removes duplicate job titles.

Example Output:
| JobTitle  |
| --------- |
| Manager   |
| Developer |
| Analyst   |


----------------------------------------------------------------------------------

G. Using LIKE

📘 Question:
Find all products from the Products table where the product name contains the word ‘Laptop’.

SELECT * FROM Products
WHERE ProductName LIKE '%Laptop%';


✅ Explanation:
%Laptop% means any text before or after the word Laptop.

Example Output:
| ProductID | ProductName       | Price |
| --------- | ----------------- | ----- |
| 1         | HP Laptop         | 55000 |
| 2         | Dell Laptop       | 60000 |
| 5         | Lenovo Laptop 15" | 58000 |


----------------------------------------------------------------------------------

H. Nested Subqueries

📘 Question:
Find the names of employees who have a salary greater than the average salary of all employees.

SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > (
    SELECT AVG(Salary)
    FROM Employees
);


✅ Explanation:
The inner query calculates the average salary;
the outer query selects those earning more than that.

Example Output:
| FirstName | LastName | Salary |
| --------- | -------- | ------ |
| Mihir     | Patel    | 60000  |


----------------------------------------------------------------------------------

I. Set Operations

📘 Question:
Find the union of all product names from the Products table and all customer names from the Customers table.

SELECT ProductName AS Name FROM Products
UNION
SELECT CustomerName AS Name FROM Customers;


✅ Explanation:
UNION combines results from two queries, removing duplicates.

Example Output:
| Name              |
| ----------------- |
| HP Laptop         |
| Dell Laptop       |
| Lenovo Laptop 15" |
| Rajesh Kumar      |
| Priya Shah        |


----------------------------------------------------------------------------------

✅ Summary Table
| No. | Topic         | SQL Keyword          | Example Table        | Key Function       |
| --- | ------------- | -------------------- | -------------------- | ------------------ |
| A   | Select All    | SELECT *             | Employees            | Show all data      |
| B   | Filter        | WHERE                | Employees            | Find specific rows |
| C   | Sort          | ORDER BY DESC        | Books                | Sort descending    |
| D   | Aggregate     | COUNT()              | Orders               | Count total rows   |
| E   | Group         | GROUP BY + AVG()     | Employees            | Group by dept      |
| F   | Unique        | DISTINC              | Employees            | Remove duplicates  |
| G   | Pattern Match | LIKE %text%'         | Products             | Search text        |
| H   | Subquery      | Nested SELECT        | Employees            | Compare to avg     |
| I   | Set Operation | UNION                | Products + Customers | Combine data       |



`
    },
    {
      id: 3,
      question: "3. SQL JOIN Statements",
      answer: "<> means -> not equal to(Equivalent to != in many programming languages).",
      codeExample: `
1️⃣ INNER JOIN

📘 Question:
Find the names of customers and their associated orders.

Tables:

Customers(CustomerID, CustomerName)

Orders(OrderID, CustomerID, OrderDate)

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
INNER JOIN returns only matching rows between both tables (customers who have placed orders).

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Mihir        | 104     | 2024-10-04 |


----------------------------------------------------------------------------------

2️⃣ LEFT JOIN (LEFT OUTER JOIN)

📘 Question:
List all customers and any orders they may have — include customers without orders.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
LEFT JOIN returns all customers, even if they have no orders (shows NULL for order details).

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Mihir        | 104     | 2024-10-04 |
| Neha         | NULL    | NULL       |

👉 Here, Neha has no order.


----------------------------------------------------------------------------------

3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)

📘 Question:
List all orders and their associated customer details.
Include orders that do not have an associated customer.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
RIGHT JOIN returns all orders, even if no matching customer exists.

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| NULL         | 105     | 2024-10-05 |

👉 Order 105 has no registered customer.


----------------------------------------------------------------------------------

4️⃣ FULL JOIN (FULL OUTER JOIN)

📘 Question:
List all customers and orders — including customers without orders and orders without customers.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
FULL OUTER JOIN returns all records from both tables — unmatched rows show NULL values.

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Neha         | NULL    | NULL       |
| NULL         | 105     | 2024-10-05 |



----------------------------------------------------------------------------------

5️⃣ SELF JOIN

🔹 What is a SELF JOIN?
  A SELF JOIN is when a table is joined with itself.


That means:

  The same table appears twice in the query.
  We use different aliases to treat them like two separate tables.
  It’s useful when rows in a table are related to other rows in the same table.

🔸 Example Situation

Imagine a table named Employees:
| EmpID | EmpName | ManagerID |
| ----- | ------- | --------- |
| 1     | Raj     | NULL      |
| 2     | Neha    | 1         |
| 3     | Aachal  | 1         |
| 4     | Riya    | 2         |
| 5     | Karan   | 2         |


Here:

ManagerID refers to another EmpID in the same table.
→ So, each employee’s manager is also an employee.


🔹 SELF JOIN Query

We can use a SELF JOIN to find each employee and their manager’s name.

SELECT 
    e.EmpName AS Employee,
    m.EmpName AS Manager
FROM 
    Employees AS e
JOIN 
    Employees AS m
ON 
    e.ManagerID = m.EmpID;


🔸 Explanation
| Symbol                  | Meaning                                      |
| ----------------------- | -------------------------------------------- |
| Employees AS e          | first copy of the table (for employees)      |
| Employees AS m          | second copy of the same table (for managers) |
| e.ManagerID = m.EmpID   | connects each employee to their manager      |


✅ Output:
| Employee | Manager |
| -------- | ------- |
| Neha     | Raj     |
| Aachal   | Raj     |
| Riya     | Neha    |
| Karan    | Neha    |


💡 Why use SELF JOIN?

To compare rows in the same table.

To find relationships within one table (e.g., employees reporting to managers, prerequisite courses, parent-child relationships, etc.)

🧩 Simple Tip

Always use aliases (like e, m) when doing a SELF JOIN —
otherwise, SQL won’t know which copy of the table you’re referring to.


-----------------------------------------------------------------------------------

if you not understand above all then show this :


🔸 What the condition does:

e.ManagerID = m.EmpID means:

Take each employee (e) from the first table copy.

Find the manager (m) from the second table copy
where the employee’s ManagerID matches the manager’s EmpID.

So:

✅ If the condition matches, that employee–manager pair is shown.

❌ If it does not match, that employee (like the CEO who has no manager) is not shown — because JOIN only shows matching rows.


📘 Example:

| EmpID | EmpName | ManagerID |
| ----- | ------- | --------- |
| 1     | Raj     | NULL      |
| 2     | Neha    | 1         |
| 3     | Aachal  | 1         |
| 4     | Riya    | 2         |
| 5     | Karan   | 2         |

condition e.ManagerID = m.EmpID;

🔹 Step by step:
                           this side check who is manager of whom
| e.EmpName | e.ManagerID | m.EmpID | m.EmpName | Match?       |
| --------- | ----------- | ------- | --------- | ----------   |
| Raj       | NULL        | —       | —         | ❌ no match |
| Neha      | 1           | 1       | Raj       | ✅ yes      |
| Aachal    | 1           | 1       | Raj       | ✅ yes      |
| Riya      | 2           | 2       | Neha      | ✅ yes      |
| Karan     | 2           | 2       | Neha      | ✅ yes      |


✅ Result (only matched ones):

| Employee | Manager |
| -------- | ------- |
| Neha     | Raj     |
| Aachal   | Raj     |
| Riya     | Neha    |
| Karan    | Neha    |


----------------------------------------------------------------------------------
----------------------------------------------------------------------------------


6️⃣ CROSS JOIN

A CROSS JOIN returns the Cartesian product of two tables.
That means:
👉 Every row from the first table is combined with every row from the second table.

There is no condition (like ON) in a CROSS JOIN.

🔸 Basic Example

Table 1: Students
| ID | Name |
| -- | ---- |
| 1  | Raj  |
| 2  | Neha |

Table 2: Subjects
| SubID | Subject |
| ----- | ------- |
| 101   | Math    |
| 102   | Science |


🔹 Query:

SELECT Name, Subject
FROM Students
CROSS JOIN Subjects;


🔹 What Happens:

  Each student is paired with every subject.
  The result = number of rows in Students × number of rows in Subjects

Here:
2 students × 2 subjects = 4 rows

✅ Output:

| Name | Subject |
| ---- | ------- |
| Raj  | Math    |
| Raj  | Science |
| Neha | Math    |
| Neha | Science |



⚠️ Be Careful

If both tables are large, a CROSS JOIN can produce millions of rows because it multiplies the total count.

Example:

  Table A → 1,000 rows
  Table B → 500 rows
    👉 Result = 1,000 × 500 = 500,000 rows



      `
    },
    {
      id: 4,
      question: "4. Write a PL/SQL program to find the total and average of 4 subjects and display the grade",
      answer: "",
      codeExample: `
PL/SQL Program: Total, Average & Grade


DECLARE
    -- Declare variables for 4 subjects
    sub1 NUMBER := 85;
    sub2 NUMBER := 75;
    sub3 NUMBER := 90;
    sub4 NUMBER := 80;

    -- Variables for total, average, and grade
    total NUMBER;
    avg NUMBER;
    grade CHAR(2);
BEGIN
    -- Calculate total and average
    total := sub1 + sub2 + sub3 + sub4;
    avg := total / 4;

    -- Determine grade based on average
    IF avg >= 90 THEN
        grade := 'A';
    ELSIF avg >= 75 THEN
        grade := 'B';
    ELSIF avg >= 60 THEN
        grade := 'C';
    ELSE
        grade := 'F';
    END IF;

    -- Display results
    DBMS_OUTPUT.PUT_LINE('Marks in 4 Subjects:');
    DBMS_OUTPUT.PUT_LINE('Subject 1 = ' || sub1);
    DBMS_OUTPUT.PUT_LINE('Subject 2 = ' || sub2);
    DBMS_OUTPUT.PUT_LINE('Subject 3 = ' || sub3);
    DBMS_OUTPUT.PUT_LINE('Subject 4 = ' || sub4);
    DBMS_OUTPUT.PUT_LINE('----------------------------');
    DBMS_OUTPUT.PUT_LINE('Total Marks = ' || total);
    DBMS_OUTPUT.PUT_LINE('Average = ' || avg);
    DBMS_OUTPUT.PUT_LINE('Grade = ' || grade);
END;
/



✅ Explanation:
| Step                    | Description               |
| ----------------------- | ------------------------- |
| DECLARE                 | Used to define variables  |
| BEGIN ... END           | The main executable block |
| IF ... ELSIF ... ELSE   | Used for grade decision   |
| DBMS_OUTPUT.PUT_LINE    | Displays output on screen |



💡 Sample Output:
Marks in 4 Subjects:
Subject 1 = 85
Subject 2 = 75
Subject 3 = 90
Subject 4 = 80
----------------------------
Total Marks = 330
Average = 82.5
Grade = B


-----------------------------------------------------------------------------------

if you want to enter subject marks with user input then use this code:


DECLARE
    -- Declare variables for subjects
    sub1 NUMBER;
    sub2 NUMBER;
    sub3 NUMBER;
    sub4 NUMBER;

    -- Variables for total, average, and grade
    total NUMBER;
    avg NUMBER;
    grade CHAR(2);
BEGIN
    -- Accept user input for 4 subjects
    sub1 := &sub1;
    sub2 := &sub2;
    sub3 := &sub3;
    sub4 := &sub4;

    -- Calculate total and average
    total := sub1 + sub2 + sub3 + sub4;
    avg := total / 4;

    -- Determine grade based on average
    IF avg >= 90 THEN
        grade := 'A';
    ELSIF avg >= 75 THEN
        grade := 'B';
    ELSIF avg >= 60 THEN
        grade := 'C';
    ELSE
        grade := 'F';
    END IF;

    -- Display results
    DBMS_OUTPUT.PUT_LINE('Marks in 4 Subjects:');
    DBMS_OUTPUT.PUT_LINE('Subject 1 = ' || sub1);
    DBMS_OUTPUT.PUT_LINE('Subject 2 = ' || sub2);
    DBMS_OUTPUT.PUT_LINE('Subject 3 = ' || sub3);
    DBMS_OUTPUT.PUT_LINE('Subject 4 = ' || sub4);
    DBMS_OUTPUT.PUT_LINE('----------------------------');
    DBMS_OUTPUT.PUT_LINE('Total Marks = ' || total);
    DBMS_OUTPUT.PUT_LINE('Average = ' || avg);
    DBMS_OUTPUT.PUT_LINE('Grade = ' || grade);
END;
/



💡 Sample Run:

When you execute the program in SQL*Plus or Oracle Live SQL, it will ask:

Enter value for sub1: 90
Enter value for sub2: 80
Enter value for sub3: 75
Enter value for sub4: 85


✅ Output:

Marks in 4 Subjects:
Subject 1 = 90
Subject 2 = 80
Subject 3 = 75
Subject 4 = 85
----------------------------
Total Marks = 330
Average = 82.5
Grade = B


      `
    },
    {
      id: 5,
      question: "5. Write a PL/SQL program to find factorial of a given number using Functions",
      answer: "",
      codeExample: `
PL/SQL Program — Factorial Using Recursive Function


DECLARE
    -- Declare a variable to store user input
    n NUMBER;
    result NUMBER;

    -- Function to calculate factorial using recursion
    FUNCTION factorial(num NUMBER)
    RETURN NUMBER
    IS
    BEGIN
        IF num = 0 THEN
            RETURN 1;  -- Base case: factorial of 0 = 1
        ELSE
            RETURN num * factorial(num - 1);  -- Recursive call
        END IF;
    END;

BEGIN
    -- Take input from user
    n := &n;

    -- Call the function
    result := factorial(n);

    -- Display the result
    DBMS_OUTPUT.PUT_LINE('Number = ' || n);
    DBMS_OUTPUT.PUT_LINE('Factorial = ' || result);
END;
/



✅ Explanation:

| Step                               | Description                   |
| ---------------------------------- | ----------------------------- |
| FUNCTION factorial                 | Declares a recursive function |
| IF num = 0 THEN RETURN 1;          | Base case for recursion       |
| RETURN num * factorial(num - 1);   | Recursive call                |
| n := &n;                           | Accepts input from the user   |
| DBMS_OUTPUT.PUT_LINE               | Displays output               |


💡 Sample Run:

When you execute the program in Oracle SQL or SQL*Plus:

Enter value for n: 5


✅ Output:

Number = 5
Factorial = 120

🧩 How Recursion Works (for n = 5):
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1
= 120

      
`
    },
    {
      id: 6,
      question: "6. Write a PL/SQL program to generate Fibonacci series using functions",
      answer: "",
      codeExample: `
PL/SQL Program — Fibonacci Series Using Function


DECLARE
    n NUMBER;       -- input (non-negative)
    
    -- Recursive function matching: fib(0)=0, fib(1)=1
    FUNCTION fib(num NUMBER) RETURN NUMBER IS
    BEGIN
        IF num < 0 THEN
            RETURN NULL; -- invalid
        ELSIF num = 0 THEN
            RETURN 0;
        ELSIF num = 1 THEN
            RETURN 1;
        ELSE
            RETURN fib(num - 1) + fib(num - 2);
        END IF;
    END;

BEGIN
    -- Get user input
    n := &n; -- enter non-negative integer

    IF n < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Please enter a non-negative integer.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Fibonacci numbers from 0 to ' || n || ':');
        FOR i IN 0..n LOOP
            DBMS_OUTPUT.PUT(fib(i) || ' ');
        END LOOP;
        DBMS_OUTPUT.NEW_LINE;
        DBMS_OUTPUT.PUT_LINE('fibonacci(' || n || ') = ' || fib(n));
    END IF;
END;
/


Example Run:
If you input n = 7, output will be:

Fibonacci numbers from 0 to 7:
0 1 1 2 3 5 8 13 
fibonacci(7) = 13



-----------------------------------------------------------------------------------

if you want to understand how the Fibonacci function works step-by-step, here’s a breakdown:

🧮 Recursive Formula
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
fibonacci(0) = 0
fibonacci(1) = 1

Example: fibonacci(7)
fibonacci(7)
= fibonacci(6) + fibonacci(5)
= (fibonacci(5) + fibonacci(4)) + (fibonacci(4) + fibonacci(3))
= ((fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2))) 
  + ((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1)))
= (((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))) 
   + ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))))
  + (((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))) 
     + ((fibonacci(1) + fibonacci(0)) + (fibonacci(0) + fibonacci(-1))))


Now, let’s simplify step by step (using base cases):

fibonacci(0) = 0
fibonacci(1) = 1

So,

fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8
fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13

✅ Final Answer
fibonacci(7) = 13

Step Summary
fibonacci(7) = fibonacci(6) + fibonacci(5)
              = (8) + (5)
              = 13



      `
    },
    {
      id: 7,
      question: "7. Write a program to Create a procedure to check if the number is prime.",
      answer: "",
      codeExample: `

✅ PL/SQL Code


SET SERVEROUTPUT ON;                           //display output from DBMS_OUTPUT.PUT_LINE commands. Without this, you won’t see any printed messages.

DECLARE
    n NUMBER;

    -- Procedure to check if number is prime
    PROCEDURE check_prime(num IN NUMBER) IS       // the NUMBER id like a data type of num
        i NUMBER;
        flag BOOLEAN := TRUE;
    BEGIN
        IF num <= 1 THEN
            DBMS_OUTPUT.PUT_LINE(num || ' is NOT a prime number.');        // -> || is the string concatenation operator (it joins text and variables together).
        ELSE                                                   // sqrt(9)=3   //floor is always returns small integer value like 12.9 = 12, -12.9 = -13
            FOR i IN 2 .. FLOOR(SQRT(num)) LOOP               // sqrt(7)=2.6457, floor(2.6457)=2, sqrt() is returns the square root of a number. 
                IF MOD(num, i) = 0 THEN                       // mod(10,3)=1, mod(10,5)=0     
                    flag := FALSE;
                    EXIT;
                END IF;
            END LOOP;

            IF flag THEN
                DBMS_OUTPUT.PUT_LINE(num || ' is a PRIME number.');
            ELSE
                DBMS_OUTPUT.PUT_LINE(num || ' is NOT a prime number.');
            END IF;
        END IF;
    END;

BEGIN
    -- Get input number from user
    n := &n;   -- Example: Enter 7
    check_prime(n);
END;
/



📘 Example Outputs

Input:

Enter value for n: 7

Output:

7 is a PRIME number.



Input:

Enter value for n: 12

Output:

12 is NOT a prime number.


--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

        If we already use SQRT(num), why do we still need FLOOR()?

🔸 1. What SQRT(num) returns

sqrt() returns a decimal (floating-point) value.

Example:

SQRT(25) = 5
SQRT(10) = 3.162277...
SQRT(9) = 3


So for numbers that are not perfect squares, SQRT(num) gives a decimal value like 3.162.


-----------------------------------



🔹 SQRT(num):

SQRT means square root.

Example: SQRT(9) = 3, SQRT(16) = 4.

In prime number checking, you only need to test divisibility up to the square root of the number, not beyond.

Because:

If a number has a factor larger than its square root, the other factor must be smaller — so you’ve already checked it.

Example:
To check 25, you only test 2, 3, 4, 5 → because 25 = 5 × 5.



🔹 FLOOR()

FLOOR() returns the largest integer less than or equal to a number (removes decimals).

Example:

FLOOR(4.9) = 4
FLOOR(3.2) = 3


So if SQRT(num) = 4.47, FLOOR(SQRT(num)) = 4.

That means the loop will stop at 4.


🔹 MOD(num, i)

MOD(a, b) returns the remainder when a is divided by b.

Example:

MOD(10, 3) = 1   (since 10 ÷ 3 = 3 remainder 1)
MOD(10, 5) = 0   (since 10 ÷ 5 = 2 remainder 0)



--------------------------------------------------------------------------------------------


🧠 1. What is a Procedure?

👉 A procedure is like a small program inside your database.
It performs some work — for example:

Checking if a number is prime

Adding new data

Showing student marks

Calculating total salary



🎯 2. Why do we use a Procedure?

Because sometimes we need to do the same work again and again.
Instead of writing the same code every time,
we write it once inside a procedure and then call it whenever needed.

✅ Example in real life:

Think of a procedure like a machine in your shop.

You build the machine once.

Then whenever you need it, you just press a button — it works for you.

Same way —
in PL/SQL, you create a procedure once,
and then call it anytime to do that job automatically.


💻 3. How a Procedure Works (simple view)

When you create a procedure:
  You give it a name
  You tell it what to do

When you run (call) it:
  It executes those steps automatically.


⚖️ Differences Between Procedure and Function
| Feature            | Procedure                                             | Function                                                   |
| -------------------| ----------------------------------------------------- | ---------------------------------------------------------- |
| Purpose            | To perform a task (e.g., check prime, display result) | To perform a task and return a value                       |
| Returns a value?   | ❌ No                                                 | ✅ Yes (using RETURN)                                     |
| How it is called   | Called using a block: BEGIN ... END;                  | Called inside an expression like x := function_name(5);    |
| Used in SQL query? | ❌ Usually No                                         | ✅ Can be used in SQL SELECT statements                   |
| Example use        | Checking if number is prime, printing messages        | Calculating factorial or total salary and returning result |

`
    },
    {
      id: 8,
      question: "8. Write a PL/SQL program to print Armstrong numbers",
      answer: "",
      codeExample: `
PL/SQL Program — Armstrong Numbers


SET SERVEROUTPUT ON;

DECLARE
    num NUMBER;         -- number to check
    n NUMBER;           -- copy of the number
    rem NUMBER;         -- remainder (each digit)
    sum NUMBER;         -- sum of cubes of digits
BEGIN
    DBMS_OUTPUT.PUT_LINE('Armstrong numbers between 1 and 1000 are:');

    FOR num IN 1..1000 LOOP
        n := num;
        sum := 0;

        -- separate digits and calculate cube of each digit
        WHILE n > 0 LOOP
            rem := MOD(n, 10);            -- get last digit
            sum := sum + (rem * rem * rem); -- cube of digit and add
            n := TRUNC(n / 10);           -- remove last digit
        END LOOP;

        -- check if sum equals original number
        IF sum = num THEN
            DBMS_OUTPUT.PUT_LINE(num);
        END IF;
    END LOOP;
END;
/


📘 Output

Armstrong numbers between 1 and 1000 are:
1
153
370
371
407


-----------------------------------------------------------------------------------

what is Armstrong Number

💡 Definition:

An Armstrong Number (also called a Narcissistic Number) is a number that is equal to the sum of the cubes of its digits (for a 3-digit number).

In general:

For an n-digit number, each digit is raised to the power of n,
and the sum of those powers equals the original number.

🧠 Example 1:

153

Let’s break it down:
| Digit   | Cube (³)                 |
| ------- | ------------------------ |
| 1       | 1³ = 1                   |
| 5       | 5³ = 125                 |
| 3       | 3³ = 27                  |
| Sum     | 1 + 125 + 27 = 153 ✅    |

So 153 = 153, hence it is an Armstrong number.

-------------

📘 Why it’s called “cube”

It comes from geometry:

If you make a cube (a 3D box) with each side of length n,

The volume of the cube = n × n × n = n³.

So in math, raising to the power of 3 is called cubing.

--------------------------------------------------------------------------------------


💡 The truth is:

MOD() always returns the remainder — that’s its real purpose.
But in this Armstrong number program, the remainder happens to be the last digit of the number.

Let’s understand why 👇

Take an example:
Suppose n = 153

    rem := MOD(n, 10);


➡️ Here,
MOD(153, 10) means remainder when 153 is divided by 10
→ 153 ÷ 10 = 15 remainder 3

✅ So rem = 3 — and that’s the last digit of 153.

Then we remove that last digit:
    n := TRUNC(n / 10);

➡️ 153 ÷ 10 = 15.3 → TRUNC(15.3) = 15





1️⃣ What TRUNC() does

TRUNC(x) → Removes the decimal part, no matter if the number is positive or negative.
It simply chops off everything after the decimal.

TRUNC(x) → means truncate, i.e., remove the decimal (fractional) part of a number.
It does not round, it just cuts off the decimal part.

✅ Examples:

TRUNC(12.9)   → 12
TRUNC(12.1)   → 12
TRUNC(-12.9)  → -12
TRUNC(-12.1)  → -12



⚙️ 2️⃣ What FLOOR() does                 //floor is always returns small integer value like 12.9 = 12, -12.9 = -13

FLOOR(x) → Rounds down to the nearest whole number, toward −infinity (the smaller number).

✅ Examples:

FLOOR(12.9)   → 12
FLOOR(12.1)   → 12
FLOOR(-12.1)  → -13   ← notice this!
FLOOR(-12.9)  → -13


      `
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },    
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>SQL Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
