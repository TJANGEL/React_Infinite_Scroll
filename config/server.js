module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    `efefa5764051e71ca210fd3ec920f7b19fe9fdf6d2deb29287cb2081ed8eeb90`,
  SECRET:
    process.emitWarning.SECRET ||
    "8523400f24829e9b967f8ed38c7a84b7723b13df6c0d23bb0d98b152d7e8d264",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
