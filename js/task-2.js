/*Bu JavaScript kodu, bir Storage sınıfı tanımlayarak basit bir depolama mekanizması oluşturur. 
Bu sınıf, bir dizi öğe (#item) tutar ve bu öğelere ekleme, çıkarma gibi işlemler yapmamızı sağlar.*/

//---------------------------------------------------------------------------------------------------------
//Storage (depolama), #items(private field) ve .filter ile filtreleme işlemi yapılmıştır.

class Storage { //  Bir Storage sınıfı tanımlanır. Bu sınıf, depolama işlemlerini kapsayacaktır.
    #items; //#items özelliği, sınıfın özel bir alanı (private field) olarak tanımlanır. Bu özellik, depolama alanındaki öğeleri tutmak için kullanılır.

    constructor(initialItems) { //Oluşturucu fonksiyon, initialItems adlı bir parametre alır. Bu parametre, depolama alanının başlangıçta içereceği öğelerin bir dizisidir.
        this.#items = initialItems;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter((item) => item !== itemToRemove); //#items dizisindeki öğeleri filtreler. Filtreleme işlemi, itemToRemove öğesini içermeyen öğeleri yeni bir diziye ekler. Böylece, itemToRemove öğesi çıkarılmış olur.
    }
};

//--------------------------------------------------------------------------------------------------------
//Fonksiyonun üzerinde çalıştığı girdi dizi.

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

