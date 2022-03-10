
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



const d = new Date();
document.getElementById("date").innerHTML = d;

transact.forEach(trans => {
  const tr = document.createElement('tr');
  const trContent = `
                      <td>${trans.transaction}</td>
                      <td>${trans.date}</td>
                      <td>${trans.time}</td>
                      <td>${trans.amount}</td>
                      <td>${trans.condition}</td>
                      `;
  
  tr.innerHTML = trContent

  document.querySelector('table tbody').appendChild(tr);
});

document.getElementById("accNum").innerHTML = Math.floor(Math.random()*10000000000);

document.getElementById("balance").innerHTML = Number(300000)



