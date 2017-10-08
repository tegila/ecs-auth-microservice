define({ "api": [
  {
    "type": "post",
    "url": "/access/signin",
    "title": "Authorize user by credentials",
    "name": "Authorization",
    "group": "Access_API_Boundle",
    "description": "<p>Authorize user by credentials</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 200 OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"message\": {\n         \"expires_in\": 1507343002,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA3Mjk5MTI5LCJleHAiOjE1MDczODU1Mjl9.4Wom95yMQoSLSX_lzfC0oz__TDW6Rrj8pQS0Zwk7Bvs\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequestError",
            "description": "<p>Invalid auth credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessForbiddenError",
            "description": "<p>Invalid auth credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidRequestError",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"status\": 400,\n     \"message\": \"InvalidRequest: child \"email\" fails because [\"email\" must be a valid email]\"\n }",
          "type": "json"
        },
        {
          "title": "NotFoundError",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"status\": 404,\n     \"message\": \"NotFound: User not found\"\n }",
          "type": "json"
        },
        {
          "title": "AccessForbiddenError",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"status\": 403,\n     \"message\": \"AccessForbidden: Invalid credentials\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "boundles/api/access/routes.js",
    "groupTitle": "Access_API_Boundle",
    "sampleRequest": [
      {
        "url": "http://localhost/access/signin"
      }
    ]
  },
  {
    "type": "post",
    "url": "/access/signup",
    "title": "Register new user",
    "name": "Registration",
    "group": "Access_API_Boundle",
    "description": "<p>Register new user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 200 OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"message\": {\n         \"expires_in\": 1507343002,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA3Mjk5MTI5LCJleHAiOjE1MDczODU1Mjl9.4Wom95yMQoSLSX_lzfC0oz__TDW6Rrj8pQS0Zwk7Bvs\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequestError",
            "description": "<p>Bad credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConflictRequestError",
            "description": "<p>The user already exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidRequestError",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"status\": 400,\n     \"message\": \"InvalidRequest: child \"email\" fails because [\"email\" must be a valid email]\"\n }",
          "type": "json"
        },
        {
          "title": "ConflictRequestError",
          "content": "HTTP/1.1 409 Conflict\n{\n     \"status\": 409,\n     \"message\": \"ConflictRequest: The user already exist\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "boundles/api/access/routes.js",
    "groupTitle": "Access_API_Boundle",
    "sampleRequest": [
      {
        "url": "http://localhost/access/signup"
      }
    ]
  }
] });