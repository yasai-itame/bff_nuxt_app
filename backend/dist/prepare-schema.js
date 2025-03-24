const fs = require("fs");
const path = require("path");
const provider = process.env.DATABASE_PROVIDER || "mysql";
const schemaTemplatePath = path.join(__dirname, "prisma/schema.template.prisma");
const schemaPath = path.join(__dirname, "prisma/schema.prisma");
const schemaTemplate = fs.readFileSync(schemaTemplatePath, "utf8");
const updatedSchema = schemaTemplate.replace("__PROVIDER__", provider);
fs.writeFileSync(schemaPath, updatedSchema);
//# sourceMappingURL=prepare-schema.js.map