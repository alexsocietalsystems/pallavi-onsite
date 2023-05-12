// This file was generated by RedwoodJS
import { RouteParams, QueryParams } from '@redwoodjs/router'
import { A } from 'ts-toolbelt'


declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    login: (params?: RouteParams<"/login"> & QueryParams) => "/login"
    signup: (params?: RouteParams<"/signup"> & QueryParams) => "/signup"
    forgotPassword: (params?: RouteParams<"/forgot-password"> & QueryParams) => "/forgot-password"
    resetPassword: (params?: RouteParams<"/reset-password"> & QueryParams) => "/reset-password"
    newCitizen: (params?: RouteParams<"/citizens/new"> & QueryParams) => "/citizens/new"
    editCitizen: (params?: RouteParams<"/citizens/{id:Int}/edit"> & QueryParams) => "/citizens/{id:Int}/edit"
    citizen: (params?: RouteParams<"/citizens/{id:Int}"> & QueryParams) => "/citizens/{id:Int}"
    citizens: (params?: RouteParams<"/citizens"> & QueryParams) => "/citizens"
    addInfo: (params?: RouteParams<"/addInfo/{id}"> & QueryParams) => "/addInfo/{id}"
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

