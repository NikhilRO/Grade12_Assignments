import http.server

def start_server(port=8000, bind="", cgi=False):
    if cgi==True:
        http.server.test(HandlerClass=http.server.CGIHTTPRequestHandler, port=port)
    else:
        http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler,port=port)

start_server()






#python -m SimpleHTTPServer
#in whatever folder you want to run as a server
