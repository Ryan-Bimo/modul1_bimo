class Rekening {
    #saldo;
    constructor() {
        this.#saldo = 100000;
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
            document.write("Saldo tidak cukup");
        }
    }
    getSaldo() { 
        return this.#saldo;
    }
}
const rekening = new Rekening();
rekening.setor(5000);
rekening.tarik(2000);
document.write(rekening.getSaldo()); 