## Prerequisites

You will need Node 6+, npm 3+, Bash, and Git


## Process

Now that you have the prerequisites listed above you are ready to get to work! The process for Pull Requests (core features), and plugins is a little different, so they are outlined below.

Good luck and thanks for contributing!

### Pull Requests

1. Fork this repo, you'll be working from your fork
2. Create a new branch off of master that will hold your work
3. Install the depencencies with `npm install`
4. Write your changes and get everything ready. The `npm start` and `npm test` will be useful in writing the needed tests and making sure that your changes aren't breaking thing elsewhere in `nova`
5. To push your changes use: `npm run push -- {major|minor|patch}`. We use [semver](http://semver.org/) to decide if it is a major, minor, or patch level change. If you aren't sure feel free to ask! We're here to help you get your changes merged.
6. Submit a pull request
7. Ensure the pull request build passes
8. Once you've reached this point we'll review your pull request and work with you to get it merged

### Creating Plugins

1. Use the [nova-colors](https://github.com/trevordmiller/nova-colors/blob/master/src/index.js) npm package to consume colors. An example of doing this being accomplished directly can be seen in [nova hyperterm](https://github.com/trevordmiller/nova-hyperterm/blob/master/index.js). For use in a build project with a build step check out [nova-vim](https://github.com/trevordmiller/nova-vim).
2. Add "npm start" and "npm test" scripts
3. Submit a pull request to the ["nova" repo "platforms"](https://github.com/trevordmiller/nova/blob/master/src/data/platforms.js)


### Code of Conduct
See the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
