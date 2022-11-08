/*
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.

Write an SQL query to report the names of the customer that are not referred by the customer with id = 2.

Return the result table in any order.
*/

SELECT name 
    FROM customer
    WHERE referee_id != 2

/*
INPUT: 
| id | name | referee_id |
| -- | ---- | ---------- |
| 1  | Will |            |
| 2  | Jane |            |
| 3  | Alex | 2          |
| 4  | Bill |            |
| 5  | Zack | 1          |
| 6  | Mark | 2          |


OUTPUT:
| name |
| ---- |
| Will |
| Jane |
| Bill |
| Zack |
*/