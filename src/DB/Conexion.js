import { Sequelize } from "sequelize";

export const connetion =async ()=>{
    const sequelize = new Sequelize('gestion_reserva', 'root', '1234', {
        host: '127.0.0.1',
        dialect: "mysql"
      });
    
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}