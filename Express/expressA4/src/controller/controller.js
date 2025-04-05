const validUrl = require('valid-url');
const shortid = require('shortid');

let urlDatabase = {};

exports.shortenUrl = (req, res) => {
  const { longUrl } = req.body;

  // Validate the input URL
  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  // Generate a unique short code
  const shortCode = shortid.generate();

  // Store the mapping between short code and original URL
  urlDatabase[shortCode] = longUrl;

  // Return the short code
  res.json({ shortCode });
};

exports.redirectUrl = (req, res) => {
  const { shortCode } = req.params;

  // Retrieve the original URL from the database
  const longUrl = urlDatabase[shortCode];

  if (!longUrl) {
    return res.status(404).json({ error: 'Short code not found' });
  }

  // Redirect to the original URL
  res.redirect(longUrl);
};