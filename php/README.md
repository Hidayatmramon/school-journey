# PHP

| Folder | What it covers |
|---|---|
| `php-basics` | Variables, operators (arithmetic, comparison, logical, ternary), conditionals, loops and arrays, functions, GET and POST forms, and a multi-page HTML, CSS, and PHP website (`htmlcsspart2`). Study notes are in `NOTES.md`. |
| `oop-basics` | Classes and objects, constructors and destructors, inheritance, polymorphism with abstract classes and interfaces, visibility, and getters and setters. Includes a canteen app (`Ikantin`), a calculator (`Kalkulator`), and a group assignment. Study notes are in `NOTES.md`. |
| `mvc-native` | A small hand-written MVC structure (`app/core`, controllers, models, views) used for three apps: `Inventaris` (item borrowing), `buku` (books), and `profile`. |
| `crud-students` | CRUD app for student records (name, NIS, class group, rayon, status, ambition, and photo upload) on MySQL. |

## Running the examples

Requirements: PHP 8 or newer.

```bash
cd php/php-basics
php -S localhost:8000
```

For `crud-students`, also create a MySQL database named `db_crud`, import `students.sql`, and check the credentials in `koneksi.php`.

For the apps in `mvc-native`, check the database settings in each app's `app/config/Config.php` and import the `.sql` file in the app folder if there is one.

## Known limitations

`crud-students` builds SQL queries with string interpolation. In real projects, use prepared statements.
