// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/addInfo" page={AddInfoPage} name="addInfo" />
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Courts" titleTo="courts" buttonLabel="New Court" buttonTo="newCourt">
        <Route path="/courts/new" page={CourtNewCourtPage} name="newCourt" />
        <Route path="/courts/{id:Int}/edit" page={CourtEditCourtPage} name="editCourt" />
        <Route path="/courts/{id:Int}" page={CourtCourtPage} name="court" />
        <Route path="/courts" page={CourtCourtsPage} name="courts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Citations" titleTo="citations" buttonLabel="New Citation" buttonTo="newCitation">
        <Route path="/citations/new" page={CitationNewCitationPage} name="newCitation" />
        <Route path="/citations/{id:Int}/edit" page={CitationEditCitationPage} name="editCitation" />
        <Route path="/citations/{id:Int}" page={CitationCitationPage} name="citation" />
        <Route path="/citations" page={CitationCitationsPage} name="citations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Messages" titleTo="messages" buttonLabel="New Message" buttonTo="newMessage">
        <Route path="/messages/new" page={MessageNewMessagePage} name="newMessage" />
        <Route path="/messages/{id:Int}/edit" page={MessageEditMessagePage} name="editMessage" />
        <Route path="/messages/{id:Int}" page={MessageMessagePage} name="message" />
        <Route path="/messages" page={MessageMessagesPage} name="messages" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
