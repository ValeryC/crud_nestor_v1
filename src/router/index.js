import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home")
  },
  {
    path: "/adduser",
    name: "adduser",
    component: () => import("../views/UserCreate")
  },
  {
    path: "/listuser",
    name: "listuser",
    component: () => import("../views/UserList")
  },
  {
    path: "/edit/:id",
    name: "edituser",
    component: () => import("../views/UserEdit")
  },
  {
    path: "/createflat",
    name: "createflat",
    component: () => import("../views/Createflat")
  },
  {
    path: "/listflat",
    name: "listflat",
    component: () => import("../views/Listflat")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
