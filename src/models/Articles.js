
/**
* Sequalize model for articles
* @param {object} sequelize object
* @param {object} DataTypes database types. Constant
* @returns {object} articles
*/
export default (sequelize, DataTypes) => {
  const fields = {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  };

  return sequelize.define('Articles', fields);
};
