#!/bin/bash

echo "Building Docker image..."
docker build -t sre-app ./app

echo "Applying Kubernetes configs..."
kubectl apply -f kubernetes/

echo "Waiting for pods..."
kubectl get pods

echo "Deployment complete!"
