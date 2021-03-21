# Source: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/javascript-node
# Tags: https://mcr.microsoft.com/v2/vscode/devcontainers/javascript-node/tags/list
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0.201.2-14-buster

# Uninstall global ESLint package
# https://github.com/microsoft/vscode-dev-containers/issues/618
RUN su node -c "npm uninstall -g eslint" \
    && npm cache clean --force > /dev/null 2>&1

# Install global packages
# RUN su node -c "npm install -g <your-package-list-here>"
