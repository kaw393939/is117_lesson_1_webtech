# WSL2 Setup (Beginner Friendly)

WSL2 gives you a Linux terminal on Windows. If you like the Mac/Linux style, this is a good option.

Why Linux is the smart move (short version)
- Linux has been stable for 30+ years.
- Most technology creators use Linux for development and servers.
- Learning Linux is vendor‑neutral and future‑proof.
- It maximizes the value of your learning time.

File/folder primer (30 seconds)
- Folder = a container that holds files and other folders.
- File = a single document (like `index.html`).
- You will build the exact folder tree shown in the README.

Important: SSH keys are separate
- Keys you made on Windows do **not** carry into WSL2.
- You will create a **new** SSH key inside WSL2 for GitHub.

Part 1 — Install WSL2
Follow Microsoft’s guide: https://learn.microsoft.com/windows/wsl/install

Where to type commands
- Open VS Code → View → Terminal (inside WSL).
- Or use the Ubuntu terminal app.

Part 2 — Install tools inside WSL
Open your WSL terminal and run:

```bash
sudo apt update
sudo apt install git python3 python3-pip -y
sudo apt install nodejs npm -y
```

Check install versions:
```bash
node -v
npm -v
```

Part 3 — Create a new SSH key (inside WSL2)
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept the default file location
# Press Enter again to skip a passphrase (or set one if you prefer)
```

Start the SSH agent and add your key:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy the public key and add it to GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
```
Paste that key into GitHub → Settings → SSH and GPG keys → New SSH key.

Part 4 — Create the project from scratch (minimal typing)
```bash
mkdir -p is117first/docs/css is117first/docs/js
touch is117first/docs/index.html
touch is117first/docs/css/styles.css
touch is117first/docs/js/scripts.js
touch is117first/package.json
```

Check your work (you should see this):
```bash
ls -R is117first
```
Expected folders/files:
```
is117first/
	docs/
		index.html
		css/styles.css
		js/scripts.js
	package.json
```

Optional: initialize npm (creates `package.json` automatically)
```bash
cd is117first
npm init -y
```

Part 5 — Open the project in VS Code
```bash
cd is117first
code .
```

Live Preview (recommended)
1) Open Extensions (left sidebar).
2) Search for “Live Preview”.
3) Install the Microsoft extension.
4) Right‑click `docs/index.html` → “Show Preview”.

Part 6 — Preview the page in your browser
```bash
python3 -m http.server 8000 --bind 0.0.0.0
# Open http://localhost:8000/docs/index.html in Windows browser
```

What “server” means
- It turns your files into a website that the browser can open.

What you should see
- A page with your name and a link.
- If you see a blank page, you probably opened the wrong file or the server is not running.

Common mistakes
- You opened `index.html` from the file system instead of the server URL.
- You forgot to save the file.
- You are in the wrong folder (`pwd` to check).

Typing matters
- Type each command. Don’t paste.
- The goal is muscle memory and comfort.

Quick VS Code tips
- Explorer (left sidebar) shows your files.
- Terminal (bottom panel) is where you type commands.
- Save often: Ctrl+S or Cmd+S depending on your keyboard.

If something fails, copy the error message and ask for help.
