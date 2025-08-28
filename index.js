const express = require("express");
const emoji = require("./emojis_200.json");

const app = express();
const PORT = 8000;

//Routes

app.get("/api/emoji", (req, res) => {
  return res.json(emoji);
});

app.get("/emoji", (req, res)=>{
  const html = `
  <ol>
  ${emoji.map((emoji)=>`<li>${emoji.emoji}</li>`).join("")}    
  </ol>
  `
  res.send(html)
  
})

app.get("/", (req, res) => {
  
  const html = `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Emoji Free API</title>
</head>
<body>

    <nav class="sticky top-0 z-50 bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center space-x-8">
                    <a href="#" class="text-xl font-bold text-blue-600">Home</a>
                    <a href="#get-api" class="text-gray-700 hover:text-blue-600 font-medium">Get API</a>
                </div>
                <div>
                    <a href="https://github.com/your-repo/free-emoji-api" target="_blank" class="text-gray-700 hover:text-blue-600">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">FREE Emoji API</h1>
        <p class="text-lg text-gray-600 mb-6">This is an API website providing free access to emojis.</p>
        <a href="https://github.com/your-repo/free-emoji-api" target="_blank" class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            View on GitHub
        </a>
    </div>
    <!-- Tailwind CSS CDN -->

</body>
</html>
    <script src="./index.js"></script>

  `

  res.send(html)
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});