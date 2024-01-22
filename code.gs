function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Project Folder Creator')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

function createProjectFolders(location, clientName, clientEmail) {
  // Create main project folder (using a descriptive variable name)
  const mainFolderName = location + "_" + clientName;
  const mainFolder = DriveApp.createFolder(mainFolderName);

  // Define subfolders array
  const subfolders = ["Project_Images", "Invoices", "Selections", "Contract", "Project_Plans"];

  // Create subfolders inside the main folder
  subfolders.forEach(subfolderName => mainFolder.createFolder(subfolderName));

  // Invite client to the main folder as a viewer
  mainFolder.addViewer(clientEmail);

  // Return a completion message with the folder name
  return "Folders created successfully. Client with email " + clientEmail + " has been invited to '" + mainFolderName + "'.";
}
