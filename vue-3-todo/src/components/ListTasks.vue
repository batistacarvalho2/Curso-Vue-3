<template>
  <div>
    <v-list lines="three">
      <v-list-subheader>User Controls</v-list-subheader>
      <v-list-item
        v-for="item in userControls"
        :key="item.value"
        :subtitle="item.subtitle"
        :title="item.title"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="item in settingsItems"
        :key="item.value"
        :subtitle="item.subtitle"
        :title="item.title"
        :value="item.value"
      >
        <template v-slot:prepend="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected" @update:model-value="select"></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

</script>

