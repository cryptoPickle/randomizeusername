const pokemon = require('pokemon');
const heroes = require('superheroes');
const superb = require('superb');
const dog = require('dog-names');
const cat = require('cat-names');
const slugify = require('slugify');

const usernames = [cat, dog, heroes, pokemon ];


class RandomUserName {
  constructor({slug='_', extra, position='beggining', count=1}){
    this.slug = slug;
    this.extra = extra;
    this.position = position;
    this.count = count;
    this.randomIndex = Math.floor(Math.random() * usernames.length);
    this.randomSlugIndex = Math.floor(Math.random() * slug.length );
  }

  run(){
    return Array.from({length: this.count}).map(item => this.createUserName())
  }

  createUserName(){
    const userName = slugify(`${superb.random()} ${this.propertyHelper()}`, this.crateSlug());

    if(this.extra){
      const extraUsername = this.addExtraUsername();
      return this.createByPosition(extraUsername, userName)
    }
    
    return userName
  }

  propertyHelper(){
    return (usernames[this.randomIndex].random) 
    ? usernames[this.randomIndex].random() 
    : usernames[this.randomIndex].allRandom()
  }

  crateSlug(){
    return Array.isArray(this.slug) 
    ? this.slug[this.randomSlugIndex] 
    : this.slug;

  }

  addExtraUsername(){
    const randomIndexExtra = Math.floor(Math.random() * this.extra.length);
    return this.extra[randomIndexExtra];
  }

  createByPosition(extraName, username, slug){
    this.position //?
    switch(this.position){
      case 'beggining':
        return slugify(`${extraName} ${username}`, slug);
      case 'end':
        return slugify(`${username} ${extraName}`, slug);
      case 'random':
       const randomIndex = Math.floor(Math.random() * 2);
       return (randomIndex === 1) 
        ? slugify(`${extraName} ${username}`, slug) 
        : slugify(`${username} ${extraName}`, slug)    
    }
  }
}



const randomUserName = ({slug, extra, position, count} = {}) => {
  const userName = new RandomUserName({slug,extra, position, count});
  return userName.run()
}



module.exports = randomUserName;
