import { Sequelize } from "sequelize";

import sequelize from "../config/db.config.js";

import userModel from "./user.model.js";
import roleModel from "./role.model.js";

const db = {};

db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user-roles",
    foreignKey: "roleId",
    otherKey: "userId",
});

db.user.belongsToMany(db.role, {
    through: "user-roles",
    foreignKey: "userId",
    otherKey: "roleId",
    as: "roles",
});

db.ROLES = ["user", "admin", "moderator"];

export default db;