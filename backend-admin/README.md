# TEAZY TECH ADMIN BACKEND API


## API Documentation
## Endpoints

### Sign In
```http
POST /api/admin/login
```

**Parameters:**
- Body:
```json
{
  "email": "the authorized admin email",
  "password": "the authorized admin password",
}
```

**Response:**
```json
{
 uid: user id,
 email: user email,
 isAdmin: true
}
```

### Get Current LoggedIn Admin / Get Current loggedIn Admin after signin
```http
GET /api/admin/me
```

### Logout / 
```http
POST /api/admin/logout
```
