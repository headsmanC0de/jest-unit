const mapArrToString = require('./mapArrToString');
describe('mapArrToString', () => {
	test('Корректне значення', () => {
		expect(mapArrToString([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5'])
	})
	test('Мішанина', () => {
		expect(mapArrToString([1, 2, 3, null, undefined, 'dude'])).toEqual(['1', '2', '3'])
	})
	test('Пустий масив', () => {
		expect(mapArrToString([])).toEqual([])
	})
	test('Відміна', () => {
		expect(mapArrToString([1, 2, 3])).not.toEqual([1,2,3,4])
	})
})