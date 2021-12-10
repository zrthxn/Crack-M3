function x(х) {
  ord = Function.prototype.call.bind("".charCodeAt);
  chr = String.fromCharCode;
  str = String;
  function h(s) {
      for (i = 0; i < s.length; i++) {
          a = (a + s.length) % 2020;
          b = ((typeof b == "undefined" ? 0 : b) + a) % 2020
      }
      return chr(b + 519) + chr(b + 550) + chr(a - 749) + chr(a - 808)
  }

  function c(a, b, c) {
      for (i = 0; i != a.length; i++) c = (c || "") + chr(ord(str(a[i])) ^ ord(str(b[i % b.length])));
      return c
  }
  for (a = 0; a != 1e3; a++) { }
  x = h(str(x));

  source = /࠺ࠚĈŞ࠹ࡅĖĖࠥࠩĔŗࠢࡃĔź࠽ࠅĝ/;

  source.toString = function () {
      return c(source, x)
  };
  try {
      with (source) return eval(х == c(source, x))

  } catch (e) {
      return false
  }
}

function open_safe() {
  keyhole.disabled = true;
  password = /^key{([0-9a-zA-Z_?]+)}$/.test(keyhole.value);
  if (password && x(keyhole.value)) return document.body.className = 'granted';
  else {
      return document.body.className = 'denied';
  }
}
        
