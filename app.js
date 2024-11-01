const express= require('express');
const app=express();
const path= require('path');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
const list = [
  {
    Date: "2023",
    heading: "",
    value: "",
    Deposite: "",
    Balance: "",
  },
  {
    Date: "27 MAR",

    heading: "OPENING BALANCE",
    value: "",
    Withdrawals: "",
    Deposite: "",
    Balance: "10624.69",
  },
  {
    Date: "28 JAN",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "10,364.69",
  },

  {
    Date: "31 JAN",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "WAGES 31032020 CLEANING EDGE SO",
    Withdrawals: "",
    Deposite: "947.39",
    Balance: "11,312.08",
  },

  {
    Date: "01 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "11,362.08",
  },

  {
    Date: "01 FEB",

    heading: "REVERSAL OF ACCOUNT SERVICING FEE",
    value: "MINIMUM $2000 IN DEPOSITS RECEIVED",
    Withdrawals: "",
    Deposite: "5.00",
    Balance: "11,367.08",
  },

  {
    Date: "02 FEB",

    heading: "ACCOUNT SERVICING FEE",
    value: "",
    Withdrawals: "5.00",
    Deposite: "",
    Balance: "11,362.08",
  },

  {
    Date: "03 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "EFFECTIVE DATE 03 FEB 2023",
    Withdrawals: "",
    Deposite: "20.00",
    Balance: "11,382.08",
  },

  {
    Date: "03 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "EFFECTIVE DATE 03 FEB 2023",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "11,432.08",
  },

  {
    Date: "04 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "30.00",
    Balance: "11,462.08",
  },

  {
    Date: "04 FEB",

    heading: "TRANSFER",
    value: "FROM NASARUDIN N N MAKAN RUMAH HUTANG",
    Withdrawals: "",
    Deposite: "165.50",
    Balance: "11,627.58",
  },

  {
    Date: "05 FEB",

    heading: "ANZ MOBILE BANKING PAYMENT 770177",
    value: "TO SAPIODIN L H",
    Withdrawals: "50.00",
    Deposite: "",
    Balance: "11,577.58",
  },

  {
    Date: "05 FEB",

    heading: "ANZ MOBILE BANKING PAYMENT 387663",
    value: "TO SAPIODIN L H",
    Withdrawals: "75.00",
    Deposite: "",
    Balance: "11,502.58",
  },

  {
    Date: "06 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "TO SAPIODIN L H",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "11,552.58",
  },

  {
    Date: "07 FEB",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "WAGES 07042020 CLEANING EDGE SO",
    Withdrawals: "",
    Deposite: "1,266.66",
    Balance: "12,819.24",
  },
  {
    Date: "08 FEB",

    heading: "ANZ MOBILE BANKING PAYMENT 384025",
    value: "TO FAUZIAH SAPIODIN",
    Withdrawals: "200.00",
    Deposite: "",
    Balance: "12,619.24",
  },

  {
    Date: "09 FEB",

    heading: "ANZ ATM CARD 9655",
    value: "",
    Withdrawals: "",
    Deposite: "20.00",
    Balance: "12,639.24",
  },

  {
    Date: "09 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "12,689.24",
  },

  {
    Date: "10 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "12,739.24",
  },
  {
    Date: "11 FEB",

    heading: "ANZ ATM BRANCH GRIFFITHNS 2680",
    value: "EFFECTIVE DATE 11 APR 2020",
    Withdrawals: "",
    Deposite: "70.00",
    Balance: "12,809.24",
  },

  {
    Date: "12 FEB",

    heading: "PAYMENT FROM MOHD NOOR AKHERY BIN MOHAME",
    value: "MOHAME EFFECTIVE DATE 12 FEB 2023",
    Withdrawals: "",
    Deposite: "30.00",
    Balance: "12,839.24",
  },
  {
    Date: "12 FEB",

    heading: "ANZ ATM",
    value: "GRIFFITH BRANCH GRIFFITH NS EFFECTIVE DATE 12 FEB 2023",
    Withdrawals: "500.00",
    Deposite: "",
    Balance: "12,339.24",
  },
  {
    Date: "14 FEB",

    heading: "ANZ ATM",
    value: "GRIFFITH BRANCH GRIFFITH NS",
    Withdrawals: "300.00",
    Deposite: "",
    Balance: "12,039.24",
  },
  {
    Date: "14 FEB",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "WAGES 14042020 CLEANING EDGE SO",
    Withdrawals: "",
    Deposite: "1,294.09",
    Balance: "13,333.33",
  },
  {
    Date: "15 FEB",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "13,383.33",
  },
  {
    Date: "16 FEB",

    heading: "ANZ M-BANKING FUNDS TFER",
    value: "TRANSFER 211328 TO 012125319116005",
    Withdrawals: "500.00",
    Deposite: "",
    Balance: "12,883.33",
  },

  {
    Date: "17 FEB",

    heading: "ACCOUNT SERVICING FEE",
    value: "MINIMUM $2000 IN DEPOSITS NOT RECEIVED",
    Withdrawals: "5.00",
    Deposite: "",
    Balance: "12,878.33",
  },
  {
    Date: "17 FEB",

    heading: "ANZ MOBILE BANKING PAYMENT 950308",
    value: "TO NASARUDIN N N",
    Withdrawals: "400.00",
    Deposite: "",
    Balance: "12,478.33",
  },

  {
    Date: "",

    heading: "TOTALS AT END OF PAGE",
    value: "",
    Withdrawals: "$2,035.00",
    Deposite: "$4,248.64",
    Balance: "",
  },
];

