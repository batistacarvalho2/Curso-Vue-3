<template>
  <div>
    <v-text-field
    clearacle
     label="Add Task"
     v-model="task.title"
     @keyup.enter="addTask"
     ></v-text-field>

    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item 
      v-for="task, index in tasks"
      :key="index"
      :value="index"
      >
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
        </template>

      <v-list-item-title>{{task.title}}</v-list-item-title>

      <v-list-item-subtitle>
        {{ task.description }}
      </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const tasks = ref ([
  {
    title: "Estudar Vue",
    description: "Estudar vue com Vuetify"
  },
  {
    title: "Ler a documentação",
    description: "Ler a documentação com Vuetify"
  }
]);

const task = ref({
  title:"",
  description:""
});
const addTask = ()=>{
      tasks.value.push({
        title : task.value.title,
        description : task.value.description
      });
    task.value = {
    title:"",
    description:""
    }
}

</script>

