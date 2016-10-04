## Prerequisites

You will need Node 6+, npm 3+, Bash, and Git


## Process

Now that you have the prerequisites listed above you are ready to get to work! The process for Pull Requests (core features), and plugins is a little different, so they are outlined below.

Good luck and thanks for contributing!

### Pull Requests

1. Fork the related repo
2. Branch off of "master"
3. Get dependencies: "npm install"
4. Develop: "npm start" + "npm test"
5. Push: "npm run push -- {major|minor|patch}"
6. Submit a pull request
7. Ensure the pull request build passes
8. Your pull request is merged

### Creating Plugins

1. Fork one of the existing repos
2. Use the "nova-colors" npm package to consume colors
3. Use the dedicated color meanings
4. Add "npm start" and "npm test" scripts
5. Submit a pull request to the "nova" repo "platforms"
