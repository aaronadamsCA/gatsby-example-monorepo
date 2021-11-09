#!/bin/zsh -i

# Configure Visual Studio Code as our Git IDE
# https://github.com/microsoft/vscode-remote-release/issues/4632
git config core.editor "code --wait"
git config diff.tool vscode
git config difftool.vscode.cmd "code --wait --diff \$LOCAL \$REMOTE"
git config merge.tool vscode
git config mergetool.vscode.cmd "code --wait \$MERGED"

# Install Node.js version defined in .nvmrc
nvm install
nvm use --delete-prefix

# Install project dependencies from lockfile
yarn install --frozen-lockfile
