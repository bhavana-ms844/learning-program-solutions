# Create branch and file
git checkout -b GitWork
echo "Hello from GitWork" > hello.xml
git add hello.xml
git commit -m "GitWork: Added hello.xml"

# Switch to master and create conflicting file
git checkout master
echo "Hello from Master" > hello.xml
git add hello.xml
git commit -m "Master: Added hello.xml"

# Merge and resolve conflict
git merge GitWork
# Manually edit hello.xml to resolve conflict
git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"

# Add backup files to .gitignore
echo "*.*~" >> .gitignore
git add .gitignore
git commit -m "Ignore backup files"
