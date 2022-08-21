export const logo = fetch('http://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        {
            generalSettings {
                url
            }
        }
    `,
  }),
})
  .then(res => res.json())
  .then(res => res.data)
