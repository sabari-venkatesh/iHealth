## You get this error after changing your repo

Error: Remote url mismatch.  Got "https://github.com/sabarigr/gulpify-jekyll.git" but expected "https://github.com/sabarigr/iHealth.git" in node_modules\gh-pages\.cache.  If you have changed your "repo" option, try running the "clean" task first.

you can run `rm -rf node_modules/gh-pages/.cache` to clean the cache manually

## production specific configuration

make your changes to `_config.build.yml` and run `gulp build --prod`. Remember to set the `baseurl`

## If your assests aren't loading properly

In `inject.js`, make `addPrefix` parameter to `baseurl`, so your url will now be `/iHealth/assets/stylesheets/style-b2dbab1c55.min.css` for all the pages no matter how recursive they are.

## frequently used commands

`gulp` - builds and serves the files with browsersync
`gulp build` - only builds (see `dist` folder)
`gulp build --prod` - builds a production ready version (see `_config.build.yml` file for parameters)
`gulp deploy` - uploads whatever is in the `dist` folder

## source and dist branch

Your original source is in the `master` branch and dist is in the `gh-pages` branch

