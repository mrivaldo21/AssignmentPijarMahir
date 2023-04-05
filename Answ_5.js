        class Car {
          constructor(brand, year, country) {
            this.brand = brand;
            this.year = year;
            this.country = country;
          }

          getAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
          }

          isMadeInUS() {
            return this.country === "US";
          }
        }

        const myCar = new Car("Toyota", 2015, "Japan");
        console.log(myCar.brand); // Output: "Toyota"
        console.log(myCar.getAge()); // Output: 6
        console.log(myCar.isMadeInUS()); // Output: false
