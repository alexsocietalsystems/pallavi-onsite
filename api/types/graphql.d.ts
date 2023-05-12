import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { Message as PrismaMessage } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
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

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<Message>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateMessageInput: CreateMessageInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Message: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaMessage, MakeRelationsOptional<Message, AllMappedModels>, AllMappedModels>>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateMessageInput: UpdateMessageInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateMessageInput: CreateMessageInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Message: MergePrismaWithSdlTypes<PrismaMessage, MakeRelationsOptional<Message, AllMappedModels>, AllMappedModels>;
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateMessageInput: UpdateMessageInput;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MessageResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  countBefore: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  messageTemplate: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  timeUnit: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  countBefore?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  messageTemplate?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  timeUnit?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationcreateMessageArgs, 'input'>>;
  deleteMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationdeleteMessageArgs, 'id'>>;
  updateMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationupdateMessageArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationcreateMessageArgs, 'input'>>;
  deleteMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationdeleteMessageArgs, 'id'>>;
  updateMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationupdateMessageArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  message: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QuerymessageArgs, 'id'>>;
  messages: OptArgsResolverFn<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  message?: RequiredResolverFn<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QuerymessageArgs, 'id'>>;
  messages?: RequiredResolverFn<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Message: MessageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Time: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
