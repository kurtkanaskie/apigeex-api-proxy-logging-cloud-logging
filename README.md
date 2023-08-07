# Apigee X Logging to Cloud Logging
Captures logging information at each of the Flow Hook locations and builds a "logging-message" that is sent to Cloud Logging in the API Proxy Post Client Flow Flow.

### Flow Diagram
![Proxy flow](./logging-flow.png)

## Overview
### Shared Flows
* log-set-values-v1 (Shared Flow in each of the Flow Hook Shared Flows)
* log-cloud-logging-sc-v1 (Flow Callout in API Proxy Post Client Flow)
* pre-proxy-v1 (Flow Callout to log-set-values-v1)
* pre-target-v1 (Flow Callout to log-set-values-v1)
* post-target-v1 (Flow Callout to log-set-values-v1)
* post-proxy-v1 (Flow Callout to log-set-values-v1)

Each of the Flow Callouts in the Flow Hook Shared Flows passes a parameter which is used to detect the flow location.
```
<FlowCallout name="FC-log-set-values-v1">
  <Parameters>
    <!-- Need to pass currentstep.flowstate, its empty otherwise -->
    <Parameter name="currentstep.flowstate">{currentstep.flowstate}</Parameter>
  </Parameters>
  <SharedFlowBundle>log-set-values-v1</SharedFlowBundle>
</FlowCallout>
```

## Disclaimer

This example is not an official Google product, nor is it part of an official Google product.

## Notice and License

[NOTICE](NOTICE) this material is copyright 2020, Google LLC. and [LICENSE](LICENSE) is under the Apache 2.0 license. This code is open source.

## TBD
Automate with CI/CD.