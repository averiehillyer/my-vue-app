<script setup>

const fullProject = (workInfo) => {
  return workInfo.project_name + " " + workInfo.medium;
}

defineProps({
  workInfo: {
    type: Object,
    required: true}
})
</script>

<template>
  <section class="work-card">
    <div class="headshot">
      <img :src="workInfo.headshot" :alt="fullProject(workInfo)"
    </div>
    <div class="details">
      <p v-tet="fullProject(workInfo)"></p>
      <p>Made in {{workInfo.class}}</p>
    </div>
  </section>
</template>

<style scoped>
section.work-card{
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem;

  .headshot {
    min-width: 150px;
    max-width:150px;
  }

  img{
    width: 100%;
    border-width: 0 10px 10px 0;
    border-style: solid;
    border-color: black
  }

  &:hover{
    border-color: black;
    cursor: pointer;
  }

  /*Tablet and up */
  @media screen and (width > 550px) {
    width: 45%;
  }
}
</style>