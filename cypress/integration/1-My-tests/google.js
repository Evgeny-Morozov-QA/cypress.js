describe('Тестирование Google', function () {

     it('Проверка, что на странице выдачи есть слова Персонаж вселенной Звездных войн', function () {
        cy.visit('https://google.ru/');
        cy.get('.gLFyf').type('йода').type('{enter}');
        cy.contains('Персонаж вселенной «Звёздных войн»');
        })
})