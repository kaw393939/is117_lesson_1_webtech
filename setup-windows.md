# Windows Setup (WSL2 First)

We want everyone using the same terminal commands. On Windows, that means **WSL2 with Ubuntu**. PowerShell is a fallback only.

Why Linux is the smart move (short version)
- Linux has been stable for 30+ years.
- Most technology creators use Linux for development and servers.
- Learning Linux is vendor‑neutral and future‑proof.
- It maximizes the value of your learning time.

File/folder primer (30 seconds)
- Folder = a container that holds files and other folders.
- File = a single document (like `index.html`).
- You will build the exact folder tree shown in the README.

Part 1 — Install WSL2 (Ubuntu)
Follow Microsoft’s guide: https://learn.microsoft.com/windows/wsl/install

Where to type commands
- Open VS Code → View → Terminal (inside WSL).
- Or use the Ubuntu terminal app.

Important: SSH keys are separate
- Keys you made on Windows do **not** carry into WSL2.
- You will create a **new** SSH key inside WSL2 for GitHub.

Part 2 — Install tools inside WSL
Open your Ubuntu terminal and run:

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

Part 4 — Install VS Code + WSL extension
1) Install VS Code: https://code.visualstudio.com/
2) Install the “Remote - WSL” extension.
3) From WSL, run `code .` to open the folder in VS Code.

Live Preview (recommended)
1) Open Extensions (left sidebar).
2) Search for “Live Preview”.
3) Install the Microsoft extension.
4) Right‑click `docs/index.html` → “Show Preview”.

Part 5 — Create the project from scratch (WSL terminal, minimal typing)
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

Part 6 — Preview the page in your browser
```bash
cd is117first
python3 -m http.server 8000 --bind 0.0.0.0
# Open http://localhost:8000/docs/index.html
```

What “server” means
- It turns your files into a website that the browser can open.

What you should see
- A page with your name and a link.
- If you see a blank page, you probably opened the wrong file or the server is not running.

Common mistakes
- You opened `index.html` from the file system instead of the server URL.
- You forgot to save the file (Ctrl+S).
- You are in the wrong folder (`pwd` to check).

Typing matters
- Type each command. Don’t paste.
- The goal is muscle memory and comfort.

PowerShell fallback (only if WSL2 cannot be used)
```powershell
mkdir is117first
cd is117first
mkdir docs
mkdir docs\css
mkdir docs\js
New-Item docs\index.html -ItemType File
New-Item docs\css\styles.css -ItemType File
New-Item docs\js\scripts.js -ItemType File
New-Item package.json -ItemType File
node -v
npm -v
npm init -y
python -m http.server 8000
```
