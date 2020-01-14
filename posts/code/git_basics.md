# Git Basics
## Clone a Repository to your Machine
`$ git clone https://github.com/username/repo.git [optional_dir_name]`  
New directory will be created (with the same name as the repo), so make sure to `cd` into it.

## Create a new Branch
`$ git checkout -b my_new_branch_name`

## Check the Status (names of files changed)
`$ git status`  

## See a Diff of the Changed Files (compared to their previous state)
`$ git diff`  
To see the diff of files that have already been staged, add the `--staged` parameter.

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

## Switch to Another Branch
`$ git checkout branch_name`  
If you have unstaged changes, you can "stash" them before switching branches to apply them later with `git stash`, then `git stash apply`.
