import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { Message as PrismaMessage, Citation as PrismaCitation, Court as PrismaCourt, Citizen as PrismaCitizen } from '@prisma/client'
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type Citation = {
  __typename?: 'Citation';
  citation_number: Scalars['String'];
  court: Court;
  court_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  docket_time: Scalars['DateTime'];
  driver_name: Scalars['String'];
  id: Scalars['Int'];
};

export type CitationResponse = {
  __typename?: 'CitationResponse';
  citation?: Maybe<Citation>;
  citationExists: Scalars['Boolean'];
};

export type Citizen = {
  __typename?: 'Citizen';
  citation: Citation;
  citation_id: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  notifications: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
};

export type Court = {
  __typename?: 'Court';
  citations: Array<Maybe<Citation>>;
  court_name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  street_address: Scalars['String'];
};

export type CreateCitationInput = {
  citation_number: Scalars['String'];
  court_id: Scalars['Int'];
  docket_time: Scalars['DateTime'];
  driver_name: Scalars['String'];
};

export type CreateCitizenInput = {
  citation_id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  notifications: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
};

export type CreateCourtInput = {
  court_name: Scalars['String'];
  street_address: Scalars['String'];
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
  createCitation: Citation;
  createCitizen: Citizen;
  createCourt: Court;
  createMessage: Message;
  deleteCitation: Citation;
  deleteCitizen: Citizen;
  deleteCourt: Court;
  deleteMessage: Message;
  updateCitation: Citation;
  updateCitizen: Citizen;
  updateCourt: Court;
  updateMessage: Message;
};


export type MutationcreateCitationArgs = {
  input: CreateCitationInput;
};


export type MutationcreateCitizenArgs = {
  input: CreateCitizenInput;
};


export type MutationcreateCourtArgs = {
  input: CreateCourtInput;
};


export type MutationcreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationdeleteCitationArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCitizenArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCourtArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteMessageArgs = {
  id: Scalars['Int'];
};


export type MutationupdateCitationArgs = {
  id: Scalars['Int'];
  input: UpdateCitationInput;
};


export type MutationupdateCitizenArgs = {
  id: Scalars['Int'];
  input: UpdateCitizenInput;
};


export type MutationupdateCourtArgs = {
  id: Scalars['Int'];
  input: UpdateCourtInput;
};


