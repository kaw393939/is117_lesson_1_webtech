# IS117 Student Webpage — Chapter 1

Welcome to your first chapter in the web tech stack. This is about learning to drive the “bus” of VS Code and the terminal.

Why we type (no copy/paste)
- Typing builds muscle memory.
- Muscle memory reduces mistakes later.
- Typing forces your brain to slow down and notice patterns.
- This is how you learn to drive the “bus” without relying on autopilot.

The bus metaphor (keep it simple)
- Bus = your VS Code workspace (the whole project)
- Steering wheel = file explorer (where you go)
- Dashboard = editor tabs (what you’re looking at)
- Clutch + gear shift = terminal commands (`cd`, `ls`, `mkdir`)
- Gas/brake = start/stop the local server
- Mirrors = Live Preview / browser

What you are building
- A tiny website with 1 HTML file, 1 CSS file, and 1 JavaScript file.
- You will create every file and folder from scratch to match this structure.

Project map (make yours look exactly like this)
```
is117first/
   docs/
      index.html
      css/
         styles.css
      js/
         scripts.js
   package.json
```

Quick links
- Project homepage: [docs/index.html](docs/index.html)
- macOS setup: [setup-macos.md](setup-macos.md)
- Windows setup: [setup-windows.md](setup-windows.md)
- WSL2 setup: [setup-wsl2.md](setup-wsl2.md)
- HTML lesson: [docs/html.md](docs/html.md)
- CSS lesson: [docs/css.md](docs/css.md)
- JavaScript lesson: [docs/js.md](docs/js.md)
- Git basics: [GIT.md](GIT.md)
- FAQ: [FAQ.md](FAQ.md)

Note on SSH keys
- If you switch to WSL2, you must create a **new** SSH key inside WSL2.
- SSH keys are tied to the machine/environment where you create them.

Chapter flow (suggested order)
1) OS setup (use WSL2 on Windows)
2) HTML lesson
3) CSS lesson
4) JavaScript lesson
5) Git basics
6) FAQ

How to use this chapter
- Read one lesson at a time.
- Make one small change, then refresh the browser.
- If you get stuck, pause, breathe, and ask for help with the exact error.

What to do first (quick checklist)
1) Open VS Code.
2) Open the Terminal inside VS Code (View → Terminal).
3) Follow your OS setup page.
4) Type every command yourself (no copy/paste).

What you will learn (keep it short)
- HTML = structure
- CSS = style
- JavaScript = behavior
- Node.js + npm = project setup tools
- VS Code + terminal = how you move around and create files

Why we use WSL2 on Windows
- It gives Windows students a Linux terminal like macOS.
- That means we can use the same commands in class.
- PowerShell is allowed, but treated as a fallback.

Why Linux is the smart move (short version)
- Linux has been stable for 30+ years.
- Most technology creators use Linux for development and servers.
- Learning Linux is vendor‑neutral and future‑proof.
- It maximizes the value of your learning time.

Assignment (your first build)
1) Create the folder structure from scratch.
2) Create the files listed in the project map.
3) Open the folder in VS Code.
4) Add basic content to each file (use the lessons for guidance).
5) Preview in the browser.
6) Commit your work with Git.

What a “server” means (one sentence)
A server is a program that shows your files in the browser at a web address like http://localhost:8000.

Node.js + npm (quick intro)
Node.js lets JavaScript run on your computer. npm is the package manager that comes with Node.

Step‑by‑step (from the project root):
```bash
npm init -y
```

That command creates a `package.json` file. You won’t use it much yet, but you will soon.

Terminal mini cheat sheet
- `pwd` = where am I?
- `ls` or `dir` = what files are here?
- `cd <folder>` = go into a folder
- `mkdir <name>` = make a new folder
- `touch <file>` or `New-Item <file>` = make a new file

If your folder tree doesn’t match, stop here
- Re-run the “Check your work” step in your OS setup page.
- Ask for help before you keep going.

Student prompts (use these to ask for help)
- “Explain what the `<head>` section does in my HTML.”
- “Why isn’t my CSS showing? Check my `<link>` path.”
- “Help me create the folder structure from scratch.”
- “Give me a simple example of a button click in JavaScript.”
- “What does `npm init -y` do and why do we use it?”
- “How do I run a local server and see my page?”
- “What should my project structure look like for this assignment?”
- “Explain this error message in plain English: [paste error].”

Quick start (preview in your browser)
macOS / Linux / WSL2:
```bash
cd /path/to/is117first
python3 -m http.server 8000
# Open http://localhost:8000/docs/index.html
```

Windows (PowerShell):
```powershell
cd C:\path\to\is117first
python -m http.server 8000
# Open http://localhost:8000/docs/index.html
```

If you are brand new, start with your OS setup guide, then read the HTML/CSS/JS lessons, then Git basics.
