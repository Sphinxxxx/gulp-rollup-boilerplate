# gulp-rollup-boilerplate

A boilerplate for building JS libraries with Gulp and Rollup.

#### Demo

https://rawgit.com/Sphinxxxx/gulp-rollup-boilerplate/master/demo/index.html  


## Getting Started

#### Installing

From https://stackoverflow.com/a/19689284/1869660, alternative to https://gist.github.com/mdentinho/6258238

```
1: Create and enter your local project folder, and then..
    
    $ svn export  https://github.com/Sphinxxxx/gulp-rollup-boilerplate/trunk  .
    $ git init
    $ npm install
    
2: Create a new repo on GitHub, e.g. "my-new-repo", and then..
    
    $ git remote add origin https://github.com/Sphinxxxx/my-new-repo.git
```

#### Usage

```
3: Search through package.json and gulpfile.babel.js for "boilerplate" and insert real names.

4: Commit/push as usual *):

    $ git add -A
    $ git commit -am "First commit - boilerplate"
    $ git push
```
    
##### *):
 * If you publish your library to npm, the included scripts will automatically tag and push all changes to git when you run `npm publish`.
 * If you don't want to publish to npm, you can also run `npm run postpublish` if you only want to tag and push your changes.

#### Additional stuff

```
//Head/origin info if needed
//https://stackoverflow.com/questions/4089430/how-can-i-determine-the-url-that-a-local-git-repository-was-originally-cloned-fr
$ git branch -vv
$ git remote
$ git remote show origin
```


## Options

Documentation...


## Credits

* https://stackoverflow.com/questions/160608/do-a-git-export-like-svn-export/19689284#19689284
* https://gist.github.com/mdentinho/6258238
* https://stackoverflow.com/questions/4089430/how-can-i-determine-the-url-that-a-local-git-repository-was-originally-cloned-fr


## License

The MIT license - see the [LICENSE.md](LICENSE.md) file for details.
