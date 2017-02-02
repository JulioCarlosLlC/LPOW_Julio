function saludar(){
  var numero;
  var factorial=1;
  numero=prompt("Ingrese un numero");
  for (i = 1; i <= numero; i++) {
    factorial=factorial*i;
  }
  alert("El factorial es :"+factorial);
}
