# Saf-callback-url

## Description
A transactions may take time to complete since it depends on different variables.

Safaricom uses a callback technique which sends response to users, indicating if the transaction is successful or not.   

This is a simple express server that takes in raw safaricom meta data manipulates it and emits it to the front-end using socket.io.

## End-points

### /lipanamobile

takes in data  from the safaricom express endpoint and produces results showing if a transaction is either successful or not.
