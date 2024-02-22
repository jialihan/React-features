# React router v6 - demo

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### features implemented

#### 1. Context API

`<AuthContextProvider />` provides the `role` state globally, you can use `useAuthContext()` hook to access the value.

#### 2. useNavigate() hook

- landing on `Home` page (`"/"` default route), auto redirect based on initial `role="ADMIN"`, `<RedirectHandler />` will redirect to the correcting route, eg: `/admin` in this example.

```
<Navigate to={redirectUrl} replace />
```

#### 3. Guard the content based on role

`<ProtectedRoute />` validates each Route, if you don't have access, hide the context.

- `useLocation()` hook

### Helpful links:

- https://reactrouter.com/en/main/router-components/browser-router
- article: https://bartlomiejperucki.medium.com/handling-role-based-redirect-with-react-and-react-router-35f822242bbf
- sandbox example:https://codesandbox.io/p/sandbox/epic-bash-uwhel?file=%2Fsrc%2Fviews%2Findex.tsx%3A13%2C1-22%2C25&from-embed=
- navigate: https://reactrouter.com/en/main/components/navigate
- external UI library: https://mui.com/material-ui/getting-started/installation/
