## Github Actions
Platform to automate developer workflows. CI/CD is one of many workflows.

- Listen to events (Github Events): when something happens in or to your repository, e.g. PR created, issue created, PR merged...
- Trigger workflow (Github Actions): Take issues as an example, sort -> label -> assign -> reproduce
- CI/CD is the most common workflow: commit code -> test -> build into artifact -> push -> deploy. CI/CD pipeline with Github Actions is easy to build and no need for third-party integration.

The syntax of the `.github/workflows/ci.yml`
- Name of the workflow is displayed on the repo's action page.
- Name of Github Events that triggers the workflow.
- Jobs that will be executed. Each job has a name and a sequence of steps. `uses` selects an action from the pre-hosted resuable actions. `run` runs a command-line command. 
- `runs-on` specify the environment of the server to run, and it could be Ubuntu, Windows or macOS.

Workflows get executed on Github servers and all managed by Github. Each job in a workflow runs in a single fresh server and all jobs run in parallel by default.

```yaml
- name: Build and Push Docker Image
  uses: mr-smithers-excellent/docker-build-push@v4
  with:
    image: docker-hub-repo/image-name
    registry: docker.io
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}
```

> username and password are created in the Github repo Settings - Secrets - New secret.
