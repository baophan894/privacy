# Policy File Updater

node scripts/updatePolicies.js
This project contains scripts to automatically update policy files (Privacy Policy, CCPA, Terms, and Copyrights) with values from the app configuration.

## Structure

- `app.json` - Contains the configuration values to be used in policy files
- `assets/js/policyMapper.js` - Browser-side JavaScript for dynamic content replacement
- `scripts/updatePolicies.js` - Node.js script for static file updates

## Usage

### Using the Node.js Script (Recommended for Development)

1. Make sure you have Node.js installed
2. Navigate to the project directory
3. Run the update script:
   ```bash
   node scripts/updatePolicies.js
   ```

This will automatically update all policy files with the values from `app.json`.

### Using the Browser Script

The `policyMapper.js` script can be included in your HTML files to handle dynamic content replacement. Add the following to your HTML files:

```html
<script src="../assets/js/policyMapper.js"></script>
```

## Configuration

Edit `app.json` to update the values that will be replaced in the policy files:

```json
{
	"app_name": "Your App Name",
	"contact_address": "your@email.com",
	"app_legal_url": "https://your-domain.com/legal"
}
```

## Placeholders

The following placeholders can be used in your policy files:

- `{app_name}` - Will be replaced with the app name from config
- `{contact_address}` - Will be replaced with the contact email from config
- `{app_legal_url}` - Will be replaced with the legal URL from config

## Adding New Policy Files

1. Create a new folder in the root directory (e.g., `newpolicy`)
2. Add an `index.html` file in the new folder
3. Add the folder name to the `policyFolders` array in both scripts
4. Use the placeholders in your HTML content

## Maintenance

To update policy content:

1. Edit the HTML files in their respective folders
2. Run the update script to apply the configuration values
3. Test the changes in a browser

## Error Handling

The scripts include error handling for:

- Missing files
- Invalid JSON configuration
- File read/write errors

Check the console output for any error messages during execution.
