Package.describe({
  name: '3stack:jquery-autofocus',
  version: '0.0.1',
  summary: 'Finds the first input with the autofocus property and focuses it',
  git: 'https://github.com/3stack-software/jquery-autofocus',
  documentation: 'README.md'
});

/**
 * Created by nathan.muir on 9/2/14.
 */
Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');
  api.use('jquery', 'client');
  api.addFiles('jquery-autofocus.js', 'client');
});
