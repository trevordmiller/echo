const contributing = {
  types: [
    {
      title: 'Pull Requests',
      prerequisites: 'You will need Node 6+, npm 3+, Bash, and Git',
      steps: [
        'Fork the related repo',
        'Branch off of "master"',
        'Get dependencies: "npm install"',
        'Develop: "npm start" + "npm test"',
        'Push: "npm run push -- {major|minor|patch}"',
        'Submit a pull request',
        'Ensure the pull request build passes',
        'Your pull request is merged',
      ],
    },
    {
      title: 'Creating Plugins',
      steps: [
        'Fork one of the existing repos',
        'Use the "nova-colors" npm package to consume colors',
        'Use the dedicated color meanings',
        'Add "npm start" and "npm test" scripts',
        'Submit a pull request to the "nova" repo "platforms"',
      ],
    },
  ],
}

export default contributing
