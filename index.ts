import * as gcp from "@pulumi/gcp";
import * as github from "@pulumi/github";
import { PolicyPack, validateResourceOfType } from "@pulumi/policy";

new PolicyPack("gcp-typescript", {
    policies: [{
        name: "storage-bucket-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on GCP Storage buckets.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(gcp.storage.BucketACL, (acl, args, reportViolation) => {
            if (acl.predefinedAcl === "public-read" || acl.predefinedAcl === "public-read-write") {
                reportViolation("Storage buckets acl cannot be set to public-read or public-read-write.");
            }
        }),
    },
    {
        name: "specific-subnetworks",
        description: "Prohibits the use of autoCreateSubnetworks for Network resources.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(gcp.compute.Network, (net, args, reportViolation) => {
            if (net.autoCreateSubnetworks === true ) {
                reportViolation("Networks cannot use autoCreateSubnetworks.");
            }
        }),
    },
    {
        name: "subnetworks-range",
        description: "Prohibits the use specific IP range.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(gcp.compute.Subnetwork, (net, args, reportViolation) => {
            if (net.ipCidrRange.startsWith("10.10") ) {
                reportViolation("Subnetworks cannot start with ip range '10.10'.");
            }
        }),
    },
    {
        name: "github",
        description: "Prohibits public repositories.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(github.Repository, (repo, args, reportViolation) => {
            if (repo.private === false ) {
                reportViolation("Repositories cannot be public.");
            }
        }),
    }],
});
