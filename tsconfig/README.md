## Net Ninja's TS Config Basics Tutorial

Demonstrating basic live updating of ts files so you don't have to keep
rerunning commands.

Normally we would watch once using tsc cli like so:

```
tsc index.ts
```

This would output an index.js file transpiled from tsc. Obiously this can get
tedious, so let's use a simple watch flag that allows us to do so. First we'll
need to init a tsc config file:

```
tsc init
```

This will give us a tsconfig.json with a lot of default options. Of usual
interest is the root and outDir options, which will tell us which directory to
watch, and which to output to. Already you probably know what to change these
directories to, but let's be explicit:

```
root: 'src'
```

```
outDir: 'dist'
```

After making this basic edit, we can now simply create a basic index.ts file
within the src directory:

```
console.log('Hello World!')
```

Which we then from the root of our project directory can now use tsc with the
watch flag to generate our output files in dist:

```
tsc --watch
```

This will run a daemon process that will output any changes in the .ts files in
src into .js files in the dist directory.

If the output needs to be logged, node (as of above v18) has a watch flag as
well which can output our console.log() on the fly upon save as well:

```
node --watch dist/index.js
```
