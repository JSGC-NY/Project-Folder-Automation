# Project Folder Creator - Usage Instructions

## How to Use

1. Open the provided [web app link](#).
2. Fill in the required project details:
   - Location
   - Client Name
   - Client Email
3. Click the "Create Folders" button.
4. Receive a confirmation message with the details of the created folder structure.

## How to Setup

1. Set up a new Google Apps Script project in Google Drive.
2. Copy and paste the code from the provided `Code.gs` and `index.html` files.
3. Deploy the web app by clicking on the deploy icon in the script editor.
4. Set the access level to "Anyone, even anonymous."
5. Configure the script and update the HTML file with your help page or instructions.

## How to Change Folder Structure

Modify the `Code.gs` file to change the folder structure. Locate the `subfolders` array in the `createProjectFolders` function and update it with the desired subfolder names.

```javascript
// Subfolders
var subfolders = ["New_Folder_1", "New_Folder_2", "New_Folder_3"];
```

Save the changes, redeploy the web app, and test the updated structure.

## Troubleshooting

- **Permissions:** Ensure that the Google Apps Script has the necessary permissions to create folders in Google Drive.
- **Logging:** Check the Apps Script logs for any error messages or issues. Logs can be accessed in the script editor.
- **Web App URL:** Confirm that the web app URL is correctly set up and accessible.

## Considerations

- **Security:** Handle user permissions and security considerations appropriately, especially when deploying the web app with open access.
- **Testing:** Thoroughly test the web app in a controlled environment before deploying it for production use.
