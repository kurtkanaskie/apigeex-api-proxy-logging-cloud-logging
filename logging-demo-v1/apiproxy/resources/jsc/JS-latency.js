var request_start_time = context.getVariable('client.received.start.timestamp');
var request_end_time   = context.getVariable('system.timestamp');
var total_latency=request_end_time - request_start_time;
context.setVariable('total_latency',total_latency);