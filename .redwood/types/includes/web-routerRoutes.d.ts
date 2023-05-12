// This file was generated by RedwoodJS
import { RouteParams, QueryParams } from '@redwoodjs/router'
import { A } from 'ts-toolbelt'


declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    addInfo: (params?: RouteParams<"/addInfo"> & QueryParams) => "/addInfo"
=======
>>>>>>> Stashed changes
    newUser: (params?: RouteParams<"/users/new"> & QueryParams) => "/users/new"
    editUser: (params?: RouteParams<"/users/{id:Int}/edit"> & QueryParams) => "/users/{id:Int}/edit"
    user: (params?: RouteParams<"/users/{id:Int}"> & QueryParams) => "/users/{id:Int}"
    users: (params?: RouteParams<"/users"> & QueryParams) => "/users"
<<<<<<< Updated upstream
=======
>>>>>>> 5e3d3bfe293d3f0dc064ca3b71c932067622a192
>>>>>>> Stashed changes
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
    newCourt: (params?: RouteParams<"/courts/new"> & QueryParams) => "/courts/new"
    editCourt: (params?: RouteParams<"/courts/{id:Int}/edit"> & QueryParams) => "/courts/{id:Int}/edit"
    court: (params?: RouteParams<"/courts/{id:Int}"> & QueryParams) => "/courts/{id:Int}"
    courts: (params?: RouteParams<"/courts"> & QueryParams) => "/courts"
    newCitation: (params?: RouteParams<"/citations/new"> & QueryParams) => "/citations/new"
    editCitation: (params?: RouteParams<"/citations/{id:Int}/edit"> & QueryParams) => "/citations/{id:Int}/edit"
    citation: (params?: RouteParams<"/citations/{id:Int}"> & QueryParams) => "/citations/{id:Int}"
    citations: (params?: RouteParams<"/citations"> & QueryParams) => "/citations"
    newMessage: (params?: RouteParams<"/messages/new"> & QueryParams) => "/messages/new"
    editMessage: (params?: RouteParams<"/messages/{id:Int}/edit"> & QueryParams) => "/messages/{id:Int}/edit"
    message: (params?: RouteParams<"/messages/{id:Int}"> & QueryParams) => "/messages/{id:Int}"
    messages: (params?: RouteParams<"/messages"> & QueryParams) => "/messages"
  }
}

