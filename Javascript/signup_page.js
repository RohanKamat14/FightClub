function SendMessage() {
  var input = document.querySelector('input[type="file"]');
  var name = document.getElementById('name').value;
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var specialty = document.getElementById('specialty').value;
  var socials = document.getElementById('socials').value;
  if (name == "") {
    return;
  }
  if (weight == "") {
    return;
  }
  if (height == "") {
    return;
  }
  if (specialty == "") {
    return;
  }
  var final = "Name:" + "\n" + name + "\n" + "Weight:" + "\n" + weight + "\n" + "Height:" + "\n" + height + "\n" + "Specialty:" + "\n" + specialty + "\n" + "Socials:" + "\n" + socials;
  var data = new FormData();
  data.append('file', input.files[0])
  data.append('user', 'hubot')
  if (input.files[0] != undefined) {
    fetch('https://discord.com/api/webhooks/1103904206240362506/jSv_ZQitEtQni_bgRPZ7szaTSzLMs7K2VeAqLtD6P2fFHXA4GNs9h7Qa64Yj0QOP5aSF', {
      method: 'POST',
      body: data,
    })
    fetch("https://discord.com/api/webhooks/1103904206240362506/jSv_ZQitEtQni_bgRPZ7szaTSzLMs7K2VeAqLtD6P2fFHXA4GNs9h7Qa64Yj0QOP5aSF", {
    body: JSON.stringify({
      content: final,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
    return false
  }
  fetch("https://discord.com/api/webhooks/1103904206240362506/jSv_ZQitEtQni_bgRPZ7szaTSzLMs7K2VeAqLtD6P2fFHXA4GNs9h7Qa64Yj0QOP5aSF", {
    body: JSON.stringify({
      content: final,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
    setTimeout(() => {
      window.location.reload();
    }, 150);
    return false
  
}