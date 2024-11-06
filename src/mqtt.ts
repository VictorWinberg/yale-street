import mqtt from "mqtt";

const client = mqtt.connect("wss://team2.cloud.shiftr.io", {
  username: "team2",
  password: "secret",
  clientId: "javascript",
});

client.on("connect", function () {
  console.log("connected!");
});

export const command = (cmd: string) => {
  client.publish("lights/control", cmd);
};

export const message = (msg: string) => {
  client.publish("message", msg);
};

export const subscribe = (topic: string, callback: (msg: string) => void) => {
  client.subscribe(topic);
  client.on("message", function (topic, message) {
    callback(message.toString());
  });
};
