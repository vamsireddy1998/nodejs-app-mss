var express = require("express");
const path = require('path');
const cfenv = require('cfenv');

var app = express();
var appEnv = cfenv.getAppEnv();
app.set('port', (process.env.PORT || 9981))
app.use(express.static(__dirname + '/images'))

app.get('/clarku-demo', function(request, response) {
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Clark University - Cloud Computing Demo</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Arial', sans-serif; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #333;
                min-height: 100vh;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 40px 20px;
            }
            .header {
                text-align: center;
                background: white;
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                margin-bottom: 30px;
            }
            .header h1 {
                color: #2c3e50;
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            .header h2 {
                color: #7d3c98;
                font-size: 1.5em;
                margin-bottom: 20px;
                font-weight: 300;
            }
            .content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-bottom: 30px;
            }
            .card {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }
            .card h3 {
                color: #2c3e50;
                margin-bottom: 15px;
                font-size: 1.3em;
            }
            .features {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }
            .features ul {
                list-style: none;
                padding: 0;
            }
            .features li {
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                font-size: 1.1em;
            }
            .features li:before {
                content: "✓ ";
                color: #27ae60;
                font-weight: bold;
                margin-right: 10px;
            }
            .contact {
                text-align: center;
                background: #2c3e50;
                color: white;
                padding: 30px;
                border-radius: 15px;
                margin-top: 30px;
            }
            .contact a {
                color: #3498db;
                text-decoration: none;
            }
            .tech-badge {
                display: inline-block;
                background: #3498db;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                margin: 5px;
                font-size: 0.9em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎓 Clark University</h1>
                <h2>Cloud Computing & Technology Education Demo</h2>
                <p style="color: #666; font-size: 1.1em;">Challenge Convention. Change Our World.</p>
            </div>
            
            <div class="content">
                <div class="card">
                    <h3>About This Project</h3>
                    <p>This demonstration showcases cloud computing technologies deployed on AWS infrastructure, representing the cutting-edge education provided at Clark University.</p>
                    <div style="margin-top: 20px;">
                        <span class="tech-badge">AWS EC2</span>
                        <span class="tech-badge">Node.js</span>
                        <span class="tech-badge">Docker</span>
                        <span class="tech-badge">Linux</span>
                    </div>
                </div>
                
                <div class="card">
                    <h3>Why Cloud Computing?</h3>
                    <p>Cloud technologies are transforming industries and creating new career opportunities. Clark University prepares students for these emerging fields through hands-on projects like this one.</p>
                </div>
            </div>
            
            <div class="features">
                <h3>🚀 Why Choose Clark University?</h3>
                <ul>
                    <li>Liberal arts education with research opportunities</li>
                    <li>Cutting-edge technology and computer science programs</li>
                    <li>Beautiful campus in Worcester, Massachusetts</li>
                    <li>Commitment to social justice and global impact</li>
                    <li>Expert faculty and personalized attention</li>
                    <li>Strong alumni network and career support</li>
                </ul>
            </div>
            
            <div class="contact">
                <h3>Start Your Journey Today</h3>
                <p>📧 <a href="mailto:admissions@clarku.edu">admissions@clarku.edu</a> | 🌐 <a href="https://www.clarku.edu" target="_blank">www.clarku.edu</a></p>
                <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.8;">Cloud Computing Course Project - Demonstrating AWS Deployment</p>
            </div>
        </div>
    </body>
    </html>
    `);
    response.end();
});

// ... keep your other routes (jsonData, html, redirect) the same ...
app.get("/jsonData", function(req,res){
    res.type('json');
    res.send({
            'university': 'Clark University',
            'project': 'Cloud Computing Education Demo',
            'technologies': ['AWS EC2', 'Node.js', 'Docker', 'Express'],
            'contact': 'Admissions Office',
            'email': 'admissions@clarku.edu',
            'website': 'www.clarku.edu'
            });
});

app.get("/html", function(req,res){
    res.set("Content-Type","text/html");
    res.write("<h2>Clark University Cloud Computing Demo</h2>");
    res.write("<p>This is a demonstration of web technologies and cloud deployment.</p>");
    res.end();
});

app.get("/redirect", function(req, res) {
    res.redirect('https://www.clarku.edu');
});

app.listen(app.get('port'), function() {
    console.log("Clark University Cloud App running at http://localhost:" + app.get('port') + "/clarku-demo");
});
