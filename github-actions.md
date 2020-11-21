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

## YAML file
Configuration files for DevOps tools are all written in YAML. It's a standard format to transfer data (human-readable). YAML stands for "YAML Ain't Markup Language". 

```yaml
# key-val pair
# boolean value can be true/false, yes/no, on/off
app: user-auth
port: 9000
version: 1.0
deployed: on

# object
microservice:
  app: user-auth
  port: 9000
  version: 1.0

# list
microservices:
  - app: user-auth
    port: 9000
    version: 1.0
  - app: shopping-card
    port: 9002
    versions: [1.0, 1.1]

# another way for list indention
spec:
  containers:
  - name: nginx-container
    image: nginx
    ports:
    - containerPort: 80
    volumeMounts:
    - name: nginx-vol
      mountPath: /usr/nginx/html

# multi-line string
multiline: |
  this is the first line
  this is the second line
  next line

oneline: >
  this is a single line string,
  and should be all in one line.

# env variable
command: 
  - mysql -h 127.0.0.1 -u root -p $MYSQL_ROOT_PASSWORD
```
