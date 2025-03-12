# Git Basics

## Clone a Repository to your Machine

`$ git clone https://github.com/username/example-repo.git [optional_dir_name]`  
A new directory will be created (with the same name as the repo, unless the optional_dir_name parameter is present), so make sure to `cd` into it after cloning (e.g. `cd example-repo`).

## Create a new Branch

`$ git checkout -b my_new_branch_name`

## Check the Status (names of files changed)

`$ git status`  

## See a Diff of the Changed Files (compared to their previous state)

`$ git diff`  

To see the diff of files that have already been staged, add the `--staged` parameter.

## Switch to Another Branch

`$ git checkout branch_name`  

If you have unstaged changes, you can "stash" them before switching branches to apply them later with `git stash`, then `git stash apply`.

## Creating a New Branch

To create a new branch and switch to it in one command:  
`$ git checkout -b new_branch_name`

### [Avoid Having to do "git branch --set-upstream"](https://stackoverflow.com/questions/6089294/how-to-avoid-having-to-do-git-branch-set-upstream-and-instead-default-to-au)

After branch creation, when you run `git push`, Git will ask you to set the upstream branch with `git branch --set-upstream origin/branch_name branch_name`.

To avoid this, and have git automatically set the upstream branch when you push a new branch, run:
```sh
git config --global push.autoSetupRemote true
```

This only works for Git v2.37.1 and above, which means if `git --version` shows less than that, you'll need to update Git (On Mac, I use `brew install git` to replace the Git that comes with Mac with a more up to date version managed with [Homebrew](https://brew.sh/)).

## Stage a Changed File

Changes will not be reflected in GitHub until you "commit", then "push" the change.  
`$ git add name_of_file [optional_more_files]`

## Stage all Changed Files at Once

Careful not to add unwanted new files, especially anything containing secrets!  
`$ git add .`

## [Commit](https://chris.beams.io/posts/git-commit) Changes

Adds a commit for all staged files, preparing the changes to be pushed.  
`$ git commit -m "say what you did"`

## Push Changes to GitHub

`$ git push`

## Pull Changes from GitHub

`$ git pull`

## Creating a Pull Request (PR)

After pushing your branch to GitHub, you can create a PR by going to the repository on GitHub and clicking the "New Pull Request" button. This will compare the branch you just pushed to the default branch (usually `main` or `master`), and it allows for others to review your changes before merging them into the default branch.

If you're lazy like me, you can avoid clicking the "New Pull Request" button by running this command in your terminal, which will open the PR page for your branch in your browser (see below for how to add this as the `pr` alias in your shell):
```sh
open ${$(git config --get remote.origin.url)%%.git}/compare/$(git branch --show)\?expand\=1
```

## Undo a Commit

If you haven't pushed your changes yet, you can undo the commit (this leaves your files [intact](https://stackoverflow.com/a/2845739/4151489)):  
```sh
git reset --soft HEAD^
```
(["`HEAD^` is the commit before the current one"](https://stackoverflow.com/a/2846154/4151489))

If you have pushed your changes (even if there have been [multiple changes since the commit you want to undo](https://stackoverflow.com/a/21718540/4151489)), you can revert commits:
```sh
git revert --no-commit <commit-hash>..HEAD
```

## Unstage Files

To [unstage all files](https://stackoverflow.com/a/21396698/4151489), run:
```sh
git reset HEAD
```
## Discard Changes

To discard changes for a file:
```sh
git checkout <filename> [<other-filename>]
```
To discard all changes:
```sh
git checkout . 
```

## Extras

### [Oh-my-zsh](https://ohmyz.sh/)

If you install Oh-my-zsh, it will add a bunch of aliases to your shell. You can see the git aliases with:  
`alias | grep git`

Here are the ones I use:

Alias | What it Does
-|-
`ga` | git add
`gco` | git checkout
`gcb` | git checkout -b
`gco -` | checkout last branch
`gst` | git status
`gcm` | git checkout master/main
`gp` | git push
`gl` | git pull
`gsta` | git stash
`gstaa` | git stash apply
`gcmsg` | git commit -m
`gd` | git diff
`gds` | git diff --staged
`gm` | git merge
`gcl` | git clone

You may want to turn auto-update off, which can be done by uncommenting the line in `~/.zshrc` that says `zstyle ':omz:update' mode disabled  # disable automatic updates` (remove the hash at the beginning of the line to uncomment it).

### More Aliases

Add these to `~/.zshrc` or `~/.zsh_aliases`:
```
# open a pull request in a web browser
alias pr='open ${$(git config --get remote.origin.url)%%.git}/compare/$(git branch --show)\?expand\=1'
# open the current repository in a web browser
alias og='open ${$(git config --get remote.origin.url)%%.git}'

```

To make these aliases available, rerun your shell setup with `exec zsh`, or open a new terminal window.

### Better Diffs

[delta](https://github.com/dandavison/delta#readme)

### Disable Pushing to Main/Master

`git config branch.master.pushRemote no_push`
