class Rekening {
    #saldo;
 
    constructor() {
        this.#saldo = 5000000;
    }
 
    setor(jumlah) {
        // TODO: tambahkan jumlah ke this.#saldo
        this.#saldo += jumlah;
    }
 
    tarik(jumlah) {
        // TODO: kurangi this.#saldo jika jumlah <= this.#saldo,
        // jika tidak tampilkan pesan "Saldo tidak cukup"
        if (jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
        } else {
            console.log("saldo tidak cukup");
        }
    }
 
    getSaldo() {
        return this.#saldo;
    }
}
const Rekening = new Rekening();
Rekening.setor(1000);
Rekening.tarik(500);
console.log(rekening.getSaldo());
