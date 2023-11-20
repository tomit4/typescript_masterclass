## Specific Notes regarding this project's dependencies

NetNinja uses a package called parcel, kind of like live-server...

Anyways, don't download the npm package, it has configuration issues. Just use:

```
npx parcel src/index.html
```

From the root directory of this project.

We also have a fake database (db.json) that is used to be served using
live-server (defaults to :8080).
