# BOOKS LIST API

### Installation:

```
    $ cp .env-sample .env
    $ npm i
    $ nodemon
```

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    package-lock.json
    readme.md

    src/
        configs/
            dbConnection.js
        controllers/
            auth.js
            bookcontroller.js
            usercontroller.js
        helpers/
            passwordEncrypt.js
            setToken.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            permissions.js
        models/
            bookmodel.js
            usermodel.js
        routes/
            auth.js
            bookroute.js
            index.js
            userroute.js
```
