/*this Nasıl Çalışır?
this'in değeri, aşağıdaki faktörlere göre belirlenir:

Fonksiyonun nasıl çağrıldığı:
Direkt çağrı: Bir nesnenin metodu olarak çağrılırsa, this o nesneyi gösterir.
Oluşturucu fonksiyon: new anahtar sözcüğü ile çağrılırsa, this yeni oluşturulan nesneyi gösterir.
Global kapsamda: Strict modda değilse, this global nesneyi (pencere nesnesi) gösterir. Strict modda ise undefined olur.
Call, Apply veya Bind metotları: Bu metotlar ile thisin değeri belirtilebilir.*/

//-------------------------------------------------------------------------------------------------------
//Burada this anahtar ifadesinin kullanımına bir örnektir.

const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
        return this.balance; //Bu metod, müşterinin bakiyesini döndürür.
    },
    getDiscount() {
        return this.discount; //Bu metod, müşterinin indirim oranını döndürür.
    },
    setDiscount(value) {
        this.discount = value; // Bu metod, müşterinin indirim oranını parametre olarak verilen value ile günceller.
    },
    getOrders() {
        return this.orders; //Bu metod, müşterinin siparişlerinin listesini döndürür.
    },
    addOrder(cost, order) {   //Bu metod, yeni bir sipariş ekler.
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    },
};


//---------------------------------------------------------------------------------------------------------

//Fonksiyonun üzerinde çalıştığı girdi dizi.

customer.setDiscount(0.15); //Yeni discount oranı.
console.log(customer.getDiscount()); // 0.15 
customer.addOrder(5000, "Steak");  // 5000 - 5000*0.15 = 4250 
console.log(customer.getBalance()); // 19750  (24000-4250=19750)
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

