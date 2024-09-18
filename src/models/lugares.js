import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:');

const Lugar = sequelize.define(
    'Lugar',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      modelName: 'Lugar',
      tableName: 'Lugares',
    },
  );
  
  (async () => {
    try {
      await sequelize.sync({ force: true });  // Forzar la creación de la tabla
      console.log('Tabla Lugares creada exitosamente');
    } catch (error) {
      console.error('Error al crear la tabla:', error);
    }
  })();
  

export default Lugar