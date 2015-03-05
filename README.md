# cnn-news
The cnn-news module grabs and parsers the cnn rss feed for cnn.com

## install
```
npm install cnn-news
```
## Usage
Each feed takes a callback, with the following arguments
- error: returned if any error occurs in acquiring the rss feed
- meta: Any metadata returned from the rss feed
- articles: any articles returned from the rss feed

### Story feeds

* top: CNN's top stories.
* world: CNN's world stories.
* us: CNN's U.S. stories.
* business: CNN's business stories.
* politics: CNN's politics stories.
* crime: CNN's crime stories.
* technology: CNN's technology stories.
* health: CNN's health stories.
* entertainment: CNN's entertainment stories.
* travel: CNN's travel stories.
* living: CNN's living stories.
* video: CNN's video stories.
* studentNews: CNN's Student News stories.
* latest: CNN's most recently created/updated stories.
* ireport: CNN's vetted iReports.
