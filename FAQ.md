# FAQ (Student Support)

This page answers common questions from students who are brand new to coding.

## VS Code and setup

**Q: What is VS Code?**
A: VS Code is the editor we use to write code and organize files. It also has a built‑in terminal.

**Q: Where is the terminal in VS Code?**
A: Open it with View → Terminal (or the Terminal tab at the bottom).

**Q: What is Live Preview / Live Server?**
A: It refreshes your page automatically when you save. This is optional, but very helpful.

**Q: Which Live Preview should I use?**
A: Use the official “Live Preview” extension by Microsoft. It is simple and reliable.

## Files and folders

**Q: Why do we create so many folders?**
A: This is the standard structure of a small web project. It keeps files organized and predictable.

**Q: Why is `index.html` inside `docs/`?**
A: GitHub Pages can publish from `docs/`. It also keeps the main folder clean.

## Terminal questions

**Q: I’m afraid of the terminal. Is that normal?**
A: Yes. It is normal. You only need a few commands at first.

**Q: What if I type the wrong command?**
A: Nothing bad will happen if you follow the steps. If you get an error, read it and try again.

## Windows / WSL2

**Q: Why use WSL2 on Windows?**
A: It gives you a Linux terminal like macOS. This makes our commands consistent across students.

**Q: Why is Linux the smart move?**
A: Linux has been stable for 30+ years, is vendor‑neutral, and is used by most technology creators.

**Q: Can I use PowerShell instead?**
A: Yes, but it is a fallback. We recommend WSL2 for consistency with class instructions.

**Q: I already made SSH keys on Windows. Do I need new ones for WSL2?**
A: Yes. Keys created in Windows do not carry into WSL2. Create a new key inside WSL2.

## Web tech stack

**Q: What is HTML/CSS/JS in one sentence?**
A: HTML = structure, CSS = style, JavaScript = behavior.

**Q: What is Node.js?**
A: It lets JavaScript run outside the browser and provides tools like npm.

## Debugging

**Q: My page is blank. What do I check?**
A: Confirm the server is running and you are opening `docs/index.html` in the browser.

**Q: My CSS isn’t showing. Why?**
A: Check the `<link>` path and make sure the CSS file name is correct.

**Q: My JavaScript isn’t working. Why?**
A: Check for errors in the browser console, and confirm the `<script>` path.
