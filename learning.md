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

## to convert sass files to scss syntax

sass-convert -R ./ -F sass -T scss && find . -type f -name '*.sass' -delete

## jekyll-automatically-highlight-current-tab-in-menu-bar

see `_includes/header.html`

## menu structure is written using accessibility standards

https://www.w3.org/WAI/tutorials/menus/structure/

## sass contrast color function used (w3c accessibility recommendation)

https://codepen.io/bluesaunders/pen/FCLaz

## sass mixin for offsets 

https://hugogiraudel.com/2013/08/05/offsets-sass-mixin/

## gulp localhost cannot get /

D:/tools/Ruby/lib/ruby/gems/2.3.0/gems/bundler-1.15.1/lib/bundler/runtime.rb:317:in `check_for_activated_spec!': You have already activated sass-listen 4.0.0, but your Gemfile requires sass-listen 3.0.7. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)

Probably a newer version of a gem is installed than expected. running `bundle exec gulp` solved this problem. 
