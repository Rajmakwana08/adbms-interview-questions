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
      question: "1. Difference between Data and Information.",
      answer: "",
      codeExample: `
🟩 Difference between Data and Information

| Data                            | Information                                      |
| ------------------------------- | ------------------------------------------------ |
| Raw facts and figures.          | Processed and meaningful data.                   |
| Has no clear meaning by itself. | Has meaning and can be used for decision-making. |
| Example: 85, 90, 78             | Example: “The average marks are 84.”             |
| Input for processing.           | Output after processing.                         |
| Can be unorganized.             | Always organized and structured.                 |


🧠 In short:

Data is raw and unprocessed.
Information is data that has been processed into a useful form.

      `
    },
    {
      id: 2,
      question: "2. Explain DBMS vs File System.",
      answer: "",
      codeExample: `
🟩 Difference between DBMS and File System

| DBMS (Database Management System)                     | File System                                                   |
| ------------------------------------------------------| --------------------------------------------------------------|
| Stores data in tables using a database.               | Stores data in files on the computer.                         |
| Provides data security and integrity.                 | No built-in security — data can be easily changed or lost.    |
| Reduces data redundancy (same data not stored twice). | High data redundancy (same data may be stored in many files). |
| Supports data sharing among multiple users.           | Difficult to share data among many users.                     |
| Allows easy backup and recovery.                      | Manual backup required.                                       |
| Uses SQL for data management.                         | No query language — user must write code manually.            |


🧠 In short:

A DBMS is an advanced system that stores, manages, and secures data efficiently.
A File System is a simple method of storing data in files without much control or features.

      `
    },
    {
      id: 3,
      question: "3. List and explain Functions of DBMS.",
      answer: "",
      codeExample: `
🟩 Functions of DBMS

  A Database Management System (DBMS) performs several important functions to store, manage, and control data efficiently.


1️⃣ Data Storage Management

  DBMS stores data in tables inside databases.
  It handles how data is saved, organized, and retrieved from storage devices.
  🧩 Example: Saving student details in a database.


2️⃣ Data Retrieval

Allows users to fetch or view specific data using queries (like SQL).

  Makes data access fast and easy.
  🧩 Example: SELECT * FROM students WHERE grade = 'A';


3️⃣ Data Manipulation

  Supports operations like insert, update, delete, and search on data.
  🧩 Example: Adding a new record of a student.


4️⃣ Data Security

  Controls who can access or modify the data using authentication (like username & password) and authorization (permissions).


5️⃣ Backup and Recovery

  Automatically creates backups and helps recover data after system failure or crash.


6️⃣ Data Integrity

  Ensures accuracy and consistency of data using rules (like primary key, foreign key, etc.).
  🧩 Example: A student cannot have a duplicate roll number.


7️⃣ Data Independence

  Changes in database structure do not affect application programs.
  🧩 Example: Changing column size does not break your program.


8️⃣ Concurrency Control

  Allows multiple users to access data at the same time without conflict.
  🧩 Example: Two users updating different student records simultaneously.


✅ In short:
  DBMS manages data efficiently by storing, retrieving, securing, and maintaining it — ensuring accuracy and reliability.
      `
    },
    {
      id: 4,
      question: "4. Explain Three-Schema Architecture with diagram.",
      answer: "",
      codeExample: `
🟩 Three-Schema Architecture of DBMS

The Three-Schema Architecture describes how a database system is structured into three levels —
  1️⃣ External Schema
  2️⃣ Conceptual Schema
  3️⃣ Internal Schema

This model was proposed by ANSI/SPARC to separate user views, logical structure, and physical storage.

🧭 Diagram (Simple Text Format)
        +-----------------------------+
        |     External Level          |
        | (User Views / Applications) |
        +-------------↑---------------+
                      |
        +-------------|---------------+
        |     Conceptual Level        |
        | (Logical structure of DB)   |
        +-------------↑---------------+
                      |
        +-------------|---------------+
        |     Internal Level          |
        | (Physical storage of data)  |
        +-----------------------------+



🧩 1️⃣ External Level (View Level)

  It is the top level.
  Shows how users view the data.
  Each user/application can have a different view of the same database.

🧠 Example:
  A student sees only marks and name, while the admin sees all details (fees, address, etc.).



🧩 2️⃣ Conceptual Level (Logical Level)

  Describes the structure of the entire database.   
  Defines entities, attributes, relationships, and constraints.
  It hides how data is stored physically.

🧠 Example:
  Defining tables like Students(roll_no, name, marks) and Courses(course_id, course_name).



🧩 3️⃣ Internal Level (Physical Level)

  The lowest level.
  Deals with how data is actually stored in memory (files, indexes, etc.).
  Focuses on storage space, access paths, and performance.

🧠 Example:
  Data stored in hard disks, indexes, or data blocks.


💡 Main Advantage

✅ Provides data abstraction — each level hides details of the next level.
✅ Makes database easier to manage and modify without affecting users.


🧠 In short:

External: User view
Conceptual: Logical view
Internal: Physical storage view
      `
    },
    {
      id: 5,
      question: "5. Define Data Models and explain their types.",
      answer: "",
      codeExample: `
🟩 Definition: Data Model

A Data Model is a way to describe how data is stored, connected, and processed inside a database.
It provides a framework to design the structure of the database and relationships among data.

🧠 In short:
    A data model defines how data is represented and organized in the database.

🟦 Types of Data Models


1️⃣ Hierarchical Data Model

  Data is organized in a tree-like structure.
  Each record has one parent and many children (one-to-many relationship).
  Uses parent-child relationship.

🧩 Example:

Company
 ├── Department
 │     ├── Employee1
 │     └── Employee2


🟢 Used in: IBM’s Information Management System (IMS)

Diagram:
             Company
                |
       +--------+--------+
       |                 |
   Department1       Department2
       |                 |
   +---+---+         +---+---+
   |       |         |       |
Employee1 Employee2 Employee3 Employee4


  A Company has many Departments,
  Each Department has many Employees.
🧠 Used in: IBM IMS



2️⃣ Network Data Model

  Data is organized using pointers or links.
  A record can have multiple parents and children (many-to-many relationship).
  More flexible than hierarchical model.

🧩 Example:
A student can enroll in many courses, and each course can have many students.

Diagram:
   +-----------+         +-----------+
   |  Student  | <-----> |  Course   |
   +-----------+         +-----------+
   | S_ID      |         | C_ID      |
   | S_Name    |         | C_Name    |
   +-----------+         +-----------+

Example:
  A Student can enroll in many Courses.
  A Course can have many Students.

🧠 Used in: IDMS (Integrated Data Management System)



3️⃣ Relational Data Model

  Data is stored in tables (relations) with rows and columns.
  Each table has a primary key.
  Uses SQL to manage data.
  Most commonly used model.

🧩 Example:

| Student_ID | Name | Course |
| ---------- | ---- | ------ |
| 101        | Raj  | DBMS   |
| 102        | Neha | Java   |

Example:
  Data stored in tables.
  Each record (row) is unique and identified by StudentID.
🧠 Used in: MySQL, Oracle, PostgreSQL



4️⃣ Entity-Relationship (ER) Model

  Represents data using entities, attributes, and relationships.
  Usually drawn as ER diagrams.
  Used in database design phase.

Example:

Entity: STUDENT, COURSE
Relationship: enrolls_in
Attributes: RollNo, Name, CourseID, Title

Diagram:

 [STUDENT] --------< enrolls_in >-------- [COURSE]
     |                                        |
  (RollNo, Name)                       (CourseID, Title)

🧠 Used for: Database schema design before creating tables


5️⃣ Object-Oriented Data Model

  Data is stored as objects, similar to OOP (Object-Oriented Programming).
  Supports inheritance, encapsulation, and polymorphism.
  Used in advanced applications.

🧩 Example:
A Student object with properties (name, age) and methods (display()).

Diagram:

          +------------------+
          |     Person       |
          |------------------|
          | name, age        |
          +------------------+
                 ^
                 |
     +----------------------+
     |      Student         |
     |----------------------|
     | rollNo, course       |
     | displayDetails()     |
     +----------------------+

Example:

  Class Person → Parent class
  Class Student → Child class inherits Person
  Stores data as objects with attributes and methods

🧠 Used in: Object databases (e.g., db4o, ObjectDB)



🧠 In short summary:

| Type            | Structure     | Relationship Type        |
| --------------- | ------------- | ------------------------ |
| Hierarchical    | Tree          | One-to-Many              |
| Network         | Graph         | Many-to-Many             |
| Relational      | Table         | Relations via keys       |
| ER Model        | Diagram       | Entities & Relationships |
| Object-Oriented | Objects       | Inheritance & Methods    |

      `
    },
    {
      id: 6,
      question: "6. Explain Components of DBMS.",
      answer: "",
      codeExample: `
🟩 Components of DBMS

A Database Management System (DBMS) is made up of several components that work together to store, manage, and control access to data efficiently.


🧩 1️⃣ Hardware

  The physical devices used to store and run the database.
  Includes computers, servers, hard disks, and storage devices.

🧠 Example: Hard drive storing all student records.



🧩 2️⃣ Software

  The actual DBMS software (like MySQL, Oracle, SQL Server) and related programs.
  Controls how data is stored, retrieved, and updated.

🧠 Example: MySQL software that processes your SQL queries.



🧩 3️⃣ Data

  The main content stored in the database.
  Can be user data, metadata (data about data), or system data.

🧠 Example: Student table data (roll_no, name, marks).



🧩 4️⃣ Users

People who interact with the database.
There are 3 main types:

  Database Administrator (DBA): Manages the database.
  Application Programmer: Writes code to access data.
  End User: Uses the application to view or enter data.

🧠 Example: Teacher entering marks, student viewing results.



🧩 5️⃣ Procedures

  Instructions and rules for using and managing the database.
  Define how data should be stored, accessed, and updated safely.

🧠 Example: Backup procedure or data entry guidelines.



🧩 6️⃣ Database Access Language

  A special language used to communicate with the DBMS.
  In most systems, this is SQL (Structured Query Language).

🧠 Example:
  SELECT * FROM Students;



🧠 In short summary:
| Component       | Description         | Example                   |
| --------------- | ------------------- | ------------------------- |
| Hardware        | Physical devices    | Hard disk, server         |
| Software        | DBMS & programs     | Oracle, MySQL             |
| Data            | Stored information  | Tables, records           |
| Users           | People using DB     | DBA, programmer, end user |
| Procedures      | Rules & methods     | Backup process            |
| Access Language | Used to access data | SQL                       |


✅ In short:

A DBMS works through hardware, software, data, users, procedures, and language to manage databases efficiently.

      `
    },
    {
      id: 7,
      question: "7. Explain Advantages and Disadvantages of file-based system.",
      answer: "",
      codeExample: `
🟩 File-Based System

A File-Based System is the traditional method of storing data in separate files on a computer.
Each application manages its own data file (e.g., text files, spreadsheets).

🧠 Example:
A library has separate files for books.txt, members.txt, and loans.txt.

🟢 Advantages of File-Based System

1️⃣ Simple and Easy to Use
  Easy to create and manage using basic programs like C, C++, or Excel.


2️⃣ Low Cost
  No need for expensive database software — just file storage.


3️⃣ Faster for Small Data
  Works quickly for small amounts of data since no DBMS overhead.


4️⃣ Backup is Easy
  Files can be easily copied or moved for backup.


5️⃣ Less Hardware Requirement
  Works on systems with limited resources (no database server needed).

🔴 Disadvantages of File-Based System

1️⃣ Data Redundancy
  Same data may be stored in multiple files → wastes space.


2️⃣ Data Inconsistency
  When the same data is updated in one file but not in others → mismatch.


3️⃣ Lack of Security
  No built-in protection — anyone can access or modify files.


4️⃣ Difficult Data Sharing
  Hard to share data between applications or multiple users.


5️⃣ No Data Relationships
  Cannot easily link data between files (like in relational databases).


6️⃣ Manual Backup and Recovery
  Must handle backup and restore manually if data is lost.


7️⃣ Poor Data Integrity
  No rules (like primary key or constraints) to keep data accurate.

🧠 In short:

Advantages: Simple, cheap, easy for small data.
Disadvantages: Redundancy, no security, no sharing, inconsistency.

      `
    },
    {
      id: 8,
      question: "8. What is Data Independence and its types?",
      answer: "",
      codeExample: `
🟩 What is Data Independence?

Data Independence means the ability to change the structure of the database at one level without affecting the other levels.
It helps to separate data storage and data usage, so that users don’t have to worry about how data is actually stored.


🧠 In simple words:
  You can change the way data is stored without changing your program.


📊 Data Independence comes from the Three-Schema Architecture:

    External Level  ←→  Conceptual Level  ←→  Internal Level


There are two types of Data Independence 👇


🟢 1️⃣ Logical Data Independence

  Ability to change the conceptual schema (logical structure) without changing the external views or application programs.
  In other words, users are not affected if you change the database design.

🧩 Example:
Adding a new column “email” to the Student table doesn’t require changes in programs that don’t use it.

🧠 Goal: Protect users from changes in the logical design of data.




🟣 2️⃣ Physical Data Independence

  Ability to change the internal schema (storage structure) without changing the conceptual schema.
  Means you can modify how data is stored (e.g., using indexes or files) without affecting database structure.

🧩 Example:
Storing data on SSD instead of HDD or creating an index — but table design remains the same.

🧠 Goal: Protect users and programs from changes in physical storage.


---------------------------

🧠 In short summary:

| Type                       | Definition                                                   | Example                                  |
| -------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Logical Data Independence  | Change in logical structure doesn’t affect user view.        | Add/remove column in table.              |
| Physical Data Independence | Change in physical storage doesn’t affect logical structure. | Move data to new hard disk or add index. |


✅ In short:
  Data Independence helps in making databases flexible, easy to maintain, and less dependent on hardware or structure.

      `
    },
    {
      id: 9,
      question: "9. What are the types of databases?",
      answer: "",
      codeExample: `
🟩 Types of Databases

A database is an organized collection of data that can be easily accessed, managed, and updated.
There are different types of databases based on data storage, structure, and usage.


🟢 1️⃣ Centralized Database

  All data is stored in one central location.
  Users from different places access it through a network.

🧠 Example:
A bank stores all customer data in one central server.

🟢 Advantage: Easy to manage and backup.
🔴 Disadvantage: If the central server fails, the system stops working.


🟣 2️⃣ Distributed Database

  Data is stored in multiple locations (servers) connected by a network.
  Looks like one single database to users.

🧠 Example:
Google or Amazon — data is stored across many servers worldwide.

🟢 Advantage: Fast access and fault tolerance.
🔴 Disadvantage: Complex to maintain and synchronize.


🔵 3️⃣ Relational Database (RDBMS)

  Data is stored in tables (rows and columns).
  Tables are related using keys (primary, foreign).
  Uses SQL to manage data.

🧠 Example: MySQL, Oracle, PostgreSQL.

🟢 Advantage: Easy to use and ensures data integrity.


🟠 4️⃣ Object-Oriented Database

  Data is stored as objects (like in OOP).
  Each object has data (attributes) and functions (methods).

🧠 Example: ObjectDB, db4o.

🟢 Advantage: Works well with object-oriented programming languages.


🟤 5️⃣ Hierarchical Database

  Data is arranged in a tree-like structure (parent-child relationship).
  One parent can have many children.

🧠 Example: IBM Information Management System (IMS).

🟢 Advantage: Fast access for one-to-many data.
🔴 Disadvantage: Difficult to modify structure.


🟣 6️⃣ Network Database

  Similar to hierarchical but allows many-to-many relationships.
  Uses pointers to connect records.

🧠 Example: Integrated Data Store (IDS).

🟢 Advantage: Flexible structure.
🔴 Disadvantage: Complex to design.


🟢 7️⃣ NoSQL Database

  Used for unstructured or big data.
  Does not use tables like relational databases.
  Types: Key-Value, Document, Column, Graph.

🧠 Example: MongoDB, Cassandra, Redis.
🟢 Advantage: Scalable and fast for large data.


🧠 In short summary:

| Type            | Structure / Storage      | Example        |
| --------------- | ------------------------ | -------------- |
| Centralized     | One central location     | Bank database  |
| Distributed     | Multiple connected sites | Google servers |
| Relational      | Tables (SQL)             | MySQL          |
| Object-Oriented | Objects                  | ObjectDB       |
| Hierarchical    | Tree structure           | IMS            |
| Network         | Graph links              | IDS            |
| NoSQL           | Unstructured data        | MongoDB        |


✅ In short:
Databases can be centralized or distributed, and can store data in tables, trees, graphs, or documents depending on the need.
      `
    },
    {
      id: 10,
      question: "10. Explain Characteristics of Data in Database.",
      answer: "",
      codeExample: `
🟩 Characteristics of Data in a Database

Data stored in a database has some important characteristics that make it useful, reliable, and easy to manage.


🟢 1️⃣ Accuracy

  Data must be correct and error-free.
  Ensures reliable decision-making.

🧠 Example: A student’s marks should be exactly as entered in exams.


🟣 2️⃣ Consistency

  Data should be uniform across the database.
  Same information should not conflict in different places.

🧠 Example: If a student’s grade is “A” in one table, it should not show “B” in another table.


🔵 3️⃣ Completeness

  All required data must be present.
  Missing data can cause errors in processing.

🧠 Example: Every student record should have roll number, name, and marks.


🟠 4️⃣ Timeliness / Up-to-date

  Data should be current and updated regularly.
  Outdated data may lead to wrong decisions.

🧠 Example: Updated attendance of students every day.


🟤 5️⃣ Uniqueness / Non-redundancy

  Each data item should be stored only once.
  Avoids unnecessary duplication.

🧠 Example: Student ID should be unique — no two students have the same ID.


🟢 6️⃣ Validity / Integrity

  Data must satisfy certain rules or constraints.
  Ensures data is meaningful and logical.

🧠 Example: Marks of a student cannot be negative; email should have “@”.


🟠 7️⃣ Accessibility

  Data should be easily retrievable when needed by authorized users.

🧠 Example: Teachers can quickly access student marks using queries.


🧠 In short summary:
| Characteristic     | Meaning / Example             |
| ------------------ | ----------------------------- |
| Accuracy           | Correct and error-free        |
| Consistency        | Uniform across database       |
| Completeness       | All required data present     |
| Timeliness         | Up-to-date information        |
| Uniqueness         | No duplication, unique keys   |
| Integrity          | Follows rules and constraints |
| Accessibility      | Easy to retrieve when needed  |

✅ In short:

Data in a database should be accurate, consistent, complete, timely, unique, valid, and easily accessible to be useful and reliable.
      `
    },
    {
      id: 11,
      question: "11. Explain the structure of PL/SQL block.",
      answer: "",
      codeExample: `
🟩 PL/SQL Block Structure

A PL/SQL program is written as a block of code.
It has three main sections:

DECLARE  -- Optional
   -- Declaration of variables, constants, cursors
BEGIN    -- Mandatory
   -- Executable statements (logic of the program)
EXCEPTION  -- Optional
   -- Error handling statements
END;     -- Mandatory



🟢 1️⃣ Declaration Section (DECLARE)

  Optional section.
  Used to declare variables, constants, cursors, or types.
  Only variables that are declared here can be used in the BEGIN section.

🧩 Example:

DECLARE
   v_name VARCHAR2(20);
   v_age  NUMBER;



🟣 2️⃣ Execution Section (BEGIN)

  Mandatory section.
  Contains all the PL/SQL statements to perform operations like calculations, queries, updates, etc.

🧩 Example:

BEGIN
   v_name := 'Raj';
   v_age := 20;
   DBMS_OUTPUT.PUT_LINE('Name: ' || v_name || ', Age: ' || v_age);
END;



🟤 3️⃣ Exception Section (EXCEPTION)

  Optional section.
  Handles errors and exceptions that occur in the execution section.
  Ensures program does not terminate abruptly.

🧩 Example:

EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Error: Division by zero!');
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Some other error occurred.');

🟠 Complete Example of PL/SQL Block

DECLARE
   v_num1 NUMBER := 10;
   v_num2 NUMBER := 0;
   v_result NUMBER;
BEGIN
   v_result := v_num1 / v_num2;  -- This will cause division by zero
   DBMS_OUTPUT.PUT_LINE('Result: ' || v_result);
EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Cannot divide by zero!');
END;


Output:
Cannot divide by zero!


🧠 In short summary
| Section     | Purpose                               | Mandatory/Optional     |
| ----------- | ------------------------------------- | ---------------------- |
| DECLARE     | Declare variables, constants, cursors | Optional               |
| BEGIN       | Executable statements                 | Mandatory              |
| EXCEPTION   | Handle runtime errors                 | Optional               |
| END         | End of PL/SQL block                   | Mandatory              |


✅ Memory Tip for Exams:

“D-B-E-E” → Declare, Begin, Execute, Exception, End

      `
    },
    {
      id: 12,
      question: "12. Write syntax and example for cursor declaration and working.",
      answer: "",
      codeExample: `
🟩 What is a Cursor?

A cursor is a pointer that allows you to fetch rows from a result set one by one.
It is used when a query returns more than one row.

🟢 Types of Cursors

Implicit Cursor – Automatically created by PL/SQL for simple queries (like SELECT INTO).

Explicit Cursor – Defined by the programmer for queries returning multiple rows.

Here we focus on Explicit Cursor.

🟦 Syntax of Explicit Cursor
-- 1. Cursor Declaration
CURSOR cursor_name IS
   SELECT_statement;

-- 2. Cursor Opening
OPEN cursor_name;

-- 3. Fetching Data
FETCH cursor_name INTO variable1, variable2, ...;

-- 4. Cursor Closing
CLOSE cursor_name;



🟢 Example of Cursor

DECLARE
   -- Cursor Declaration
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Variables to hold fetched data
   v_id employees.emp_id%TYPE;              //%TYPE means: take the same data type as that column in the table.
   v_name employees.emp_name%TYPE;            So if emp_id is a NUMBER and emp_name is VARCHAR2(50), these variables match automatically.
BEGIN
   -- Open the cursor
   OPEN emp_cursor;

   -- Loop to fetch all rows
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit loop when no more rows
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;

   -- Close the cursor
   CLOSE emp_cursor;
END;



🧠 Key Points

%NOTFOUND → Returns TRUE if no more rows to fetch.
OPEN → Starts the cursor.
FETCH → Retrieves one row at a time.
CLOSE → Releases resources used by cursor.

🟠 In short:

Cursor = Pointer to handle multiple rows.
Steps: Declare → Open → Fetch → Close
      `
    },
    {
      id: 13,
      question: "13. Explain the working of cursor with example.",
      answer: "",
      codeExample: `
🟩 Working of Cursor

A cursor works like a pointer that goes through the rows returned by a query one by one.


Steps to work with an explicit cursor:

1️⃣ Declare the Cursor – Define the query and name the cursor.
2️⃣ Open the Cursor – Establish the result set for processing.
3️⃣ Fetch Data – Retrieve rows one by one from the cursor into variables.
4️⃣ Check for End – Use %NOTFOUND to know if all rows are fetched.
5️⃣ Close the Cursor – Release resources used by the cursor.



🟢 Flow Diagram of Cursor Working

Declare Cursor
      ↓
Open Cursor
      ↓
Fetch Row into Variables
      ↓
Check %NOTFOUND → If TRUE, Exit Loop
      ↓
Process Row (e.g., display values)
      ↓
Repeat Fetch until all rows are processed
      ↓
Close Cursor



🟦 Example of Cursor Working

DECLARE
   -- Step 1: Declare cursor
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Variables to store fetched data
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   -- Step 2: Open cursor
   OPEN emp_cursor;

   -- Step 3 & 4: Fetch and loop through all rows
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit when no more rows

      -- Step 5: Process row
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;

   -- Step 6: Close cursor
   CLOSE emp_cursor;
END;


🧠 Explanation in Simple Words

  Cursor points to the first row.
  Fetch gets the data of that row into variables.
  Loop moves cursor to the next row until all rows are processed.
  Close releases resources.


🟠 Short Exam Note

Cursor working = Declare → Open → Fetch → Process → Loop → Close

      `
    },
    {
      id: 14,
      question: "14. Differentiate between cursor and trigger.",
      answer: "",
      codeExample: `
| Cursor                                                     | Trigger                                                                                  |
| -----------------------------------------------------------| ---------------------------------------------------------------------------------------- |
| A pointer to fetch rows from a query result set one by one.| A special procedure that automatically executes when a specific event occurs on a table. |
| Manually controlled by the programmer.                     | Automatically executed by the database system.                                           |
| Used to process multiple rows returned by a query.         | Used to enforce rules, constraints, or audit changes.                                    |
| Works when explicitly opened, fetched, and closed.         | Works before or after insert, update, or delete operations.                              |
| Local to the PL/SQL block where it is declared.            | Defined at table or view level and persists in the database.                             |
| Example: Fetch all student records to display one by one.  | Example: Automatically update last_modified column when a record is updated.             |


🟢 Cursor Example

DECLARE
   CURSOR c1 IS SELECT emp_id, emp_name FROM employees;
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   OPEN c1;
   LOOP
      FETCH c1 INTO v_id, v_name;
      EXIT WHEN c1%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;
   CLOSE c1;
END;



🟢 Trigger Example

CREATE OR REPLACE TRIGGER update_timestamp    //if triger is already exist than replace
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
   :NEW.last_modified := SYSDATE;            //update the last_modified fillds set (SYSDATE) system current date 
END;


---------------------------------------------------------------------------------------

:NEW and :OLD — Special Variables

Oracle provides two pseudo-records inside triggers:
| Variable | Refers to                                                | Used in                           |
| -------- | -------------------------------------------------------- | --------------------------------- |
| :OLD     | The original (existing) value in the table before update | BEFORE or AFTER UPDATE            |
| :NEW     | The new value that will be written to the table          | BEFORE or AFTER INSERT/UPDATE     |


🧠 What is SYSDATE?

👉 SYSDATE is a built-in Oracle function that returns the current date and time of the database server system.

It includes:

  Date (day, month, year)
  Time (hour, minute, second)
`
    },
    {
      id: 15,
      question: "15. Explain types of triggers with syntax.",
      answer: "",
      codeExample: `
🟩 Trigger in PL/SQL

A trigger is a block of PL/SQL code that automatically executes (fires) when a specific event occurs on a table or view.
👉 Example: When a new record is inserted, updated, or deleted.

🟢 Types of Triggers

There are two main classifications of triggers:


🟠 1. Based on Timing
| Type               | Explanation                                                                               | Syntax Example                                                                                                                                       |
| -------------------| ------------------------------------------------------------------------------------------| -----------------------------------------------------------------------------------------------------------------------------------------------------|
| BEFORE Trigger     | Executes before the triggering event (like before inserting, updating, or deleting data). | sql CREATE OR REPLACE TRIGGER before_emp_insert BEFORE INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Before Insert'); END;            |
| AFTER Trigger      | Executes after the triggering event.                                                      | sql CREATE OR REPLACE TRIGGER after_emp_insert AFTER INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('After Insert'); END;               |
| INSTEAD OF Trigger | Used mainly for views, replaces the triggering action with custom logic.                  | sql CREATE OR REPLACE TRIGGER instead_of_emp_update INSTEAD OF UPDATE ON emp_view FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Instead of Update'); END; |



🟢 2. Based on Event
| Type           | Explanation                      | Syntax Example                                                                                                                      |
| ---------------| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------|
| INSERT Trigger | Fires when a record is inserted. | sql CREATE OR REPLACE TRIGGER trg_insert BEFORE INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Insert Trigger'); END; |
| UPDATE Trigger | Fires when a record is updated.  | sql CREATE OR REPLACE TRIGGER trg_update AFTER UPDATE ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Update Trigger'); END;  |
| DELETE Trigger | Fires when a record is deleted.  | sql CREATE OR REPLACE TRIGGER trg_delete BEFORE DELETE ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Delete Trigger'); END; |


🧠 In short:

  BEFORE Trigger → Runs before action.
  AFTER Trigger → Runs after action.
  INSTEAD OF Trigger → Used for views.
  INSERT / UPDATE / DELETE Triggers → Run on specific events.
`
    },
    {
      id: 16,
      question: "16. Write syntax of CREATE TRIGGER and DROP TRIGGER.",
      answer: "",
      codeExample: `
🟩 1️⃣ CREATE TRIGGER – Syntax

Used to create a new trigger in PL/SQL.

✅ Syntax:
CREATE [OR REPLACE] TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF}
{INSERT | UPDATE | DELETE}
ON table_name
[FOR EACH ROW]
BEGIN
   -- Trigger logic (what should happen)
END;


🟢 Example:
CREATE OR REPLACE TRIGGER trg_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
   DBMS_OUTPUT.PUT_LINE('Before inserting a new employee record');
END;


🧠 Explanation:
This trigger executes before inserting a new record into the employees table.



🟩 2️⃣ DROP TRIGGER – Syntax

Used to remove (delete) an existing trigger from the database.

✅ Syntax:
      DROP TRIGGER trigger_name;


🟢 Example:
      DROP TRIGGER trg_before_insert;

🧠 Explanation:
This command deletes the trigger named trg_before_insert from the database.


🧠 In Short:

  CREATE TRIGGER → To make a trigger.
  DROP TRIGGER → To delete a trigger.
  BEFORE | AFTER | INSTEAD OF → Defines when it should execute.

      `
    },
    {
      id: 17,
      question: "17. Explain advantages and disadvantages of triggers.",
      answer: "",
      codeExample: `
🟩 Advantages of Triggers

1️⃣ Automatic Execution
  Triggers run automatically when an event (INSERT, UPDATE, DELETE) happens — no need to call them manually.

2️⃣ Enforces Data Integrity
  Ensures valid and consistent data in tables (e.g., checking business rules before data insertion).

3️⃣ Maintains Audit Trail
  Keeps a history of changes automatically (e.g., who updated or deleted a record).

4️⃣ Reduces Repeated Code
  Common actions can be handled once in a trigger instead of writing the same code in multiple programs.

5️⃣ Cascading Actions
  Can perform related updates automatically in other tables (e.g., when deleting an employee, delete related records).


🔴 Disadvantages of Triggers

1️⃣ Difficult to Debug
  Since triggers run automatically, it’s hard to trace or find errors in them.

2️⃣ Hidden Logic
  Business logic in triggers is not always visible in the main code — making programs harder to understand.

3️⃣ Performance Overhead
  If too many triggers fire at once, they can slow down database operations.

4️⃣ Complex Maintenance
  Multiple triggers on one table can cause confusion and unexpected results.

5️⃣ Limited Control
  You cannot manually control trigger execution order (except with careful design).


🧠 In Short:

✅ Advantages: Auto execution, data integrity, audit, less code.
❌ Disadvantages: Hard to debug, hidden logic, slower performance.
      `
    },
    {
      id: 18,
      question: "18. Difference between explicit and implicit cursors.",
      answer: "",
      codeExample: `
🟩 Difference between Explicit and Implicit Cursor
    
| Explicit Cursor                                                    | Implicit Cursor                                                   |
| -------------------------------------------------------------------| ------------------------------------------------------------------|
| Declared manually by the programmer.                               | Created automatically by Oracle for every SQL statement.          |
| Used when a query returns multiple rows.                           | Used when a query returns only one row.                           |
| Requires explicit steps — DECLARE, OPEN, FETCH, and CLOSE.         | Oracle automatically opens, fetches, and closes it.               |
| Gives better control over fetching data.                           | Has less control, used for simple operations.                     |
| Example: Processing multiple employee records.                     | Example: Fetching one employee record using SELECT INTO.          |
| Uses attributes like %FOUND, %NOTFOUND, %ROWCOUNT, %ISOPEN.        | Uses similar attributes with prefix SQL%FOUND, SQL%NOTFOUND, etc. |



🟢 Example of Explicit Cursor

DECLARE
   CURSOR c1 IS SELECT emp_name FROM employees;
   v_name employees.emp_name%TYPE;
BEGIN
   OPEN c1;
   LOOP
      FETCH c1 INTO v_name;
      EXIT WHEN c1%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE(v_name);
   END LOOP;
   CLOSE c1;
END;


🟢 Example of Implicit Cursor

DECLARE
   v_name employees.emp_name%TYPE;
BEGIN
   SELECT emp_name INTO v_name FROM employees WHERE emp_id = 101;
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
END;

🧠 In short:

Explicit Cursor → You create and control it (for many rows).
Implicit Cursor → Oracle handles it automatically (for one row).
      `
    },
    {
      id: 19,
      question: "19. Explain PL/SQL block components with example.",
      answer: "",
      codeExample: `
🟩 PL/SQL Block

A PL/SQL block is the basic unit of a PL/SQL program.
It groups together related declarations and statements into one logical block.

🧠 Think of it like a small program inside Oracle.

🟢 Structure (Components) of a PL/SQL Block

A PL/SQL block has 3 main sections:

[1] Declaration Section   (Optional)
[2] Execution Section     (Mandatory)
[3] Exception Section     (Optional)



🔹 1️⃣ Declaration Section

Used to declare variables, constants, cursors, etc.
Starts with the keyword DECLARE.

📘 Example:

DECLARE
   emp_id NUMBER;
   emp_name VARCHAR2(30);



🔹 2️⃣ Execution Section

Contains the main logic — SQL and PL/SQL statements.
Starts with the keyword BEGIN and ends with END;.
This part must be present in every PL/SQL block.

📘 Example:

BEGIN
   emp_id := 101;
   emp_name := 'Raj';
   DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id);
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
END;



🔹 3️⃣ Exception Section

Handles errors or exceptions that may occur during execution.
Starts with the keyword EXCEPTION.

📘 Example:

EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An error occurred!');



🟦 Full Example of a PL/SQL Block

DECLARE
   emp_id NUMBER := 101;
   emp_name VARCHAR2(30) := 'Raj';
BEGIN
   DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id);
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An error occurred!');
END;


🧠 In short:
| Section     | Purpose                             |
| ------------| ----------------------------------- |
| Declaration | Define variables and constants      |
| Execution   | Write main logic and SQL statements |
| Exception   | Handle runtime errors               |
`
    },
    {
      id: 20,
      question: "20. Write a cursor-based stored procedure example.",
      answer: "",
      codeExample: `
  🟩 Cursor-Based Stored Procedure

A stored procedure is a named block of PL/SQL code stored in the database.
A cursor-based stored procedure uses a cursor to process multiple rows one by one from a query.


🟢 Example: Display all employee names using a cursor

CREATE OR REPLACE PROCEDURE display_employees IS
   -- Step 1: Declare cursor
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Step 2: Declare variables to hold fetched values
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   -- Step 3: Open the cursor
   OPEN emp_cursor;

   -- Step 4: Fetch each row using a loop
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit when no more rows
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ' | Name: ' || v_name);
   END LOOP;

   -- Step 5: Close the cursor
   CLOSE emp_cursor;
END;
/



🟦 To Execute the Procedure
BEGIN
   display_employees;
END;
/


🧠 Step-by-step Explanation

1️⃣ Declare Cursor → Defines which data to fetch (here, all employees).
2️⃣ Open Cursor → Executes the SQL query.
3️⃣ Fetch Cursor → Gets one row at a time into variables.
4️⃣ Loop → Repeats fetching until all rows are read.
5️⃣ Close Cursor → Frees the memory used by the cursor.


🟢 In short:

Cursor-based Stored Procedure = Stored Procedure + Cursor
→ Used to process multiple rows automatically.


---------------------------------------------------------------------------------------

what is Stored Procedure

🟩 Stored Procedure (in PL/SQL)

A Stored Procedure is a named block of PL/SQL code that is stored permanently in the database.
It can be executed (called) whenever needed to perform a specific task.

🧠 Think of it like a small reusable program saved inside the database.

🟢 Definition:

A Stored Procedure is a precompiled collection of SQL and PL/SQL statements stored in the database, which can be executed by calling its name.

🟦 Syntax:
CREATE OR REPLACE PROCEDURE procedure_name
IS
   -- Declaration section
BEGIN
   -- Execution section
   -- Your SQL or PL/SQL logic here
EXCEPTION
   -- Optional: Error handling
END;
/

🟢 Example:
CREATE OR REPLACE PROCEDURE show_message IS
BEGIN
   DBMS_OUTPUT.PUT_LINE('Hello! This is a stored procedure.');
END;
/


To execute:

BEGIN
   show_message;
END;
/


🧠 Output:
  Hello! This is a stored procedure.


🟢 Advantages of Stored Procedures

1️⃣ Reusability – You can call the same code multiple times.
2️⃣ Improved Performance – Precompiled and stored, so runs faster.
3️⃣ Security – Users can execute the procedure without seeing the code.
4️⃣ Less Network Traffic – Only the procedure call is sent, not full queries.
5️⃣ Modularity – Complex logic can be divided into smaller procedures.


🔴 Disadvantages

1️⃣ Harder to Debug – Errors inside procedures can be tricky to trace.
2️⃣ Portability Issues – May differ slightly between databases.
3️⃣ Consumes Database Storage – Stored permanently in the database.



🧠 In short:

A Stored Procedure = A saved PL/SQL program that performs a task and can be reused anytime.


`
    },
    {
      id: 21,
      question: "21. Define Backup and explain its types.",
      answer: "",
      codeExample: `
What is Backup?

A Backup means making a copy of data and keeping it in another safe place.
It helps you to recover your data if the original data is lost or damaged.

🧠 Example:
If your computer or database crashes, you can use the backup copy to get your data back.

🟢 Types of Backup

1️⃣ Full Backup

  It copies all data (everything) from the database or system.
  It takes more time and space, but it is the safest type of backup.

📘 Example:
You take a backup of all student records every Sunday.
👉 If data is lost, you can restore everything from this backup.


2️⃣ Incremental Backup

  It copies only the data that has changed since the last backup.
  It is faster and uses less space.

📘 Example:
You took a full backup on Sunday.
On Monday, you take a backup — it will save only the data changed after Sunday.


3️⃣ Differential Backup

  It copies all the data changed since the last full backup.
  It grows bigger every day until the next full backup.

📘 Example:
You took a full backup on Sunday.
On Wednesday, the differential backup will copy everything changed from Sunday to Wednesday.


4️⃣ Logical Backup

  It backs up database objects like tables, views, and stored procedures.
  Saved as text files or dump files.

📘 Example:
Using a command like EXP or Data Pump to export a table’s data and save it as a file.



5️⃣ Physical Backup

  It copies the actual physical files (data files, log files, control files) used by the database. 
  Used for complete recovery of the database.

📘 Example:
Copying the database storage files (like .dbf or .log files) from the server to another disk.



🧠 Short Summary Table

| Type of Backup      | Meaning (in simple words)                  | Example                             |
| --------------------| ------------------------------------------ | ----------------------------------- |
| Full Backup         | Copy of all data                           | Backup of full student database     |
| Incremental Backup  | Copy of only changed data                  | Backup only changes after Sunday    |
| Differential Backup | Copy of all changes since last full backup | Backup changes from Sunday to today |
| Logical Backup      | Backup of tables or objects                | Export table data to file           |
| Physical Backup     | Backup of physical files                   | Copy database files from server     |


✅ In short:

Backup = Safety copy of data
Helps to restore your data if the main data is lost.
`
    },
    {
      id: 22,
      question: "22. Define Recovery and its importance in DBMS.",
      answer: "",
      codeExample: `
🟩 What is Recovery in DBMS?

Recovery means getting back the lost or damaged data after a system failure or crash.
It helps the database to go back to a correct and consistent state — just like it was before the problem happened.


🧠 In short:
Recovery = Restoring the database to its last correct state.


🟢 Why Recovery is Important? (Importance of Recovery)

✅ Protects data from loss
  If the system crashes, recovery brings the lost data back.

✅ Maintains data consistency
  Ensures that the data remains correct and complete after failure.

✅ Restores transactions
  Unfinished (incomplete) transactions are rolled back (undone).
  Completed transactions are saved (redone).

✅ Improves reliability
  Users can trust that their data is safe even if something goes wrong.

✅ Saves time and effort
  You don’t need to re-enter all data manually — recovery does it automatically.


🧠 Types of Failures Recovered in DBMS:

  Transaction Failure – Error during a transaction (like divide by zero).
  System Failure – Power cut or system crash.
  Media Failure – Hard disk or storage damage.


📘 Example (Easy to Understand):

Imagine you are entering student marks in the database.
Suddenly, your computer shuts down (power failure).
➡️ When you restart the system, Recovery helps to restore all saved data up to the last commit point.
Unfinished entries will be undone to keep the database correct.


🧾 In short summary:

| Term       | Meaning                                                   |
| -----------| ------------------------------------------------------------- |
| Recovery   | Process of getting lost data back after a crash               |
| Goal       | Bring database to a consistent state                          |
| Importance | Protects data, ensures correctness, and restores transactions |

      `
    },
    {
      id: 23,
      question: "23. Explain Rollback and Commit techniques.",
      answer: "",
      codeExample: `
🟩 1️⃣ COMMIT

Definition:

Commit is used to save all the changes made by a transaction permanently in the database.
Once committed, changes cannot be undone.

📘 Syntax:

COMMIT;


📘 Example:

UPDATE students
SET marks = 95
WHERE student_id = 101;

COMMIT;  -- Save changes permanently


🧠 Explanation:

The student’s marks are updated to 95.
After COMMIT, the change is permanent.



🟩 2️⃣ ROLLBACK

Definition:

Rollback is used to undo changes made by a transaction.
Restores the database to its previous consistent state.

📘 Syntax:

ROLLBACK;


📘 Example:

UPDATE students
SET marks = 50
WHERE student_id = 102;

ROLLBACK;  -- Undo the change



🧠 Explanation:

The student’s marks temporarily change to 50.
After ROLLBACK, the marks go back to the previous value (before the update).


🟢 Key Points:

| Technique | Purpose                  | Effect                    |
| ----------| ------------------------ | ------------------------- |
| COMMIT    | Save changes permanently | Changes cannot be undone  |
| ROLLBACK  | Undo changes             | Reverts to previous state |



🧠 In short words:

COMMIT = “Save permanently”
ROLLBACK = “Undo / Go back”`
    },
    {
      id: 24,
      question: "24. Explain Checkpoint Recovery with diagram.",
      answer: "",
      codeExample: `
🟩 What is Checkpoint Recovery?

Checkpoint Recovery is a technique in DBMS used to recover the database faster after a system crash.
    A checkpoint is a point in time when the database writes all current changes from memory (buffers) to the disk.
    After a crash, the system only needs to recover changes made after the last checkpoint, not the entire database.


🧠 In short:
  Checkpoint = “Save the current state of database on disk so recovery is faster.”

🟢 Steps in Checkpoint Recovery

1. Database writes all modified data (dirty pages) from memory to disk.
2. Database records the checkpoint in log files.
3. If a system crash happens:
    Only redo or undo transactions after the last checkpoint.
    Database is restored faster.


🔹 Advantages of Checkpoint Recovery

  Faster recovery after a crash
  Reduces the amount of redo and undo work
  Ensures database consistency


🟦 Diagram of Checkpoint Recovery

Time ----->

Transaction 1:  START  ---- UPDATE ---- COMMIT
Transaction 2:  START  ---- UPDATE ---- (not committed yet)
Transaction 3:  START  ---- UPDATE ---- COMMIT

Checkpoint ---- Memory changes written to disk

System Crash

Recovery:
- Redo committed transactions after last checkpoint
- Undo uncommitted transactions


Explanation of Diagram:

  The checkpoint ensures all committed changes before it are saved on disk.
  After a crash, the DBMS only replays transactions after the checkpoint, saving time.
    

🧠 In short words for exam:
| Term       | Meaning                                                              |
| -----------| -------------------------------------------------------------------- |
| Checkpoint | Saves current state of database on disk                              |
| Recovery   | After crash, redo changes after checkpoint, undo uncommitted changes |
| Purpose    | Faster database recovery and consistency                             |


----------------------------------------------------------------------------------------------

🔴 What Does “Redo” Mean in DBMS (Checkpoint or Recovery)?

👉 Redo means re-applying or re-performing all the changes of transactions that were committed (completed successfully)
but not yet written to disk when the crash happened.

🧠 In Simple Words:

Redo = “Do it again, because the system crash happened before the data was fully saved.”

🧩 Example

Imagine this:
| Time                    | Action                | Status          |
| ----------------------- | --------------------- | --------------- |
| T1: START               | Start transaction     | –               |
| T1: UPDATE salary=50000 | Changed in memory     | Not yet on disk |
| ✅ T1: COMMIT            | Transaction completed | –               |
| 💥 Crash                | System failure        | –               |

At the time of crash:

  The COMMIT was done (so T1 should be saved)
  But the data change (salary=50000) was still in memory, not yet written to disk.


When the database restarts:

  It checks the log file and sees that T1 was committed.
  So it redoes (re-applies) that update → salary=50000 on disk.

That’s called REDO.


---------------------------------------------------

🔴 What is UNDO in DBMS?

👉 UNDO means reversing (canceling) the changes made by uncommitted transactions after a crash or rollback.

It ensures the database goes back to a consistent state — as if those incomplete transactions never happened.

🧠 In simple words:

UNDO = “Cancel uncommitted work.”

If a transaction started making changes but didn’t finish (no COMMIT),
those changes must be undone (rolled back).

🧩 Example

Let’s take an example to understand it clearly:

| Time                      | Action                    | Transaction Status |
| ------------------------- | ------------------------- | ------------------ |
| T1: START                 | Begin transaction         | –                  |
| T1: UPDATE salary = 50000 | Change in memory          | Uncommitted        |
| 💥 System crash           | Transaction not committed | ❌                |


When the database restarts:

  It sees that T1 never committed.
  So Oracle or DBMS will UNDO (reverse) those changes.
    That means → salary change is canceled and goes back to old value.


-------------------------------------

example : 


✅ Simple example (SQL)

BEGIN;

INSERT INTO accounts VALUES (1, 1000);
COMMIT;

CHECKPOINT;

INSERT INTO accounts VALUES (2, 2000);



✅ What happens here?

First INSERT → data saved using COMMIT
CHECKPOINT → database writes all saved data to disk
Second INSERT → not yet safe (no commit)


If a crash happens now:

Data before CHECKPOINT is safe ✅
Data after CHECKPOINT may be lost ❌


✅ Exam short answer (you can write this):

Checkpoint is a point where the database saves all committed changes to disk.
After a crash, the DBMS restarts from the last checkpoint to reduce recovery time.

  `
    },
    {
      id: 25,
      question: "25. Differentiate between Backup and Recovery.",
      answer: "",
      codeExample: `
🟩 Difference Between Backup and Recovery

| Backup                                                      | Recovery                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------|
| Making a copy of data and saving it in a safe place.        | Restoring lost or damaged data from backup or logs.               |
| Done before any data loss occurs.                           | Done after a failure or crash.                                    |
| Purpose: To protect data from loss.                         | Purpose: To bring database back to correct state.                 |
| Example: Copying the student database to another disk.      | Example: Restoring the student database after a system crash.     |
| Can be full, incremental, or differential.                  | Can be rollback recovery, checkpoint recovery, or media recovery. |
| Performed manually or automatically at scheduled intervals. | Performed automatically by DBMS during recovery process.          |


🧠 In short words:

Backup = Save a copy
Recovery = Use backup to restore data

      `
    },
    {
      id: 26,
      question: "26. List and explain advantages and disadvantages of Backup.",
      answer: "",
      codeExample: `
🟩 Advantages of Backup

1️⃣ Data Protection
  Keeps a copy of your data safe in case the original data is lost or damaged.

2️⃣ Disaster Recovery
  Helps restore data after hardware failure, virus attack, or accidental deletion.

3️⃣ Business Continuity
  Ensures that business or operations can continue without major interruptions.

4️⃣ Version Control
  You can maintain multiple copies of data at different times and restore previous versions if needed.

5️⃣ Reduces Manual Work
  Instead of re-entering all lost data, you can restore from backup easily.


🔴 Disadvantages of Backup

1️⃣ Consumes Storage Space
  Full backups take large amounts of disk space.

2️⃣ Time-Consuming
  Creating backups, especially full backups, can take a long time.

3️⃣ May Require Special Tools
  Sometimes backup software or hardware is needed, which can be costly.

4️⃣ Not Foolproof
  If backups are not updated regularly or stored safely, they may become useless.

5️⃣ Extra Maintenance
  Managing multiple backups and schedules can be difficult and tedious.


🧠 In short words for exams:

| Advantages                   | Disadvantages               |
| ---------------------------- | ------------------------------- |
| Protects data from loss      | Uses large storage space        |
| Helps in disaster recovery   | Can be time-consuming           |
| Ensures business continuity  | Requires tools/hardware         |
| Maintains versions of data   | Not always reliable if outdated |
| Saves manual re-entry effort | Extra effort to manage          |


      `
    },
    {
      id: 27,
      question: "27. What is Transaction Log Backup and how is it used?",
      answer: "",
      codeExample: `
🟩 What is Transaction Log Backup?

A Transaction Log Backup is a backup of the transaction log of a database.
  The transaction log records all changes made to the database (inserts, updates, deletes).
  Transaction log backup does not backup the full database, only the log of changes.


🧠 In short:
Transaction Log Backup = Backup of all recent database changes.


🟢 How It Is Used

1. Recovery to a Point in Time:
  If the database crashes, you can restore the last full backup and then apply transaction log backups to recover data up to a specific time.

2. Supports Incremental Recovery:
  Saves only changes since the last transaction log backup, reducing backup time and storage.

3. Prevents Data Loss:
  All committed transactions are saved in the log, so no committed changes are lost.


🔹 Example (Easy to Understand)

Take a full backup of the student database on Sunday.


Every day, take transaction log backups:
  Monday → log backup of all changes on Monday
  Tuesday → log backup of all changes on Tuesday


If a crash happens on Tuesday:

  Restore Sunday’s full backup
  Apply Monday and Tuesday log backups
  Database is recovered up to the crash point.


🧠 In short words:

| Term                   | Meaning / Use                                           |
| -----------------------| ------------------------------------------------------- |
| Transaction Log Backup | Backup of all recent changes (insert, update, delete)   |
| Purpose                | Recover database to a specific point in time            |
| Advantage              | Saves time and storage; prevents loss of committed data |
`
    },
    {
      id: 28,
      question: "28. Explain current trends in DBMS (any 3).",
      answer: "",
      codeExample: `
🟩 Current Trends in DBMS

Modern databases are evolving to handle big data, cloud computing, and real-time analytics. Here are 3 main trends:

1️⃣ Cloud Databases

Databases are now hosted on cloud platforms like AWS, Azure, or Oracle Cloud.
Users can access data from anywhere, scale storage easily, and pay as they use.

📘 Example:
Amazon RDS, Google Cloud SQL, or Azure SQL Database.

Advantages:

No hardware setup needed
Easy to scale
Automatic backups and maintenance



2️⃣ Big Data and NoSQL Databases

Traditional relational databases (RDBMS) are not ideal for huge, unstructured data.
NoSQL databases like MongoDB, Cassandra, and Couchbase handle big data efficiently.

📘 Example:
Social media platforms store massive user posts and comments in NoSQL databases.

Advantages:

Handles large volume of data
Supports unstructured and semi-structured data
High speed and flexibility



3️⃣ In-Memory Databases

Stores data in RAM instead of disk for very fast access.
Useful for real-time applications like stock trading, online gaming, and analytics.

📘 Example:
SAP HANA, Redis, Oracle TimesTen.

Advantages:

  Extremely fast queries
  Real-time analytics possible
  Reduces latency in data access


🧠 In short words for exams:
| Trend            | Meaning                            | Example               |
| ---------------- | ---------------------------------- | --------------------- |
| Cloud Databases  | Databases hosted on cloud          | Amazon RDS, Azure SQL |
| NoSQL / Big Data | Handles large & unstructured data  | MongoDB, Cassandra    |
| In-Memory DB     | Data stored in RAM for fast access | SAP HANA, Redis       |

      `
    },
    {
      id: 29,
      question: "29. Explain AI in databases and its benefits.",
      answer: "",
      codeExample: `
🟩 AI in Databases

AI (Artificial Intelligence) in databases means using AI techniques to improve how databases store, manage, and analyze data.
  AI can automatically optimize queries, detect patterns, predict trends, and make databases smarter.
  It reduces human effort and increases efficiency, speed, and accuracy.

🧠 In short:
  AI in databases = “Making the database smart using AI.”


  🟢 Benefits of AI in Databases

1️⃣ Automated Query Optimization

  AI can analyze queries and choose the fastest way to fetch data.
    📘 Example: A database predicting which indexes to use for a query.


2️⃣ Predictive Analytics
  AI helps predict trends using stored data.
    📘 Example: Sales database predicts future product demand.


3️⃣ Anomaly and Fraud Detection
  AI can detect unusual transactions or errors automatically.
    📘 Example: Banking database identifies suspicious transactions.


4️⃣ Smart Indexing & Storage Management
  AI decides where and how to store data for fast access.


5️⃣ Reduced Human Effort
  Many manual tasks like tuning, monitoring, and backups can be automated with AI.


🧠 In short words for exams:
| AI Feature in DB     | Benefit             | Example                              |
| -------------------- | ------------------- | ------------------------------------ |
| Query Optimization   | Faster queries      | Database chooses best indexes        |
| Predictive Analytics | Predict trends      | Sales forecast using historical data |
| Anomaly Detection    | Detect errors/fraud | Bank detects suspicious transaction  |
| Smart Storage        | Fast data access    | AI decides storage location          |
| Automation           | Less human effort   | Automatic tuning & backups           |

      `
    },
    {
      id: 30,
      question: "30. What is a Relational Structure? Explain with an example.",
      answer: "",
      codeExample: `
🟩 What is Relational Structure?

A Relational Structure is the way data is organized in a relational database.
  Data is stored in tables (relations) consisting of rows and columns.
  Each row represents a record (tuple), and each column represents an attribute (field).
  Tables are related to each other using keys (primary key, foreign key).

🧠 In short:
Relational Structure = Data stored in tables with rows and columns and linked by keys.


🟢 Characteristics of Relational Structure

1. Data is organized in tables (relations).
2. Each row (tuple) is unique.
3. Each column (attribute) has a name and data type.
4. Relationships between tables are maintained using keys.


🔹 Example of Relational Structure
Table 1: Students
| Student_ID (PK) | Name  | Age | Class |
| --------------- | ----- | --- | ----- |
| 101             | Raj   | 16  | 10    |
| 102             | Priya | 15  | 9     |
| 103             | Anil  | 16  | 10    |


Table 2: Marks
| Student_ID (FK) | Subject | Marks |
| --------------- | ------- | ----- |
| 101             | Math    | 95    |
| 102             | Math    | 88    |
| 103             | Math    | 92    |



🧠 In short words for exams:
| Term                 | Meaning                                             |
| -------------------- | --------------------------------------------------- |
| Relational Structure | Organizing data in tables with rows and columns     |
| Row / Tuple          | A single record in a table                          |
| Column / Attribute   | A field in the table                                |
| Primary Key          | Unique identifier for each row                      |
| Foreign Key          | Links one table to another                          |

`
    },
    {
      id: 31,
      question: "31. What is an ER Model? Describe its components and symbols used in an ER diagram. and Differentiate between Strong Entity and Weak Entity with examples.",
      answer: "",
      codeExample: `
🟩 What is an ER Model?

ER Model (Entity–Relationship Model) is a data modeling technique used to visually describe how data is related in a database.
It was introduced by Peter Chen in 1976.


🧠 In short:
  ER Model shows entities (tables), their attributes (fields), and relationships between them using diagrams.


🟢 Purpose of ER Model

  To design the structure of a database before creating it.
  To clearly show how data is connected.

🟩 Components of ER Model
| Component             | Description                                                               | Symbol in ER Diagram                    |
| ----------------------| ------------------------------------------------------------------------- | --------------------------------------- |
| Entity                | An object or thing that stores data (e.g., Student, Teacher).             | 🟦 Rectangle                            |
| Attribute             | Properties or characteristics of an entity (e.g., Name, Age).             | 🟢 Oval                                 |
| Relationship          | Shows how two entities are connected (e.g., Student *enrolls in* Course). | 🔶 Diamond                              |
| Primary Key           | A unique attribute that identifies each record.                           | Underlined attribute name               |
| Weak Entity           | Entity that depends on a strong entity; has no primary key.               | Double Rectangle                        |
| Multivalued Attribute | Attribute that can have multiple values (e.g., phone numbers).            | Double Oval                             |
| Derived Attribute     | Attribute that can be calculated (e.g., Age from DOB).                    | Dashed Oval                             |
| Cardinality           | Defines number of relationships (1:1, 1:N, M:N).                          | Shown near relationship lines (1, N, M) |


🧠 Example (Easy to Understand):

Entities:

Student (Student_ID, Name, Age)
Course (Course_ID, Course_Name)


Relationship:

Student enrolls in Course


🔹 ER Diagram Symbols Example:

 [STUDENT] ─── (enrolls in) ─── [COURSE]
   |                              |
  (Name)                        (Course_Name)


📘 Explanation:

  Student and Course are entities (rectangles).
  enrolls in is a relationship (diamond).
  Name, Course_Name are attributes (ovals).

🧾 In short for exam:
| Component             | Symbol           | Example     |
| --------------------- | ---------------- | ----------- |
| Entity                | Rectangle        | Student     |
| Attribute             | Oval             | Name        |
| Relationship          | Diamond          | Enrolls in  |
| Primary Key           | Underlined       | Student_ID  |
| Weak Entity           | Double Rectangle | Dependent   |
| Derived Attribute     | Dashed Oval      | Age         |
| Multivalued Attribute | Double Oval      | Phone_No    |

✅ Summary:

ER Model = Diagram that shows entities, attributes, and relationships clearly before creating a database.


🧠 Example:

Entity (Table): STUDENT
Attributes (Columns): RollNo, Name, Age
Record (Row): 101, Raj, 20

🔹 Simple Way to Remember

Entity = Table
Attribute = Column
Record = Row


-----------------------------------------------------------------------------------------------
Differentiate between Strong Entity and Weak Entity with examples.

| Strong Entity                                           | Weak Entity                                                             |
| --------------------------------------------------------| ------------------------------------------------------------------------|
| Has a primary key that uniquely identifies each record. | Does not have a primary key of its own.                                 |
| Can exist independently in the database.                | Depends on a strong entity for its existence.                           |
| Represented by a single rectangle in an ER diagram.     | Represented by a double rectangle in an ER diagram.                     |
| Relationship with another entity is usually one-to-many.| Always has a total participation (double line) with its strong entity.  |
| Example: Student, Department, Employee                  | Example: Dependent (child of employee), Order Item (part of an order)   |


🧠 Simple Explanation with Example
🔹 Example:

Entity 1: Employee (Emp_ID, Name)
→ Has a primary key (Emp_ID) → ✅ Strong Entity

Entity 2: Dependent (Dep_Name, Age, Emp_ID)
→ No unique key on its own, depends on Emp_ID of Employee → ❌ Weak Entity

Relationship:
Each Dependent belongs to one Employee, and cannot exist without that Employee.

🧾 In short words for exam:
| Term          | Meaning                                        |
| --------------| ---------------------------------------------- |
| Strong Entity | Independent; has its own primary key           |
| Weak Entity   | Dependent; uses foreign key from strong entity |
| Example       | Employee (strong) – Dependent (weak)           |


      `
    },
    {
      id: 32,
      question: "32. What is Cardinality? Explain One-to-One, One-to-Many, and Many-to-Many relationships with examples.",
      answer: "",
      codeExample: `
🟩 What is Cardinality?

Cardinality means the number of relationships between two entities in a database.
It shows how many instances of one entity are related to instances of another entity.

🧠 In short:
  Cardinality = Relationship between tables (1:1, 1:N, or M:N)


🟢 Types of Cardinality

1️⃣ One-to-One (1:1) Relationship

➡ One record in Entity A is related to only one record in Entity B.

📘 Example:

  Each person has one passport.
  Each passport belongs to one person.

PERSON (1) ───── (1) PASSPORT

🗣️ Meaning: One person ↔ One passport.



2️⃣ One-to-Many (1:N) Relationship

➡ One record in Entity A can be related to many records in Entity B.
But each record in Entity B is related to only one record in Entity A.

📘 Example:

  One teacher teaches many students.
  Each student is taught by one teacher.
      
TEACHER (1) ───── (N) STUDENT

🗣️ Meaning: One teacher ↔ Many students.



3️⃣ Many-to-Many (M:N) Relationship

➡ Many records in Entity A are related to many records in Entity B.

📘 Example:

  A student can take many courses.
  A course can have many students.

STUDENT (M) ───── (N) COURSE

🗣️ Meaning: Many students ↔ Many courses.


✅ Quick Summary Table
| Type         | Symbol     | Example            |
| ------------ | ---------- | ------------------ |
| One-to-One   | 1 : 1      | Person – Passport  |
| One-to-Many  | 1 : N      | Teacher – Students |
| Many-to-Many | M : N      | Student – Course   |


💡 In short (for exam line):

Cardinality defines how many times one entity can be associated with another entity.
It can be 1:1, 1:N, or M:N.
  `
    },
    {
      id: 33,
      question: "33. What are Attributes? Explain types of attributes (Key, Composite, Multivalued, Derived).",
      answer: "",
      codeExample: `
🟩 What are Attributes?

An attribute is a property or characteristic of an entity in a database.
It gives details or information about the entity.

🧠 In short:

Attribute = Characteristic of an entity.

📘 Example:
For the entity STUDENT,
attributes can be → Roll_No, Name, Age, Address.

  Entity: STUDENT
  Attributes: Roll_No, Name, Age, Address


🟢 Types of Attributes
1️⃣ Key Attribute

A unique identifier for each record in a table.
It helps to uniquely identify an entity.

📘 Example:
Roll_No uniquely identifies each student.

🗣️ Example line:

  Roll_No is the Key Attribute of STUDENT.


2️⃣ Composite Attribute

An attribute that can be divided into smaller parts.

📘 Example:
Full_Name → divided into → First_Name and Last_Name
Address → divided into → City, State, Pincode

🗣️ Example line:

  Address is a Composite Attribute because it can be split into smaller parts.


3️⃣ Multivalued Attribute

An attribute that can have more than one value for a single entity.

📘 Example:
Phone_Number → A student can have multiple phone numbers.

🗣️ Example line:

  Phone_Number is a Multivalued Attribute.


4️⃣ Derived Attribute

An attribute whose value is calculated or derived from other attributes.

📘 Example:
Age can be calculated from Date_of_Birth.

🗣️ Example line:

  Age is a Derived Attribute because it is calculated from Date_of_Birth.

✅ Quick Summary Table
| Type                  | Meaning                       | Example               |
| --------------------- | ----------------------------- | --------------------- |
| Key Attribute         | Uniquely identifies an entity | Roll_No               |
| Composite Attribute   | Can be divided into sub-parts | Address → City, State |
| Multivalued Attribute | Has more than one value       | Phone_Number          |
| Derived Attribute     | Calculated from other values  | Age (from DOB)        |

      `
    },
    {
      id: 34,
      question: "34. Define and differentiate between Super Key, Candidate Key, Unique Key, and Primary Key.",
      answer: "",
      codeExample: `
🟩 Definition
1️⃣ Super Key

A Super Key is any set of one or more attributes that can uniquely identify a record in a table.
It may include extra/unnecessary attributes.

📘 Example:
In a STUDENT table → (Roll_No, Name, Email)

Possible Super Keys:

{Roll_No}
{Roll_No, Name}
{Email, Roll_No}

🗣️ Note: Every Primary Key is a Super Key, but not every Super Key is a Primary Key.


How to use Super Key in SQL

In SQL, we enforce uniqueness using PRIMARY KEY or UNIQUE constraints.

From your table:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Roll_No is unique, a Super Key
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE   -- Email is also unique, another Super Key
);


Here:
  Roll_No → Super Key (also the Primary Key)
  Email → Super Key (enforced by UNIQUE)


---------------------------------------------------------------------------------------


2️⃣ Candidate Key

A Candidate Key is a minimal Super Key — meaning it has no unnecessary attributes.
There can be multiple Candidate Keys in one table.

📘 Example:

  {Roll_No}
  {Email}
  Both can uniquely identify a student → so both are Candidate Keys.

------------------

🧠 Step 1: What means "Minimal Super Key" (in very simple words)

  A Super Key can identify each record uniquely (✅ unique).
  A Minimal Super Key means — you removed all extra columns from it, but it’s still unique.
  That minimal one becomes your Candidate Key.

So basically:
  Minimal Super Key = Smallest combination of columns that uniquely identify a record.

🧩 Step 2: Understand using Example Table
| Roll_No | Name | Email                                 |
| ------- | ---- | ------------------------------------- |
| 101     | Raj  | [raj@mail.com](mailto:raj@mail.com)   |
| 102     | Neha | [neha@mail.com](mailto:neha@mail.com) |


Now see 👇
| Combination    | Unique?   | Extra Column?  | Type                       |
| -------------- | -------   | -------------  | ---------------------------|
| Roll_No        | ✅ Yes   | ❌ No          | Minimal Super Key ✅       |
| Email          | ✅ Yes   | ❌ No          | Minimal Super Key ✅       |
| Roll_No + Name | ✅ Yes   | ✅ Yes         | Super Key (not minimal ❌) |

✅ So the Minimal Super Keys are {Roll_No} and {Email}
These are also called Candidate Keys.

💻 SQL Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Minimal Super Key chosen as main (Primary Key)
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE   -- Another Minimal Super Key
);

💡 What this means:

Roll_No is Primary Key → one chosen Minimal Super Key
Email is Unique Key → another Minimal Super Key

---------------------------------------------------------------------------------------


3️⃣ Primary Key

A Primary Key is the main key chosen from Candidate Keys to uniquely identify each record.
It cannot have NULL or duplicate values.

📘 Example:
If we choose {Roll_No} from the Candidate Keys,
then Roll_No becomes the Primary Key.

📘 SQL Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(50)
);

👉 Here, Roll_No is the Primary Key.
👉 It is unique and not null.


---------------------------------------------------------------------------------------

4️⃣ Unique Key
✅ Definition:

A Unique Key also ensures that the column’s value is unique for every record,
but it can have one NULL value (unlike Primary Key).

📘 SQL Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE
);


👉 Email is Unique Key
👉 Every email must be different, but it can be NULL once.


🧾 ✅ Difference Table
| Type              | Description                                                                   | Allows NULL                | Example            |
| ----------------- | ----------------------------------------------------------------------------- | ---------------------------| ------------------ |
| Super Key         | Any set of attributes that uniquely identify a record (may have extra fields) | Yes                        | {Roll_No, Name}    |
| Candidate Key     | Minimal Super Key (no extra fields)                                           | No                         | {Roll_No}, {Email} |
| Primary Key       | Main Candidate Key chosen to identify each record                             | ❌ No                     | Roll_No           |
| Unique Key        | Ensures all values are unique but can contain one NULL                        | ✅ Yes (one null allowed) | Email             |


`
    },
    {
      id: 35,
      question: "35. What are Integrity Constraints? Explain Entity Integrity and Referential Integrity with examples.",
      answer: "",
      codeExample: `
🟩 What are Integrity Constraints?

Integrity Constraints are rules that ensure the accuracy and consistency of data in a database.

🧠 In short:

Integrity constraints make sure that data in tables is correct, valid, and reliable.

🟢 Types of Integrity Constraints
1️⃣ Entity Integrity

  Ensures that each record (row) in a table can be uniquely identified.
  It is applied on the Primary Key.
  Primary Key cannot be NULL or duplicate.

📘 Example:

| Roll_No  | Name  |
| ---------| ----- |
| 101      | Raj   |
| 102      | Meena |
| NULL ❌  | Rohan |
| 101 ❌   | Neha  |


🗣️ Rule:
  Every row must have a unique and non-null Primary Key.



2️⃣ Referential Integrity

  Ensures that the relationship between two tables remains consistent.
  It is applied using a Foreign Key.
  The Foreign Key value in one table must match a Primary Key value in another table.

📘 Example:

STUDENT Table

| Roll_No | Name  |
| ------- | ----- |
| 101     | Raj   |
| 102     | Meena |


MARKS Table

| Roll_No | Marks |
| ------- | ----- |
| 101     | 85    |
| 102     | 90    |
| 103 ❌  | 80    |



🗣️ Rule:
Roll_No 103 doesn’t exist in the STUDENT table → violates Referential Integrity.


✅ Quick Summary Table

| Type                      | Ensures                              | Applied On     | Example                                |
| ------------------------- | ------------------------------------ | -------------- | -------------------------------------- |
| Entity Integrity          | Each row is unique and not null      | Primary Key    | Roll_No must be unique & not null      |
| Referential Integrity     | Relationship between tables is valid | Foreign Key    | Roll_No in MARKS must exist in STUDENT |


💡 In short (for exam):

Integrity constraints keep the data in the database correct and consistent.
Entity Integrity checks Primary Keys.
Referential Integrity checks Foreign Keys.


      `
    },
    {
      id: 36,
      question: "36. What is Indexing in DBMS? Explain how it improves query performance.",
      answer: "",
      codeExample: `
🟩 What is Indexing in DBMS?

Indexing is a technique used in a database to speed up data retrieval.
It works like an index in a book, helping you find data quickly without scanning every row.

🧠 In short:
  Indexing helps the database find records faster, just like a book index helps you find topics quickly.


🟢 How Indexing Works

  The DBMS creates an index table with key values (like Roll_No, Name, etc.) and their memory locations (addresses).
  When you search for a value, the DBMS uses the index instead of checking each record one by one.

📘 Example:

STUDENT Table
| Roll_No | Name  | City   |
| ------- | ----- | ------ |
| 101     | Raj   | Delhi  |
| 102     | Meena | Mumbai |
| 103     | Rohan | Pune   |


If we create an index on Roll_No,
then searching for Roll_No = 103 becomes much faster,
because the system looks it up in the index instead of scanning the whole table.


🟣 How Indexing Improves Query Performance

✅ 1. Faster Search:
DBMS can find data directly using the index instead of checking every record.

✅ 2. Reduces Disk Access:
Only the required blocks are accessed, saving time.

✅ 3. Quick Sorting and Grouping:
Indexes help queries with ORDER BY, GROUP BY, and JOIN operations.

✅ 4. Efficient Data Retrieval:
Helps when searching large databases frequently.


⚠️ Note:

Indexing improves read (SELECT) operations.
But it can slow down write (INSERT, UPDATE, DELETE) operations because the index also needs to be updated.
      


✅ Simple Example (SQL)
-- Create index on Roll_No column
CREATE INDEX idx_rollno ON STUDENT(Roll_No);

-- Now this query runs faster
SELECT * FROM STUDENT WHERE Roll_No = 103;


🧾 In short (for exam):

Indexing is used to improve the speed of data retrieval in DBMS.
It works like a book index and helps find records quickly using keys instead of scanning the whole table.
`
    },
    {
      id: 37,
      question: "37. Differentiate between Primary Index, Clustering Index, and Secondary Index.",
      answer: "Ordered index",
      codeExample: `
🟩 1️⃣ Primary Index

🧠 Meaning:

  Created automatically when you define a PRIMARY KEY.
  The table data is physically sorted based on this key.
  Only one Primary Index per table.

📘 Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Primary Index is created automatically
    Name VARCHAR(50),
    City VARCHAR(50)
);



➡ Here, Roll_No is the Primary Key,
so the Primary Index is automatically created on Roll_No.

✅ Used for fast access based on Roll_No.




🟣 2️⃣ Clustering Index
🧠 Meaning:

  Created on a non-primary key column.
  Used to group rows having similar values.
  The data in the table is physically arranged (clustered) by that column.
  Only one clustering index allowed per table.

📘 Example:

CREATE TABLE Employee (
    Emp_ID INT,
    Emp_Name VARCHAR(50),
    Department VARCHAR(30)
);

-- Create Clustering Index on Department column
CREATE CLUSTERED INDEX idx_department ON Employee(Department);


➡ Here, employees are stored grouped by Department,
so all employees in the same department are physically near each other.

✅ Used when many queries use GROUP BY or WHERE Department = ‘HR’.
      


🔵 3️⃣ Secondary Index
🧠 Meaning:

Created on a non-key or unsorted column.

Helps speed up search on columns not used for sorting.

Multiple secondary indexes can exist in one table.

📘 Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    City VARCHAR(50)
);

-- Create Secondary Index on Name
CREATE INDEX idx_name ON Student(Name);


➡ Here, the table is sorted by Roll_No,
but an index on Name helps find students by name quickly.

✅ Used for searching data based on Name, City, etc.



✅ Quick Summary Table
| Type             | Based On                          | SQL Command Example                                            | Data Arrangement   | Number Allowed |
| -----------------| --------------------------------- | ---------------------------------------------------------------| ---------------------- | ------------------ |
| Primary Index    | Primary Key                       | PRIMARY KEY                                                    | Data sorted by key     | Only one           |
| Clustering Index | Non-primary key used for grouping | CREATE CLUSTERED INDEX idx_department ON Employee(Department); | Data grouped by column | Only one           |
| Secondary Index  | Non-key or unsorted column        | CREATE INDEX idx_name ON Student(Name);                        | No physical change     | Many allowed       |


🧠 In short (for exam):

Primary Index: automatic on primary key
Clustering Index: groups data on non-key column
Secondary Index: speeds up search on other columns
`
    },
    {
      id: 38,
      question: "38. Write an SQL example to create a table with a Primary Key and Foreign Key.",
      answer: "",
      codeExample: `
🟩 Concept Recap

Primary Key:
Uniquely identifies each record in a table. (No duplicate or NULL values)

Foreign Key:
Creates a link/relationship between two tables.
It refers to the Primary Key of another table.

🧠 Example: Create Two Tables

1️⃣ Parent Table: DEPARTMENT

CREATE TABLE Department (
    Dept_ID INT PRIMARY KEY,        -- Primary Key
    Dept_Name VARCHAR(50)
);


✅ Here,
Dept_ID uniquely identifies each department → Primary Key

2️⃣ Child Table: EMPLOYEE

CREATE TABLE Employee (
    Emp_ID INT PRIMARY KEY,         -- Primary Key
    Emp_Name VARCHAR(50),
    Dept_ID INT,                    -- Foreign Key column
    FOREIGN KEY (Dept_ID) REFERENCES Department(Dept_ID)
);



✅ Here,

Emp_ID → uniquely identifies employee → Primary Key
Dept_ID → refers to Dept_ID of Department table → Foreign Key



📘 Meaning (Relation)

| Department Table     |           |
| -------------------- | --------- |
| Dept_ID              | Dept_Name |
| 1                    | HR        |
| 2                    | IT        |
| 3                    | Sales     |

	

| Employee Table     |          |
| ------------------ | -------- |
| Emp_ID             | Emp_Name |
| 101                | Raj      |
| 102                | Meena    |
| 103                | Rohan    |




🗣️ Explanation:

Employee Raj belongs to Dept_ID 1 (HR).
The Foreign Key (Dept_ID) ensures that every employee’s department exists in the Department table.
If you try to insert Dept_ID = 5 (not in Department table), DBMS will not allow it.

✅ In short (for exam):

Primary Key uniquely identifies records in a table.
Foreign Key connects one table to another by referencing its Primary Key.`
    },
    {
      id: 39,
      question: "39. Differentiate between DDL, DML, DCL, TCL, and DQL with examples.",
      answer: "",
      codeExample: `
🟩 1️⃣ DDL – Data Definition Language

🧠 Meaning:
Used to define or change the structure of the database (like tables, columns, constraints).

📘 Common Commands:
CREATE, ALTER, DROP, TRUNCATE

📗 Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    City VARCHAR(50)
);


🗣️ Meaning: Creates a new table structure.



🟢 2️⃣ DML – Data Manipulation Language

🧠 Meaning:
Used to insert, update, delete, or modify data inside tables.

📘 Common Commands:
INSERT, UPDATE, DELETE

📗 Example:

INSERT INTO Student VALUES (101, 'Raj', 'Delhi');
UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 101;


🗣️ Meaning: Adds or changes the actual data in the table.



🔵 3️⃣ DCL – Data Control Language

🧠 Meaning:
Used to control access and permissions in the database (security control).

📘 Common Commands:
GRANT, REVOKE

📗 Example:

GRANT SELECT ON Student TO user1;
REVOKE SELECT ON Student FROM user1;


🗣️ Meaning: Gives or removes permission to access the Student table.



🟣 4️⃣ TCL – Transaction Control Language

🧠 Meaning:
Used to manage transactions and ensure data consistency.

📘 Common Commands:
COMMIT, ROLLBACK, SAVEPOINT

📗 Example:

BEGIN;
UPDATE Student SET City = 'Pune' WHERE Roll_No = 101;
COMMIT;

🗣️ Meaning: Saves or cancels changes made during a transaction.



🟠 5️⃣ DQL – Data Query Language

🧠 Meaning:
Used to retrieve data from the database.

📘 Common Command:
SELECT

📗 Example:

SELECT * FROM Student WHERE City = 'Delhi';

🗣️ Meaning: Fetches data from the table.



✅ Quick Difference Table

| Type   | Full Form                    | Purpose                    | Example Commands       | Example Query                     |
| -------| ---------------------------- | -------------------------- | ---------------------- | ----------------------------------|
| DDL23  | Data Definition Language     | Defines database structure | CREATE, ALTER, DROP    | CREATE TABLE Student(...)         |
| DML23  | Data Manipulation Language   | Manages table data         | INSERT, UPDATE, DELETE | INSERT INTO Student VALUES (...)  |
| DCL23  | Data Control Language        | Controls user permissions  | GRANT, REVOKE          | GRANT SELECT ON Student TO user1; |
| TCL23  | Transaction Control Language | Controls transactions      | COMMIT, ROLLBACK       | COMMIT;                           |
| DQL23  | Data Query Language          | Retrieves data             | SELECT                 | SELECT * FROM Student;            |


🧠 In short (for exam):

DDL → defines structure
DML → manipulates data
DCL → controls access
TCL → manages transactions
DQL → retrieves data


      `
    },
    {
      id: 40,
      question: "40. Explain COMMIT, ROLLBACK, and SAVEPOINT commands.",
      answer: "",
      codeExample: `
🟩 1️⃣ COMMIT Command
🔹 Meaning:

The COMMIT command is used to save all the changes made during the current transaction permanently in the database.

Once you use COMMIT, you cannot undo the changes.

🔹 Syntax:
COMMIT;

🔹 Example:
UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 101;
COMMIT;


🗣️ Meaning: The change (City → Mumbai) is permanently saved.

🟧 2️⃣ ROLLBACK Command
🔹 Meaning:

The ROLLBACK command is used to undo (cancel) the changes made in the current transaction before they are committed.

It brings the database back to its previous state.

🔹 Syntax:
ROLLBACK;

🔹 Example:
UPDATE Student SET City = 'Delhi' WHERE Roll_No = 101;
ROLLBACK;


🗣️ Meaning: The update is cancelled, and the old data is restored.




🟦 3️⃣ SAVEPOINT Command
🔹 Meaning:

A SAVEPOINT is a temporary marker within a transaction that allows you to ROLLBACK only to that point instead of undoing the entire transaction.

It helps manage large transactions more safely.

🔹 Syntax:
SAVEPOINT savepoint_name;

🔹 Example:

BEGIN;
UPDATE Student SET City = 'Delhi' WHERE Roll_No = 101;
SAVEPOINT A;

UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 102;
ROLLBACK TO A;
COMMIT;


🗣️ Explanation:

  SAVEPOINT A creates a mark.
  You can undo only the changes made after SAVEPOINT A using ROLLBACK TO A.
  Then, COMMIT saves the remaining changes.
      

| Step | Command                                             | What Happens                                                                               |
| ---- | ----------------------------------------------------| -------------------------------------------------------------------------------------------|
| 1️⃣  | BEGIN;                                              | Transaction starts (nothing saved yet).                                                    |
| 2️⃣  | UPDATE Student SET City='Delhi' WHERE Roll_No=101;  | Change made in memory (not yet permanent).                                                 |
| 3️⃣  | SAVEPOINT A;                                        | A “mark” is set here — like saving a checkpoint.                                           |
| 4️⃣  | UPDATE Student SET City='Mumbai' WHERE Roll_No=102; | Another change made (after Savepoint A).                                                   |
| 5️⃣  | ROLLBACK TO A;                                      | Undo all changes after Savepoint A (so City='Mumbai' is undone, but City='Delhi' remains). |
| 6️⃣  | COMMIT;                                             | Save all remaining changes permanently.                                                    |

      `
    },
    {
      id: 41,
      question: "41. Explain Relational Algebra operations with examples.",
      answer: "This concept is used for only Theory (DBMS concept) not run on sql",
      codeExample: `
🧩 What is Relational Algebra?

Relational Algebra is a theoretical language used to perform operations on tables (relations) in a database.

It helps us to retrieve, combine, and manipulate data stored in tables.

⚙️ Main Relational Algebra Operations

🔹 1️⃣ SELECT (σ) → Filter Rows

Purpose: Selects (filters) rows that satisfy a given condition.

Symbol: σ (sigma)

Syntax:

σ(condition)(Table_Name)


Example:

σ(Salary > 50000)(Employee)


🗣️ Meaning: Select all employees whose salary is greater than 50,000.



🔹 2️⃣ PROJECT (π) → Choose Columns

Purpose: Selects specific columns (attributes) from a table.

Symbol: π (pi)

Syntax:

π(column1, column2)(Table_Name)


Example:

π(Name, Salary)(Employee)


🗣️ Meaning: Display only Name and Salary columns from the Employee table.



🔹 3️⃣ UNION (∪) → Combine Tables

Purpose: Combines rows from two tables (duplicates removed).

Symbol: ∪ (union)

Syntax:

Table1 ∪ Table2


Example:

Student_A ∪ Student_B


🗣️ Meaning: Combine all students from both tables (no duplicates).



🔹 4️⃣ SET DIFFERENCE (−) → Find Missing Records

Purpose: Finds rows that are in Table1 but not in Table2.

Symbol: − (minus)

Syntax:

Table1 − Table2


Example:

Student_A − Student_B


🗣️ Meaning: Shows students who are in A but not in B.



🔹 5️⃣ CARTESIAN PRODUCT (×) → Combine Every Row

Purpose: Combines each row of one table with each row of another.

Symbol: × (cross)

Syntax:

Table1 × Table2


Example:

Employee × Department


🗣️ Meaning: Combines every employee with every department (used before joins).



🔹 6️⃣ RENAME (ρ) → Rename Table or Column

Purpose: Renames a table or attributes for better understanding.

Symbol: ρ (rho)

Syntax:

ρ(NewTableName, Table)


Example:

ρ(Emp, Employee)


🗣️ Meaning: Rename the table Employee to Emp.




🔹 7️⃣ INTERSECTION (∩) → Common Records

Purpose: Returns rows that are common in both tables.

Symbol: ∩ (intersection)

Syntax:

Table1 ∩ Table2


Example:

Student_A ∩ Student_B


🗣️ Meaning: Students who are in both A and B.




🔹 8️⃣ JOIN (⨝) → Combine Related Tables

Purpose: Combines rows from two tables based on a related column.

Symbol: ⨝ (join)

Syntax:

Table1 ⨝ condition Table2


Example:

Employee ⨝ Employee.DeptID = Department.DeptID


🗣️ Meaning: Combine employees with their department details.



✅ Summary Table

| Operation         | Symbol | Purpose                                | Example                   |
| ----------------- | ------ | -------------------------------------- | ------------------------- |
| Select            | σ      | Filters rows                           | σ(Salary>50000)(Employee) |
| Project           | π      | Selects columns                        | π(Name, Salary)(Employee) |
| Union             | ∪      | Combines rows from two tables          | A ∪ B                     |
| Set Difference    | −      | Finds rows in one table not in another | A − B                     |
| Cartesian Product | ×      | Combines all rows                      | A × B                     |
| Rename            | ρ      | Renames table/columns                  | ρ(Emp, Employee)          |
| Intersection      | ∩      | Common rows                            | A ∩ B                     |
| Join              | ⨝     | Combine related data                   | A ⨝ B                     |



      `
    },
    {
      id: 42,
      question: "42. Differentiate between Relational Algebra and Relational Calculus.",
      answer: "",
      codeExample: `
🧩 Difference between Relational Algebra and Relational Calculus

| Relational Algebra                                                          | Relational Calculus                                                       |
| ----------------------------------------------------------------------------| --------------------------------------------------------------------------|
| It is procedural — tells how to get the result.                             | It is non-procedural — tells what result you want, not how to get it.     |
| Focuses on operations like SELECT, PROJECT, JOIN, etc.                      | Focuses on conditions and expressions to describe the result.             |
| It works step-by-step to produce output.                                    | It only defines the desired output, and the system decides how to get it. |
| Used mainly for query execution in DBMS.                                    | Used mainly for query representation and theoretical understanding.       |
| Example: σ(Salary > 50000)(Employee) → Select employees with salary > 50000 | Example: { e.Name                                                         |
| Easier to implement in a database system.                                   | Easier to understand logically for users.                                 |



💡 In short:

Relational Algebra → "How" to get data (step-by-step operations).
Relational Calculus → "What" data to get (logic-based expression).

      `
    },
    {
      id: 43,
      question: "43. Explain Views and their types with syntax.",
      answer: "",
      codeExample: `
🧩 What is a View in DBMS?

A View is a virtual table that shows data from one or more tables.
It does not store data physically — it just displays data stored in other tables.

You can think of a view as a saved SQL query that can be used like a table.

🧠 Example:
CREATE VIEW Employee_View AS
SELECT Name, Salary
FROM Employee
WHERE Salary > 50000;


🗣️ This creates a view named Employee_View that shows employees earning more than ₹50,000.

🔹 Why Views are Used

To simplify complex queries
To restrict access to sensitive data (security)
To provide customized data for users
To make data independent of table structure changes


🧱 Types of Views in DBMS

| Type                  | Description                                                                                                      | Example / Syntax                                                                                                     |
| ----------------------| -----------------------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------------------------------------|
| 1️⃣ Simple View       | Created from one table and does not contain group functions or subqueries.                                       | sql CREATE VIEW Emp_View AS SELECT Name, Salary FROM Employee;                                                       |
| 2️⃣ Complex View      | Created from multiple tables using joins, or includes functions/subqueries.                                      | sql CREATE VIEW EmpDept_View AS SELECT e.Name, d.DeptName FROM Employee e JOIN Department d ON e.DeptID = d.DeptID;  |
| 3️⃣ Read-Only View    | Data cannot be updated through this view. Usually when it includes joins, group functions, or distinct values.   | Same as complex view (non-updatable).                                                                                |
| 4️⃣ Updatable View    | Allows INSERT, UPDATE, and DELETE operations — only when created from a single table without functions or joins. | sql CREATE VIEW Emp_View AS SELECT EmpID, Name FROM Employee;                                                        |
| 5️⃣ Materialized View | A physical copy of data stored in the database for fast performance (used in large databases).                   | sql CREATE MATERIALIZED VIEW Sales_Summary AS SELECT Region, SUM(Sales) FROM Orders GROUP BY Region;                 |



⚙️ Syntax for Creating and Dropping a View

Create View:

CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;


Drop View:

DROP VIEW view_name;


💡 In short:

View = Virtual Table
Simple View → 1 Table
Complex View → Multiple Tables
Materialized View → Stored Copy of Data

      `
    },
    {
      id: 44,
      question: "44. What is NoSQL? List its types and advantages.",
      answer: "",
      codeExample: `
🧩 What is NoSQL?

NoSQL stands for "Not Only SQL".
It is a database system used to store and manage unstructured, semi-structured, or large-scale data that does not fit well into traditional relational databases.

💡 In short:
NoSQL databases are used when data is big, complex, or rapidly changing, like in social media, IoT, e-commerce, etc.

⚙️ Main Features of NoSQL

Does not use tables and rows like SQL.
Stores data in JSON, key-value pairs, documents, or graphs.
Can handle big data and scales horizontally (add more servers easily).
Provides high performance and flexibility.

🗂️ Types of NoSQL Databases

| Type                      | Description                                                                         | Example              |
| --------------------------| ------------------------------------------------------------------------------------| ---------------------|
| 1️⃣ Key-Value Store       | Data is stored as key–value pairs (like a dictionary). Fast for lookups.            | Redis, DynamoDB       |
| 2️⃣ Document Store        | Data stored in documents (like JSON or XML format).                                 | MongoDB, CouchDB      |
| 3️⃣ Column-Oriented Store | Data stored in columns instead of rows, good for analytics.                         | Cassandra, HBase      |
| 4️⃣ Graph-Based Store     | Stores data as nodes and relationships (used for social networks, recommendations). | Neo4j, Amazon Neptune |

🌟 Advantages of NoSQL

  Handles Big Data easily.
  High Speed and Performance — faster read/write operations.
  Scalable — can handle millions of users.
  Flexible Schema — no need for fixed table structure.
  Better for Cloud and Real-time Applications.
  Easier to work with unstructured data (like text, images, JSON).

💡 Example (Document Store - MongoDB):
{
  "name": "Raj",
  "age": 22,
  "course": "BCA"
}


🗣️ This is a single document (like one record) stored in a NoSQL database.



✅ In short:

  NoSQL = Not Only SQL
  Used for Big, unstructured, or fast-changing data
  Types: Key-Value, Document, Column, Graph
  Advantages: Fast, Scalable, Flexible
      `
    },
    {
      id: 45,
      question: "45. Compare SQL and NoSQL databases.",
      answer: "",
      codeExample: `
🧩 Difference between SQL and NoSQL Databases
| SQL Database                                                               | NoSQL Database                                                                             |
| ---------------------------------------------------------------------------| -------------------------------------------------------------------------------------------|
| SQL stands for Structured Query Language.                                  | NoSQL stands for Not Only SQL.                                                             |
| It is a relational database (stores data in tables with rows and columns). | It is a non-relational database (stores data as key-value, documents, columns, or graphs). |
| Has a fixed schema (structure of table is predefined).                     | Has a dynamic / flexible schema (structure can change easily).                             |
| Best for structured data (like numbers, names, records).                   | Best for unstructured or semi-structured data (like JSON, text, images).                   |
| Uses SQL queries to retrieve and manage data.                              | Uses different query methods, depending on the database type.                              |
| Supports ACID properties (ensures reliability of transactions).            | Supports BASE properties (focuses on high speed and flexibility).                          |
| Vertically scalable (increase power of one server).                        | Horizontally scalable (add more servers to handle more data).                              |
| Examples: MySQL, Oracle, PostgreSQL, MS SQL Server.                        | Examples: MongoDB, Cassandra, Redis, Neo4j.                                                |
| Suitable for complex queries and transactions.                             | Suitable for large-scale, real-time, or distributed data.                                  |


💡 In short:

  SQL → Structured, relational, fixed schema, ACID
  NoSQL → Unstructured, flexible schema, fast, scalable
      `
    },
    {
      id: 46,
      question: "46. Explain Aggregation functions with syntax and example.",
      answer: "",
      codeExample: `
🧩 What are Aggregation Functions?

Aggregation functions are built-in SQL functions that perform calculations on multiple rows of a table and return a single result (summary value).

💡 Used mainly with the GROUP BY clause to group and summarize data.

⚙️ Common Aggregation Functions
| Function | Description                                  | Syntax             | Example                                                           |
| ---------| -------------------------------------------- | -------------------| ------------------------------------------------------------------|
| COUNT()  | Counts the number of rows.                   | COUNT(column_name) | SELECT COUNT(*) FROM Employee; <br>👉 Counts total employees.     |
| SUM()    | Calculates total sum of a numeric column.    | SUM(column_name)   | SELECT SUM(Salary) FROM Employee; <br>👉 Finds total salary paid. |
| AVG()    | Finds the average value of a numeric column. | AVG(column_name)   | SELECT AVG(Salary) FROM Employee; <br>👉 Finds average salary.    |
| MAX()    | Finds the maximum value in a column.         | MAX(column_name)   | SELECT MAX(Salary) FROM Employee; <br>👉 Finds highest salary.    |
| MIN()    | Finds the minimum value in a column.         | MIN(column_name)   | SELECT MIN(Salary) FROM Employee; <br>👉 Finds lowest salary.     |


🧠 Example with GROUP BY
SELECT Department, AVG(Salary) AS Average_Salary
FROM Employee
GROUP BY Department;


🗣️ This query shows the average salary of employees in each department.

💡 In short:

  Aggregate functions work on a set of rows.
  They return one result per group or per table.
  Common ones: COUNT, SUM, AVG, MAX, MIN.
      
      `
    },
    {
      id: 47,
      question: "47. Write a query using CREATE VIEW for two tables.",
      answer: "",
      codeExample: `
🧩 Example Tables

Table 1: Employee

| EmpID | EmpName | DeptID | Salary |
| ----- | ------- | ------ | ------ |
| 1     | Raj     | 101    | 50000  |
| 2     | Meera   | 102    | 60000  |
| 3     | Amit    | 101    | 55000  |


Table 2: Department

| DeptID | DeptName |
| ------ | -------- |
| 101    | HR       |
| 102    | IT       |


⚙️ Query: Create a View combining two tables
CREATE VIEW Emp_Dept_View AS
SELECT e.EmpName, e.Salary, d.DeptName
FROM Employee e
JOIN Department d
ON e.DeptID = d.DeptID;


🧠 Explanation:

CREATE VIEW Emp_Dept_View AS → Creates a virtual table named Emp_Dept_View.
Employee e JOIN Department d → Combines data from both tables.
ON e.DeptID = d.DeptID → Connects both tables using the DeptID field.
The view will show employee names, their salaries, and department names.


📊 Result of View:
| EmpName | Salary | DeptName |
| ------- | ------ | -------- |
| Raj     | 50000  | HR       |
| Meera   | 60000  | IT       |
| Amit    | 55000  | HR       |


🧾 To use the View:
SELECT * FROM Emp_Dept_View;


🗣️ This will display the combined data as shown above.



      `
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },  
    {
      id: 8888,
      question: "Mid paper questions and answers.",
      answer: "",
      codeExample: `
✅ Q1(a) – Short Questions (1 mark each)

(i) Define DBMS.

A Database Management System (DBMS) is software that stores, manages, and retrieves data efficiently and 
securely.


(ii) What is the purpose of a primary key?

A primary key uniquely identifies each record in a table.

  No duplicates
  No NULL values


(iii) What is an Entity?

An Entity is an object in the real world that has a separate identity.
Examples: Student, Employee, Product.


-------------------


✅ Q1(b) – Objective / MCQs / True-False / Fill Blanks

1) SQL full form
👉 C) Structured Query Language


2) A relational database developer refers to a record as:
👉 B) a tuple


3) The collection of information stored at a particular moment is called:
👉 B) Instance of the database


4) Which are DDL statements?
👉 D) All of the above
(Create, Drop, Alter)


5) ______ command modifies a column in a table.
👉 A) ALTER


6) DCL stands for:
👉 A) Data Control Language


7) Which operations are allowed in a join view?
👉 D) All of the mentioned
(UPDATE, INSERT, DELETE — depending on DBMS rules)


----------------------------------------------------------------------


✅ Q2(a) – 2-Mark Questions

1) List components of DBMS.

Components:

  Hardware
  Software
  Data
  Users (Admin, End-user, Developer)
  Procedures
  DBMS Engine (Query processor, storage manager)


2) Difference between Inner Join and Outer Join

| Inner Join                                      | Outer Join                               |
| ----------------------------------------------- | ---------------------------------------- |
| Returns only matching rows from both tables     | Returns matching + non-matching rows     |
| Nulls ignored                                   | Nulls included                           |
| Types: Inner only                               | Types: Left, Right, Full                 |


-------------------


✅ Q2(b) – 3-Mark Questions

1) Difference between Data and Information

| Data                | Information                           |
| ------------------- | ------------------------------------- |
| Raw facts, symbols  | Processed, meaningful data            |
| Example: 90, 85, 88 | Example: "Student score average = 87" |
| No context          | Has context and usefulness            |



2) What is a Cursor? Types of Cursor.

A cursor is a pointer used to retrieve, update, or navigate through result rows one at a time.

Types:

1. Implicit Cursor
  Created automatically by DBMS for SELECT INTO, INSERT, DELETE.

2. Explicit Cursor
  Created manually by programmer for complex queries.
  Steps: Declare → Open → Fetch → Close


----------------------------------------------------------------------


✅ Q3 – Attempt Any TWO (5 marks each)

Q3(i) Types of Database Backup

✔ 1. Full Backup
Backs up entire database
Slow but safest


✔ 2. Incremental Backup
Backs up only data changed since last backup
Smaller, faster


✔ 3. Differential Backup
Backs up all changes since last full backup


✔ 4. Log Backup
Captures transaction logs
Helps recover up to last transaction


✔ 5. Hot Backup
Taken while DB is running


✔ 6. Cold Backup
Taken when DB is shut down



Q3(ii) Advantages and Disadvantages of Database

Advantages

Reduces redundancy
Increases consistency
Improves data sharing
Better security
Backup & recovery support


Disadvantages

Expensive software
Requires trained staff
More hardware needed
DB failure affects whole system



Q3(iii) Explain DML commands in detail

DML = Data Manipulation Language

1. INSERT

Adds new rows

  INSERT INTO Student VALUES (1,'Raj',85);


2. UPDATE

Modifies existing rows

  UPDATE Student SET marks=90 WHERE id=1;


3. DELETE

Removes rows

  DELETE FROM Student WHERE id=1;


4. SELECT

Retrieves data

  SELECT * FROM Student;


----------------------------------------------------------------------


✅ Q4(a) – Explain Relational Algebra Operators (5 marks)

1. Selection (σ)

Selects rows satisfying condition.
Example:
σ(marks > 50)(Student)


2. Projection (π)

Selects specific columns.
π(name, marks)(Student)


3. Union ( ∪ )

Returns unique rows from both tables.


4. Intersection ( ∩ )

Common rows in both tables.


5. Difference ( − )

Rows in A not in B.


6. Cartesian Product ( × )

Combines each row of A with each row of B.


7. Join

Combines tables based on related columns.
Types: Inner, Outer, Natural.


8. Rename (ρ)

Renames table or attributes.



✅ Q4(b) ER Diagram of Banking System

⭐ STEP 1 — Understand the Entities (Rectangles)

Entities = real-world objects.

In Banking System, the main entities are:

✔ 1. CUSTOMER
A person who has bank account.

✔ 2. ACCOUNT
Bank account belonging to customer.

✔ 3. TRANSACTION
Deposits / Withdrawals / Payments.

✔ 4. BRANCH
Bank branch where account is maintained.

So we have 4 rectangles.



⭐ STEP 2 — Add Attributes (Ovals)

Attributes = details of entity.

CUSTOMER
  Customer_ID
  Name
  Phone

ACCOUNT
  Account_No
  Account_Type
  Balance

TRANSACTION
  Txn_ID
  Amount
  Date
  Txn_Type

BRANCH
  Branch_ID
  Location

Each attribute is an oval.



⭐ STEP 3 — Add Relationships (Diamonds)

Relationships connect two entities.

(A) CUSTOMER Has ACCOUNT

One customer → many accounts
Diamond name = Has

(B) ACCOUNT Performs TRANSACTION

One account → many transactions
Diamond name = Performs

(C) BRANCH Maintains ACCOUNT

One branch → many accounts
Diamond name = Maintains




⭐ STEP 4 — Now Draw the ER Diagram (Simple & Clear)

Below is a very simple diagram you can easily copy in exam.


                 +-------------+
                 |  CUSTOMER   |
                 +-------------+
                 /      |      \\
      (Customer_ID) (Name) (Phone)
                 \\
                  \\
                +---------+
                |  Has    |    (Relationship)
                +---------+
                     |
                     |
                 +-------------+
                 |   ACCOUNT   |
                 +-------------+
              /       |         \\
   (Account_No) (Type) (Balance)
                     |
         +---------------------+
         |     Performs        |
         +---------------------+
                     |
                +-------------+
                | TRANSACTION |
                +-------------+
             /      |       \\
 (Txn_ID) (Amount) (Txn_Type) (Date)

                     |
          +--------------------+
          |     Maintains      |
          +--------------------+
                     |
                 +-------------+
                 |   BRANCH    |
                 +-------------+
               /         \\
      (Branch_ID)     (Location)



⭐ Explanation in Simple Words

✔ Customer HAS Account

A customer can open one or more accounts.
Example: Raj has a Savings account + Fixed deposit.


✔ Account PERFORMS Transaction

Every transaction belongs to an account.
Example: Deposit ₹500 → linked to Account No 123


✔ Branch MAINTAINS Account

Each account belongs to a bank branch.
Example: Account No 123 is in “Vesu Branch”


⭐ VERY SIMPLE SUMMARY

Rectangles = Entities
Ovals = Attributes
Diamond = Relationship
Lines = Connections





OR OPTION
Explain ANSI SPARC Architecture of DBMS

The ANSI–SPARC DBMS Architecture defines three levels that separate physical storage from user view.


⭐ Diagram (ASCII with clear structure)

                 +-----------------------------+
                 |      External Level         |
                 | (User Views / Subschemas)   |
                 +-----------------------------+
                      /             \
                     /               \
          View 1 (Student)       View 2 (Teacher)


                 +-----------------------------+
                 |     Conceptual Level        |
                 | (Entire Logical Structure)  |
                 |  - Tables                   |
                 |  - Relationships            |
                 |  - Constraints              |
                 +-----------------------------+


                 +-----------------------------+
                 |      Internal Level         |
                 | (Physical Storage Details)  |
                 |  - File organization        |
                 |  - Indexes                  |
                 |  - Blocks & Pages           |
                 +-----------------------------+


⭐ Explanation of All Three Levels (Easy Words)

1. External Level (View Level)

  Closest to users
  Shows only required data
  Hides the rest
  Different users → different views

Example:

Student can view only marks
Admin can view all details


2. Conceptual Level (Logical Level)

  Shows the entire database structure
  Tables, relationships, primary/foreign keys
  Does NOT show physical storage
  Maintains data independence

Example:
ER diagram converted into tables.


3. Internal Level (Physical Level)

  How data is stored on disk
  File formats, indexes, hashing
  Closest to the hardware

Example:
Data stored using B-trees, clustered indexes, blocks, pages etc.


⭐ Why ANSI–SPARC is Important?

  Separates user view from physical storage
  Supports data abstraction
  Provides Data Independence
    Physical Data Independence
    Logical Data Independence
      
      `
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 51,
      question: "51. Define stored procedure.",
      answer: "",
      codeExample: `
⭐ Stored Procedure (Easy Definition)

A Stored Procedure is a pre-written SQL program stored inside the database that can be executed 
whenever needed.

✔ It contains SQL statements like SELECT, INSERT, UPDATE, DELETE, loops, conditions, etc.
✔ It saves time because you don’t need to write the same SQL again and again.


⭐ Simple Explanation

A stored procedure is like a function in a database.
You create it once, store it, and use it many times.


⭐ Basic Syntax

CREATE PROCEDURE proc_name
AS 
BEGIN
   -- SQL statements
END;



⭐ Very Simple Example

Create stored procedure:
CREATE PROCEDURE show_students
AS
BEGIN
    SELECT * FROM students;
END;



Execute it:

EXEC show_students;


⭐ Why stored procedures are used?

  Reduce repeated writing of SQL
  Improve performance
  More secure
  Easy to maintain
      
      `
    },
    {
      id: 52,
      question: "52. Explain stored procedure architecture.",
      answer: "",
      codeExample: `
⭐ Stored Procedure Architecture (Easy Explanation)

A stored procedure architecture describes how a stored procedure works inside the DBMS from 
creation → storage → execution.

It mainly includes 4 components:


✅ 1. Client Application

This is the program or user that calls the stored procedure.

Example:
  PHP, Java, SQL command line, or Oracle SQL*Plus.

➡ Client sends request:

EXEC procedure_name;



✅ 2. DBMS Stored Procedure Compiler

When you create a stored procedure, the DBMS compiles it.

It checks:

  Syntax
  Valid SQL statements
  Parameters

➡ After checking, it converts the procedure into compiled code (execution plan).



✅ 3. Procedure Cache / Data Dictionary

After compilation, the stored procedure is stored in the database.

Stored in:

  System Catalog
  Procedure Cache
  Data Dictionary

➡ This helps the database run it faster next time (no need to recompile).



✅ 4. Execution Engine

Whenever a stored procedure is executed, the DBMS execution engine runs it.
It:
  Uses precompiled plan
  Executes SQL statements inside the procedure
  Returns results to the client


⭐ Simple Architecture Diagram (Easy ASCII)

   +-------------------+
   |  Client Program   |
   | (calls procedure) |
   +--------+----------+
            |
            v
   +-------------------+
   |  Procedure        |
   |   Compiler        |
   +--------+----------+
            |
            v
   +-------------------+
   | Data Dictionary   |
   | & Proc Cache      |
   | (Stores compiled) |
   +--------+----------+
            |
            v
   +-------------------+
   | Execution Engine  |
   +--------+----------+
            |
            v
   +-------------------+
   |   Output Result   |
   +-------------------+


⭐ Simple Example

CREATE PROCEDURE show_emp
AS
BEGIN
    SELECT * FROM employee;
END;


How it works:

1. You create it → Compiler checks and stores it.
2. Stored inside procedure cache.
3. When executed → Engine runs SQL.
4. Results sent to client.


⭐ Why this architecture is useful?

  Faster execution (stored & precompiled)
  Saves network traffic
  Improves security
  Easy to maintain
      
      `
    },
    {
      id: 53,
      question: "53. Explain stored procedure with example and CALL statement.",
      answer: "",
      codeExample: `
⭐ Stored Procedure (Easy Explanation)

A stored procedure is a pre-written SQL program stored in the database.
You create it once and call it whenever needed.

It reduces code repetition, improves performance, and increases security.


⭐ Syntax

CREATE PROCEDURE procedure_name()
BEGIN
    -- SQL statements
END;



⭐ Simple Example

✔ Create Stored Procedure

CREATE PROCEDURE show_students()
BEGIN
    SELECT * FROM students;
END;


⭐ CALL Statement (to run the procedure)

CALL show_students();


⭐ Output (example)

The query will display all rows from the students table.



⭐ Example with Parameter (optional but useful)

Create procedure with input:

CREATE PROCEDURE getStudent(IN sid INT)
BEGIN
    SELECT * FROM students WHERE id = sid;
END;


Call it:

CALL getStudent(5);
      
      `
    },
    {
      id: 54,
      question: "54. Write advantages of stored procedures.",
      answer: "",
      codeExample: `
⭐ Advantages of Stored Procedures

✅ 1. Faster Performance

SQL code is precompiled and stored inside the database.
DBMS does not need to recompile every time.
Execution becomes faster.


✅ 2. Reduces Network Traffic

Instead of sending multiple SQL statements from the application,
You send only the CALL statement.
Less data travels between application and database.


✅ 3. Reusability

Write the procedure once and use it many times.
Saves time and reduces repeated code.


✅ 4. Improved Security

Users can be allowed to run a procedure without giving access to actual tables.
Sensitive SQL logic stays hidden inside the procedure.


✅ 5. Easy Maintenance

If you need to change logic, you update the procedure only once.
No need to modify application code.


✅ 6. Modular Programming

Complex tasks can be broken into multiple small procedures.
Makes the system organized and easier to understand.


✅ 7. Less Errors

Procedures stored in the DBMS are tested and fixed once.
Reusing them reduces mistakes in applications.
      
      `
    },
    {
      id: 55,
      question: "55. Write disadvantages of stored procedures.",
      answer: "",
      codeExample: `
⭐ Disadvantages of Stored Procedures

❌ 1. Harder to Debug

Debugging stored procedures is more difficult compared to normal application code.
DBMS tools for debugging are limited.


❌ 2. Database Dependent

Stored procedures depend on the specific DBMS (MySQL, Oracle, SQL Server).
You cannot easily move them to another database without changes.


❌ 3. Increased Load on Database Server

Too many stored procedures can make the database server busy,
because all processing happens on the DB side.


❌ 4. Complex to Maintain

Large systems may have hundreds of procedures,
making management complicated.


❌ 5. Version Control is Difficult

Keeping track of changes in procedures is harder than tracking changes in application code.


❌ 6. Learning Required

Developers need to learn the procedure language (PL/SQL, T-SQL, etc.),
which adds extra work.


❌ 7. Not Suitable for All Logic

Some business logic is better handled in the application,
not inside the database.

      `
    },
    {
      id: 56,
      question: "56. Explain difference: stored procedure vs stored function.",
      answer: "",
      codeExample: `
✅ Stored Procedure vs Stored Function (Difference Table)


| Stored Procedure                                                      | Stored Function                                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------|
| A stored procedure is a block of SQL statements that performs a task. | A stored function is a block of SQL that performs a task and must return one value. |
| It may or may not return a value.                                     | It must return exactly one value using the RETURN statement.                        |
| Used for operations like insert, update, delete, complex logic.       | Used for calculations and returning a result.                                       |
| Called using the CALL statement.                                      | Called inside SQL statements like SELECT, WHERE, etc.                               |
| Can have IN, OUT, INOUT parameters.                                   | Mostly has IN parameters only.                                                      |
| Cannot be used directly in SQL queries.                               | Can be used in SQL queries easily.                                                  |
| Better for multiple operations at a time.                             | Better for returning a single computed result.                                      |
| Example: Insert new record, update salary, etc.                       | Example: Calculate total, average, discount, etc.                                   |


🧠 Easy Explanation (Short Notes)

Stored Procedure
  Does not need to return a value.
  Used mainly for business logic (INSERT, UPDATE, DELETE).
  Can return multiple values using OUT parameters.

Stored Function
  Must return one value.
  Used mainly for calculations.
  Can be used inside SELECT queries.

✅ Example to Understand

Stored Procedure Example
CREATE PROCEDURE addStudent(IN sName VARCHAR(50), IN sMarks INT)
BEGIN
    INSERT INTO student(name, marks) VALUES(sName, sMarks);
END;


Called as:

CALL addStudent('Raj', 90);



Stored Function Example

CREATE FUNCTION getSquare(num INT)
RETURNS INT
BEGIN
    RETURN num * num;
END;


Used as:

SELECT getSquare(5);
      `
    },
    {
      id: 57,
      question: "57. What are packages (if asked — short note)?",
      answer: "",
      codeExample: `
✅ Short Note: Packages

A package in a database (mainly Oracle PL/SQL) is a collection of related procedures, functions, variables, 
and cursors stored together under one name.

It helps in organizing database programs in a structured and reusable way.

A package has two parts:

1. Package Specification (Spec) – declares procedures, functions, variables.
2. Package Body – contains the actual code of the procedures and functions.


⭐ Features of Packages

Group related procedures/functions together
Improves code organization and readability
Supports encapsulation (hiding internal code)
Increases performance (loads once into memory)
Allows reuse of code


📌 Example

Package Specification

CREATE OR REPLACE PACKAGE student_pkg AS
   PROCEDURE addStudent(sName VARCHAR, sMarks INT);
   FUNCTION getTotalStudents RETURN INT;
END student_pkg;



Package Body

CREATE OR REPLACE PACKAGE BODY student_pkg AS
   PROCEDURE addStudent(sName VARCHAR, sMarks INT) IS
   BEGIN
      INSERT INTO student(name, marks) VALUES(sName, sMarks);
   END;

   FUNCTION getTotalStudents RETURN INT IS
      total INT;
   BEGIN
      SELECT COUNT(*) INTO total FROM student;
      RETURN total;
   END;
END student_pkg;


🎯 Simple Definition (one line)

A package is a container that groups related procedures, functions, and variables together for better 
organization and reusability.




✅ OUTPUT of Package Example

1. When you run this:

CALL student_pkg.addStudent('Raj', 85);


Output/Result:

✔ A new row is inserted into the student table.

| name | marks |
| ---- | ----- |
| Raj  | 85    |

(You will not see printed output, but the data is inserted.)


2. When you run this:

SELECT student_pkg.getTotalStudents() FROM dual;


Output/Result:

It will show the total number of students in the table.


Example output:

TOTALSTUDENTS
1

(If already many rows exist, the number will be higher.)


⭐ Summary (Very Simple)

addStudent() → inserts student → no printed output → data added in table.
getTotalStudents() → returns number → you will see a numeric output.
      

🟧 Summary

| Part                             | Meaning                                             |
| -------------------------------- | --------------------------------------------------- |
| student_pkg.getTotalStudents()   | Call function inside package                        |
| FROM dual                        | Dummy table used to allow SELECT without real table |
| Output                           | Total number of students in table                   |


Note: you not understand this example you can show practical number 10.

      `
    },
    {
      id: 58,
      question: "58. What is stored procedure cache?",
      answer: "",
      codeExample: `
✅ Stored Procedure Cache (Simple Explanation)

A stored procedure cache is a special memory area inside the database where the database stores the 
compiled and ready-to-run version of stored procedures.



✔ Why this exists?

Because compiling a stored procedure again and again is slow.
So the database keeps the compiled version in memory to run it faster next time.



⭐ In Simple Words

When you run a stored procedure:
  1. Database compiles it.
  2. Database stores the compiled version in cache.
  3. Next time you call the same procedure →
    Database runs it directly from cache (very fast).


💡 Why Stored Procedure Cache is Useful?

Faster execution (no need to compile every time).
Saves time for repeated procedures.
Improves overall database performance.
Reduces CPU work.



✔ Example (Very Simple)

Imagine this stored procedure:

  CALL getStudentMarks(10);


First time:
Database compiles → stores in cache.


Second time:
Database quickly runs it from cache → faster.
      
      `
    },
    {
      id: 59,
      question: "59. Explain main features of stored procedures.",
      answer: "",
      codeExample: `
✅ Main Features of Stored Procedures (Simple Explanation)

A stored procedure is a block of SQL statements saved in the database.
It has several useful features that make database work faster and easier.



⭐ 1. Reusability

You write the code once and use it again and again using the CALL statement.
No need to rewrite the SQL every time.



⭐ 2. Faster Execution

Stored procedures are compiled once and stored in procedure cache,
so they run faster the next time.



⭐ 3. Reduced Network Traffic

Instead of sending multiple SQL queries from your program,
you call one stored procedure → fewer network calls.



⭐ 4. Improved Security

You can:
  control who can call the procedure
  hide the actual SQL code
  avoid SQL injection
  Only the procedure name is exposed, not the internal code.



⭐ 5. Modularity

The code is organized into blocks.
Large tasks can be broken into smaller procedures.



⭐ 6. Better Maintenance

If logic changes, you only update the stored procedure.
No need to change code in every application.



⭐ 7. Support Parameters

Stored procedures can take:
  IN parameters (input values)
  OUT parameters (return values)
  INOUT parameters (send + receive)



⭐ 8. Supports Conditional Logic

Stored procedures allow:

IF / ELSE
CASE
LOOP
WHILE
REPEAT

So you can write complex logic inside the database.



⭐ 9. Can Return Multiple Results

A stored procedure can:

  return multiple values
  return multiple result sets
  return status codes

A normal SQL query usually returns only one result.



⭐ 10. Portable

Once created, the stored procedure works for:

PHP
Java
Python
.NET
C++

Any application can call the same stored procedure.
      
      
      `
    },
    {
      id: 61,
       question: "61. What is Deadlock? Explain with characteristics.",
      answer: "",
      codeExample: `
✅ What is Deadlock?

A deadlock is a situation in an operating system where two or more processes get stuck forever,
because each process is waiting for a resource held by another process.

So, no process can continue, and the system stops responding.

🔹 Simple Example

Process P1 has Resource A and needs Resource B
Process P2 has Resource B and needs Resource A
Both wait for each other → nobody gets the resource → deadlock occurs.

✅ Characteristics of Deadlock (Coffman Conditions)

Deadlock happens only when all these four conditions are true at the same time.


1️⃣ Mutual Exclusion

A resource can be used by only one process at a time.
Example: One printer cannot print for two processes at the same time.


2️⃣ Hold and Wait

A process is holding one resource and waiting for another.
Example: P1 holds Resource A and waits for Resource B.


3️⃣ No Preemption

Resources cannot be forcibly taken back.
A process must release the resource voluntarily (સ્વેચ્છાએ).


4️⃣ Circular Wait

There is a cycle of processes, each waiting for a resource held by the next process.

Example:
P1 → waiting for P2
P2 → waiting for P3
P3 → waiting for P1
This cycle = deadlock.


⭐ Summary (Easy to Learn)

Deadlock = Processes stuck forever, waiting for each other.
Deadlock occurs when these 4 conditions are true:

  Mutual Exclusion
  Hold and Wait
  No Preemption
  Circular Wait
      
      
      `
    },
    {
      id: 62,
      question: "62. Explain Deadlock Prevention (Wait-Die, Wound-Wait).",
      answer: "",
      codeExample: `
✅ Deadlock Prevention(નિવારણ)

Deadlock prevention means stopping deadlock before it happens by controlling how processes wait for 
resources.

Two popular methods are:

Wait-Die
Wound-Wait

Both use timestamps (older process = high priority, younger = low priority).


🔵 1️⃣ Wait-Die Method

✔ Rule (Simple)

Older process can wait.
Younger process must die (abort).


✔ How it works?

If a younger process requests a resource held by an older process,
👉 it dies (aborted and restarted later).

If an older process requests a resource held by a younger process,
👉 it waits.


✔ Example

Let’s say:

P1 = older
P2 = younger

Case 1:
P1 wants resource held by P2 → P1 waits.

Case 2:
P2 wants resource held by P1 → P2 dies (aborted).



🔵 2️⃣ Wound-Wait Method

✔ Rule (Simple)

Older process wounds(घाव)(forces rollback) younger process.
Younger process waits when requesting resource from an older process.

✔ How it works?

If an older process requests a resource held by a younger process,
👉 older process wounds the younger (younger is rolled back).

If a younger process requests a resource held by an older process,
👉 younger process waits.


✔ Example

Let’s say:

P1 = older
P2 = younger

Case 1:
P1 wants resource held by P2 → P1 wounds P2 → P2 is rolled back.

Case 2:
P2 wants resource held by P1 → P2 waits.



⭐ Easy Difference (Table)

| Method         | Older Process                              | Younger Process           |
| -------------- | ------------------------------------------ | ------------------------- |
| Wait-Die       | Older waits                                | Younger dies (aborts)     |
| Wound-Wait     | Older wounds (forces rollback) younger     | Younger waits             |



⭐ Summary in One Line

Wait-Die: Older waits, younger dies.
Wound-Wait: Older wounds younger, younger waits.


      `
    },
    {
      id: 63,
      question: "63. Explain Deadlock example (Student–Grade case).",
      answer: "",
      codeExample: `
✅ Deadlock Example: Student–Grade Case

Imagine a college system with two tables:

1. STUDENT
2. GRADE

Two transactions (programs) are running at the same time:

  T1 → wants to update the STUDENT table first
  T2 → wants to update the GRADE table first

Because both are locking different tables first, a deadlock can happen.


🎓 Real-Life Style Example

👉 Transaction T1 (Program 1)

1. Locks STUDENT table
2. Now wants to lock GRADE table

👉 Transaction T2 (Program 2)

1. Locks GRADE table
2. Now wants to lock STUDENT table


❌ How Deadlock Happens?
Step-by-step:

1. T1 locks STUDENT
  → No problem.

2. T2 locks GRADE
  → Still no problem.

3. T1 now needs GRADE, but
  → GRADE is locked by T2
  ➝ So T1 waits.

4. T2 now needs STUDENT, but
  → STUDENT is locked by T1
  ➝ So T2 waits.


Now T1 is waiting for T2,
and T2 is waiting for T1.

👉 Both are waiting forever = DEADLOCK.




🔄 Simple Diagram (Text Form)
T1: LOCK STUDENT  ------------ waits for --------->  GRADE (locked by T2)
T2: LOCK GRADE    ------------ waits for --------->  STUDENT (locked by T1)


This forms a cycle:

T1 → STUDENT → T2 → GRADE → T1


Cycle = Deadlock exists


📝 Very Simple Explanation

One program takes STUDENT first and then wants GRADE.
Another program takes GRADE first and then wants STUDENT.
Each one is holding something the other one needs.
Both are waiting and nobody can continue.
This “waiting circle” is called a deadlock.


⭐ Final One-Line Answer

In the Student–Grade deadlock, T1 locks STUDENT and waits for GRADE, while T2 locks GRADE and waits 
for STUDENT. Both wait for each other forever, creating a deadlock.
      
      
      `
    },
    {
      id: 64,
      question: "64. What is Concurrency Control?",
      answer: "",
      codeExample: `
✅ What is Concurrency Control?

Concurrency Control in DBMS means managing multiple users who access the database at the same time
so that:

  data does not get corrupted
  results remain correct and consistent
  transactions run smoothly without problems like deadlock or data loss


📌 Simple Example

Suppose two students Rahul and Priya both update the same bank account at the same time.


Without concurrency control:

  Rahul adds ₹100
  Priya adds ₹200
  Final balance may become wrong (lost update problem)


With concurrency control:

  DBMS makes sure one update happens properly, then the next
  Final balance becomes correct (₹300 added)


🎯 Why Concurrency Control is Needed?

Because without it, the following problems occur:

Lost updates
Dirty reads
Incorrect results
Deadlocks

Concurrency control avoids all these issues.



🔒 How DBMS Manages It?

(DBMS uses these internally)

Locks
Timestamps
Two-Phase Locking (2PL)
Deadlock Detection/Prevention


⭐ Easy One-Line Definition
Concurrency control ensures correct and safe execution of multiple transactions running at the same time.


---------------------------------------------------------------------------


🟧 🔥 What is Concurrency Control? (Simple Explanation)

👉 Concurrency Control = The technique used by DBMS to manage multiple transactions running at 
the same time so they don’t:

  overwrite each other’s data
  read incorrect data
  get stuck in deadlocks


Example:

Two users update the same bank account at the same time → without concurrency control, data becomes 
wrong.


🟥 🔥 DEADLOCK Example (Two Transactions Blocking Each Other)

Consider a table:

CREATE TABLE accounts(
  acc_id INT PRIMARY KEY,
  balance INT
);


Assume two rows:

1 → 5000
2 → 6000


🟥 ⚠️ DEADLOCK Happens Like This
❗ Transaction T1 (User 1)

-- T1
BEGIN;
UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;  -- Lock row 1
-- T1 now waits for row 2


❗ Transaction T2 (User 2)

-- T2
BEGIN;
UPDATE accounts SET balance = balance - 300 WHERE acc_id = 2;  -- Lock row 2
-- T2 now waits for row 1


👉 T1 locked row 1 and waiting for row 2
👉 T2 locked row 2 and waiting for row 1

🔥 Both are waiting forever → DEADLOCK!

The DBMS must kill one transaction.



🟧 🔥 Concurrency Control Solutions (with Queries)

Now I will show example queries for each technique.


🟩 1. Locking (Pessimistic Concurrency Control)

Use FOR UPDATE to lock rows before using them.

✔ Solution:

BEGIN;
SELECT * FROM accounts 
WHERE acc_id = 1 
FOR UPDATE;    -- Lock row 1 first

UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;

COMMIT;


Purpose:
  Prevents other transactions from touching that row
  Avoids deadlock by clear locking order



🟩 2. Timestamp Ordering (Older transaction gets priority)

DBMS decides:
  Older transactions → go first
  Younger transactions → wait or rollback

❗ You don’t write timestamp rules manually
DBMS handles it internally using versions.

But you can simulate:

Example:

  SET TRANSACTION READ ONLY;    -- Older/safer

Older read-only transactions get priority.


🟩 3. Two-Phase Locking (2PL)

✔ Rule:

Phase 1 → Acquire all locks
Phase 2 → Release locks only after commit

Example:

BEGIN;

-- Acquire locks first
SELECT balance FROM accounts WHERE acc_id IN (1,2) FOR UPDATE;

-- Then perform updates
UPDATE accounts SET balance = balance - 300 WHERE acc_id = 1;
UPDATE accounts SET balance = balance + 300 WHERE acc_id = 2;

COMMIT;

✔ Prevents deadlock because you lock everything at start.


🟩 4. Deadlock Detection

DBMS does this automatically.
If deadlock occurs:

🔥 Oracle/MySQL will kill one transaction:

  ORA-00060: deadlock detected while waiting for resource

You don’t write code for this.

But you can simulate:

T1:
UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;

T2:
UPDATE accounts SET balance = balance + 200 WHERE acc_id = 1;

One will be killed.



🟩 5. Deadlock Prevention (Priority Method)

✔ Example rule:
  Transaction with smaller acc_id locked first.

Practical implementation:
  Always lock rows in same order.


Good Example (Prevents Deadlock)

BEGIN;

-- Always lock lower ID first
SELECT * FROM accounts WHERE acc_id = 1 FOR UPDATE;
SELECT * FROM accounts WHERE acc_id = 2 FOR UPDATE;

-- then update
UPDATE accounts SET balance = balance + 200 WHERE acc_id = 1;
UPDATE accounts SET balance = balance - 200 WHERE acc_id = 2;

COMMIT;


✔ No deadlock because order is fixed.


⭐ FINAL SUMMARY TABLE (Simple)

| Technique               | Example                         | Simple Meaning                  |
| ----------------------- | ------------------------------- | ------------------------------- |
| Locking                 | SELECT … FOR UPDATE             | Lock rows before others use     |
| Timestamp ordering      | DB handles automatically        | Older transactions first        |
| Two-phase locking       | Lock all rows → update → commit | Safe locking order              |
| Deadlock detection      | DB kills one transaction        | Auto recovery                   |
| Deadlock prevention     | Lock in fixed order             | Stop deadlock before it happens |


---------------------------------------------------------------------------


You said:
hey can you explain what is mean by FOR and  FOR UPDATE
ChatGPT said:


🟩 1. What is FOR in SQL?

FOR alone is NOT a SQL keyword.

It is used in:

✔ PL/SQL Loops

Example:

FOR i IN 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;


Meaning:
➡ Repeat from 1 to 5


✔ Cursor FOR Loop

Example:

FOR rec IN (SELECT * FROM student) LOOP
    DBMS_OUTPUT.PUT_LINE(rec.name);
END LOOP;


Meaning:

➡ Loop through each row of SELECT query
➡ No locking, only looping

➡ So, FOR is used only for looping in PL/SQL.



🟥 2. What is FOR UPDATE in SQL?

FOR UPDATE is a SQL clause
→ used inside SELECT query


✔ Purpose:

👉 To lock selected rows
👉 Prevent other transactions from updating them
👉 Used in concurrency control
👉 Avoids deadlocks and conflicts


🟦 Example of FOR UPDATE

SELECT * 
FROM accounts 
WHERE acc_id = 1
FOR UPDATE;


Meaning:

👉 Select this row
👉 Lock it for updates
👉 No one else can modify this row until you commit/rollback


🟨 Difference Summary (SUPER EASY)

| Word           | Used In      | Meaning                      |
| -------------- | ------------ | ---------------------------- |
| FOR            | PL/SQL Loops | Repeat/iterate               |
| FOR UPDATE     | SELECT Query | Lock rows to avoid conflicts |



🟧 Example to Show the Difference

🔹 FOR (LOOP)

FOR i IN 1..3 LOOP
  DBMS_OUTPUT.PUT_LINE(i);
END LOOP;


Output:
1
2
3

🔹 FOR UPDATE (LOCK ROWS)

SELECT * FROM student WHERE id = 10 FOR UPDATE;


Meaning:

Lock this student row
No one else can update/delete it until you finish


🟩 Why FOR UPDATE is Important?

👉 Prevents two users from updating same row at same time
👉 Avoids data corruption
👉 Helps control concurrency


Example:

Transaction 1:

SELECT * FROM accounts WHERE acc_id = 1 FOR UPDATE;

Row 1 is locked.


Transaction 2:

UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;


❌ Will WAIT until Transaction 1 commits.


⭐ Simple Analogy
✔ FOR = Like a loop in programming

Ex: repeat 10 times


✔ FOR UPDATE = Like putting a "Do Not Touch" tag on a row

Only you can update it until you finish.
      `
    },
    {
      id: 65,
      question: "65. Explain GRANT and REVOKE commands.",
      answer: "",
      codeExample: `
✅ GRANT Command

Meaning:

The GRANT command is used to give permissions (rights) to a user on database objects like tables, views, procedures, etc.

What permissions?

SELECT
INSERT
UPDATE
DELETE
ALL PRIVILEGES or ALL                               //PRIVILEGES mean permissions


Syntax
GRANT permission_list ON table_name TO user_name;


Example

Give SELECT and INSERT permission on students table to user raj:

  GRANT SELECT, INSERT ON students TO raj;


Give all permissions:

  GRANT ALL PRIVILEGES ON students TO raj;   or
  GRANT ALL ON students TO raj;



✅ REVOKE Command

Meaning:

The REVOKE command is used to remove previously given permissions from a user.

Syntax

REVOKE permission_list ON table_name FROM user_name;


Example

Remove SELECT permission from user raj:

  REVOKE SELECT ON students FROM raj;


Remove all permissions:

  REVOKE ALL PRIVILEGES ON students FROM raj;


⭐ Easy One-Line Difference

GRANT → Give permissions
REVOKE → Remove permissions
      
      `
    },
    {
      id: 66,
      question: "66. Explain Role-Based Access Control (RBAC).",
      answer: "",
      codeExample: `
✅ Role-Based Access Control (RBAC)
Meaning:

RBAC is a security method where permissions are given to roles, not directly to users.
Then users are assigned roles.

So, user → gets role → role has permissions.


🧠 Why RBAC is used?

Easy to manage permissions
No need to give rights one by one to each user
Useful in large organizations


✅ How RBAC Works (Simple Explanation)

Create Roles
Example roles:

  Admin
  Manager
  Staff


Assign Permissions to Roles
Example:

  Admin → SELECT, INSERT, UPDATE, DELETE
  Manager → SELECT, UPDATE
  Staff → SELECT


Assign Users to Roles
Example:

  Raj → Manager
  John → Staff

Thus, Raj automatically gets Manager permissions.


✅ Simple Example (SQL)

1. Create a Role

  CREATE ROLE manager;


2. Give permissions to role

  GRANT SELECT, UPDATE ON employees TO manager;


3. Assign the role to a user

  GRANT manager TO raj;

Now Raj can SELECT and UPDATE employees data automatically.

⭐ Easy One-Line Definition

RBAC is a method where permissions are given to roles, and roles are assigned to users to simplify access 
control.
      
      `
    },
    {
      id: 67,
      question: "67. What is PKI? Explain its working.",
      answer: "",
      codeExample: `
🌟 PKI (Public Key Infrastructure) — Easy Explanation

Think of PKI like a digital security system that keeps online communication safe and trustworthy.

It mainly does two things:

  1. Locks your data → So no hacker can read it
  2. Proves identity → So you know you’re talking to the real person/website


🔑 PKI uses two keys

PKI uses a pair of keys:

  Public Key → can be shared with everyone
  Private Key → must be kept secret

They work together like a lock and key.

🔐 How PKI Works — Very Simple Example

📌 Example: Raj wants to send a secret message to Neha.

✔ Step 1: Neha has two keys

  Public Key
  Private Key

✔ Step 2: Neha gives her public key to Raj

(Anyone can have it)

✔ Step 3: Raj locks (encrypts) the message using Neha’s public key
✔ Step 4: Only Neha can open (decrypt) it using her private key

➡️ This keeps the message safe.
Even if someone steals the message, they cannot open it.



🪪 But how does Raj know the key really belongs to Neha?

Here comes the important part:


👉 PKI uses Digital Certificates

A Digital Certificate is like a digital ID card that proves:

  Who the person/website is
  Their public key is real
  It is verified by a trusted authority

This trusted authority is called CA (Certificate Authority).


🏢 What does a Certificate Authority (CA) do?

  Checks identity (like KYC)
  Issues a digital certificate
  Signs it so everyone can trust it

Example CAs: DigiCert, GoDaddy, Let's Encrypt.


🔄 PKI Real-World Use Example

When you open https://google.com, your browser checks:

1. Does Google have a valid certificate?
2. Was it issued by a trusted CA?
3. Is the public key safe?

If YES → browser shows the 🔒 padlock.


⭐ Easy One-Line Definition

PKI is a digital security system that protects data using public–private keys and verifies identity using 
digital certificates.



🔐 PKI Working Diagram (Very Simple)


                +---------------------------+
                |   Certificate Authority   |
                |         (CA)              |
                +------------+--------------+
                             |
                             | Issues Digital Certificate
                             v
                     +------------------+
                     |   Neha (User)    |
                     |  Has 2 Keys:     |
                     |  - Public Key    |
                     |  - Private Key   |
                     +---------+--------+
                               |
             Neha shares       |  
             Public Key        |
                               v
                         +------------+
                         |    Raj     |
                         +------------+
                               |
                               | Encrypts message
                               | using Neha's
                               | Public Key
                               v
                      +--------------------+
                      | Encrypted Message  |
                      +--------------------+
                               |
                               v
                     +------------------------+
                     |   Neha receives it     |
                     | Decrypts using her     |
                     |   Private Key          |
                     +------------------------+


⭐ Explanation of Diagram (super simple)

1. CA (Certificate Authority) gives Neha a Digital Certificate that proves her identity.
2. Neha has:
  Public Key → shared with everyone
  Private Key → kept secret
3. Neha gives her Public Key to Raj.
4. Raj encrypts the message with that Public Key.
5. Only Neha can open (decrypt) it using her Private Key.

➡️ This makes communication safe and trusted.

      
      
      `
    },
    {
      id: 68,
      question: "68. Explain Encryption and its challenges.",
      answer: "",
      codeExample: `
🔐 What is Encryption? (Easy Words)

Encryption means changing readable data into unreadable form so that only the correct person can read it.

✔ Plain text → (Encrypted) → Cipher text
✔ Only someone with the correct key can turn it back to plain text.

It protects data from:

Hackers
Unauthorized access
Data theft

Simple Example

Raj sends a message to Neha.
Raj locks (encrypts) the message with Neha’s public key.
Only Neha can open (decrypt) it with her private key.


⭐ Types of Encryption (Very Simple)

1. Symmetric Encryption

Same key for encryption and decryption
Fast
Example: AES


2. Asymmetric Encryption

Two keys: public + private
More secure, slower
Example: RSA


⚠️ Challenges of Encryption (Easy and Simple)

1️⃣ Key Management Problem

Keys must be stored safely
If the private key is lost → data cannot be recovered
If the key is stolen → encryption becomes useless


2️⃣ Performance Issues

Strong encryption uses heavy math
It can make systems slow, especially large data


3️⃣ Complex to Implement

Developers must configure it correctly
Wrong setup → security becomes weak


4️⃣ Compatibility Problems

Old systems may not support modern encryption
Upgrading everything is costly


5️⃣ Encrypted Data Cannot Be Checked

Antivirus and monitoring tools cannot see inside encrypted data
Hackers can hide malware in encrypted traffic


6️⃣ Backup and Recovery Issues

Encrypted backups require keys
If keys are misplaced → backup becomes unusable


7️⃣ Legal and Policy Restrictions

Some countries restrict strong encryption
Sharing encrypted data across borders may be regulated


⭐ Easy One-Line Summary

Encryption protects data by converting it into unreadable form, but managing keys, performance issues,
and complexity are major challenges.
      
      `
    },
    {
      id: 69,
      question: "69. Explain Database Security Challenges.",
      answer: "",
      codeExample: `
Database Security Challenges (Simple Explanation)

Database security means protecting data from unauthorized access, damage, or misuse.
But keeping a database fully safe is difficult. These difficulties are called security challenges.


Below are the main challenges, explained simply:

1. Unauthorized Access

People who should NOT see the data try to access it.
  Example: Hacker tries to log in as admin.
  Reason: Weak passwords, unsafe network, no encryption.


2. SQL Injection Attacks

Attacker inserts harmful SQL commands into input boxes.
  Example: In login form, attacker enters
    "' OR '1'='1"
    → Database returns all data.


3. Insider Threats

Employees who already have access misuse the database.
Example: Staff downloads customer data for personal use.


4. Weak Authentication

Using simple login systems like:

  No OTP
  No two-factor authentication
    This makes the database easy to break into.


5. Data Leakage

Sensitive data is exposed accidentally or intentionally.
Example: Backup files shared publicly by mistake.


6. Weak or No Encryption

If the data is not encrypted:

  Hackers can easily read stolen files.
  Network data can be intercepted.


7. Malware and Ransomware

Viruses or ransomware can:

  Steal data
  Lock the entire database
  Demand money to restore access


8. Poor Access Control

Everyone gets too many permissions.
Example: A user who only needs SELECT access also gets DELETE access → risk of data loss.


9. Insecure Database Configuration

Using default settings:

Default admin password
Open ports
Public IP connections
Hackers easily exploit these.


10. No Regular Updates

Outdated DB software has security holes.
Hackers can attack known vulnerabilities.


11. Backup Security Issues

Backups stored without encryption or security can be stolen.
Example: Backup file on USB drive lost.


12. Denial of Service (DoS) Attacks

Attackers overload the database with requests.
Result: Database becomes slow or crashes.


13. Cloud Database Risks

Cloud DBs can be hacked if:

Misconfigured
Public bucket left open
Weak API keys used



Short Revision Answer (Exam Ready)

Database Security Challenges:

Unauthorized access
SQL injection
Insider threats
Weak authentication
Data leakage
Weak encryption
Malware / ransomware
Poor access control
Insecure configuration
Outdated software
Backup security issues
DoS attacks
Cloud security risks
      
      
      `
    },
    {
      id: 70,
      question: "70. Explain Deadlock Detection & Recovery.",
      answer: "",
      codeExample: `
Deadlock Detection & Recovery (Easy Explanation)

Deadlock happens when two or more transactions wait for each other forever.

Example:

  T1 waits for a lock held by T2

  T2 waits for a lock held by T1
  → They will wait forever = Deadlock

To handle this, DBMS uses Deadlock Detection and Recovery.


1. Deadlock Detection

Meaning:
The DBMS regularly checks if a deadlock has happened.

How detection works:


✔️ Wait-For Graph (WFG)

A graph that shows who is waiting for whom.
If the graph has a cycle, it means deadlock exists.

Example:
T1 → waiting for T2
T2 → waiting for T1
Cycle = Deadlock.


✔️ When detection is done?

DBMS checks deadlock:

  Periodically (every few seconds), or
  When a transaction has waited too long, or
  When system load is high.



2. Deadlock Recovery

Once DBMS detects a deadlock, it must break the cycle.
There are 3 main recovery methods:


(A) Transaction Rollback

DBMS cancels (rolls back) one or more transactions to break deadlock.

How rollback works:

1. Choose a transaction to kill (called victim).
2. Undo its changes.
3. Free its locks.
4. Other transactions continue normally.

Victim selection criteria:

  Least work done
  Lowest priority
  Smallest cost
  Transaction that is easiest to restart later



(B) Terminating (Killing) a Transaction

DBMS forcefully stops one transaction completely.

Used when:

  The transaction has created the deadlock
  It is easy to restart



(C) Resource Preemption

Preemption = Taking something away.

In deadlock, two transactions are holding locks and waiting for each other.
So DBMS sometimes takes (removes) the lock from one transaction to break the deadlock.


⭐ Simple Example (Very Easy)
Suppose:

  T1 has Lock A
  T2 has Lock B

Both want each other's lock:

  T1 wants B
  T2 wants A

Deadlock!


✔️ Resource Preemption means:

DBMS says:

"T2, give me back Lock B.
I need it so T1 can continue."

So DBMS:

1. Takes Lock B from T2
2. Undo (rollback) only the part of T2 that used Lock B
3. Gives Lock B to T1
4. T1 continues and finishes
5. Later T2 will run again

⭐ Why is this not used much?

Because:

1️⃣ Hard to implement

DBMS must carefully undo only some operations — very tricky.


2️⃣ Cascading Rollback

If T2 is rolled back partially,
then any transaction that used T2's data may also need rollback.

Example:

  T2 changed something
  T3 used T2’s changed value
  If DBMS rolls back T2 → T3 may also need rollback



Short Exam-Ready Answer

Deadlock Detection

DBMS checks for deadlocks using Wait-For Graph.
If a cycle is found → Deadlock detected.


Deadlock Recovery

Methods used after detecting deadlock:

  1. Rollback a victim transaction
  2. Kill a transaction
  3. Preempt resources
      
      `
    },
    {
      id: 71,
      question: "71. What is Database Survivability?",
      answer: "",
      codeExample: `
✅ Database Survivability (Easy Definition)

Database Survivability means the database can continue working even during failures, attacks, disasters, 
or system crashes.

In simple words:

👉 The database should stay alive, available, and recover quickly
—even if something bad happens.



⭐ Why is Survivability Important?

Because businesses need their data 24×7.
So even if there is:

  Server crash
  Hardware failure
  Cyber attack
  Natural disaster
  Power failure

…the database should still work or recover fast.


⭐ Main Features of Database Survivability

1️⃣ Redundancy

Copy of data stored in multiple places
(Example: Replication → same DB on two servers)


2️⃣ Failover

If one server fails, automatically shift to another server.


3️⃣ Backups

Regular copies of the database saved safely.


4️⃣ Recovery mechanisms

Redo logs, undo logs, checkpoints help restore data.


5️⃣ Security protection

Database must keep working even if attacked.


⭐ One-line Exam Answer

Database Survivability is the ability of a DBMS to continue operating, maintain data availability, and 
recover quickly during failures, disasters, or attacks.
      
      `
    },
    {
      id: 72,
      question: "72. Differences between Wait-Die and Wound-Wait.",
      answer: "",
      codeExample: `
✅ Difference: Wait-Die vs Wound-Wait (Easy Words)

| Wait-Die                                                                                 | Wound-Wait                                                                              |
| -----------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------|
| Older transaction waits, younger transaction dies                                        | Older transaction wounds (forces rollback) of younger transaction                       |
| If an older transaction wants a resource held by a younger, → it waits                   | If an older transaction wants a resource held by a younger, → younger is rolled back    |
| If a younger transaction wants a resource held by an older, → younger dies (rolled back) | If a younger transaction wants a resource held by an older, → younger waits             |
| Uses non-preemptive approach (older never kills younger, it just waits)                  | Uses preemptive approach (older kills younger to avoid deadlock)                        |
| Simple but may cause more rollbacks for young transactions                               | Faster and fewer rollbacks than Wait-Die                                                |
| Example: T1 (older) → T2 (younger). T1 waits. T2 dies if it requests T1’s resource.      | Example: T1 (older) → T2 (younger). T1 wounds T2. T2 waits if it requests T1’s resource.|



⭐ Easy Memory Trick

Wait-Die → Older WAITs, Younger DIES
Wound-Wait → Older WOUNDS younger


⭐ One-line Summary

Wait-Die:
Older waits, younger dies. (Non-preemptive)

Wound-Wait:
Older wounds younger, younger waits. (Preemptive)
      
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
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1.1,
      question: "1 Study basic SQL statements.",
      answer: "\\nQuery to study CREATE table command \\nQuery to study ALTER table commands \\nQuery to study DROP table command \\nQuery to study RENAME table command \\nQuery to study INSERT command \\nQuery to study UPDATE command \\nQuery to study DELETE command",
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
      id: 2.2,
      question: "2 STUDY BASIC SQL STATEMENTS",
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
      id: 3.3,
      question: "3 SQL JOIN Statements",
      answer: "<> means -> not equal to(Equivalent to != in many programming languages).",
      codeExample: `

🧩 What happens when you write only JOIN without type?

👉 When you write JOIN (without INNER, LEFT, RIGHT, or FULL),
SQL treats it as an INNER JOIN by default.




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
      id: 4.4,
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
      id: 5.5,
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
      id: 6.6,
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
      id: 7.7,
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
      id: 8.8,
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
      id: 9.9,
      question: "9. To create triggers on a student table so that whenever we INSERT, UPDATE, or DELETE, the old or new data is automatically copied into another table named Affect.",
      answer: "",
      codeExample: `
✅ 1. Algorithm (Very Easy Steps)


Algorithm for BEFORE INSERT Trigger

  When a new record is inserted into student,
  Before inserting the row,
  Copy the new values (:NEW) into Affect table.


Algorithm for BEFORE DELETE Trigger

  When a record is deleted from student,
  Before deleting the row,
  Copy the old values (:OLD) into Affect table.


Algorithm for BEFORE UPDATE Trigger

  When a record is updated in student,
  Before updating the row,
  Copy the old values (:OLD) into Affect table.


✅ 2. PL/SQL Program (Easy & Clean Code)

Step 1: Create student table

CREATE TABLE student (
    Id INT,
    Name VARCHAR2(20),
    Score INT
);


Step 2: Insert sample data

INSERT INTO student VALUES (1, 'Sam', 800);
INSERT INTO student VALUES (2, 'Ram', 699);
INSERT INTO student VALUES (3, 'Tom', 250);
INSERT INTO student VALUES (4, 'Om', 350);
INSERT INTO student VALUES (5, 'Jay', 750);



Step 3: Create Affect table

CREATE TABLE Affect (
    Id INT,
    Name VARCHAR2(20),
    Score INT
);


output:

✅ Initial Data in student Table

Before applying any triggers:

| Id | Name | Score |
| -- | ---- | ----- |
| 1  | Sam  | 800   |
| 2  | Ram  | 699   |
| 3  | Tom  | 250   |
| 4  | Om   | 350   |
| 5  | Jay  | 750   |



Affect

(Empty at the start)

| Id | Name | Score |
| -- | ---- | ----- |
| —  | —    | —     |


---------------------


✅ BEFORE INSERT Trigger

CREATE OR REPLACE TRIGGER trg_before_insert
BEFORE INSERT ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:NEW.Id, :NEW.Name, :NEW.Score);
END;
/



✅ 1. After INSERT Operation

INSERT INTO student VALUES (6, 'Arjun', 500);

Trigger copies NEW row to Affect


student

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 3  | Tom   | 250   |
| 4  | Om    | 350   |
| 5  | Jay   | 750   |
| 6  | Arjun | 500   |


Affect
| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |



---------------------


✅ BEFORE DELETE Trigger

CREATE OR REPLACE TRIGGER trg_before_delete
BEFORE DELETE ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:OLD.Id, :OLD.Name, :OLD.Score);
END;
/



✅ 2. After DELETE Operation

DELETE FROM student WHERE Id = 3;

Trigger copies OLD (deleted) row into Affect.
Deleted row: (3, Tom, 250)


student

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 4  | Om    | 350   |
| 5  | Jay   | 750   |
| 6  | Arjun | 500   |


Affect

| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |
| 3  | Tom   | 250   |


---------------------


✅ BEFORE UPDATE Trigger

CREATE OR REPLACE TRIGGER trg_before_update
BEFORE UPDATE ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:OLD.Id, :OLD.Name, :OLD.Score);
END;
/



✅ 3. After UPDATE Operation

UPDATE student SET Score = 900 WHERE Id = 5;


Old row before update: (5, Jay, 750)
Trigger inserts old value into Affect.


student

| Id | Name  | Score |           |
| -- | ----- | ----- | --------- |
| 1  | Sam   | 800   |           |
| 2  | Ram   | 699   |           |
| 4  | Om    | 350   |           |
| 5  | Jay   | 900   | ← Updated |
| 6  | Arjun | 500   |           |


Affect

| Id | Name  | Score |                           |
| -- | ----- | ----- | ------------------------- |
| 6  | Arjun | 500   |                           |
| 3  | Tom   | 250   |                           |
| 5  | Jay   | 750   | ← Old value before update |



---------------------

🎉 Final Output

Affect (History Table)

| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |
| 3  | Tom   | 250   |
| 5  | Jay   | 750   |



student (Current Data)

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 4  | Om    | 350   |
| 5  | Jay   | 900   |
| 6  | Arjun | 500   |


`
    },
    {
      id: 10.10,
      question: "10. To create a Package in PL/SQL that contains: Procedure → performs Addition Function → performs Multiplication Then call them in a PL/SQL block and display results.",
      answer: "", 
      codeExample: `

✅ Algorithm (Very Simple)

Algorithm for Package

Create a package specification (only declaration):

  Declare a procedure add_numbers(x, y, result OUT)
  Declare a function multiply_numbers(x, y) RETURN NUMBER


Create a package body (implementation):

  Write code for add_numbers
  Write code for multiply_numbers


Write an anonymous PL/SQL block:

  Call add_numbers(5,7, sum_result)
  Call multiply_numbers(3,4)
  Display output using DBMS_OUTPUT.PUT_LINE



✅ PL/SQL Program (Clean & Simple)

1. Package Specification

CREATE OR REPLACE PACKAGE math_operations AS
    -- Procedure for addition
    PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER);

    -- Function for multiplication
    FUNCTION multiply_numbers(x NUMBER, y NUMBER) RETURN NUMBER;
END math_operations;
/


2. Package Body

CREATE OR REPLACE PACKAGE BODY math_operations AS

    -- Procedure logic
    PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER) IS
    BEGIN
        result := x + y;
    END add_numbers;

    -- Function logic
    FUNCTION multiply_numbers(x NUMBER, y NUMBER) RETURN NUMBER IS
    BEGIN
        RETURN x * y;
    END multiply_numbers;

END math_operations;
/


3. Test the Package

DECLARE
    sum_result NUMBER;
    product_result NUMBER;
BEGIN
    -- Call procedure
    math_operations.add_numbers(5, 7, sum_result);
    DBMS_OUTPUT.PUT_LINE('Sum Result: ' || sum_result);

    -- Call function
    product_result := math_operations.multiply_numbers(3, 4);
    DBMS_OUTPUT.PUT_LINE('Product Result: ' || product_result);
END;
/



✅ OUTPUT (Easy to Understand Table Form)

Procedure Output (Addition)

| Input X | Input Y | Output (Sum) |
| ------- | ------- | ------------ |
| 5       | 7       | 12           |


Function Output (Multiplication)

| Input X | Input Y | Output (Product) |
| ------- | ------- | ---------------- |
| 3       | 4       | 12               |



✔ Final DBMS_OUTPUT Screen (What You See)

Sum Result: 12
Product Result: 12


------------------------------------------------------------------------------------


✅ What is a PACKAGE in PL/SQL?

👉 A package is a folder (container) that stores related procedures and functions together.

Think like this:

📦 PACKAGE = A folder
Inside this folder, you keep things that belong to one topic.

Example:
You can create a package called math_operations
Inside it, you can keep:

add_numbers()
subtract_numbers()
multiply_numbers()
divide_numbers()


📌 Why use a package?

✔ 1. Organizes code
All related code is kept together.

✔ 2. Easy to manage
If you want to use math functions, you just call the package.

✔ 3. Better performance
When package is loaded once, all its procedures/functions stay in memory → faster execution.

✔ 4. Security
You can hide logic inside package body.



✅ What is a PROCEDURE?

👉 A procedure is a block of code that performs an action but DOES NOT return a value directly.
It can give output using OUT parameters.

Example:

  PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER)


➡ It performs an operation (addition).
➡ But it does not return value directly.
➡ You get the value through the output variable result.

📌 Think:
Procedure = A function without a return value.

It is used when you want to do something, not calculate and return something.


❓ What is "procedural"?

"Procedural" means anything related to procedures.
When we say procedural programming:

👉 It means writing code in the form of procedures (blocks of instructions).

Example:

Procedures
Functions
Code blocks

All are part of procedural programming.


🆚 Difference Between Package & Procedure (Easy Table)

| Feature       | PACKAGE                                           | PROCEDURE               |
| ------------- | ------------------------------------------------- | ----------------------- |
| Meaning       | A container that stores many procedures/functions | A single block of code  |
| Returns Value | No                                                | No (uses OUT parameter) |
| Purpose       | Organize code                                     | Perform a task          |
| Contains      | Procedures, functions, variables                  | Only code for one task  |
| Example       | math_operations package                           | add_numbers procedure   |


🧠 Simple Real-Life Example

PACKAGE = Folder on your Computer
Inside you store many files.

PROCEDURE = One file inside the folder
That file does one specific job.
      
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
      <h1>ADBMS Interview Questions</h1>
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
