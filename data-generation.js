const fs = require("fs");

const statuses = ["ACTIVE", "BLOCKED", "INVITED"];
const records = [];

for (let i = 1; i <= 100; i++) {
  const status = statuses[i % statuses.length];
  const id = i.toString();
  const name = `Demo Demo ${i}`;
  const email = `demo.d${i}@demo.com`;
  const date = `12.${((i % 28) + 1).toString().padStart(2, "0")}.2023`;
  const invitedBy = `Dem ${i}`;

  records.push({
    id,
    about: {
      name,
      status,
      email,
    },
    details: {
      date,
      invitedBy,
    },
  });
}

fs.writeFileSync("src/data/data.json", JSON.stringify(records, null, 2), "utf8");
console.log("✅ data.json created successfully!");
