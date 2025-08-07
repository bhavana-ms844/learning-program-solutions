# Create a new branch
git checkout -b GitNewBranch

# Create and commit a file
echo "Branch content" > branch.txt
git add branch.txt
git commit -m "Added file in GitNewBranch"

# Switch to master and merge
git checkout master
git merge GitNewBranch

# View history
git log --oneline --graph --decorate

# Delete branch
git branch -d GitNewBranch
