const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes will be added here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
