# Week 2 Refactoring Challenge

## Part 1
Fork [this project]() and clone it onto your computer. Then, serve it to localhost:8080 to see what it currently looks like. 

You'll see a simple scoreboard with the ability to add and take away points from Player One and Player Two. 

In the `app.js` file, you'll see 4 functions that make the app work. 

Our app does work, but we've written A LOT of code for such a simple app. And these 4 functions look almost exactly the same. Let's see if we can refactor those 4 functions so we're writing less code but the app still works like we expect it to.

## Part 2: Refactor into two functions

First, let's write two functions in our `app.js` that have `pointValue` as a *parameter*. You'll pass in the *argument* of either 1 or -1 depending on if we want to add or subtract a point for each player.

### DON'T FORGET

Go into the index.html file and change the names of the `onclick` functions to

```js
onclick='updatePlayerOneScore(<PUT YOUR ARGUMENT IN HERE)'
```
and 

```js
onclick='updatePlayerOneScore(<PUT YOUR ARGUMENT IN HERE)'
```

## Part 3: Refactor into a single function

Let's refactor even further and have just one function `updateScore()` that has two parameters - `pointValue` and `playerNumber`. When you *invoke* (call) your functions `onclick`, make sure to pass in either 'One' or 'Two' depending on which player you're targeting with each function call.

#### HINT: Use string interpolation in the `id` to insert the player number and target the correct score for each player on the screen




