from http.server import HTTPServer, BaseHTTPRequestHandler
import os

HOST = '127.0.0.1'
PORT = 8080

class MyHTTPServer(BaseHTTPRequestHandler):
    def do_GET(self):
        # If the user just goes to the main address, show index.html
        if self.path == "/":
            filename = "index.html"
        else:
            # Otherwise, look for the specific file requested (like /about.html)
            filename = self.path.lstrip("/")

        # Check if the file actually exists on your computer
        if os.path.isfile(filename):
            self.send_response(200) # 200 means "Success"
            # Guess content type
            if filename.endswith('.html'):
                content_type = 'text/html'
            elif filename.endswith('.css'):
                content_type = 'text/css'
            elif filename.endswith('.js'):
                content_type = 'application/javascript'
            elif filename.endswith('.png'):
                content_type = 'image/png'
            elif filename.endswith('.jpg') or filename.endswith('.jpeg'):
                content_type = 'image/jpeg'
            else:
                content_type = 'application/octet-stream'
            self.send_header("Content-type", content_type)
            self.end_headers()
            with open(filename, "rb") as file:
                self.wfile.write(file.read())
        else:
            # If the file isn't there, show a 404 error
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"<h1>404 - Page Not Found</h1>")

# This starts the server
if __name__ == "__main__":
    server = HTTPServer((HOST, PORT), MyHTTPServer)
    print(f"Server running at http://{HOST}:{PORT}")
    server.serve_forever()
