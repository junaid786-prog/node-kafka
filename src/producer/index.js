const client = require('../client')

// Create the producer instance
const producer = client.producer()

// connect producer
const run = async () => {
    await producer.connect()
}

//run().catch(e => console.error(`[example/producer] ${e.message}`, e))

// disconnect producer

const sendMessage = async (topic, messages) => {
    await producer.send({
        topic,
        messages
    })
}

// send message
try {
    run().then(() => {
        sendMessage('add-student', [
            {
                key: '1',
                value: 'Nguyen Van A'
            }
        ])
    }).catch(e => console.error(`[example/producer] ${e.message}`, e))
} catch (error) {
    console.log(error)
}