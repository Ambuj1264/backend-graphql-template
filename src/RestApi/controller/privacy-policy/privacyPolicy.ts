import { Request, Response } from "express";

const privacyPolicy = {
  PP: (req: Request, res: Response) => {
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f8f8f8;
                }
        
                header {
                    background-color: #419cfd;
                    color: #fff;
                    padding: 5px;
                    text-align: center;
                    border-radius: 8px;
                }
                header h2{
                    color: #fff;
                   
                }
        
                section {
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                h1 {
                    color: #fdfafa;
                }
        
                h2 {
                    color: #555;
                }
        
                p {
                    color: #666;
                }
        
                a {
                    color: #007bff;
                    text-decoration: none;
                }
        
                a:hover {
                    text-decoration: underline;
                }
                li{
                    color: #555;
                }
                footer {
                    background-color: #419cfd;
                    color: #fff;
                    text-align: center;
                    padding: 10px;
                    border-radius: 8px;
                    bottom: 0;
                    max-width: 100%;
                }
                footer p{
                  
                    color: #fff;
                  
                }
            </style>
            <title>Privacy Policy</title>
        </head>
        <body>
    
        </body>
        </html>
        
        `);
  },
};

export { privacyPolicy };
