Push Notification Demo
------------------------------

![teaser](https://raw.github.com/felipepucinelli/cordova-push-notification/master/teaser.png)


## Start

To start developing, run:

```sh
$ gulp serve
```

This will fire up a local web server, open http://localhost:9000 in your default browser and watch files for changes, reloading the browser automatically via [LiveReload].

To make a production-ready build of the app, run:

```sh
$ gulp
```

To preview the production-ready build to check if everything is ok:

```sh
$ gulp serve:dist
```

## Build Cordova

Update dist files:

```sh
$ gulp
```

Copy dist files to cordova directory:

```sh
$ gulp build:cordova
```

## Plugins Used

 - [phonegap-plugin-push]
 - [cordova-plugin-dialogs]

----------

[phonegap-plugin-push]: https://github.com/phonegap/phonegap-plugin-push
[cordova-plugin-dialogs]: https://github.com/apache/cordova-plugin-dialogs
[LiveReload]: https://github.com/intesso/connect-livereload
[Yeoman Generator Webapp]: https://github.com/yeoman/generator-webapp
