function plus() {
  var num1, num2, result
  num1 = document.getElementById("n1").value
  num1 = parseInt(num1) //обрежит 5а 5.4 до int

  num2 = document.getElementById("n2").value
  num2 = parseInt(num2)

  result = num1 + num2
  document.getElementById("out").innerHTML = result
}
