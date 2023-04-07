function serverListen(serverName, port) {
    serverName.listen(port, () =>
        console.log(`Backend up @http://localhost:${port}`)
    );
}

module.exports = serverListen