describe('Тестирование Staya.dog', function () {

     it('Авторизация с валидными логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('morozovqaengineer@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('QaEngineerQa22');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        })
})
