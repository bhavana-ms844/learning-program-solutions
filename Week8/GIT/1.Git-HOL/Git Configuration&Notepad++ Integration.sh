# Check Git version
git --version

# Configure Git username and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify Git configuration
git config --list

# Set Notepad++ as default editor
git config --global core.editor "notepad++.exe"

# Create a GitDemo project
mkdir GitDemo
cd GitDemo
git init

# Create and add a file
echo "Welcome to Git hands-on lab!" > welcome.txt
git status
git add welcome.txt
git commit
