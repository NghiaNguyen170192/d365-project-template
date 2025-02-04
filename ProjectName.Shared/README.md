## Requisites
1. `.NET 6.0` installed
2. `Power Platform CLI` installed

## Connecting to D365 environment
1. `cd` to `ProjectName.Context`
2. Login to CRM instance via `pac auth create`. This navigates you to interactive login through web
3. Once authenticated, type `pac org list` to check available D365 environments associated with your account
4. To switch D365 environment, enter `pac org select -env environment_id`

## Generating D365 early bound classes
1. `cd` to `ProjectName.Context`
2. Modify your `builderSettings.json`
3. Run `pac modelbuilder build -o . -stf .\builderSettings.json`
4. This will generate early bound classes for D365 high code approach 
