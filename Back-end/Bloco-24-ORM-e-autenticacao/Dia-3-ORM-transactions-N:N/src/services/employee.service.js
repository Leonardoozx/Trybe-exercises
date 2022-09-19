// src/services/employee.service.js

const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//     where: { id },
//     include: [
//       {
//         model: Address,
//         as: 'addresses',
//         attributes: { exclude: ['number'] },
//       },
//     ],
//   });
//   return employee;
// };

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

// Default insert:
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const employee = await Employee.create({ firstName, lastName, age });

//   await Address.create({ city, street, number, employeeId: employee.id });
//   return employee;
// };

// Unmanaged transaction: 
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const t = await sequelize.transaction();
//   try {
//     // Depois executamos as operações
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t },
//     );

//     // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
//     // Com isso, podemos finalizar a transação usando a função `commit`.
//     await t.commit();
//     return employee;
//   } catch (e) {
//     // Se entrou nesse bloco é porque alguma operação falhou.
//     // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
//     await t.rollback();
//     console.log(e);
//     throw e; // Jogamos o erro para a controller tratar
//   }
// };


// Managed transactions: 
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const transaction = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });
    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

module.exports = { getAll, getById, insert };
