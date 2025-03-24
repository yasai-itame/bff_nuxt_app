const fs = require("fs");
const path = require("path");

const provider = process.env.DATABASE_PROVIDER;
const database = process.env.DATABASE_URL;

const schemaTemplatePath = path.join(__dirname, "prisma/schema.template.prisma");
const schemaPath = path.join(__dirname, "prisma/schema.prisma");

const schemaTemplate = fs.readFileSync(schemaTemplatePath, "utf8");

const updatedSchema = schemaTemplate.replace("__PROVIDER__", provider).replace("__DATABASE__", database);

fs.writeFileSync(schemaPath, updatedSchema);