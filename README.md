
The purpose is to understand how Express simplifies server creation compared to using raw Node.js and to deploy an application to the Goldsmiths VM.


## 🖥️ Application Routes

| Route | URL Example | Description |
|-------|--------------|-------------|
| `/` | http://localhost:8000/ | Displays “Hello World!” |
| `/about` | http://localhost:8000/about | Displays an About message |
| `/contact` | http://localhost:8000/contact | Displays contact information |
| `/date` | http://localhost:8000/date | Displays the current date and time |
| `/file` | http://localhost:8000/file | Sends and renders a.html file |
| `/welcome/:name` *(extension task)* | http://localhost:8000/welcome/Mahad | Displays a personalized welcome message |