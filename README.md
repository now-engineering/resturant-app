# Munchies Code Interview
### Read the instructions carefully

## Installation
NextJS: 12.1.2
react-js: 17.0.2
react-dom: 17.0.2

1. Create a fork of the repository
2. Clone into your directory
`git clone https://github.com/{your-username}/resturant-app.git`
3. Install using yarn 
`yarn install`

## Recomended Dependecies
Install recomended dependencies  you like.
1. **UI:** Tailwind CSS or Chakra UI
2. **State**: Mobx or Redux Toolkit maybe ContextAPI :( 
3. **HTTP**: axios or fetch or swr

#### Source:
|Tool| link |
|--|--|
|Tailwind  | https://tailwindcss.com/docs/installation |
| ChakraUI* | https://chakra-ui.com/guides/first-steps |
| Mobx* | https://mobx.js.org/react-integration.html |
| redux-toolkit | https://redux-toolkit.js.org/introduction/getting-started |
| Axios | https://github.com/axios/axios |

## Task
View design here https://www.figma.com/file/Nzg4qD5aaRgctu5hrCOtur/Munchies-FE-code?node-id=3%3A29

1. Login
 - [ ] create login components in `app/user/components/LoginComponent.tsx`
 - [ ] create login logic in `app/user/controller/user.controller.ts`
 - [ ] use axios or other tool to call api in `user.controller.ts`
```
POST http://munchies-test.herokuapp.com/auth/signin

{
	"email":  "test@nocodb.com",
	"password":  "password"
}
```

 - [ ] finally import `LoginComponent` in `page/login.tsx` 

 **OR Do It Yourself**

    
 
2. Register
- [ ] create register component in `app/user/components/RegisterComponent.tsx`
- [ ]  create register logic using redux-toolkit or mobx `app/user/controller/user.controller.ts`
 - [ ] call login api using fetch or axios `user.controller.ts`
  ```
 POST http://munchies-test.herokuapp.com/auth/signup
 
 {
    "email":  "test@hello.com",
    "password":  "pass",
    "firstname":  "First Name",
    "lastname":  "Last Name"
 }
```
 - [ ] finally import `RegisterComponent` in `page/register.tsx` 
 
 **OR Do It Yourself**

3. Resturant
- [ ] create resturant view in `pages/resturant.tsx`
- [ ] implement CRUD using mobx or redux-toolkit and axios or fetch in`app/resturant/controller/resturant.controller.tsx`

|METHOD| description| endpoints| 
|--|--|--|
| POST | create new resturant | http://munchies-test.herokuapp.com/nc/resturant_ny25/api/v1/food| 
| GET | get list of items | http://munchies-test.herokuapp.com/nc/resturant_ny25/api/v1/food |
| PUT | updates a resturant | http://munchies-test.herokuapp.com/nc/resturant_ny25/api/v1/food/:id |
| DELETE | Deletes a resturant | http://munchies-test.herokuapp.com/nc/resturant_ny25/api/v1/food/:id | 
 **OR Do It Yourself**

## Bonus

1. good design sense
2. Implement clean code
3. maintain clean architecture
4. error handling
5. strong knowledge in typescript
6. strong knowledge in mvvm
