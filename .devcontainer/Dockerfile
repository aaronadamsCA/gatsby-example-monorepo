# Source: https://github.com/microsoft/vscode-dev-containers/tree/main/containers/javascript-node
# Tags: https://mcr.microsoft.com/v2/vscode/devcontainers/javascript-node/tags/list
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0.203.1-16-bullseye

# Uninstall global ESLint package
# https://github.com/microsoft/vscode-dev-containers/issues/618
RUN su node -c "npm uninstall -g eslint" \
    && npm cache clean --force > /dev/null 2>&1

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    # Install additional OS packages
    && apt-get -y install --no-install-recommends dnsutils \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*
