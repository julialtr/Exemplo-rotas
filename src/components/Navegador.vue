<template>
  <div id="componentes">
     <select  v-model="compoSel">
         <option value="0" selected disabled>Selecione um componente para acessá-lo</option>
        <option v-for="comp in componentes" :key="comp.indice" :value="comp.indice">
            {{comp.titulo}}
        </option>
    </select> 
    <button @click="navegar">Acessar</button>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
           compoSel: 0,
           nome: 'Julia Letícia Trapp'
        }
    },
    computed: {
        componentes: function(){
            return this.$store.state.componentes
        }
    }, methods: {
        navegar: function() {
            if (this.compoSel == 1) {
                this.$router.push('Componente1')
            } 
            else if (this.compoSel == 2){
                this.$router.push({name: 'Componente2', params: {nome: this.nome}})
            } 
            else if (this.compoSel == 3){
                this.$router.push('Componente3')
            }
        }
    }
}
</script>

<style>

</style>