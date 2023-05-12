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

export type DeleteCitationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCitationMutation = { __typename?: 'Mutation', deleteCitation: { __typename?: 'Citation', id: number } };

export type FindCitationByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCitationById = { __typename?: 'Query', citation?: { __typename?: 'Citation', id: number, court_id: number, citation_number: string, driver_name: string, docket_time: string, createdAt: string } | null };

export type FindCitationsVariables = Exact<{ [key: string]: never; }>;


export type FindCitations = { __typename?: 'Query', citations: Array<{ __typename?: 'Citation', id: number, court_id: number, citation_number: string, driver_name: string, docket_time: string, createdAt: string }> };

export type EditCitationByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditCitationById = { __typename?: 'Query', citation?: { __typename?: 'Citation', id: number, court_id: number, citation_number: string, driver_name: string, docket_time: string, createdAt: string } | null };

export type UpdateCitationMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCitationInput;
}>;


export type UpdateCitationMutation = { __typename?: 'Mutation', updateCitation: { __typename?: 'Citation', id: number, court_id: number, citation_number: string, driver_name: string, docket_time: string, createdAt: string } };

export type CreateCitationMutationVariables = Exact<{
  input: CreateCitationInput;
}>;


export type CreateCitationMutation = { __typename?: 'Mutation', createCitation: { __typename?: 'Citation', id: number } };

export type DeleteCitizenMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCitizenMutation = { __typename?: 'Mutation', deleteCitizen: { __typename?: 'Citizen', id: number } };

export type FindCitizenByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCitizenById = { __typename?: 'Query', citizen?: { __typename?: 'Citizen', id: number, name: string, email: string, phoneNumber: string, citation_id: number, notifications: boolean } | null };

export type FindCitizensVariables = Exact<{ [key: string]: never; }>;


export type FindCitizens = { __typename?: 'Query', citizens: Array<{ __typename?: 'Citizen', id: number, name: string, email: string, phoneNumber: string, citation_id: number, notifications: boolean }> };

export type EditCitizenByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditCitizenById = { __typename?: 'Query', citizen?: { __typename?: 'Citizen', id: number, name: string, email: string, phoneNumber: string, citation_id: number, notifications: boolean } | null };

export type UpdateCitizenMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCitizenInput;
}>;


export type UpdateCitizenMutation = { __typename?: 'Mutation', updateCitizen: { __typename?: 'Citizen', id: number, name: string, email: string, phoneNumber: string, citation_id: number, notifications: boolean } };

export type CreateCitizenMutationVariables = Exact<{
  input: CreateCitizenInput;
}>;


export type CreateCitizenMutation = { __typename?: 'Mutation', createCitizen: { __typename?: 'Citizen', id: number } };

export type DeleteCourtMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCourtMutation = { __typename?: 'Mutation', deleteCourt: { __typename?: 'Court', id: number } };

export type FindCourtByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCourtById = { __typename?: 'Query', court?: { __typename?: 'Court', id: number, street_address: string, court_name: string, createdAt: string } | null };

export type FindCourtsVariables = Exact<{ [key: string]: never; }>;


export type FindCourts = { __typename?: 'Query', courts: Array<{ __typename?: 'Court', id: number, street_address: string, court_name: string, createdAt: string }> };

export type EditCourtByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditCourtById = { __typename?: 'Query', court?: { __typename?: 'Court', id: number, street_address: string, court_name: string, createdAt: string } | null };

export type UpdateCourtMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCourtInput;
}>;


export type UpdateCourtMutation = { __typename?: 'Mutation', updateCourt: { __typename?: 'Court', id: number, street_address: string, court_name: string, createdAt: string } };

export type CreateCourtMutationVariables = Exact<{
  input: CreateCourtInput;
}>;


export type CreateCourtMutation = { __typename?: 'Mutation', createCourt: { __typename?: 'Court', id: number } };

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

export type FetchCitationQuery1Variables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchCitationQuery1 = { __typename?: 'Query', citation?: { __typename?: 'Citation', id: number, docket_time: string, driver_name: string } | null };

export type createUserVariables = Exact<{
  input: CreateCitizenInput;
}>;


export type createUser = { __typename?: 'Mutation', createCitizen: { __typename?: 'Citizen', id: number, name: string } };

export type FetchCitationQueryVariables = Exact<{
  citation_number: Scalars['String'];
  driver_name: Scalars['String'];
}>;


export type FetchCitationQuery = { __typename?: 'Query', getCitationByNumberAndDriverName?: { __typename?: 'CitationResponse', citationExists: boolean, citation?: { __typename?: 'Citation', id: number, docket_time: string } | null } | null };
