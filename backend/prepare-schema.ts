const fs = require("fs");
const path = require("path");

// envファイル読み込みで必要
require("dotenv").config();

const provider = process.env.DATABASE_PROVIDER || "mysql";

console.log("🔍 DATABASE_PROVIDER from env:", process.env.DATABASE_PROVIDER);
console.log("🔍 Selected provider:", provider);

const schemaTemplatePath = path.join(__dirname, "prisma/schema.template.prisma");
const schemaPath = path.join(__dirname, "prisma/schema.prisma");

const schemaTemplate = fs.readFileSync(schemaTemplatePath, "utf8");

const updatedSchema = schemaTemplate.replace("__PROVIDER__", provider);

fs.writeFileSync(schemaPath, updatedSchema);