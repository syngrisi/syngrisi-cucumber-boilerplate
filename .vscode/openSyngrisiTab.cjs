exports.execute = async (args) => {
    // args => https://egomobile.github.io/vscode-powertools/api/interfaces/_contracts_.buttonactionscriptarguments.html

    // s. https://code.visualstudio.com/api/references/vscode-api
    const vscode = args.require('vscode');

    const tab = vscode.window.activeTextEditor
    // vscode.commands.executeCommand("workbench.action.closeActiveEditor")
    vscode.commands.executeCommand("simpleBrowser.api.open", "http://localhost:3000")
};
