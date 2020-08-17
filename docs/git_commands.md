# Git Commands

## Git Commits

```
gaaa
gcmsg "Commit Message"
```

## Push & Pull

```
git push origin branch_name
```
```
git pull origin branch_name
```

## Branching
Create branch:

```
git checkout -b branch_name
```

Switch to branch:

```
git checkout branch_name
```

Delete branch:
```
git checkout -d branch_name
```

## Merging

0. Commit & Push last changes on child_branch:
```
gaaa
gcmsg "Last changes"
git push origin child_branch
```
1. Checkout the parent_branch and pull:
```
git checkout parent_branch
git pull origin parent_branch
```
2. Go back to child_branch and pull:
```
git checkout child_branch
git pull origin child_branch
```
3. From child_branch, merge with parent_branch:
```
git merge parent_branch
```
If any changes noticed, follow with:
```
gaaa
gcmsg "Merged with parent_branch"
git push origin child_branch
```
4. Switch back to parent_branch:
```
git checkout parent_branch
git pull origin parent_branch
```
5. From parent_branch, merge with child_branch:
```
git merge child_branch
git push origin parent_branch
```

## Delete Commits

1. Delete the most recent commit, keeping the work you've done:

```
git reset --soft HEAD~1
```
2. Delete the most recent commit, **destroying** the work you've done:

```
git reset --hard HEAD~1
```

## Change default editor

Change computer's default editor for VSCode:

```
git config --global core.editor "code --wait"
```