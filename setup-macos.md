# macOS Setup (Beginner Friendly)

You are learning this from the ground up. That is totally normal. Go slow and do one step at a time.

Where to type commands
- Open VS Code → View → Terminal.
- Or use the macOS Terminal app.

File/folder primer (30 seconds)
- Folder = a container that holds files and other folders.
- File = a single document (like `index.html`).
- You will build the exact folder tree shown in the README.

Part 1 — Install what you need
1) Install Homebrew (package manager):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2) Install Git and Python:

```bash
brew install git python
```

3) Install Node.js (includes npm):
```bash
brew install node
```

Check install versions:
```bash
node -v
npm -v
```

Part 1b — Create your SSH key (for GitHub)
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

4) Install VS Code:
- Download: https://code.visualstudio.com/
- Open VS Code once so macOS trusts it.

Part 2 — Create the project from scratch (minimal typing)
Open Terminal and run:

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

Part 3 — Open the project in VS Code
```bash
cd is117first
code .
```

Live Preview (recommended)
1) Open Extensions (left sidebar).
2) Search for “Live Preview”.
3) Install the Microsoft extension.
4) Right‑click `docs/index.html` → “Show Preview”.

Part 4 — Preview the page in your browser
```bash
python3 -m http.server 8000
# Open http://localhost:8000/docs/index.html
```

What “server” means
- It turns your files into a website that the browser can open.

What you should see
- A page with your name and a link.
- If you see a blank page, you probably opened the wrong file or the server is not running.

Common mistakes
- You opened `index.html` from the file system instead of the server URL.
- You forgot to save the file (Cmd+S).
- You are in the wrong folder (`pwd` to check).

Typing matters
- Type each command. Don’t paste.
- The goal is muscle memory and comfort.

Quick VS Code tips
- Explorer (left sidebar) shows your files.
- Terminal (bottom panel) is where you type commands.
- Save often: Cmd+S.

If anything breaks, breathe and try the step again. You are learning the workflow, not just the code.
