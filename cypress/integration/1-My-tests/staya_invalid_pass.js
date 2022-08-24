describe('Тестирование Staya.dog', function () {

     it('Авторизация с валидными логином и невалидным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('morozovqaengineer@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('QaEngineerQa');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
})