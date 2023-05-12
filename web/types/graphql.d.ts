import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type CreateMessageInput = {
  countBefore: Scalars['Int'];
  messageTemplate: Scalars['String'];
  timeUnit: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  countBefore: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  messageTemplate: Scalars['String'];
  timeUnit: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  deleteMessage: Message;
  updateMessage: Message;
};


export type MutationcreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationdeleteMessageArgs = {
  id: Scalars['Int'];
};


export type MutationupdateMessageArgs = {
  id: Scalars['Int'];
  input: UpdateMessageInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  message?: Maybe<Message>;
  messages: Array<Message>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QuerymessageArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type UpdateMessageInput = {
  countBefore?: InputMaybe<Scalars['Int']>;
  messageTemplate?: InputMaybe<Scalars['String']>;
  timeUnit?: InputMaybe<Scalars['String']>;
};

export type EditMessageByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditMessageById = { __typename?: 'Query', message?: { __typename?: 'Message', id: number, messageTemplate: string, timeUnit: string, countBefore: number, createdAt: string } | null };

export type UpdateMessageMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateMessageInput;
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage: { __typename?: 'Message', id: number, messageTemplate: string, timeUnit: string, countBefore: number, createdAt: string } };

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage: { __typename?: 'Message', id: number } };

export type FindMessageByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindMessageById = { __typename?: 'Query', message?: { __typename?: 'Message', id: number, messageTemplate: string, timeUnit: string, countBefore: number, createdAt: string } | null };

export type FindMessagesVariables = Exact<{ [key: string]: never; }>;


export type FindMessages = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: number, messageTemplate: string, timeUnit: string, countBefore: number, createdAt: string }> };

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: number } };
