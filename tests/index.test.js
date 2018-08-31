const random = require('../src')


test('Creates username of one', () => {
  const result = random()
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toEqual(1)
});

test('Creates 100 username', () => {
  const result = random({count: 100});
  expect(result.length).toEqual(100)
});

test('Adds extra username', () => {
  const result = random({extra: ['test']});
  expect(result[0]).toContain('test')
})

test('Adds array of username', () => {
  const result = random({extra: ['crypto'], count: 100});
 
  result.map(item => expect(item).toContain('crypto'))
});

test('Adds custom slugs', () => {
  const result = random({slug: ['+']});
  expect(result[0]).toContain('+');
})

test('Adds custom Array of Slugs', () => {
  const result = random({slug: ['_'], count: 100});
  result.map(item => expect(item).toContain('_')) 
})

test('Add position end', () => {
  const result = random({extra: ['test'], position: 'end'});
  expect(result[0].slice(-4)).toEqual('test')
})

test('Add position beggining', () => {
  const result = random({extra: ['test'], position: 'beggining'});
  expect(result[0].substring(0,4)).toEqual('test')
});

test('Add random position', () => {
  const result = random({extra: ['test'], position: 'random'});
  expect(result[0].substring(0,4) || result[0].slice(-4)).toEqual('test')
});