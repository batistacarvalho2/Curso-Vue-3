<template>
  <div>
    <v-text-field label="Add Task"></v-text-field>

    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item value="notifications">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
        </template>

      <v-list-item-title>notifications</v-list-item-title>

      <v-list-item-subtitle>
        Notify me About
      </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const tasks = [
  {
    title: "Estudar Vue",
    description: "Estudar vue com Vuetify"
  }
]
</script>

