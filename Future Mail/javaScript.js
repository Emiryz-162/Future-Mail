
const nodemailer = require('nodemailer'); //kütüphane girişi
require("dotenv").config();

 /*=============== TARİH BUTONLARI ===============*/

  var selectedButtonIndex = -1;

    function selectButton(index) 
    {
        clearSelection();
        selectedButtonIndex = index;
        document.getElementsByTagName("button")[index - 1].style.backgroundColor = "#f8a8c0";
    }

    function clearSelection()
    {
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }

    selectedButtonIndex = -1;
  }

  /*=============== BAĞIŞ BUTONLARI ===============*/

    function checkOnlyOne(clickedCheckbox) {
    var checkboxes = document.getElementsByName("checkbox");
    var clickedIndex = clickedCheckbox - 1;
    for (var i = 0; i < checkboxes.length; i++) {
      if (i !== clickedIndex) {
        checkboxes[i].checked = false;
      }
    }
  }
  /*=============== GÖNDER BUTONU ===============*/

  function getText() 
  {
    var mektup = document.getElementById("mektup").value;
    var mail = document.getElementById("mail").value; 
  }


// gmail giriş
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'emiryz162@gmail.com', 
      pass: 'şifre' 
  }
});

// E-posta içeriği
let mailOptions = {
  from: 'emiryz162@gmail.com', 
  to: mail, 
  subject: 'Future Mail Mektubun', 
  text: mektup 
};

// E-postayı gönder
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
  } else {
      console.log('E-posta gönderildi: ' + info.response);
  }
});