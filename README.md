[![Build Status](https://travis-ci.org/cryptoPickle/randomizeusername.svg?branch=build)](https://travis-ci.org/cryptoPickle/randomizeusername)


# Random UserName Generator

This simple library can help you to create random cool usernames.


### Usage
Usage is as simple as the bellow;
```
  randomUserName() // ['flawless_Ace']
```

### Options



| Param  | what is it for |
| ------------- | ------------- |
| `slug`  | Lets you add custom slugs, accepts an Array, and randomize them  |
| `extra`  | You can provide an array of custom cool usernames  |
|`position`| default to `beggining`, which adds provided username begging of the random username, `end` is adding it end of the string. `random` is randomizing position |
|`count`| Accepts integer, you can specify how many usernames you want to get. Returns an Array of usernames |


#### Basic Usage
```
randomUserName({
  slug: ['_', '+'],
  extra: ['rick','morty'],
  count: 10,
  position: 'random'
}) 
```
returns 
```
​​​​​[ 'kickass+Angel-rick',​​​​​
​​​​​  'rick-polished+Patches',​​​​​
​​​​​  'morty-ace+Cuddles',​​​​​
​​​​​  'superior+Felix-morty',​​​​​
​​​​​  'rick-primo+Simon',​​​​​
​​​​​  'morty-super+Tiger',​​​​​
​​​​​  'morty-tremendous+Jasmine',​​​​​
​​​​​  'stunning+Whiskers-rick',​​​​​
​​​​​  'rick-spectacular+Annie',​​​​​
​​​​​  'morty-doozie+Zoe' ]​​​​​
```

:))