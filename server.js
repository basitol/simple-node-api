const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Version 3 deployed automatically and successfully 🚀");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get("/api/v1/users", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            users: [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Jane Doe" },
                { id: 3, name: "John Smith" },
                { id: 4, name: "Jane Smith" },
                { id: 5, name: "John Doe" },
                { id: 6, name: "Jane Doe" },
                { id: 7, name: "John Smith" },
                { id: 8, name: "Jane Smith" },
            ]
        }
    });
});