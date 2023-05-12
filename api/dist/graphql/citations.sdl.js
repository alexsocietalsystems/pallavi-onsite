var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var citations_sdl_exports = {};
__export(citations_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(citations_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
  type Citation {
    id: Int!
    court_id: Int!
    court: Court!
    citation_number: String!
    driver_name: String!
    docket_time: DateTime!
    createdAt: DateTime!
  }

  type CitationResponse { 
    citation: Citation
    citationExists: Boolean!
  }

  type Query {
    citations: [Citation!]! @requireAuth
    citation(id: Int!): Citation @requireAuth
    getCitationByNumberAndDriverName(citationNumber: String!, driverName: String!): CitationResponse @requireAuth
  }

  input CreateCitationInput {
    court_id: Int!
    citation_number: String!
    driver_name: String!
    docket_time: DateTime!
  }

  input UpdateCitationInput {
    court_id: Int
    citation_number: String
    driver_name: String
    docket_time: DateTime
  }

  type Mutation {
    createCitation(input: CreateCitationInput!): Citation! @requireAuth
    updateCitation(id: Int!, input: UpdateCitationInput!): Citation!
      @requireAuth
    deleteCitation(id: Int!): Citation! @requireAuth
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=citations.sdl.js.map
