class Foo {
    constructor() {
        this.id = 'foo'; // 3
        this.print(); // 4
    }

    print() {
        console.log('foo' + this.id); // 4.1
    }

    arrowPrint = () => { 
        console.log('arrow' + this.id); // 10.1
    }
}

class Bar extends Foo {
    constructor() {
        super(); // 2
        this.id = 'bar'; // 6
        this.print(); // 7 barfoo
        super.print(); // 9 
        this.arrowPrint(); // 10 arrowbar
    }

    print() {
        console.log('bar' + this.id); // 7.1
    }
}``

const p = new Bar(); // 1

// 1 call new Bar
// 2 super() call parent constructor Foo
// into Foo:
// 3 this.id = 'foo' => this.id теперь 'foo'
// 4 this.print() => вызывает переопределённый метод Bar.print() (полиморфизм!)
// 4.1 вывод: barfoo в консоль (так как this.id = 'foo', но метод print взят из Bar)
// after super():
// 6 this.id = 'bar' => this.id теперь 'bar'
// 7 this.print() => вызывает переопределённый метод Bar.print() (полиморфизм!)
// 7.1 вывод: barbar в консоль (так как this.id уже 'bar')
// 9 super.print() => явно вызываем Foo.print() (игнорируя переопределение).
// 9.1 вывод: foobar (так как Foo.print() выводит 'foo' + this.id, но this.id = 'bar').
// 10 this.arrowPrint() => стрелочная функция (arrowPrint) привязана к текущему this (Bar)
// 10.1 вывод: arrowbar (берёт актуальное this.id = 'bar')
// barfoo
// barbar
// foobar
// arrowbar