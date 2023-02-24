# learn-docker

This repo contains a very basic node.js app and is used to learn docker and CI/CD.

## Terraform and Kubernetes
Both Kubernetes and Terraform are open-source projects in the DevOps space. While Kubernetes is an orchestration tool for managing containers, Terraform lets you define your infrastructure as code. A minimum entry fee for using Kubernetes is using containers. But when you run your applications as containers, who sets up the underlying infrastructure for you (compute, storage, and network)? In the pre-Terraform-era, a SysAdmin would write scripts to configure virtual machines or servers. With Terraform, you can declare how you plan the application infrastructure, and Terraform executes based on your plan.

EKS stands for Elastic Kubernetes Service, which is an Amazon offering that helps in running the Kubernetes on AWS without requiring the user to maintain their own Kubernetes control plane. It is a fully managed service by Amazon. You can use Terraform to define and manage your EKS infrastructure. This means you can write Terraform code that specifies the desired state of your EKS cluster, such as the number and type of worker nodes, the networking setup, and any other required resources. When you apply this Terraform code, it will create or update your EKS cluster and associated resources to match the desired state.
