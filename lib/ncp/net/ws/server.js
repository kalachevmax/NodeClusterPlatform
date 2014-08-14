

/**
 * @constructor
 * @implements {ncp.net.ws.IServer}
 * @param {number} listenPort
 */
ncp.net.ws.Server = function(listenPort) {
  this.listen(listenPort);
};


/**
 * @inheritDoc
 */
ncp.net.ws.Server.prototype.listen = function(port) {
  var server = new ws.Server({port: port});
  server.on('connection', handleConnection);

  /**
   * @param {*} ws
   */
  function handleConnection(ws) {
    console.log('[ncp.net.ws.Server] connection created');
    ws.on('message', handleMessage);
  }

  /**
   * @param {string} message
   */
  function handleMessage(message) {
    console.log('[ncp.net.ws.Server] message received: %s', message);
  }
};