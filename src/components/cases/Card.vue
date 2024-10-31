<script setup>

defineProps({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: false,
    default: '01/01/1980'
  },
  highestEduAttained: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="card">
    <aside>
      headshot
      <img :src="'../path/to/work/images' + nationality + '.png'">
      <span class="dob">{{dob}}</span>
    </aside>
    <aside>
      <div class="name">{{firstName}}, {{lastName}}</div>
      <p class="eduAttainment" v-text="highestEduAttained"></p>
    </aside>
  </section>

</template>

<style scoped>
section.card{
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;

  &:hover{
    border-color: black;
    cursor: pointer;
  }
}
</style>