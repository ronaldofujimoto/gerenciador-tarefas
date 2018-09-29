import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tarefas from '@/pages/Tarefas'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',// define a rota que deve ser acessada pelo browser
      name: 'HelloWorld', // da o nome da rota
      component: HelloWorld // o Componente que deve ser "inejtado na página"
    },
    {
      path: '/tarefas',// define a rota que deve ser acessada pelo browser
      name: 'Tarefas', // da o nome da rota
      component: Tarefas // o Componente que deve ser "inejtado na página"
    }
  ]
})
