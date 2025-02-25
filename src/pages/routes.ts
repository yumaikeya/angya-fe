import React, { lazy } from 'react'
import { PAGES } from '@/utils/constants/common'

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))

const { HOME, LOGIN } = PAGES


type Route = {
  component: React.LazyExoticComponent<() => JSX.Element>
  name: string
  path: string
  public: boolean
}
// TODO: config i18n
const routes: Route[] = [
  {
    component: Home,
    name: 'Home',
    path: HOME,
    public: false,
  },
  {
    component: Login,
    name: 'Login',
    path: LOGIN,
    public: true,
  },
]

export default routes
