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
