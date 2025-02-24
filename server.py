from http.server import HTTPServer, SimpleHTTPRequestHandler
import webbrowser
import threading
import time

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Server started at http://localhost:8000")
    httpd.serve_forever()

def open_browser():
    time.sleep(1)  # Wait for server to start
    webbrowser.open('http://localhost:8000')

if __name__ == '__main__':
    # Start the server in a separate thread
    server_thread = threading.Thread(target=run_server)
    server_thread.daemon = True
    server_thread.start()

    # Open the browser
    open_browser()

    # Keep the main thread running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down server...") 