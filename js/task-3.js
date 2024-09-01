/*Bu JavaScript kodu, StringBuilder adlı bir sınıf tanımlar ve bu sınıf, 
metinleri (string'leri) işlemek için çeşitli metotlar sağlar. Özellikle, 
metinlere başlangıç veya bitiş ekleme işlemleri (padding) için kullanılır.*/
//----------------------------------------------------------------------------------------------------------------
//StringBuilder ile Metin(String) verileri işlemek(Builder) için kullanma örneği;

class StringBuilder { //Bir StringBuilder sınıfı oluşturulur. Bu sınıf, metinleri işlemek için özellikler ve metotlar içerecektir.
    #value; //#value özelliği, sınıfın özel bir alanı (private field) olarak tanımlanır. Bu özellik, sınıfın içinde saklanan metin değerini tutar.

    constructor(initialValue) { //Oluşturucu fonksiyon, initialValue adlı bir parametre alır. Bu parametre, StringBuilder nesnesinin oluşturulduğunda içereceği başlangıç metin değeridir.
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(str) { //Bu metod, str parametresindeki metni #value özelliğinin başına ekler.
        this.#value = `${str}${this.#value}`;
    }

    padEnd(str) { //Bu metod, str parametresindeki metni #value özelliğinin sonuna ekler.
        this.#value += str;
    }

    padBoth(str) { //Bu metod, str parametresindeki metni hem başlangıçta hem de sonuna ekler.
        this.padStart(str);
        this.padEnd(str);
    }
}

//----------------------------------------------------------------------------------------------------------------
//Fonksiyonun üzerinde çalıştığı girdi dizi.

const builder = new StringBuilder("."); //builder adında bir değişken atanır. Bu değişken değeri "." dır.
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="