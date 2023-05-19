import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: [process.env.UPSTASH_KAFKA_NODE_URL!],
    sasl: {
        mechanism: "scram-sha-256",
        username: process.env.UPSTASH_KAFKA_REST_USERNAME!,
        password: process.env.UPSTASH_KAFKA_REST_PASSWORD!,
    },
    ssl: true,
});

const consumer = kafka.consumer({ groupId: "1" });

export async function connectKafka() {
    await consumer.connect();

    await consumer.subscribe({ topic: "send_message" });
    await consumer.run({
        eachMessage: async ({ topic, message }) => {
            if (topic == "send_message" && message.value != null) {
                console.log(message.value.toString());
            }
        },
    });
}
