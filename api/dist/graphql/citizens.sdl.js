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
var citizens_sdl_exports = {};
__export(citizens_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(citizens_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
  type Citizen {
    id: Int!
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
    citation: Citation!
    notifications: Boolean!
  }

  type Query {
    citizens: [Citizen!]! @requireAuth
    citizen(id: Int!): Citizen @requireAuth
  }

  input CreateCitizenInput {
    name: String!
    email: String!
    phoneNumber: String!
    citation_id: Int!
    notifications: Boolean!
  }

  input UpdateCitizenInput {
    name: String
    email: String
    phoneNumber: String
    citation_id: Int
    notifications: Boolean
  }

  type Mutation {
    createCitizen(input: CreateCitizenInput!): Citizen! @requireAuth
    updateCitizen(id: Int!, input: UpdateCitizenInput!): Citizen! @requireAuth
    deleteCitizen(id: Int!): Citizen! @requireAuth
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=citizens.sdl.js.map
