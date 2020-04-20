<template>
  <div class="componente2">
      <h1>Bem vindo ao componente 2</h1>
      <navegador/>
      <span v-if="nome">{{nome}}</span>
  </div>
</template>

<script>
import Navegador from '../components/Navegador.vue'
export default {
    components:{
        Navegador
    }, computed: {
        nome: function(){
            return this.$route.params.nome
        }
    }
}
</script>
