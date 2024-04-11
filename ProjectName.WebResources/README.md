### ProjectName.WebResources

## Requisites

  1. `npm` version `^10.x.x`
  2. `node` version `^20.x.x`
  3. `.NET 6.0`

## Fetch latest metadata from D365
  1. Open your `terminal` or `powershell`
  2. `cd` to `ProjectName.WebResources` directory
  3. Run `npm install`
  4. `cd` to  `XrmDefinitelyTyped`, edit `XrmDefinitelyTyped.exe.config` file with these configurations below
     - `url` with your D365 `DEV` environment
     - `connectionString` with the same above `url` and your credential
  5. Run `XrmDefinitelyTyped\Run.ps1` to get latest `metadata` from you `DEV` environment
  6. `cd` back to `ProjectName.WebResources`
  7. Run `dotnet build` or right-click on `ProjectName.WebResources` project file > `Build`

## Development
  1. Develop your `entity_name.ts` under `src\entity_name\your_script.ts`
  2. To watch `typescript` compiled to `javascript`, run `npm run watch`
  3. To minify `javascript`, run `npm run minify`. The minified js is located under `./out.min`