/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetExamplePageDocument,
    "\n    query getFrontPage {\n        generalSettings {\n            title\n            description\n        }\n    }\n": types.GetFrontPageDocument,
    "\nquery PostsByTermID($termID: Int!) {\n    posts(where: {categoryId: $termID}, first: 4) {\n      nodes {\n        id\n        title\n        date\n        excerpt\n        link\n        featuredImage {\n            node {\n                title\n                altText\n                mediaDetails {\n                    sizes(include: MEDIUM_LARGE) {\n                    sourceUrl\n                    width\n                    height\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n": types.PostsByTermIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query getFrontPage {\n        generalSettings {\n            title\n            description\n        }\n    }\n"): (typeof documents)["\n    query getFrontPage {\n        generalSettings {\n            title\n            description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery PostsByTermID($termID: Int!) {\n    posts(where: {categoryId: $termID}, first: 4) {\n      nodes {\n        id\n        title\n        date\n        excerpt\n        link\n        featuredImage {\n            node {\n                title\n                altText\n                mediaDetails {\n                    sizes(include: MEDIUM_LARGE) {\n                    sourceUrl\n                    width\n                    height\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery PostsByTermID($termID: Int!) {\n    posts(where: {categoryId: $termID}, first: 4) {\n      nodes {\n        id\n        title\n        date\n        excerpt\n        link\n        featuredImage {\n            node {\n                title\n                altText\n                mediaDetails {\n                    sizes(include: MEDIUM_LARGE) {\n                    sourceUrl\n                    width\n                    height\n                }\n              }\n            }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;