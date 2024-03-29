const app = require("express")();
const stripe = require("stripe")("sk_test_hZrdgq5APkXTMmTC1GyL6OJf");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(3000, () => console.log("Listening on port 3000"));
