
        const urls = [
          "https://www.boredapi.com/api/activity",
          "https://www.boredapis.com/api/activity",
          "https://www.boredapis2.com/api/activity",
        ];

        function findCorrectEndpoint(urls) {
          const results = urls.map((url) =>
            fetch(url)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Network response was not ok.");
              })
              .then((data) => {
                if (data.hasOwnProperty("activity")) {
                  return { url, data };
                } else {
                  throw new Error(`Endpoint ${url} is not correct.`);
                }
              })
              .catch((error) => {
                console.log(error);
                return null;
              })
          );

          return Promise.all(results).then((res) => {
            const correctResult = res.find((item) => item !== null);
            if (correctResult) {
              console.log(`Correct endpoint: ${correctResult.url}`);
              console.log(`Data: ${JSON.stringify(correctResult.data)}`);
            } else {
              console.log("None of the endpoints is correct.");
            }
          });
        }

        findCorrectEndpoint(urls);
