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
var citations_exports = {};
__export(citations_exports, {
  Citation: () => Citation,
  citation: () => citation,
  citations: () => citations,
  createCitation: () => createCitation,
  deleteCitation: () => deleteCitation,
  updateCitation: () => updateCitation
});
module.exports = __toCommonJS(citations_exports);
var import_db = require("../../lib/db");
const citations = () => {
  return import_db.db.citation.findMany();
};
const citation = ({
  id
}) => {
  return import_db.db.citation.findUnique({
    where: {
      id
    }
  });
};
const createCitation = ({
  input
}) => {
  return import_db.db.citation.create({
    data: input
  });
};
const updateCitation = ({
  id,
  input
}) => {
  return import_db.db.citation.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteCitation = ({
  id
}) => {
  return import_db.db.citation.delete({
    where: {
      id
    }
  });
};
const Citation = {
  court: (_obj, {
    root
  }) => {
    return import_db.db.citation.findUnique({
      where: {
        id: root?.id
      }
    }).court();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Citation,
  citation,
  citations,
  createCitation,
  deleteCitation,
  updateCitation
});
//# sourceMappingURL=citations.js.map