const list2 = [
  {
    Date: "21 FEB",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "WAGES 21042020 CLEANING EDGE SO",
    Withdrawals: "",
    Deposite: "1,132.01",
    Balance: "13,610.34",
  },
  {
    Date: "22 FEB",

    heading: "ANZ M-BANKING FUNDS TFER",
    value: "TRANSFER 445763 FROM 319116005",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "13,710.34",
  },

  {
    Date: "22 FEB",

    heading: "ANZ ATM",
    value: "GRIFFITH BRANCH GRIFFITH NS",
    Withdrawals: "500.00",
    Deposite: "",
    Balance: "13,210.34",
  },

  {
    Date: "23 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "60.00",
    Balance: "13,270.34",
  },
  {
    Date: "23 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "13,320.34",
  },
  {
    Date: "24 FEB",

    heading: "ANZ ATM CARD 9077",
    value: "",
    Withdrawals: "",
    Deposite: "30.00",
    Balance: "13,350.34",
  },
  {
    Date: "25 FEB",

    heading: "ANZ ATM CARD 9655",
    value: "",
    Withdrawals: "",
    Deposite: "20.00",
    Balance: "13,370.34",
  },

  {
    Date: "26 FEB",

    heading: "TRANSFER FROM ATM GRIFFITH",
    value: "EFFECTIVE DATE 26 FEB 2020",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "13,470.34",
  },
  {
    Date: "26 FEB",

    heading: "TRANSFER FROM ATM GRIFFITH",
    value: "GRIFFITH BRANCH GRIFFITH NS",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "13,570.34",
  },

  {
    Date: "28 FEB",

    heading: "ANZ INTERNET BANKING TRANSFER",
    value: "WAGES 21042020 CLEANING EDGE SO EFFECTIVE 28 FEB 2023",
    Withdrawals: "",
    Deposite: "1,114.76",
    Balance: "14,685.10",
  },
  {
    Date: "28 FEB",

    heading: "ANZ ATM",
    value: "GRIFFITH BRANCH GRIFFITH NS EFFECTIVE DATE 28 FEB 2023",
    Withdrawals: "550.00",
    Deposite: "",
    Balance: "14,135.10",
  },
  {
    Date: "28 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "GRIFFITH BRANCH GRIFFITH NS EFFECTIVE DATE 28 FEB 2023",
    Withdrawals: "",
    Deposite: "20.00",
    Balance: "14,155.10",
  },
  {
    Date: "28 FEB",

    heading: "ANZ ATM CARD 9077",
    value: "",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "14,255.10",
  },
  {
    Date: "28 FEB",

    heading: "ANZ ATM CARD 9077",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "14,305.10",
  },

  {
    Date: "28 FEB",

    heading: "ANZ ATM",
    value: "GRIFFITH BRANCH GRIFFITH NS",
    Withdrawals: "450.00",
    Deposite: "",
    Balance: "13,855.10",
  },

  {
    Date: "28 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "13,905.10",
  },
  {
    Date: "28 FEB",

    heading: "ANZ ATM CARD 9655",
    value: "",
    Withdrawals: "",
    Deposite: "80.00",
    Balance: "13,985.10",
  },

  {
    Date: "28 FEB",

    heading: "ANZ M-BANKING FUNDS TFER",
    value: "TRANSFER 339669 FROM 319116005",
    Withdrawals: "",
    Deposite: "50.00",
    Balance: "14,035.10",
  },

  {
    Date: "28 FEB",

    heading: "ANZ ATM BRANCH GRIFFITH NS 2680",
    value: "",
    Withdrawals: "",
    Deposite: "100.00",
    Balance: "14,135.10",
  },
  {
    Date: "",

    heading: "TOTALS AT END OF PAGE",
    value: "",
    Withdrawals: "$1,500.00",
    Deposite: "$3,156.77",
  },
  {
    Date: "",

    heading: "TOTALS AT END OF PERIOD",
    value: "",
    Withdrawals: "$3,535.00",
    Deposite: "$7,405.41",
    Balance: "$14,135.10",
  },
  {
    Date: "28 FEB",

    heading: "",
    value: "ANZ bank charges",
    Withdrawals: "",
    Deposite: "",
    Balance: "$5.00",
  },
];

pageobj1={
  Branch_Number_BSB : "012-327",
  Account_Number:"468441274",
  Account_Details:"Mr John Doe",
  Opening_Balance:"10264.79",
  Total_Deposits:"7405.41",
  Total_Withdrawals:"3,535.00",
  Closing_Balance:"14,135.10"
};

fees = [
  {
    servicefees_waved: "5.00",
  
    TotalAccount: "$0.00",
    TotalBank: "$0.00",
  },
  {
    servicefees: "5.00",
    TotalAccount: "$0.00",
    TotalBank: "$0.00",
  },
];

accountNumber = "123456789";
date = { startDate: "28 JAN 2020", endDate: " 28 FEB 2020" };
let urlLink='https://bank-staement-template-1.onrender.com/' ;

app.get('/',(req,res)=>{
  
    next = urlLink+'page2';
   
     res.render("page1", { pageobj1,next });
})
app.get("/page2", (req, res) => {
 
  let previous=urlLink;
  let str=urlLink;
  str+='page3';
  next=str;
   res.render("page2", { list,accountNumber,previous,next });
});
app.get("/page3", (req, res) => {
 let previous = urlLink;
 previous+='page2'
 let str = urlLink;
 str += 'page4';
 next = str;

  res.render("page3", { list2,accountNumber,previous,next });
});
app.get("/page4", (req, res) => {
   let previous = urlLink;
   let str = urlLink;
   previous += "page3";
   
   str += "page5";
   next = str;
  res.render("page4", { fees, date, accountNumber,previous,next });
});
app.get("/page5", (req, res) => {
  let previous = urlLink;
  previous += 'page4';
  res.render("page5", { accountNumber,previous });
});


app.listen(3000);
