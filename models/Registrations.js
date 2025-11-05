module.exports = (sequelize,DataTypes) => {

    const Registrations = sequelize.define("Registrations", {
        fullname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        number:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,        
        },
        CompName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        CompDesignation:{
            type: DataTypes.STRING,
            allowNull:false 
        },
        eventType: { // 👈 New field
            type: DataTypes.ENUM("Play Game", "AR-VR", "Both"),
            allowNull: false
        }
        }, 
        {
        timestamps: true,          // keep timestamps
        createdAt: 'created_on',   // rename createdAt → created_on
        updatedAt: 'updated_on'    // rename updatedAt → updated_on
        });

    return Registrations;
};