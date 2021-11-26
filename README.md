# React WordPress Gutenberg Loop
*React components intended to be used with WordPress Gutenberg block data.*

This was originally developed for use with Gatsby but nothing about these components has Gatsby dependencies.

## How it works
Import the GBlocks component via the index file into your page template and pass GraphQL gutenberg block data to it via the `blockData` prop. There is an example of this in the page.js component.

GBlocks receives the props and checks them to determine if they're a container block, like a group or a columns/column block or if they're a content block, meaning header, paragraph, image, etc.

It also formats classnames and alignment properties for each element that were set in WordPress.

If:
  The current block is a content block, the data is passed to a child component, gblock (singular), where the data is formatted in the markup and output to the DOM.
Else:
  The data is passed to a sort of middleware component which receives the data and passes it back to the GBlocks (plural) component, where it is run through the process again.
  
The process repeats until every block is determined to be a content block and no more Gutenberg block data is left to process

## Where this needs improvement
The GraphQL query works but I have to manually add another layer of recursion to the GraphQL in page.js for every potential parent->child container/content relationship.

I'm considering a way to write a single-level query and passing the parent container ID to the child component loop so the query isn't this bananas stack of code that only gets bigger and bigger.
