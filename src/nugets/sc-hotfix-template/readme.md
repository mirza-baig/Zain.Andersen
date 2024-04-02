# SC-Hotfix Template

This is a template for creating a NuGet package file from a Sitecore Hotfix.

## Steps

### Extract Sitecore package
Extract the Sitecore package zip file and then extract the `package` zip file. The Sitecore package may be the hotfix file or may be in the hotfix zip file.

### Clone template folder
Create a copy of the `sc-hotfix-template` folder.

### Copy hotfix files
Copy files from the extracted Sitecore package into the folder created in the previous step using the following rules.

- any files in the `bin` folder should be copied into the `lib` folder
- any other files or folders should be copied into the `content` folder

### Update nuspec file
Open the `sc-hotfix.nuspec` file and update the following items.

- `id` - update with the hotfix number
- `description` - update with the hotfix descriptive name

### Run NuGet command
Open a command prompt and navigate to the folder created in the first step. Run the following command:
```
nuget pack sc-hotfix.nuspec -OutputDirectory ..\
```
> Note: If you don't have NuGet installed, run `winget install -e --id Microsoft.NuGet` from the command prompt

### Cleanup
Delete the folder created in the first step
