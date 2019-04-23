// Vue.component("super-componente", {
//   props: ["nombre"],
//   data: function() {
//     return {
//       likes: 300
//     };
//   },
//   methods: {
//     addLike: function() {
//       this.likes++;
//     }
//   },
//   template: `<div style="border: 1px solid blue;" class="col-md-6">
//         <h3>Soy un super componente y me llamo {{ nombre }} 🍉</h3>
//         <button @click="addLike()">👍 Likes {{ likes }}</button>
//     </div>`
// });

Vue.component("v-select", VueSelect.VueSelect);

var app = new Vue({
  el: "#app",
  data: {
    isVerInvoice: false,
    isAddInvoice: false,
    isEditInvoice: false,
    listInvoices: true,
    invoices: [
      {
        numero: "1555869901734",
        nombreCliente: "David Mosquera",
        productos: [
          {
            itemName: "Software",
            quantity: 1,
            unitCost: 4500,
            total: 4500
          },
          {
            itemName: "Sofware Collection",
            quantity: 1,
            unitCost: 4500,
            total: 4500
          }
        ],
        grandTotal: 9000
      },
      {
        numero: "1555869901778",
        nombreCliente: "Cristian Rivera",
        productos: [
          {
            itemName: "Software",
            quantity: 1,
            unitCost: 4500,
            total: 4500
          },
          {
            itemName: "Sofware Collection",
            quantity: 1,
            unitCost: 4500,
            total: 4500
          }
        ],
        grandTotal: 9000
      }
    ],
    invoice: {
      numero: null,
      nombreCliente: null,
      productos: [
        {
          itemName: null,
          quantity: null,
          unitCost: null,
          total: null
        }
      ],
      grandTotal: null
    },
    _editInvoice: {}
  },
  methods: {
    addItem: function() {
      this.invoice.productos.push({
        itemName: null,
        quantity: null,
        unitCost: null,
        total: null
      });
    },
    deleteItem: function(index) {
      this.invoice.productos.splice(index, 1);
      this.calcularGrandTotal();
    },
    calcularTotal: function(index) {
      let _invoice = this.invoice.productos[index];
      if (
        _invoice.quantity !== null &&
        _invoice.quantity !== "" &&
        _invoice.unitCost !== null &&
        _invoice.unitCost !== ""
      ) {
        _invoice.total =
          parseFloat(_invoice.quantity) * parseFloat(_invoice.unitCost);
      }

      if (
        _invoice.quantity === null ||
        _invoice.quantity == "" ||
        _invoice.unitCost === null ||
        _invoice.unitCost == ""
      ) {
        _invoice.total = 0;
      }
      this.calcularGrandTotal();
    },
    calcularGrandTotal: function() {
      let acumulador = 0;
      this.invoice.productos.forEach(invoice => {
        acumulador += invoice.total;
      });
      this.invoice.grandTotal = acumulador;
    },
    addInvoice: function() {
      this.invoice.numero = new Date().getTime();
      this.invoices.push({ ...this.invoice });
      this.invoice = {
        numero: null,
        nombreCliente: null,
        productos: [
          {
            itemName: null,
            quantity: null,
            unitCost: null,
            total: null
          }
        ],
        grandTotal: null
      };
      swal("Exito!", "Se agrego la factura!", "success");
    },
    editInvoice: function() {
      this.invoices.forEach(invoice => {
        if (invoice.numero === app.invoice.numero) {
          invoice = { ...app.invoice };
          swal("Exito!", "Se edito la factura!", "success");
          // console.log(invoice);
        }
      });
      // console.log("index", _index);
      // this.invoices[_index] = this.invoice;
      // console.log("invice", this.invoice);
      // console.log("invoice edit", this.editInvoice);
    },
    deleteInvoice: function(index) {
      this.invoices.splice(index, 1);
      this.isVerInvoice = false;
      this.isAddInvoice = false;
      this.isEditInvoice = false;
      swal("Exito!", "Se elimino la factura!", "success");
    },
    onVerInvoice: function(invoice) {
      this.isVerInvoice = true;
      this.isAddInvoice = false;
      this.isEditInvoice = false;
      this.invoice = invoice;
    },
    onAddInvoice: function() {
      this.isVerInvoice = false;
      this.isAddInvoice = true;
      this.isEditInvoice = false;
      this.invoice = {
        numero: null,
        nombreCliente: null,
        productos: [
          {
            itemName: null,
            quantity: null,
            unitCost: null,
            total: null
          }
        ],
        grandTotal: null
      };
    },
    onEditInvoice: function(invoice) {
      this.isVerInvoice = false;
      this.isAddInvoice = false;
      this.isEditInvoice = true;
      this.invoice = invoice;
    }
  }
});
