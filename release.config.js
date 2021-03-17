module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/jfvergara/react-app",
  plugins: [
    "@semantic-release/commit-analyzer", //It decides what is going to be the next version
    "@semantic-release/release-notes-generator", // It will generate release notes for our release based on the commit messages
    [
      "@semantic-release/github", //it will create the Github release
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
