# SSH Keys (GitHub)

SSH keys are tied to the machine where you create them.

Create a key
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Start the agent and add the key
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy your public key and add it to GitHub
```bash
cat ~/.ssh/id_ed25519.pub
```
GitHub → Settings → SSH and GPG keys → New SSH key.

WSL2 note
- If you move to WSL2, you must create a **new** key inside WSL2.