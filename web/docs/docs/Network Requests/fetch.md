# Fetchz (Experimental)

The `fetchz` attribute fetches JSON data from URLs and stores it in state variables when clicked.

## Syntax

```html
<element fetchz="url:variableName"></element>
```

## How It Works

- **Click trigger**: Activates when the element is clicked
- **HTTP request**: Makes a GET request to the specified URL
- **JSON parsing**: Automatically parses JSON response
- **State storage**: Stores data in the specified variable

## Basic Example

```html
<button fetchz="https://jsonplaceholder.typicode.com/users/1:user">
  Fetch User
</button>
<p>User Name: <span getz="user.name"></span></p>
<p>Email: <span getz="user.email"></span></p>
```

## Multiple API Calls

```html
<button fetchz="https://api.github.com/users/octocat:githubUser">
  Fetch GitHub User
</button>
<button fetchz="https://jsonplaceholder.typicode.com/posts/1:post">
  Fetch Post
</button>

<div>
  <h3>GitHub User: <span getz="githubUser.login"></span></h3>
  <p>Followers: <span getz="githubUser.followers"></span></p>
</div>

<div>
  <h3>Post: <span getz="post.title"></span></h3>
  <p><span getz="post.body"></span></p>
</div>
```

## Common Use Cases

### User Profiles

```html
<button fetchz="https://randomuser.me/api/:randomUser">Get Random User</button>
<div>
  <img getz="randomUser.results[0].picture.medium" alt="User" />
  <p>Name: <span getz="randomUser.results[0].name.first"></span></p>
  <p>Email: <span getz="randomUser.results[0].email"></span></p>
</div>
```

### Product Data

```html
<button fetchz="https://fakestoreapi.com/products/1:product">
  Load Product
</button>
<div>
  <h3><span getz="product.title"></span></h3>
  <p>Price: $<span getz="product.price"></span></p>
  <p><span getz="product.description"></span></p>
</div>
```

### Weather Data

```html
<button
  fetchz="https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY:weather"
>
  Get Weather
</button>
<div>
  <p>Temperature: <span getz="weather.main.temp"></span>°K</p>
  <p>Description: <span getz="weather.weather[0].description"></span></p>
</div>
```

## Loading States

Combine with other attributes for better UX:

```html
<button
  fetchz="https://jsonplaceholder.typicode.com/users/1:user"
  setz="loading:true"
>
  <span getz="loading">Loading...</span>
  <span getz="!loading">Fetch User</span>
</button>
```

## Error Handling

Currently experimental - errors are logged to console:

```html
<!-- This will fail gracefully -->
<button fetchz="https://invalid-url.com:badData">Test Error</button>
<p>Data: <span getz="badData">No data loaded</span></p>
```

## Important Notes

⚠️ **Experimental Feature**

- May change in future versions
- Limited error handling
- CORS restrictions apply
- Only supports GET requests
- Only parses JSON responses

## Best Practices

### ✅ Do

- Use public APIs that support CORS
- Test API endpoints before deployment
- Provide loading indicators
- Check for data existence before displaying

### ❌ Don't

- Use for sensitive API calls
- Rely on it for production apps yet
- Fetch large datasets
- Make too many concurrent requests

## Related Attributes

- [`getz`](../Variables/get.md) - Display fetched data
- [`setz`](../Variables/set.md) - Set loading states
- [`letz`](../Variables/let.md) - Initialize variables

Perfect for quick API demos
