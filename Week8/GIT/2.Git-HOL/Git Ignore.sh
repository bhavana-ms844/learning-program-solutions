# Create log file and folder
echo "Log file" > error.log
mkdir log
echo "Log folder" > log/log.txt

# Create .gitignore
echo "*.log" > .gitignore
echo "/log/" >> .gitignore

# Check status
git status

# Stage and commit
git add .gitignore
git commit -m "Added .gitignore to ignore .log files and log folder"
