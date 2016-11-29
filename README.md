# How to use

2 tasks exists: 

> npm run build:dev

> npm run build:prod

# How to test

Open the `index.html` on the `dist` folder. 

You will see "dev" or "prod" (depends on the build you used).


# How to extends

## Add new build task 

Create a new task inside `package.json`

Example:
> "build:staging": "webpack --config **config/webpack.staging** --progress --profile"

It's important to replace the config by the file you set in config.

## Create new environment file

Inside `src/environments` folder create a file with the name of the new environment you want to add.

In this example:
`environment.staging.js`

## Create new webpack file
 
Create file inside `config` folder

In this example, create file **webpack.staging.js** inside `config`.

Inside the file, use `NormalModuleReplacementPlugin` to replace the `environment.js` file by your new environment file.

In this example we may have **environment.staging.js**

Complete example rule: 
```javascript
new webpack.NormalModuleReplacementPlugin(
            /src\/environments\/environment\.js/,
            require.resolve(helpers.root('src/environments/environment.staging.js')))
```

## Test

You can now run `npm run build:staging`.