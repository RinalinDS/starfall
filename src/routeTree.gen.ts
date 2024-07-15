/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ReadlistIndexImport } from './routes/readlist/index'
import { Route as PreviewIndexImport } from './routes/preview/index'
import { Route as PopularIndexImport } from './routes/popular/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as PreviewBookIdImport } from './routes/preview/$bookId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReadlistIndexRoute = ReadlistIndexImport.update({
  path: '/readlist/',
  getParentRoute: () => rootRoute,
} as any)

const PreviewIndexRoute = PreviewIndexImport.update({
  path: '/preview/',
  getParentRoute: () => rootRoute,
} as any)

const PopularIndexRoute = PopularIndexImport.update({
  path: '/popular/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const PreviewBookIdRoute = PreviewBookIdImport.update({
  path: '/preview/$bookId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/preview/$bookId': {
      id: '/preview/$bookId'
      path: '/preview/$bookId'
      fullPath: '/preview/$bookId'
      preLoaderRoute: typeof PreviewBookIdImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/popular/': {
      id: '/popular/'
      path: '/popular'
      fullPath: '/popular'
      preLoaderRoute: typeof PopularIndexImport
      parentRoute: typeof rootRoute
    }
    '/preview/': {
      id: '/preview/'
      path: '/preview'
      fullPath: '/preview'
      preLoaderRoute: typeof PreviewIndexImport
      parentRoute: typeof rootRoute
    }
    '/readlist/': {
      id: '/readlist/'
      path: '/readlist'
      fullPath: '/readlist'
      preLoaderRoute: typeof ReadlistIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  PreviewBookIdRoute,
  LoginIndexRoute,
  PopularIndexRoute,
  PreviewIndexRoute,
  ReadlistIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/preview/$bookId",
        "/login/",
        "/popular/",
        "/preview/",
        "/readlist/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/preview/$bookId": {
      "filePath": "preview/$bookId.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/popular/": {
      "filePath": "popular/index.tsx"
    },
    "/preview/": {
      "filePath": "preview/index.tsx"
    },
    "/readlist/": {
      "filePath": "readlist/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
