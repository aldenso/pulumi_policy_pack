# pulumi_policy_pack

Demo de policy pack de Pulumi

```sh
pulumi version
```

```shell
v2.2.1
```

Ejemplo de uso local (asumiendo que la ruta de descarga del repositorio es ~/github):

```sh
pulumi preview --policy-pack ~/github/pulumi_policy_pack
```

```shell
Previewing update (k8s_test):
     Type                                                           Name                                         Plan       Info
 +   pulumi:pulumi:Stack                                            tsk8s-k8s_test                               create     7 message
 +   ├─ gcp:compute:Network                                         tsk8snet                                     create     
 +   ├─ gcp:dns:ManagedZone                                         mydns-zone                                   create     
 +   ├─ gcp:compute:Subnetwork                                      tsk8ssubnet                                  create     
 +   ├─ gcp:container:Cluster                                       gdcdevops                                    create     
 +   ├─ pulumi:providers:kubernetes                                 gdcdevops                                    create     
 +   ├─ kubernetes:helm.sh:Chart                                    nginx                                        create     
 +   │  ├─ kubernetes:core:Service                                  default/nginx-nginx-ingress-controller       create     
 +   │  ├─ kubernetes:rbac.authorization.k8s.io:ClusterRoleBinding  default/nginx-nginx-ingress                  create     
 +   │  ├─ kubernetes:rbac.authorization.k8s.io:ClusterRole         default/nginx-nginx-ingress                  create     
 +   │  ├─ kubernetes:rbac.authorization.k8s.io:RoleBinding         default/nginx-nginx-ingress                  create     
 +   │  ├─ kubernetes:core:ServiceAccount                           default/nginx-nginx-ingress                  create     
 +   │  ├─ kubernetes:rbac.authorization.k8s.io:Role                default/nginx-nginx-ingress                  create     
 +   │  ├─ kubernetes:core:ServiceAccount                           default/nginx-nginx-ingress-backend          create     
 +   │  ├─ kubernetes:apps:Deployment                               default/nginx-nginx-ingress-default-backend  create     
 +   │  ├─ kubernetes:core:Service                                  default/nginx-nginx-ingress-default-backend  create     
 +   │  └─ kubernetes:apps:Deployment                               default/nginx-nginx-ingress-controller       create     
 +   └─ gcp:dns:RecordSet                                           mydns-records                                create     
 
Diagnostics:
  pulumi:pulumi:Stack (tsk8s-k8s_test):
    Running Mocha Tests: /Users/everis/github/pulumi_demo_gcp/demos/typescript/tsk8s/tests/tests.spec.ts
      Infrastructure
        #Cluster K8s
          ✓ must have at least 3 nodes (235ms)
        #Custom Net
          ✓ must set a custom net, not default
      2 passing (262ms)
 

Policy Packs run:
    Name                                                      Version
    gcp-typescript (/Users/everis/github/pulumi_policy_pack)  (local)

Permalink: https://app.pulumi.com/aldenso/tsk8s/k8s_test/previews/2ead0357-75df-475c-bfc1-44fde0f7bce1
```
