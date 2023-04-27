# Week 2 Refactoring Challenge

## Part 1
Fork [this project](https://github.com/tebazele/week2_challenge_refactoring) and clone it onto your computer. Then, serve it to localhost:8080 to see what it currently looks like. 

You'll see a simple scoreboard with the ability to add and take away points from Player One and Player Two. 

In the `app.js` file, you'll see 4 functions that make the app work. 

Our app does what it's supposed to do, but we've written A LOT of code for such a simple app. And these 4 functions look almost exactly the same. Let's see if we can refactor these 4 functions so we're writing less code and cleaner code while making sure the app continues to work as expected.

## Part 2: Refactor into two functions & separate out the logic that draws the score to the screen

### Refactor the logic that increases the score for each player

First, let's write two functions in our `app.js` that have `pointValue` as a *parameter*. When you call these functions, you'll pass in the *argument* of either 1 or -1 depending on if we want to add or subtract a point for each player.

### Write an updateScreen function 

This function will update the scores for both players, and we'll call it inside our `updatePlayerOneScore(pointValue)` and `updatePlayerTwoScore(pointValue)` function. 

### DON'T FORGET

Go into the index.html file and change the names of the `onclick` function calls to

```js
onclick='updatePlayerOneScore(<PUT YOUR ARGUMENT IN HERE)'
```
and 

```js
onclick='updatePlayerOneScore(<PUT YOUR ARGUMENT IN HERE)'
```

## Part 3: Refactor into a single updateScore function

Thus far, we've been using the variables `playerOneScore` and `playerTwoScore` that we declared at the top of our `app.js` file. Instead of declaring global variables (that can be changed by our user in the console--yikes!), let's create a `players` object with the player numbers ('One' and 'Two') as the *keys* and the player scores as *values*. Let's start the scores at 0. 

Inside your object, your *key: value* pairs should look like something this:
```js
One: 0
```

Now, let's refactor our updatePlayerScore functions even further into just one function that has two parameters - `pointValue` and `key`.

When you *invoke* (call) your functions `onclick`, make sure to pass in either 'One' or 'Two' as the argument for `key` depending on which player you're targeting with each function call.

Let's also rewrite our draw function and pass the `key` parameter into it so we can target the players score using that key

#### HINT: You can target the players score (the value) inside an object with this syntax: 

```js
object[key] = value
```

#### HINT 2: If you want, try using string interpolation to target the element ID in the updateScreen(key) function on this line

```js
document.getElementById(`playerOne-points`)
```
### Again, DON'T FORGET

Go into the index.html file and change the names of the `onclick` functions to test your code.
