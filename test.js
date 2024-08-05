var req = new XMLHttpRequest()
req.open('GET', '/xhr/test.html', true) req.onreadystatechange = function () {
  if (req.readyState == 4) {
    if (req.status == 200) {
      alert(req.responseText)
    }
  }
};// test commit
req.send(null);