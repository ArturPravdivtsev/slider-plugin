describe("jQuery", function() {
    it("is defined", function() {
        expect($).toBeDefined();
    });
});

describe('jQuery.mySlider', function() {
    beforeEach(function() {
        fixture.base = 'base/test';
        fixture.load('fixture.html');
        // var fixture = '<input type="range" class="range" />';
        // document.body.insertAdjacentHTML(
        //     'afterbegin',
        //     fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        fixture.cleanup();
    });

    it('должен быть доступным в объекте jQuery', function() {
        expect($.fn.mySlider).toBeDefined();
    });
    it('должен предлагать объект аргументов по умолчанию в пространстве имен styleWords', function() {
        expect($.fn.mySlider.defaults).toBeDefined();
    });
    it('должен по умолчанию применять класс range к обертке', function() {
        expect(document.getElementsByClassName('range')).toBeDefined();
        // expect(document.getElementsByClassName('range')).toBeDefined();
    });
});