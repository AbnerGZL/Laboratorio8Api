import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  "examen_625g",
  "examen_625g_user",
  "QcuPiIqG2dDy7g4jkJQVWjIUFHbEEQIm",
  {
    host: "dpg-d0cgv19r0fns73e9bn50-a.oregon-postgres.render.com",
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Necesario para Render
      },
    },
  }
);

export default sequelize;
