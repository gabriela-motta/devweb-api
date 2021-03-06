define({ "api": [
  {
    "type": "delete",
    "url": "/api/author/:id",
    "title": "Delete Author",
    "name": "DeleteAuthor",
    "group": "Author",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Authors unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./author/author.router.js",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "/api/author/:id",
    "title": "Get Author",
    "name": "GetAuthor",
    "group": "Author",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Authors unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.name",
            "description": "<p>Name of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "author.birthday",
            "description": "<p>Birthday of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.country",
            "description": "<p>Country of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "author._books",
            "description": "<p>Books of the author.</p>"
          }
        ]
      }
    },
    "filename": "./author/author.router.js",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "/api/author",
    "title": "Get all Authors",
    "name": "GetAuthors",
    "group": "Author",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>All authors registred.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.name",
            "description": "<p>Name of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "author.birthday",
            "description": "<p>Birthday of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.country",
            "description": "<p>Country of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "author._books",
            "description": "<p>Books of the author.</p>"
          }
        ]
      }
    },
    "filename": "./author/author.router.js",
    "groupTitle": "Author"
  },
  {
    "type": "post",
    "url": "/api/author",
    "title": "Create an Author",
    "name": "PostAuthor",
    "group": "Author",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the author.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "birthday",
            "description": "<p>Optional birthday of the author.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "country",
            "description": "<p>Optional country of the author.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Name of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.birthday",
            "description": "<p>Birthday of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.country",
            "description": "<p>Country of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./author/author.router.js",
    "groupTitle": "Author"
  },
  {
    "type": "put",
    "url": "/api/author/:id",
    "title": "Update Author",
    "name": "PutAuthor",
    "group": "Author",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "name",
            "description": "<p>Optional updated name field to the author.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "birthday",
            "description": "<p>Optional updated birthday of the author.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "country",
            "description": "<p>Optional updated country of the author.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Name of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.birthday",
            "description": "<p>Birthday of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.country",
            "description": "<p>Country of the author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./author/author.router.js",
    "groupTitle": "Author"
  },
  {
    "type": "delete",
    "url": "/api/book/:id",
    "title": "Delete Book",
    "name": "DeleteBook",
    "group": "Book",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Books unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./book/book.router.js",
    "groupTitle": "Book"
  },
  {
    "type": "get",
    "url": "/api/book/:id",
    "title": "Get Book",
    "name": "GetBook",
    "group": "Book",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Books unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.title",
            "description": "<p>Title of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.sinopsis",
            "description": "<p>Sinopsis of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.author",
            "description": "<p>Author of the book.</p>"
          }
        ]
      }
    },
    "filename": "./book/book.router.js",
    "groupTitle": "Book"
  },
  {
    "type": "get",
    "url": "/api/book",
    "title": "Get all Books",
    "name": "GetBooks",
    "group": "Book",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "books",
            "description": "<p>All books registred.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.title",
            "description": "<p>Title of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.sinopsis",
            "description": "<p>Sinopsis of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.author",
            "description": "<p>Author of the book.</p>"
          }
        ]
      }
    },
    "filename": "./book/book.router.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/api/book",
    "title": "Create a Book",
    "name": "PostBook",
    "group": "Book",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "sinopsis",
            "description": "<p>Optional sinopsis to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "quotes",
            "description": "<p>Optional quotes to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "release_date",
            "description": "<p>Optional release_date to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "original_language",
            "description": "<p>Optional original_language to the book.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Title of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sinopsis",
            "description": "<p>Sinopsis of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.author",
            "description": "<p>Author of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.quotes",
            "description": "<p>Quotes of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.release_date",
            "description": "<p>Release date of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.original_language",
            "description": "<p>Original language of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./book/book.router.js",
    "groupTitle": "Book"
  },
  {
    "type": "put",
    "url": "/api/book/:id",
    "title": "Update a Book",
    "name": "PutBook",
    "group": "Book",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "title",
            "description": "<p>Optional updated title field to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "sinopsis",
            "description": "<p>Optional updated sinopsis to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "author",
            "description": "<p>Optional updated author to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "release_date",
            "description": "<p>Optional updated release_date to the book.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "original_language",
            "description": "<p>Optional updated original_language to the book.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Title of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sinopsis",
            "description": "<p>Sinopsis of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.author",
            "description": "<p>Author of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result.quotes",
            "description": "<p>Quotes of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.release_date",
            "description": "<p>Release date of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.original_language",
            "description": "<p>Original language of the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./book/book.router.js",
    "groupTitle": "Book"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_gabim_Desktop_devweb_api_doc_main_js",
    "groupTitle": "C__Users_gabim_Desktop_devweb_api_doc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/:id",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "./user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Get all Users",
    "name": "GetUsers",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>All users registred.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "./user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "Create User",
    "name": "PostUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/:id",
    "title": "Update User",
    "name": "PutUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "profile_name",
            "description": "<p>Optional updated profile_name field to the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "username",
            "description": "<p>Optional updated username name to the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "email",
            "description": "<p>Optional updated email to the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "./user/user.router.js",
    "groupTitle": "User"
  }
] });
