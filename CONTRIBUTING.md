_This assumes you have Bash, Git, Node, and npm_

# Existing Nova Plugins

See [the Contributing instructions for the plugin](http://www.trevordmiller.com/nova/#Plugins)

# New Nova Plugins

1. Use the [nova-colors package](https://github.com/trevordmiller/nova-colors/blob/master/src/index.js) to consume color values by meaning.
  - [nova hyperterm](https://github.com/trevordmiller/nova-hyperterm) has an example of doing this directly
  - [nova-vim](https://github.com/trevordmiller/nova-vim) is an example of doing this with a build step
2. Follow the Nova Website instructions below to update the list of ["plugins"](https://github.com/trevordmiller/nova/blob/master/src/data/plugins.js) with your new plugin

# Nova Website

- Fork repo
- Branch off `master`
- Run `npm start` to lint and compile (from `src` to `build` folder)
- Run `npm test` to run tests
- Stage, commit, and push
- Submit a pull request
- Ensure your pull request passes all checks
- An admin will merge your pull request and deploy a release
