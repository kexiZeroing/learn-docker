## main k8s components

- Open source container orchestration tool
- Developed by Google
- Helps manage containerized applications in different deployment environments
- Offer high availability (no downtime), scalability (high performance), disaster recovery
- `minikube` is a lightweight Kubernetes implementation that creates a VM on your local machine and deploys a simple cluster containing only one node
- `kubectl` is a command line tool for k8s (for both Minikube cluster and Cloud cluster)

Node
- Virtual or physical machine
- Mulitiple Master Nodes (control plane) and Worker Nodes (where applications are running)
- `kubelet` runs on each worker node and is the agent responsible for communicating with the master nodes. `kube-proxy` is a network proxy that runs on each node in cluster, implementing part of the Kubernetes Service concept.

  <img alt="k8s-cluster" src="https://raw.githubusercontent.com/kexiZeroing/blog-images/main/008vOhrAly1hbgoz72n92j317w0sqwhd.jpg" width="700">  

Pod
- Smallest unit in k8s
- Abstraction over container
- Usually 1 application per Pod
- Each Pod gets its own IP address
- Pods are ephemeral and new IP address on re-creation

Service
- Pods communicate with each other using Service
- Permanent IP address
- Lifecycle of Pod and Service not connected
- External Service or Internal Service

Ingress
- Request goes first to ingress and it does the forwarding to service

ConfigMap
- External Configuration of your application
- only for non-confidential data

Volume
- Storage on local machine, or remote outside of the k8s cluster
- K8s doesn't manage data persistance

Deployment
- Abstraction of Pods, define blueprint for pods, how many replicas you want to have
- The replica is connected to the same service
- Service is also a load balancer, forwad the request to whichever pod is least busy

StatefulSet
- For stateful apps, like DBs
- DB are often hosted outside of k8s cluster

**Helm** is known as "the package manager for Kubernetes". The original goal of Helm was to provide users with a better way to manage all the Kubernetes YAML files. A Helm chart is a set of YAML manifests and templates that describes Kubernetes resources and defined configurations needed for the Kubernetes application, and is also easy to deploy in a Kubernetes cluster with just one command.

## K8s commands

### start minikube
minikube start --driver=docker  
minikube status  
minikube ip  
minikube stop  

kubectl --help  
kubectl apply -f [file-name.yaml]

### get basic info about k8s components
kubectl get all  
kubectl get pod  
kubectl get pod -o wide  
kubectl get configmap  
kubectl get secret  
kubectl get svc  
kubectl get node  

kubectl describe pod [podName]  
kubectl describe service [sevName]

### view logs of container
kubectl logs [podName]
