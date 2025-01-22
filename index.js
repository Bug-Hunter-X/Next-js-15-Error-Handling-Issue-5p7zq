```javascript
// pages/about.js

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional Error');
  } catch (error) {
    // Proper error handling
    return (
      <div>
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
```