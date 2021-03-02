const { PeerServer } = require('peer')
const PORT = process.env.PORT || 3001
PeerServer({ port: PORT, path: '/server' })