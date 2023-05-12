var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var citizens_exports = {};
__export(citizens_exports, {
  Citizen: () => Citizen,
  citizen: () => citizen,
  citizens: () => citizens,
  createCitizen: () => createCitizen,
  deleteCitizen: () => deleteCitizen,
  updateCitizen: () => updateCitizen
});
module.exports = __toCommonJS(citizens_exports);
var import_db = require("../../lib/db");
const citizens = () => {
  return import_db.db.citizen.findMany();
};
const citizen = ({
  id
}) => {
  return import_db.db.citizen.findUnique({
    where: {
      id
    }
  });
};
const createCitizen = ({
  input
}) => {
  return import_db.db.citizen.create({
    data: input
  });
};
const updateCitizen = ({
  id,
  input
}) => {
  return import_db.db.citizen.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteCitizen = ({
  id
}) => {
  return import_db.db.citizen.delete({
    where: {
      id
    }
  });
};
const Citizen = {
  citation: (_obj, {
    root
  }) => {
    return import_db.db.citizen.findUnique({
      where: {
        id: root?.id
      }
    }).citation();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Citizen,
  citizen,
  citizens,
  createCitizen,
  deleteCitizen,
  updateCitizen
});
//# sourceMappingURL=citizens.js.map
