# Next.js 15 Error Handling Issue

This repository demonstrates a potential issue with error handling in Next.js 15 applications.  The `about.js` page intentionally throws an error.  The goal is to explore how to best handle and display this error to the user.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You'll observe that the error isn't displayed in a user-friendly way by default.  The solution demonstrates a more robust approach.