const headers = {
    "xssProtection": true,
    "frameOptions": false,
    "csp": {
        "default-src": [
            "'self'",
            "http://*.cnn.com:*",
            "https://*.cnn.com:*",
            "*.cnn.net:*",
            "*.turner.com:*",
            "*.ugdturner.com:*",
            "*.vgtf.net:*",
            "blob:"
        ],
        "script-src": [
            "'unsafe-inline'",
            "'unsafe-eval'",
            "'self'",
            "*"
        ],
        "style-src": [
            "'unsafe-inline'",
            "'self'",
            "*",
            "blob:"
        ],
        "frame-src": [
            "'self'",
            "*"
        ],
        "object-src": [
            "'self'",
            "*"
        ],
        "img-src": [
            "'self'",
            "*",
            "data:",
            "blob:"
        ],
        "media-src": [
            "'self'",
            "*",
            "blob:"
        ],
        "font-src": [
            "'self'",
            "*",
            "data:"
        ],
        "connect-src": [
            "'self'",
            "*"
        ]
    },
    "cors": {
        "allowOrigin": "*"
    }
};
