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
var courts_exports = {};
__export(courts_exports, {
  Court: () => Court,
  court: () => court,
  courts: () => courts,
  createCourt: () => createCourt,
  deleteCourt: () => deleteCourt,
  updateCourt: () => updateCourt
});
module.exports = __toCommonJS(courts_exports);
var import_db = require("../../lib/db");
const courts = () => {
  return import_db.db.court.findMany();
};
const court = ({
  id
}) => {
  return import_db.db.court.findUnique({
    where: {
      id
    }
  });
};
const createCourt = ({
  input
}) => {
  return import_db.db.court.create({
    data: input
  });
};
const updateCourt = ({
  id,
  input
}) => {
  return import_db.db.court.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteCourt = ({
  id
}) => {
  return import_db.db.court.delete({
    where: {
      id
    }
  });
};
const Court = {
  citations: (_obj, {
    root
  }) => {
    return import_db.db.court.findUnique({
      where: {
        id: root?.id
      }
    }).citations();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Court,
  court,
  courts,
  createCourt,
  deleteCourt,
  updateCourt
});
//# sourceMappingURL=courts.js.map
