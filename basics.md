# What is an API
> API is a Application programming Interface, that allows two application to talk to each other.

# RestFul API
> Rest stands for REpresentational State Transfer.

> REST also known as RESTful APIs. REST or RESTfull API where designed to take advantage of existing protocols.

Client-Server
> Client and the server should be separate from each other and allowed to evolve individually.

Stateless
> meaning that calls can be made independently of one another, and each call contains all of the data necessary to complete itself successfully.

USe Logical Resources
> The key abstraction of information in REST is a resource Any information that can be named can be aa resources

Resource Base URL
> The API URL must use resource based URl.

Use HTTP Methods
> GET, POST, PUT, DELETE

Send data in JSON (MOSTLY)


//////////////////////////////////////////////////

# HTTP response Status Code
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
- 

/////////////////////////////////

# URL

> req.params 
> Url can have parameters
> - http://localhost:8080/api/23
>   route('/api/:id?',) // question mark indicates it is optional
> - access taht parameters = const id = req.params.id; 

> req.query
> can have query
> - http://localhost:8080/api/?name=node 
> - route('/api',) //
> - access that query = const qu = req.query;

> req.body
> ned to use middleweare : app.use(express.json());
> method should be POST

////////////////////////////////

# MongoDB 

>