# Solutions for the Small Marginal Farmers

A static website that introduces AI-style farming tools for small and marginal farmers: crop guidance, a photo preview, a contact form, an about page, and a farming assistant.

## Run it

No install or build step is required. From this folder:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser.

## Pages

- `index.html` — home, crop lookup, photo preview, and contact form
- `about.html` — mission and team
- `chatbot.html` — local farming assistant (no external API)

`conttact.html` redirects to `about.html` so the old link still works.

## Notes

Crop answers and chatbot replies are built into the site. The contact form confirms the message on the page and  send email. Plant upload previews the photo in the browser and  call an identification service, so the repository  contain API keys.
