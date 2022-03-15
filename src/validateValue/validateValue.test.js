const validateValue	= require('./validateValue');

test('Валідуємо нашу функцію', () => { 
	expect(validateValue(50)).toBe(true)
})

 describe('Назва нашого тест кейсу', () => { 
	 test('Корректне значення', () => {
		 expect(validateValue(50)).toBe(true)
	 })
	 test('Меньше корректного', () => {
		 expect(validateValue(-1)).toBe(false)
	 })
	 test('Більше корректного', () => {
		 expect(validateValue(101)).toBe(false)
	 })
	 test('Перевірка нижньої границі', () => {
		 expect(validateValue(0)).toBe(true)
	 });
	 test('Перевірка верхньої границі', () => {
		 expect(validateValue(100)).toBe(true)
	 });
  })