const kafka = require('../client')

kafka.consumer({ groupId: 'test-group' })