export type MutationupdateMessageArgs = {
  id: Scalars['Int'];
  input: UpdateMessageInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  citation?: Maybe<Citation>;
  citations: Array<Citation>;
  citizen?: Maybe<Citizen>;
  citizens: Array<Citizen>;
  court?: Maybe<Court>;
  courts: Array<Court>;
  getCitationByNumberAndDriverName?: Maybe<CitationResponse>;
  message?: Maybe<Message>;
  messages: Array<Message>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QuerycitationArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycitizenArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycourtArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerygetCitationByNumberAndDriverNameArgs = {
  citationNumber: Scalars['String'];
  driverName: Scalars['String'];
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

export type UpdateCitationInput = {
  citation_number?: InputMaybe<Scalars['String']>;
  court_id?: InputMaybe<Scalars['Int']>;
  docket_time?: InputMaybe<Scalars['DateTime']>;
  driver_name?: InputMaybe<Scalars['String']>;
};

export type UpdateCitizenInput = {
  citation_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UpdateCourtInput = {
  court_name?: InputMaybe<Scalars['String']>;
  street_address?: InputMaybe<Scalars['String']>;
};

export type UpdateMessageInput = {
  countBefore?: InputMaybe<Scalars['Int']>;
  messageTemplate?: InputMaybe<Scalars['String']>;
  timeUnit?: InputMaybe<Scalars['String']>;
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<Citation | Citizen | Court | Message>


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
  Citation: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCitation, MakeRelationsOptional<Citation, AllMappedModels>, AllMappedModels>>;
  CitationResponse: ResolverTypeWrapper<Omit<CitationResponse, 'citation'> & { citation: Maybe<ResolversTypes['Citation']> }>;
  Citizen: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCitizen, MakeRelationsOptional<Citizen, AllMappedModels>, AllMappedModels>>;
  Court: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCourt, MakeRelationsOptional<Court, AllMappedModels>, AllMappedModels>>;
  CreateCitationInput: CreateCitationInput;
  CreateCitizenInput: CreateCitizenInput;
  CreateCourtInput: CreateCourtInput;
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
  UpdateCitationInput: UpdateCitationInput;
  UpdateCitizenInput: UpdateCitizenInput;
  UpdateCourtInput: UpdateCourtInput;
  UpdateMessageInput: UpdateMessageInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Citation: MergePrismaWithSdlTypes<PrismaCitation, MakeRelationsOptional<Citation, AllMappedModels>, AllMappedModels>;
  CitationResponse: Omit<CitationResponse, 'citation'> & { citation: Maybe<ResolversParentTypes['Citation']> };
  Citizen: MergePrismaWithSdlTypes<PrismaCitizen, MakeRelationsOptional<Citizen, AllMappedModels>, AllMappedModels>;
  Court: MergePrismaWithSdlTypes<PrismaCourt, MakeRelationsOptional<Court, AllMappedModels>, AllMappedModels>;
  CreateCitationInput: CreateCitationInput;
  CreateCitizenInput: CreateCitizenInput;
  CreateCourtInput: CreateCourtInput;
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
  UpdateCitationInput: UpdateCitationInput;
  UpdateCitizenInput: UpdateCitizenInput;
  UpdateCourtInput: UpdateCourtInput;
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

export type CitationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Citation'] = ResolversParentTypes['Citation']> = {
  citation_number: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  court: OptArgsResolverFn<ResolversTypes['Court'], ParentType, ContextType>;
  court_id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  docket_time: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  driver_name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Citation'] = ResolversParentTypes['Citation']> = {
  citation_number?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  court?: RequiredResolverFn<ResolversTypes['Court'], ParentType, ContextType>;
  court_id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  docket_time?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  driver_name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitationResponseResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CitationResponse'] = ResolversParentTypes['CitationResponse']> = {
  citation: OptArgsResolverFn<Maybe<ResolversTypes['Citation']>, ParentType, ContextType>;
  citationExists: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitationResponseRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CitationResponse'] = ResolversParentTypes['CitationResponse']> = {
  citation?: RequiredResolverFn<Maybe<ResolversTypes['Citation']>, ParentType, ContextType>;
  citationExists?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitizenResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Citizen'] = ResolversParentTypes['Citizen']> = {
  citation: OptArgsResolverFn<ResolversTypes['Citation'], ParentType, ContextType>;
  citation_id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  notifications: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  phoneNumber: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitizenRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Citizen'] = ResolversParentTypes['Citizen']> = {
  citation?: RequiredResolverFn<ResolversTypes['Citation'], ParentType, ContextType>;
  citation_id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  notifications?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  phoneNumber?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourtResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Court'] = ResolversParentTypes['Court']> = {
  citations: OptArgsResolverFn<Array<Maybe<ResolversTypes['Citation']>>, ParentType, ContextType>;
  court_name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  street_address: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourtRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Court'] = ResolversParentTypes['Court']> = {
  citations?: RequiredResolverFn<Array<Maybe<ResolversTypes['Citation']>>, ParentType, ContextType>;
  court_name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  street_address?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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
  createCitation: Resolver<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationcreateCitationArgs, 'input'>>;
  createCitizen: Resolver<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationcreateCitizenArgs, 'input'>>;
  createCourt: Resolver<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationcreateCourtArgs, 'input'>>;
  createMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationcreateMessageArgs, 'input'>>;
  deleteCitation: Resolver<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationdeleteCitationArgs, 'id'>>;
  deleteCitizen: Resolver<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationdeleteCitizenArgs, 'id'>>;
  deleteCourt: Resolver<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationdeleteCourtArgs, 'id'>>;
  deleteMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationdeleteMessageArgs, 'id'>>;
  updateCitation: Resolver<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationupdateCitationArgs, 'id' | 'input'>>;
  updateCitizen: Resolver<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationupdateCitizenArgs, 'id' | 'input'>>;
  updateCourt: Resolver<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationupdateCourtArgs, 'id' | 'input'>>;
  updateMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationupdateMessageArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCitation?: RequiredResolverFn<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationcreateCitationArgs, 'input'>>;
  createCitizen?: RequiredResolverFn<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationcreateCitizenArgs, 'input'>>;
  createCourt?: RequiredResolverFn<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationcreateCourtArgs, 'input'>>;
  createMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationcreateMessageArgs, 'input'>>;
  deleteCitation?: RequiredResolverFn<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationdeleteCitationArgs, 'id'>>;
  deleteCitizen?: RequiredResolverFn<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationdeleteCitizenArgs, 'id'>>;
  deleteCourt?: RequiredResolverFn<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationdeleteCourtArgs, 'id'>>;
  deleteMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationdeleteMessageArgs, 'id'>>;
  updateCitation?: RequiredResolverFn<ResolversTypes['Citation'], ParentType, ContextType, RequireFields<MutationupdateCitationArgs, 'id' | 'input'>>;
  updateCitizen?: RequiredResolverFn<ResolversTypes['Citizen'], ParentType, ContextType, RequireFields<MutationupdateCitizenArgs, 'id' | 'input'>>;
  updateCourt?: RequiredResolverFn<ResolversTypes['Court'], ParentType, ContextType, RequireFields<MutationupdateCourtArgs, 'id' | 'input'>>;
  updateMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationupdateMessageArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  citation: Resolver<Maybe<ResolversTypes['Citation']>, ParentType, ContextType, RequireFields<QuerycitationArgs, 'id'>>;
  citations: OptArgsResolverFn<Array<ResolversTypes['Citation']>, ParentType, ContextType>;
  citizen: Resolver<Maybe<ResolversTypes['Citizen']>, ParentType, ContextType, RequireFields<QuerycitizenArgs, 'id'>>;
  citizens: OptArgsResolverFn<Array<ResolversTypes['Citizen']>, ParentType, ContextType>;
  court: Resolver<Maybe<ResolversTypes['Court']>, ParentType, ContextType, RequireFields<QuerycourtArgs, 'id'>>;
  courts: OptArgsResolverFn<Array<ResolversTypes['Court']>, ParentType, ContextType>;
  getCitationByNumberAndDriverName: Resolver<Maybe<ResolversTypes['CitationResponse']>, ParentType, ContextType, RequireFields<QuerygetCitationByNumberAndDriverNameArgs, 'citationNumber' | 'driverName'>>;
  message: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QuerymessageArgs, 'id'>>;
  messages: OptArgsResolverFn<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  citation?: RequiredResolverFn<Maybe<ResolversTypes['Citation']>, ParentType, ContextType, RequireFields<QuerycitationArgs, 'id'>>;
  citations?: RequiredResolverFn<Array<ResolversTypes['Citation']>, ParentType, ContextType>;
  citizen?: RequiredResolverFn<Maybe<ResolversTypes['Citizen']>, ParentType, ContextType, RequireFields<QuerycitizenArgs, 'id'>>;
  citizens?: RequiredResolverFn<Array<ResolversTypes['Citizen']>, ParentType, ContextType>;
  court?: RequiredResolverFn<Maybe<ResolversTypes['Court']>, ParentType, ContextType, RequireFields<QuerycourtArgs, 'id'>>;
  courts?: RequiredResolverFn<Array<ResolversTypes['Court']>, ParentType, ContextType>;
  getCitationByNumberAndDriverName?: RequiredResolverFn<Maybe<ResolversTypes['CitationResponse']>, ParentType, ContextType, RequireFields<QuerygetCitationByNumberAndDriverNameArgs, 'citationNumber' | 'driverName'>>;
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
  Citation: CitationResolvers<ContextType>;
  CitationResponse: CitationResponseResolvers<ContextType>;
  Citizen: CitizenResolvers<ContextType>;
  Court: CourtResolvers<ContextType>;
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
