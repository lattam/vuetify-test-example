<template>
  <div class="hello">
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-0"
    ><template slot="items" scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.email }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      items: [],
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'E-mail',
          value: 'email'
        }
      ]
    }
  }
}
</script>
