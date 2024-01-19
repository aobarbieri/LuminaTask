## Server Action

-   Passing Additonal Arguments
    We can pass additional arguments to a Server Action using the JS bind method.

*   An alternative is to pass arguments as hidden input fields in the form (e.g. <input type="hidden" name="userId" value={userId} />). However, the value will be part of the rendered HTML and will not be encoded.
*   .bind works in both Server and Client Components. It also supports progressive enhancement.
    ex: ui/lists/forms.jsx - DeleteList(id)

-   Pending States
    useFormStatus returns the status for a specific <form>, so it must be defined as a child of the <form> element.
    useFormStatus is a React hook and therefore must be used in a Client Component
    ex: ui/lists/delete-btn.jsx

## Fonts

`next/font` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
Automatically self-host any Google Font.
Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser.

## UUIDs (Universally Unique Identifier)

UUIDs vs. Auto-incrementing Keys
We use UUIDs instead of incrementing keys (e.g., 1, 2, 3, etc.). This makes the URL longer; however, UUIDs eliminate the risk of ID collision, are globally unique, and reduce the risk of enumeration attacks - making them ideal for large databases.
However, if you prefer cleaner URLs, you might prefer to use auto-incrementing keys.

## noStore() from next/cache

Add noStore() inside the async function call to prevent the response from being cached. This is equivalent to in fetch(..., {cache: 'no-store'}).

## async function in items-data and data

@vercel/postgres library is designed to work seamlessly with Vercel serverless functions and automatically manages database connections for you. This library abstracts away the need for you to manually handle connection opening and closing.

ex: using db.connect():
const { db } = require('@vercel/postgres')
async function listAction(action, arr) {
await db.connect()
}

Therefore there is no need for `await db.connect()`
