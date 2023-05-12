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
var messages_exports = {};
__export(messages_exports, {
  createMessage: () => createMessage,
  deleteMessage: () => deleteMessage,
  message: () => message,
  messages: () => messages,
  updateMessage: () => updateMessage
});
module.exports = __toCommonJS(messages_exports);
var import_db = require("../../lib/db");
const messages = () => {
  return import_db.db.message.findMany();
};
const message = ({
  id
}) => {
  return import_db.db.message.findUnique({
    where: {
      id
    }
  });
};
const createMessage = ({
  input
}) => {
  return import_db.db.message.create({
    data: input
  });
};
const updateMessage = ({
  id,
  input
}) => {
  return import_db.db.message.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteMessage = ({
  id
}) => {
  return import_db.db.message.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMessage,
  deleteMessage,
  message,
  messages,
  updateMessage
});
//# sourceMappingURL=messages.js.map
