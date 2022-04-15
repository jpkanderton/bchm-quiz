const app = require("./app.js");
const PORT = process.env.PORT || 3456;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
