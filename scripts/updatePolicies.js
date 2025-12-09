const fs = require("fs");
const path = require("path");

class PolicyFileUpdater {
	constructor(config) {
		this.config = config;
		this.policyFolders = ["privacy", "ccpa", "terms", "copyrights"];
		this.baseDir = path.join(__dirname, "..");
	}

	// Replace placeholders in content
	replacePlaceholders(content) {
		return content
			.replace(/\{app_name\}/g, this.config.app_name)
			.replace(/\{app_legal_url\}/g, this.config.app_legal_url)
			.replace(/\{contact_address\}/g, this.config.contact_address);
	}

	// Process HTML file
	processHtmlFile(folder) {
		try {
			const filePath = path.join(this.baseDir, folder, "index.html");
			const content = fs.readFileSync(filePath, "utf8");
			const processedContent = this.replacePlaceholders(content);
			return processedContent;
		} catch (error) {
			console.error(`Error processing file in ${folder}:`, error);
			return null;
		}
	}

	// Process all policy files
	processAllPolicies() {
		const results = {};

		for (const folder of this.policyFolders) {
			const processedContent = this.processHtmlFile(folder);
			if (processedContent) {
				results[folder] = processedContent;
			}
		}

		return results;
	}

	// Update policy files
	updatePolicyFiles() {
		const processedContent = this.processAllPolicies();

		for (const [folder, content] of Object.entries(processedContent)) {
			if (content) {
				const filePath = path.join(this.baseDir, folder, "index.html");
				fs.writeFileSync(filePath, content, "utf8");
				console.log(`Updated ${folder} policy file`);
			}
		}
	}
}

// Read app configuration
const configPath = path.join(__dirname, "..", "app.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

// Create updater instance and process files
const updater = new PolicyFileUpdater(config);
updater.updatePolicyFiles();

console.log("Policy files updated successfully");
