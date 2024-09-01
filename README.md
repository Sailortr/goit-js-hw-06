                                    Görev 1. Kullanıcı hesabı

Bu görevi task-1.js dosyasında çalıştırın.


Geliştirici ayrılmadan önce, yemek dağıtım hizmetimiz için kullanıcı hesaplarını yönettiğimiz kaynak kodunu hackledi. Nesnenin özelliklerine erişirken eksik olan this ifadesini değiştirerek customer nesnesinin metodlarını yeniden düzenleyin.



Bu başlangıç kodunu kullanın ve yeniden düzenleyin. Nesneyi tanımladıktan sonra yöntem çağrılarını ekleyin. Çalışmalarının sonuçları konsolda görüntülenecektir. Lütfen orada herhangi bir değişiklik yapmayın.



const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



Bu kodu mentörün kontrolü için bırakın.



Mentörün kontrol ederken dikkat edecekleri:

customer değişkeni tanımlanmıştır.
customer değişkeninin değeri, özellikleri ve yöntemleri olan bir nesnedir
customer.getDiscount() çağrısı, discount özelliğinin geçerli değerini döndürür
customer.setDiscount(0.15) çağrısı discount özelliğinin değerini günceller
customer.getBalance() çağrısı, balance özelliğinin geçerli değerini döndürür.
customer.getOrders() çağrısı, orders özelliğinin geçerli değerini döndürür
customer.addOrder(5000, "Steak") çağrısı orders özelliğinin değer dizisine "Steak" ekler ve bakiyeyi günceller
customer nesnesinin getBalance metodu this kullanır.
customer nesnesinin getDiscount metodu this kullanır.
customer nesnesinin setDiscount metodu this kullanır.
customer nesnesinin getOrders metodu this kullanır.
customer nesnesinin addOrder metodu this kullanır.


Çözüm

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  }
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



                                    Görev 2. Depo

Bu görevi task-2.js dosyasında çalıştırın.


Mal deposunu yönetmek için nesneler oluşturacak bir Storage sınıfı oluşturun. Sınıf yalnızca bir argüman bekler - oluşturulan nesneye items özel özelliğinde yazılan ilk mal dizisi.

Aşağıdaki sınıf yöntemlerini tanımlayın:

getItems() - items özel özelliğindeki mevcut öğelerin bir dizisini döndürür.
addItem(newItem) - yeni bir öğe newItem kabul eder ve nesnenin items özel özelliğindeki öğeler dizisine ekler.
removeItem(itemToRemove) - itemToRemove öğesinin adını içeren bir dize alır ve nesnenin items özel özelliğindeki öğeler dizisinden kaldırır.
Aşağıdaki kodu örnek başlatma ve yöntem çağrılarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf bildiriminden sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



Bu kodu mentörün kontrol etmesi için bırakın.



Mentörün kontrol ederken nelere dikkat edecekleri:

Storage sınıfı tanımlanmış.
Storage sınıfında getItems metodu tanımlanmış
Storage sınıfında addItem metodu tanımlanmış
Storage sınıfında removeItem metodu tanımlanmış
Storage sınıfındaki items özelliği private olarak tanımlanmış
getItems metodu, kendisini çağıran sınıf örneğinin items özelliğinin değerini döndürür
addItem metodu, kendisini çağıran sınıf örneğinin items özelliğinin değerini değiştirir
removeItem metodu, kendisini çağıran sınıf örneğinin items özelliğinin değerini değiştirir
new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) çağrısının sonucu olarak, storage değişkeninin değeri bir nesnedir
storage nesnesinin genel bir items özelliği yok
Örnek başlatıldıktan hemen sonra storage.getItems() öğesine yapılan ilk çağrı bir dizi ["Nanitoids", "Prolonger", "Antigravitator"] döndürür
storage.addItem("Droid") çağrısından sonra storage.getItems() fonksiyonuna yapılan ikinci çağrı, ["Nanitoids", "Prolonger", "Antigravitator", "Droid"] dizisini döndürür.
storage.removeItem("Prolonger") çağrısından sonra storage.getItems() fonksiyonuna yapılan üçüncü çağrı, ["Nanitoids", "Antigravitator", "Droid"] dizisini döndürür


Çözüm

class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



                                    Görev 3. String birleştirme

Bu görevi task-3.js dosyasında çalıştırın.


Bir initialValue parametresi alan bir StringBuilder sınıfı yazın - oluşturulan nesnenin value özel özelliğine yazılan rastgele bir dize.

Aşağıdaki sınıf metodlarını tanımlayın:

getValue() - value özel özelliğinin geçerli değerini döndürür.
padEnd(str) - str (dize) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin sonuna ekler.
padStart(str) - str (string) parametresini alır ve bu metodu çağıran nesnenin value özel özelliğinin değerinin başlangıcına ekler.
padBoth(str) - str (dize) parametresini alır ve bu yöntemi çağıran nesnenin value özel özelliğinin değerinin başına ve sonuna ekler.
Aşağıdaki kodu örnek başlatma ve metodlarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf tanımlanmasından sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="



Bu kodu mentörün kontrol etmesi için bırakın.



Mentörün kontrol ederken dikkat edecekleri:

StringBuilder sınıfı tanımlanmıştır.
StringBuilder sınıfındaki value özelliği private olarak tanımlanmıştır
StringBuilder sınıfı getValue metodunu tanımlar
getValue metodu, kendisini çağıran sınıf örneğinin value özel özelliğinin değerini döndürür
StringBuilder sınıfında, padEnd metodu tanımlanır
padEnd yöntemi, kendisini çağıran sınıf örneğinin value özel özelliğinin değerini değiştirir
StringBuilder sınıfında, padStart metodu tanımlanır
padStart metodu, kendisini çağıran sınıf örneğinin value özel özelliğini değiştirir
StringBuilder sınıfında, padBoth metodu tanımlanır
padBoth metodu, kendisini çağıran sınıf örneğinin value özelliğinin değerini değiştirir
new StringBuilder(".") çağrısının sonucu olarak, builder değişkeninin değeri bir nesnedir
builder nesnesi value genel özelliğini içermez.
Örnek başlatıldıktan hemen sonra builder.getValue() öğesine yapılan ilk çağrı . dizesini döndürür.
builder.padStart("^") çağrısından sonra yapılan ikinci builder.getValue() çağrısı ^. dizesini döndürür.
builder.padEnd("^") çağrısından sonra yapılan üçüncü builder.getValue() çağrısı ^.^ dizesini döndürür
builder.padBoth("=") çağrısından sonra yapılan dördüncü builder.getValue() çağrısı =^.^= dizesini döndürür


Çözüm

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }

  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="