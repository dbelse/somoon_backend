module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Remodeling = sequelizeConfig.define(
        'REMODELING',
        {
            Title:  {type: Sequelize.STRING}
        }
    );

    return Remodeling;
};