const company = {
        marketing: [
          {
            name: "Budi",
            salary: 5000000,
          },
          {
            name: "Agus",
            salary: 4500000,
          },
        ],
        engineer: {
          frontend: [
            {
              name: "Suci",
              salary: 8500000,
            },
            {
              name: "Lukito",
              salary: 7000000,
            },
          ],
          backend: [
            {
              name: "Bustomi",
              salary: 9500000,
            },
          ],
          devops: [
            {
              name: "Paul",
              salary: 9000000,
            },
          ],
        },
      };

      function calculateTotalSalary(obj) {
        let total = 0;

        for (const prop in obj) {
          if (Array.isArray(obj[prop])) {
            for (const item of obj[prop]) {
              if (typeof item === "object" && item !== null) {
                total += calculateTotalSalary(item);
              }
            }
          } else if (typeof obj[prop] === "object" && obj[prop] !== null) {
            total += calculateTotalSalary(obj[prop]);
          } else if (prop === "salary") {
            total += obj[prop];
          }
        }

        return total;
      }

      const totalSalary = calculateTotalSalary(company);
      console.log(totalSalary);
