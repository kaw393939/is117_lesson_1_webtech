# HTML Basics

HTML is the **structure** of a web page.

Type this HTML5 template
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Student Page</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <h1>Your Name</h1>
    <p>Welcome to my page.</p>
    <a href="https://www.njit.edu">NJIT</a>
    <script src="js/scripts.js"></script>
  </body>
</html>
```

Tags you must know
- `h1` to `h6` = headings
- `p` = paragraph
- `a` = link

Where CSS can go
- Inline: `<p style="color: red;">Hello</p>`
- In a `<style>` tag inside `<head>`
- In a separate file (recommended): `css/styles.css`

Micro‑task
1) Change the `<h1>` to your name.
2) Change the `<p>` to one sentence about you.