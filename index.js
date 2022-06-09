const pug = require("pug");
const fs = require("fs");

const compiledFunction = pug.compileFile("./src/template.pug");

const data = {
  name: "Luiz Cláudio", //user.name
  id: 305002, // id
  conta: "VIA VAREJO - CC - NOTEBOOK",
  varejo: "VIA VAREJO S/A",
  cliente: "VIA VAREJO - 0956",
  numeroNegociacao: "814", // negotiation_id
  condicaoPagamento: 90, // payment_term ?
  baseURL: "https://google.com",
  orders: [
    {
      id: 402, // order_id ou id?
      sku: "X556UR-XX478T", // product_line
      internacional: true, // imported
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1, // quantity
      precoUnitario: 20000, // price (ipi_price?)
      previsaoFaturamento: "29/11/2021", // billing_expectation_date
      comissao: 1, // commission
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: true,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: true,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: true,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: true,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: true,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
    {
      id: 402,
      sku: "X556UR-XX478T",
      internacional: false,
      cd: "VIA VAREJO-0947",
      cnpj: "33.041.260/0947-11",
      oc: 1,
      quantidade: 1,
      precoUnitario: 20000,
      previsaoFaturamento: "29/11/2021",
      comissao: 1,
    },
  ],
  link: "https://google.com",
};

fs.writeFile("./index.html", compiledFunction(data), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
