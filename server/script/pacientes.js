const casual = require("casual");

module.exports = () => {
  const data = {
    pacientes: [],
  };

  for (let i = 1; i < 200; i++) {
    data.pacientes.push({
      id: casual.integer((from = -1000), (to = 1000)),
      fullname: casual.full_name,
    });
  }

  return data;
};
