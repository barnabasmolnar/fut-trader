# FIFA Ultimate Team trader app

This is a relatively simple, client-side application that I made to help me do some fairly basic trading on FIFA's Ultimate Team game mode.

There is a marketplace in which you can buy and sell all sorts of player cards.

When I add a player, I can specify its current lowest value on the market and the amount of profit I'm looking to make from said card. With the aid of a couple of helper functions, the app accounts for tax, proper rounding of values and outputs a Recommended Purchase Price for which I can safely buy a player and know that I'm getting a decent deal.

The item rows are re-rendered periodically to keep track of how long ago an item was added to the table.

The values are output in a nice table format. The table is sortable by clicking on the appropriate headings.

## Technologies used:
- [x] React
- [x] Bootstrap 4 for the UI (just a bootswatch theme pulled in from a CDN, nothing too fancy, I'm looking for usability and functionality in this app, not a particularly unique design)
- [x] date-fns library to display nicely formatted "date added" values

## Possible todos:
The app is perfectly usable for my current needs as is. However, there are a couple of ways in which it could be extended in the future:

- [ ] Pull in player data from an API (player names, images, etc)
- [ ] Account for different types of cards for the same player
- [ ] Bulk adding of players instead of one-by-one submission
- [ ] Add filter by name input field
- [ ] Add delete all items button

## Live demo
A live demo can be viewed at https://barnabasmolnar.github.io/fut-trader/

### SVGs used:
* [Zondicons - A set of free premium SVG icons. By Steve Schoger](http://www.zondicons.com/)