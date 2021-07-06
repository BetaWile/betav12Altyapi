const client = global.client;
module.exports = () => {
  console.log("Bot başarıyla aktif oldu!");
  client.user.setActivity("DURUM YAZISI");
}
module.exports.configuration = {
  name: "ready"
}