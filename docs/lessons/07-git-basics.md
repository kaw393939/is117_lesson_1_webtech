# Git Basics (Minimal)

Git is a save system for code. Use this minimal flow.

Minimal workflow
```
git status
git add .
git commit -m "Your message"
git push -u origin main
```

Create a GitHub repo (short version)
1) GitHub → New repository → Create.
2) Copy the SSH URL.
3) In your project folder:
```
git remote add origin <ssh-url>
git push -u origin main
```