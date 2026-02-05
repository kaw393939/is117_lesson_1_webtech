# Git Basics (Minimal)

Git is a **save system for code**. You only need a few commands today.

The minimal workflow (push to GitHub)
1) `git status`
2) `git add .`
3) `git commit -m "Your message"`
4) `git push -u origin main`

If starting from scratch
```
git init
git add .
git commit -m "Initial commit"
```

If cloning from GitHub
```
git clone <repo-url>
```

Create a GitHub repo (short version)
1) Go to GitHub → New repository.
2) Name it and click “Create repository”.
3) Copy the SSH URL.
4) In your project folder:
```
git remote add origin <ssh-url>
git push -u origin main
```
