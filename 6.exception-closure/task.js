function parseCount(value) {
  let resultParse = Number.parseInt(value);
  if (isNaN(resultParse)) {
    throw new Error("Невалидное значение");
  }
  return resultParse;
};

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (err) {
    return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.check();
  }

  check() {
    if ((this.a + this.b) <= this.c || (this.b + this.c) <= this.a || (this.c + this.a) <= this.b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +s.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}

let triangle1 = getTriangle(3, 4, 6);
console.log(triangle1.getArea())
console.log(triangle1);